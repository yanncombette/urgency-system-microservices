import { createNewOperator, fetchOperators } from "../services/operatorService.js";

export const createOperator = async (req, res) => {
    try {

        const { name } = req.body;
        const newOperator = await createNewOperator(name);

        res.status(200).json({ message: "Operator created with success", operator: newOperator, success: true })
    } catch (err) {
        res.status(500).json({ error: err.message, success: false })
    }
}

export const getOperators = async (req, res) => {
    try {
        const operators = await fetchOperators();

        res.status(200).json({operators, success: true})

    } catch (err) {
        res.status(500).json({ error: err.message, success: false })
    }
}