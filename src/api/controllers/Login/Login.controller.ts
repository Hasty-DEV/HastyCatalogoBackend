import { Request, Response } from "express";
import { LoginRepositorie } from "../../repositories/loginOwner/loginOwner.repositorie";

class Login {
    public async LoginOwner(req: Request, res: Response) {
        await LoginRepositorie(req, res)
    }
}

export default new Login();