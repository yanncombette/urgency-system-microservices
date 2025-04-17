import { createCaller, getAllCallers, getCallerById } from "../repositories/callerRepository.js";

export class CallerDTO {
    constructor(id, name, phone, createdAt, updatedAt) {
        this.id = id;
        this.name = name;
        this.phone = phone;
        this.createdAt = createdAt;
        this.updatedAt = updatedAt;
    }

    static fromEntity(caller) {
        return new CallerDTO(
            caller._id,
            caller.name,
            caller.phone,
            caller.createdAt,
            caller.updatedAt
        );
    }

    toJSON() {
        return {
            id: this.id,
            name: this.name,
            phone: this.phone,
            createdAt: this.createdAt,
            updatedAt: this.updatedAt
        };
    }

    static async create(data) {
        const newCaller = await createCaller(data);
        return CallerDTO.fromEntity(newCaller);
    }

    static async getAll() {
        const callers = await getAllCallers();
        return callers.map(caller => CallerDTO.fromEntity(caller));
    }

    static async getById(id) {
        const caller = await getCallerById(id);
        return caller ? CallerDTO.fromEntity(caller) : null;
    }
}