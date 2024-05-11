import mongoose, { Schema } from "mongoose";

const careerSchema = new Schema(
    {
        name: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            required: true,
        },
        phone: {
            type: String,
            required: true,
        },
        appliedFor: {
            type: String,
            required: true,
        },
        resume: {
            type: String,
            required: true
        }
    },
    {
        timestamps: true
    }
)

const Career = mongoose.model("Career", careerSchema);

export default Career;