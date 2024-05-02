import { EnvVariables } from "../../../config/Env";
import { hash } from "bcrypt";

export const GenerateHashPassword = async (password: string) => {
  try {
    if (EnvVariables.salt) {
      const saltRound = parseInt(EnvVariables.salt);
      const hashPassword: string = await hash(password, saltRound);

      return hashPassword;
    }
  } catch (error) {
    console.error("Erro ao Criptografar senha: ", error)
  }
};
