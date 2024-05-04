import { NextFunction, Request, Response } from "express";
import { OwnerType } from "../../../types/Owner/Owner.type";
import { ExistingEmailRepositorie } from "../../repositories/ExistingEmail/ExistingEmail.repostiorie";
import { createOwnerRepositorie } from "../../repositories/createOwner/createOwner.repositorie";

class Register {
  public async RegisterOwner(req: Request, res: Response): Promise<void> {
    const { email }: OwnerType = req.body;

    const emailExists = await ExistingEmailRepositorie(res, email);
    if (!emailExists) {
      return;
    }
    await createOwnerRepositorie(req, res);
  }
}

export default new Register();