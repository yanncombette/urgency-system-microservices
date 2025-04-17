import { model, Schema } from "mongoose";

const teamSchema = new Schema({
    type: {
        type: String,
        required: true
    },

    availability: {
        type: Boolean,
        required: true,
        default: true
    }

}, {
    timestamps: true
})

const Team = model("Team", teamSchema);

export default Team