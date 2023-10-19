import 'dotenv/config'
import mongoose from 'mongoose';
import { createPlans } from './scripts/createPlan';
import { generateInstances } from './scripts/generateInstances';
import { printSubscriptionsByPrice } from './scripts/printSubscriptionsByPrice';
import { DEFAULT_PACKAGES } from './utils/data/instances';

const app = async () => {
    await mongoose.connect(process.env.DB_URI!!)
    console.log('db connected succesfully')


    // create default plans
    console.log("creating plans")
    await createPlans()
    console.log("plans created successfully")

    // generate default instances
    console.log("generating instances")
    await generateInstances(DEFAULT_PACKAGES)
    console.log("Done generating instanceds")

    // write to file
    const path = await printSubscriptionsByPrice(50)
    console.log(`Data saved at ${path}`)
}

export default app()