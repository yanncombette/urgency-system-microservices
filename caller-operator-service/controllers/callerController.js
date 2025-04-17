import { CallerDTO } from "../dtos/callerDto.js";

export const createCallerController = async (req, res) => {
    try {
        const { name, phone } = req.body;

        if (!name || !phone) {
            return res.status(400).json({ message: "Name and phone are required" });
        }

        const callerDTO = await CallerDTO.create({ name, phone });

        res.status(201).json(callerDTO.toJSON());
    } catch (error) {
        res.status(500).json({ message: "Error creating caller", error: error.message });
    }
};

export const getAllCallersController = async (req, res) => {
    try {
        const callerDTOs = await CallerDTO.getAll();

        res.status(200).json(callerDTOs.map(dto => dto.toJSON()));
    } catch (error) {
        res.status(500).json({ message: "Error fetching callers", error: error.message });
    }
};

export const getCallerByIdController = async (req, res) => {
    try {
        const { id } = req.params;

        const callerDTO = await CallerDTO.getById(id);
        if (!callerDTO) {
            return res.status(404).json({ message: "Caller not found" });
        }

        res.status(200).json(callerDTO.toJSON());
    } catch (error) {
        res.status(500).json({ message: "Error fetching caller", error: error.message });
    }
};