import { prisma } from "../../../database/prismaClient";

interface IUser {
  id: string;
}

export class UserActivedUseCase {
  async execute({ id }: IUser) {
    const userExist = await prisma.user.findFirst({
      where: {
        id,
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
      throw new Error("Username does not exist!");
    }

    return {
      username: userExist.username,
      roles: userExist.roles,
    };
  }
}
