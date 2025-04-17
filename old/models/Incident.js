import { model, Schema } from "mongoose";

const incidentSchema = new Schema({

    localisation: {
        type: String,
        required: true,
        maxLength: 255
    },
    description: {
        type: String,
        required: true,
        maxLength: 1024
    },
    status: {
        type: String,
        required: true,
        enum: ["pending", "in_progress", "resolved"],
        default: "pending"
    },
    reportedAt: {
        type: Date,
        default: Date.now
    },
    callerId: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: "Caller" // Permet d'accéder à la fonction .populate()
    },
    operatorId: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: "Operator"
    },
    teamId: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: "Team"
    }
}, {
    timestamps: true
}

)

const Incident = model("Incident", incidentSchema);

export default Incident;