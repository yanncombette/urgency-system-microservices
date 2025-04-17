import { model, Schema } from "mongoose";

const operatorSchema = new Schema({
    name: {
        type: String,
        required: [true, "Name is required"],
        minLength: 2,
        maxLength: 255
    }
}, { timestamps: true })

const Operator = model("Operator", operatorSchema);

export default Operator