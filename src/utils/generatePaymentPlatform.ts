import { PaymentPlatformLabel } from "../services/subscriptions/types";
import { generateID } from "./generateID";

function getRandomPaymentName(): PaymentPlatformLabel {
    const labels: PaymentPlatformLabel[] = ["Paypal", "Stripe"]

    const randomIndex = Math.floor(Math.random() * labels.length);
    return labels[randomIndex];
}

export function generatePaymentPlatform(){
    return {
        token: generateID(30),
        external_id: generateID(10),
        name: getRandomPaymentName()
    }
}