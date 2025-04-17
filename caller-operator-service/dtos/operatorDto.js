import { createOperator, getAllOperators, getOperatorById } from "../repositories/operatorRepository.js";

/**
 * DTO (Data Transfer Object) pour un opérateur
 */
export class OperatorDTO {
    constructor(id, name, createdAt, updatedAt) {
        this.id = id;
        this.name = name;
        this.createdAt = createdAt;
        this.updatedAt = updatedAt;
    }

    static fromEntity(operator) {
        return new OperatorDTO(
            operator._id,
            operator.name,
            operator.createdAt,
            operator.updatedAt
        );
    }

    toJSON() {
        return {
            id: this.id,
            name: this.name,
            createdAt: this.createdAt,
            updatedAt: this.updatedAt
        };
    }

    static async create(data) {
        const newOperator = await createOperator(data);
        return OperatorDTO.fromEntity(newOperator);
    }

    static async getAll() {
        const operators = await getAllOperators();
        return operators.map(operator => OperatorDTO.fromEntity(operator));
    }

    static async getById(id) {
        const operator = await getOperatorById(id);
        return operator ? OperatorDTO.fromEntity(operator) : null;
    }
}