import { prisma } from "../../../../database/prismaClient";

interface IUpdateProduct {
  id: string;
  name?: string;
  description?: string;
  sellPrice?: number;
  purchasePrice?: number;
  quantity?: number;
  categoryId?: string;
}

export class UpdateProductUseCase {
  async execute({
    id,
    name,
    description,
    sellPrice,
    purchasePrice,
    quantity,
    categoryId,
  }: IUpdateProduct) {
    const existProduct = await prisma.product.findFirst({
      where: {
        name,
      },
    });

    if (!existProduct) throw new Error("Product does not exist!");

    const productUpdate = await prisma.product.update({
      where: { id },
      data: {
        name,
        description,
        sellPrice,
        purchasePrice,
        quantity,
        categoryId,
      },
    });

    return productUpdate;
  }
}
