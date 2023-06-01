import { prisma } from "../../../../database/prismaClient";

export class FindAllCategoriesUseCase {
  async execute() {
    const categories = await prisma.category.findMany();

    return categories;
  }
}
