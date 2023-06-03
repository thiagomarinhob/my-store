import { prisma } from "../../../../database/prismaClient";

interface IPermissions {
  name: string;
}

export class CreatePermissionssUseCase {
  async execute({ name }: IPermissions) {
    const existPermission = await prisma.permission.findFirst({
      where: {
        name,
      },
    });

    if (existPermission) {
      throw new Error("Permission already exists");
    }

    const permission = await prisma.permission.create({
      data: {
        name,
      },
    });

    return permission;
  }
}
