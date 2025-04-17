import { Schema, model } from "mongoose"

const callerSchema = new Schema({

    name: {
        type: String,
        required: [true, "Name is required"],
        minLength: 2,
        maxLength: 255
    },

    phone: {
        type: String,
        required: true,
        minLength: 10,
        maxLength: 15
    }
}, {
    timestamps:true
})

const Caller = model("Caller", callerSchema);

export default Caller