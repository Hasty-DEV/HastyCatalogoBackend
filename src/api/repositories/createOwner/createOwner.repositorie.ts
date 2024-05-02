import { Request, Response } from "express";
import { OwnerType } from "../../../types/Owner/Owner.type";
import Owner from "../../models/Owner/Owner.model";
import { expressValidationResultService } from "../../services/expressValidationResult/expressValidationResult.service";
import { GenerateHashPassword } from "../../services/GenerateHashPassword/GenerateHashPassword.service";

export const createOwnerRepositorie = async (req: Request, res: Response) => {
  await expressValidationResultService(req, res);

  const { name, birthday, gender, phone, cpf, email, password } = req.body;

  const hash = await GenerateHashPassword(password);

  try {
    if (hash) {
      const owner: OwnerType = await Owner.create({
        name,
        birthday,
        gender,
        phone,
        cpf,
        email,
        password: hash,
      });
    }
    return res.status(201);
  } catch (error) {
    console.error("Erro ao criar:", error);
    return res.status(500).json({ error: "Erro interno do servidor" });
  }
};
