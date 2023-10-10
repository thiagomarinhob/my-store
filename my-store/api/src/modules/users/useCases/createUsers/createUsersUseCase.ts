import { prisma } from "../../../../database/prismaClient";
import { hash } from "bcrypt";

interface IUser {
  phone: string;
  username: string;
  password: string;
  storeId: string;
  roleId: string;
}

export class CreateUserUseCase {
  async execute({ phone, username, password, storeId, roleId }: IUser) {
    const userExist = await prisma.user.findFirst({
      where: {
        phone,
      },
    });

    if (userExist) {
      throw new Error("phone already exist!");
    }

    const hashPassword = await hash(password, 10);

    const user = await prisma.user.create({
      data: {
        phone,
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
