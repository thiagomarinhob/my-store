import { prisma } from "../../../../database/prismaClient";

export class FindAllProductsUseCase {
  async execute() {
    const products = await prisma.product.findMany({
      select: {
        id: true,
        name: true,
        quantity: true,
        sellPrice: true,
        purchasePrice: true,
        description: true,
        category: {
          select: {
            name: true,
          },
        },
        supplier: {
          select: {
            name: true,
          },
        },
      },
    });

    const countProducts = await prisma.product.count();

    return {
      countProducts,
      products,
    };
  }
}
