import { Request, Response } from "express";
import Owner from "../../models/Owner/Owner.model";
import { compare } from "bcrypt";

export const LoginRepositorie = async (req: Request, res: Response) => {
  const { email, password } = req.body;
  const owner = await Owner.findOne({ where: { email } });

  if (!owner) {
    console.error("Usuário/Senha incorreta");
    res.status(401).json({ error: "Usuário/Senha incorreta" });
    return;
  }

  const correctPassword = await compare(password, owner.password);

  if (correctPassword) {
    const id = owner.dataValues.id;
    return res.status(200).json({ id });
  }
};
