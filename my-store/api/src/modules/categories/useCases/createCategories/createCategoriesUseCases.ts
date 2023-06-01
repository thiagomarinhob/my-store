import { prisma } from "../../../../database/prismaClient";

interface CreateCategories {
  name: string;
}

export class CreateCategoriesUseCase {
  async execute({ name }: CreateCategories) {
    const categoryExist = await prisma.category.findFirst({
      where: {
        name,
      },
    });

    if (categoryExist) throw new Error("Category already exists");

    const category = await prisma.category.create({
      data: {
        name,
      },
    });

    return category;
  }
}
