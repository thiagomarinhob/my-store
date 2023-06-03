import { prisma } from "../../../../database/prismaClient";

interface IRole {
  name: string;
}

export class CreateRolesUseCase {
  async execute({ name }: IRole) {
    const existRole = await prisma.role.findFirst({
      where: {
        name,
      },
    });

    if (existRole) {
      throw new Error("Role already exists");
    }

    const role = await prisma.role.create({
      data: {
        name,
      },
    });

    return role;
  }
}
