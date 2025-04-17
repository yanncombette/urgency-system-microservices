import { createCaller, getAllCallers } from "../repositories/callerRepository.js"

export const createNewCaller = async (data) => {
    return await createCaller({ ...data });
}

export const fetchCallers = async () => {
    return await getAllCallers();
}