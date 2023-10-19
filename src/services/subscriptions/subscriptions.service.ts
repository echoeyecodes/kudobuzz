import Subscription from "../../models/subscriptions/Subscription.model";
import PlanService from "../plans/plan.service";
import { CreatePackageSubscription, CreateSubscription, SubscriptionPerPrice, SubscriptionPriceAggregation } from "./types";

export default function SubscriptionService() {

    async function createSubscription(payload: CreateSubscription) {
        const subscription = await Subscription.create(payload)
        return subscription
    }

    async function createFreemiumSubscription(payload: CreatePackageSubscription) {
        const plan = await PlanService().getPlanByName('Freemium')

        if (!plan) throw Error("Plan not found")

        const subscription = await createSubscription({
            plan_id: plan.id,
            ...payload
        })

        return subscription
    }

    async function createBronzeSubscription(payload: CreatePackageSubscription) {
        const plan = await PlanService().getPlanByName('Bronze')

        if (!plan) throw Error("Plan not found")

        const subscription = await createSubscription({
            plan_id: plan.id,
            ...payload
        })

        return subscription
    }

    async function createGoldSubscription(payload: CreatePackageSubscription) {
        const plan = await PlanService().getPlanByName('Gold')

        if (!plan) throw Error("Plan not found")

        const subscription = await createSubscription({
            plan_id: plan.id,
            ...payload
        })

        return subscription
    }

    async function createPlatinumSubscription(payload: CreatePackageSubscription) {
        const plan = await PlanService().getPlanByName('Platinum')

        if (!plan) throw Error("Plan not found")

        const subscription = await createSubscription({
            plan_id: plan.id,
            ...payload
        })

        return subscription
    }

    async function createSilverSubscription(payload: CreatePackageSubscription) {
        const plan = await PlanService().getPlanByName('Silver')

        if (!plan) throw Error("Plan not found")

        const subscription = await createSubscription({
            plan_id: plan.id,
            ...payload
        })

        return subscription
    }

    async function getSubscriptionsPerPrice(price: number): Promise<SubscriptionPerPrice[]> {
        const subscriptions = (await Subscription.aggregate([
            {
                $addFields: {
                    plan_id: {
                        $toObjectId: '$plan_id'
                    }
                }
            },
            {
                $lookup: {
                    from: 'plans',
                    localField: 'plan_id',
                    foreignField: '_id',
                    as: 'plan'
                }
            },
            {
                $match: {
                    'plan.price': {
                        $gte: price
                    }
                }
            },
            {
                $unwind: '$plan'
            }
        ])) as SubscriptionPriceAggregation[]
        
        return subscriptions.map((item) => {
            return {
                business_id: item.business_id,
                email: item.email,
                plan_id: item.plan_id,
                plan_name: item.plan.name,
                plan_price: item.plan.price,
                payment_platform_name: item.payment_platform.name
            }
        })
    }

    async function deleteAllSubscriptions(){
        await Subscription.deleteMany()
    }

    return {
        createGoldSubscription,
        createPlatinumSubscription,
        createFreemiumSubscription,
        createBronzeSubscription,
        createSilverSubscription,
        getSubscriptionsPerPrice,
        deleteAllSubscriptions
    }
}