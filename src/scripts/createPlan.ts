import PlanService from "../services/plans/plan.service"

export async function createPlans() {
    await PlanService().createFreemiumPlan()
    await PlanService().createBronzePlan()
    await PlanService().createSilverPlan()
    await PlanService().createGoldPlan()
    await PlanService().createPlatinumPlan()
}