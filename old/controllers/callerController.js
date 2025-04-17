import { createNewCaller, fetchCallers } from "../services/callerService.js"

export const createCaller = async (req, res) => {
    try {
        const { name, phone } = req.body;

        const newCaller = await createNewCaller({ name, phone });

        res.status(200).json({ message: "Caller created with success", caller: newCaller, success: true })
    } catch (err) {
        res.status(500).json({ error: err.message, success: false })
    }

}

export const getCallers = async (req, res) => {
    try {
        const callers = await fetchCallers();
        res.status(200).json({callers, success: true})

    } catch (err) {
        res.status(500).json({ error: err.message, success: false })

    }
}