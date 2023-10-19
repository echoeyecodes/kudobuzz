import mongoose from "mongoose";
import { IPlan } from "./types";

const Schema = mongoose.Schema;

const planSchema = new Schema<IPlan>({
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    period: {
        type: String,
        required: true
    },
    status: {
        type: String,
        enum: ['A', 'D'],
        required: true,
    },
    features: {
        videos: {
            type: Boolean,
            required: true
        },
        audio: {
            type: Boolean,
            required: true
        },
        download: {
            type: Boolean,
            required: true
        },
        streaming: {
            type: Boolean,
            required: true
        },
        customize: {
            type: Boolean,
            required: true
        },
    },
})

const Plan = mongoose.model<IPlan>('Plan', planSchema)
export default Plan