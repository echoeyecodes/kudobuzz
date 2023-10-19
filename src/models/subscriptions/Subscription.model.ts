import mongoose from "mongoose";
import { ISubscription } from "./types";

const Schema = mongoose.Schema;

const subscriptionSchema = new Schema<ISubscription>({
    business_id: {
        type: String,
        required: true,
        unique: true
    },
    plan_id: {
        type: String,
        required: true
    },
    payment_platform: {
        token: {
            type: String,
            required: true
        },
        external_id: {
            type: String,
            required: true
        },
        name: {
            type: String,
            required: true,
            enum: ['Stripe', 'Paypal']
        }
    }
})

const Subscription = mongoose.model<ISubscription>('Subscription', subscriptionSchema)
export default Subscription