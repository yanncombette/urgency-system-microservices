import { createOperator, getAllOperators } from "../repositories/operatorRepository.js"

export const createNewOperator = async (name) => {
    return await createOperator({ name })
}

export const fetchOperators = async () => {
    return await getAllOperators()
}