import fs from 'fs'
import SubscriptionService from '../services/subscriptions/subscriptions.service'
import { saveToCSV } from '../utils/saveToCSV'

export async function printSubscriptionsByPrice(price: number) {

    const subs = await SubscriptionService().getSubscriptionsPerPrice(price)

    const directory = 'output'
    const outputPath = `${directory}/output.csv`

    if (!fs.existsSync(directory)) {
        fs.mkdirSync(directory)
    }
    return await saveToCSV(subs, outputPath)
}