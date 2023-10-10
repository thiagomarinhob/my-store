import { prisma } from "../../../database/prismaClient";
import { compare } from "bcrypt";
import { sign } from "jsonwebtoken";

interface IAuthenticateUser {
  username: string;
  password: string;
}

export class AuthenticateUsersUseCase {
  async execute({ username, password }: IAuthenticateUser) {
    const userExist = await prisma.user.findFirst({
      where: {
        username,
      },
      include: {
        roles: {
          select: {
            name: true,
            permissions: {
              select: {
                name: true,
              },
            },
          },
        },
      },
    });

    if (!userExist) {
      throw new Error("Username or password invalid");
    }

    const passwordMatch = await compare(password, userExist.password);

    if (!passwordMatch) {
      throw new Error("Username or password invalid");
    }

    const token = sign({ username }, String(process.env.SECRET_PASS), {
      subject: userExist.id,
      expiresIn: "1d",
    });

    const refreshToken = sign({ username }, String(process.env.SECRET_PASS), {
      subject: userExist.id,
      expiresIn: "30d",
    });

    await prisma.refreshToken.create({
      data: {
        token: refreshToken,
        userId: userExist.id,
        expiresAt: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000), // 30 dias
      },
    });

    return {
      token,
      refreshToken,
      roles: userExist.roles,
    };
  }
}
