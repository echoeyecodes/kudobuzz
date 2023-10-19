import { Types } from "mongoose"

type ObjectId = Types.ObjectId

export type PlanLabel = "Freemium" | "Bronze" | "Silver" | "Gold" | "Platinum"

export type Plan = {
    name: PlanLabel,
    price: number,
    period: 'monthly' | 'yearly',
    status: 'A' | 'B',
    features: {
        videos: boolean,
        audio: boolean,
        download: boolean,
        streaming: boolean,
        customize: boolean
    }
}

export type CreatePlanParams = Omit<Plan, "_id" | "createdAt" | "updatedAt">