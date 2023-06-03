import { prisma } from "../../../../database/prismaClient";

interface IRole {
  id: string;
  name?: string;
  permissionId?: string;
}

export class UpdateRolesUseCase {
  async execute({ id, name, permissionId }: IRole) {
    const existRole = await prisma.role.findFirst({
      where: {
        id,
      },
    });

    if (!existRole) {
      throw new Error("Role does not exists");
    }

    const existPermission = await prisma.permission.findFirst({
      where: {
        id: permissionId,
      },
    });

    if (!existPermission) {
      throw new Error("Permission does not exists");
    }

    const updateRole = await prisma.role.update({
      where: {
        id,
      },
      data: {
        name,
        permissions: {
          connect: {
            id: permissionId,
          },
        },
      },
    });

    return updateRole;
  }
}
