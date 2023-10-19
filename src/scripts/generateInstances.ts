import { faker } from '@faker-js/faker'
import { PlanLabel } from '../services/plans/types'
import SubscriptionService from "../services/subscriptions/subscriptions.service"
import { generateID } from '../utils/generateID'
import { generatePaymentPlatform } from "../utils/generatePaymentPlatform"
import { GenerateInstance } from './types'

export async function generateInstances(payload: GenerateInstance[]) {
    const instances = [...payload]

    const max = Math.max(...instances.map((item) => item.size))

    async function createSubscription(instanceType: PlanLabel, business_id: string) {
        switch (instanceType) {
            case 'Bronze':
                await SubscriptionService().createBronzeSubscription({
                    business_id: business_id,
                    email: faker.internet.email(),
                    payment_platform: generatePaymentPlatform()
                })
                break
            case 'Silver':
                await SubscriptionService().createSilverSubscription({
                    business_id: business_id,
                    email: faker.internet.email(),
                    payment_platform: generatePaymentPlatform()
                })
                break
            case 'Gold':
                await SubscriptionService().createGoldSubscription({
                    business_id: business_id,
                    email: faker.internet.email(),
                    payment_platform: generatePaymentPlatform()
                })
                break
            case 'Platinum':
                await SubscriptionService().createPlatinumSubscription({
                    business_id: business_id,
                    email: faker.internet.email(),
                    payment_platform: generatePaymentPlatform()
                })
                break
            default:
                await SubscriptionService().createFreemiumSubscription({
                    business_id: business_id,
                    email: faker.internet.email(),
                    payment_platform: generatePaymentPlatform()
                })
                break
        }
    }

    const promises: Promise<void>[] = [];
    for (let i = 0; i < max; i++) {
        for (const instance of instances) {
            if (instance.size >= i + 1) {
                const business_id = generateID(10)
                promises.push(createSubscription(instance.type, business_id))
            }
        }
    }
    await Promise.all(promises)
}