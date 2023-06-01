import { prisma } from "../../../../database/prismaClient";

interface ICategory {
  id: string;
}

export class FindByIdCategoriesUseCase {
  async execute({ id }: ICategory) {
    const category = await prisma.category.findFirst({
      where: {
        id: {
          equals: id,
        },
      },
      select: {
        name: true,
        products: {
          select: {
            id: true,
            name: true,
            description: true,
            sellPrice: true,
            purchasePrice: true,
            quantity: true,
          },
        },
      },
    });

    return category;
  }
}
