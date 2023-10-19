import { Types } from "mongoose"
import { Plan, PlanLabel } from "../../plans/types"

type ObjectId = Types.ObjectId

type PaymentPlatformLabel = "Stripe" | "Paypal"

export type Subscription = {
    business_id: string,
    email: string,
    plan_id: string,
    payment_platform: {
        token: string,
        external_id: string,
        name: PaymentPlatformLabel
    },
    createdAt: string,
    updatedAt: string
}

export type CreateSubscription = Omit<Subscription, "_id" | "createdAt" | "updatedAt">

export type CreatePackageSubscription = Omit<CreateSubscription, "plan_id">

export type SubscriptionPriceAggregation = Subscription & {
    plan: Plan
}

export type SubscriptionPerPrice = {
    business_id: string,
    email: string,
    plan_id: string,
    plan_name: PlanLabel,
    plan_price: number,
    payment_platform_name: PaymentPlatformLabel
}