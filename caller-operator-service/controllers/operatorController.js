import { OperatorDTO } from "../dtos/operatorDto.js";

export const createOperatorController = async (req, res) => {
    try {
        const { name } = req.body;

        if (!name) {
            return res.status(400).json({ message: "Name is required" });
        }

        const operatorDTO = await OperatorDTO.create({ name });

        res.status(201).json(operatorDTO.toJSON());
    } catch (error) {
        res.status(500).json({ message: "Error creating operator", error: error.message });
    }
};

export const getAllOperatorsController = async (req, res) => {
    try {
        const operatorDTOs = await OperatorDTO.getAll();

        res.status(200).json(operatorDTOs.map(dto => dto.toJSON()));
    } catch (error) {
        res.status(500).json({ message: "Error fetching operators", error: error.message });
    }
};

export const getOperatorByIdController = async (req, res) => {
    try {
        const { id } = req.params;

        const operatorDTO = await OperatorDTO.getById(id);
        if (!operatorDTO) {
            return res.status(404).json({ message: "Operator not found" });
        }

        res.status(200).json(operatorDTO.toJSON());
    } catch (error) {
        res.status(500).json({ message: "Error fetching operator", error: error.message });
    }
};