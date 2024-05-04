import { Request, Response } from "express";
import Owner from "../../models/Owner/Owner.model";
import { expressValidationResultService } from "../../services/expressValidationResult/expressValidationResult.service";
import { GenerateHashPassword } from "../../services/GenerateHashPassword/GenerateHashPassword.service";

export const createOwnerRepositorie = async (req: Request, res: Response) => {
  try {
    await expressValidationResultService(req, res);
    const { name, birthday, gender, phone, cpf, email, password } = req.body;
    const hash = await GenerateHashPassword(password);
    let owner;
    if (hash) {
       owner = await Owner.create({
        name,
        birthday,
        gender,
        phone,
        cpf,
        email,
        password: hash,
      });
    }
    const ownerId = owner?.dataValues.id;
    return res.status(201).json({ ownerId });
  } catch (error) {
    console.error("Erro ao criar:", error);
    return res.status(500).json({ error: "Erro interno do servidor" });
  }
};
