import { Request, Response } from "express";
import { OwnerType } from "../../../types/Owner/Owner.type";
import { ExistingEmailRepositorie } from "../../repositories/ExistingEmail/ExistingEmail.repostiorie";
import { createOwnerRepositorie } from "../../repositories/createOwner/createOwner.repositorie";

class Register {
  public async RegisterOwner(req: Request, res: Response): Promise<void> {
    const { email }: OwnerType = req.body;

    await ExistingEmailRepositorie(res, email);
    await createOwnerRepositorie(req, res);


  }
}

export default new Register();
