import Plan from "../../models/plans/Plan.model";
import { CreatePlanParams } from "./types";

export default function PlanService() {

    async function createPlan(payload: CreatePlanParams) {
        const plan = await Plan.findOneAndUpdate({
            name: payload.name
        }, payload, { upsert: true })
        return plan
    }

    async function getPlanByName(name: string) {
        const plan = await Plan.findOne({
            name: name
        })
        return plan
    }

    async function createFreemiumPlan() {
        const plan = await createPlan({
            name: 'Freemium',
            price: 0,
            period: 'monthly',
            status: 'A',
            features: {
                videos: false,
                audio: true,
                download: false,
                streaming: false,
                customize: false
            }
        })
        return plan
    }

    async function createBronzePlan() {
        const plan = await createPlan({
            name: 'Bronze',
            price: 30,
            period: 'monthly',
            status: 'A',
            features: {
                videos: true,
                audio: true,
                download: false,
                streaming: false,
                customize: false
            }
        })
        return plan
    }

    async function createSilverPlan() {
        const plan = await createPlan({
            name: 'Silver',
            price: 50,
            period: 'monthly',
            status: 'A',
            features: {
                videos: false,
                audio: true,
                download: false,
                streaming: false,
                customize: true
            }
        })
        return plan
    }

    async function createGoldPlan() {
        const plan = await createPlan({
            name: 'Gold',
            price: 70,
            period: 'monthly',
            status: 'A',
            features: {
                videos: true,
                audio: true,
                download: false,
                streaming: true,
                customize: true
            }
        })
        return plan
    }

    async function createPlatinumPlan() {
        const plan = await createPlan({
            name: 'Platinum',
            price: 100,
            period: 'monthly',
            status: 'A',
            features: {
                videos: true,
                audio: true,
                download: true,
                streaming: true,
                customize: true
            }
        })
        return plan
    }

    return {
        getPlanByName,
        createSilverPlan,
        createGoldPlan,
        createPlatinumPlan,
        createFreemiumPlan,
        createBronzePlan
    }
}