import { prisma } from "../../../../database/prismaClient";

interface ProductId {
  id: string;
}

export class FindByIdProductsUseCase {
  async execute({ id }: ProductId) {
    const existProduct = await prisma.product.findFirst({
      where: {
        id,
      },
      select: {
        name: true,
        description: true,
        sellPrice: true,
        purchasePrice: true,
        quantity: true,
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

    if (!existProduct) {
      throw new Error("Product does not exists");
    }

    return existProduct;
  }
}
