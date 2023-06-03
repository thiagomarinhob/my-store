import { prisma } from "../../../../database/prismaClient";
import { hash } from "bcrypt";

interface IUser {
  username: string;
  password: string;
  storeId: string;
  roleId?: string;
}

export class CreateUserUseCase {
  async execute({ username, password, storeId, roleId }: IUser) {
    const userExist = await prisma.user.findFirst({
      where: {
        username,
      },
    });

    if (userExist) {
      throw new Error("Username already exist!");
    }

    const hashPassword = await hash(password, 10);

    const user = await prisma.user.create({
      data: {
        username,
        password: hashPassword,
        storeId,
        roles: {
          connect: {
            id: roleId,
          },
        },
      },
    });

    return user;
  }
}
