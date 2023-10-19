import { connectMongoClient, disconnectMongoClient } from "../db";
import { DEFAULT_PACKAGES } from "../utils/data/instances";
import { createPlans } from "./createPlan";
import { generateInstances } from "./generateInstances";
import { printSubscriptionsByPrice } from "./printSubscriptionsByPrice";

async function app() {
    const command = process.argv[2]

    await connectMongoClient()

    switch (command) {
        case 'create-plan':
            await createPlans()
            console.log("Plans created successfully")
            break
        case 'generate-instances':
            await generateInstances(DEFAULT_PACKAGES)
            console.log('subscriptions instances generated successfully')
            break;
        case 'print-subscriptions':
            const price = parseInt(process.argv[3] || "50")
            if (isNaN(price)) throw Error("Invalid price. It should be an valid integer")

            console.log(`Printing all suubsscriptions with price plans >= ${price}`)
            
            const path = await printSubscriptionsByPrice(price)
            console.log(`subscriptions >= ${price} have been exported to ${path}`)
            break;
        default:
            console.log("Invalid command")
    }

    disconnectMongoClient()
}

export default app()