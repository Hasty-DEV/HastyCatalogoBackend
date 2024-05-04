import { Response } from "express";
import Owner from "../../models/Owner/Owner.model";

export const ExistingEmailRepositorie = async (
  res: Response,
  email: string
) => {
  try {
    let existingUserByEmail = await Owner.findOne({
      where: { email: email },
    });
    if (existingUserByEmail) {
      res
        .status(422)
        .send(`Email ${existingUserByEmail.email} já está sendo utilizado`);
      return false;
    } else {
      return true;
    }
  } catch (err) {
    console.error("Erro ao consultar o banco de dados: " + err);
    res.status(500).send("Erro ao consultar o banco de dados");
    return false;
  }
};