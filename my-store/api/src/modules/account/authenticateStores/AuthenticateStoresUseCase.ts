import { prisma } from "../../../database/prismaClient";
import { compare } from "bcrypt";
import { sign } from "jsonwebtoken";

interface IAuthenticateStore {
  email: string;
  password: string;
}

export class AuthenticateStoresUseCase {
  async execute({ email, password }: IAuthenticateStore) {
    const storeExist = await prisma.store.findFirst({
      where: {
        email,
      },
    });

    if (!storeExist) {
      throw new Error("Email or password invalid");
    }

    const passwordMatch = await compare(password, storeExist.password);

    if (!passwordMatch) {
      throw new Error("Email or password invalid");
    }

    const token = sign({ email }, String(process.env.SECRET_PASS), {
      subject: storeExist.id,
      expiresIn: "1d",
    });

    const refreshToken = sign({ email }, String(process.env.SECRET_PASS), {
      subject: storeExist.id,
      expiresIn: "30d",
    });

    return {
      token,
      refreshToken,
    };
  }
}
