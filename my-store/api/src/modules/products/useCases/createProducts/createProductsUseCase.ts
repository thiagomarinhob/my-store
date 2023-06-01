import { request } from "express";
import { prisma } from "../../../../database/prismaClient";

interface ICreateProduct {
  name: string;
  description: string;
  sellPrice: number;
  purchasePrice: number;
  quantity: number;
  categoryId: string;
  storeId: string;
}

export class CreateProductsUseCase {
  async execute({
    name,
    description,
    sellPrice,
    purchasePrice,
    quantity,
    categoryId,
  }: ICreateProduct) {
    const existCategory = await prisma.category.findFirst({
      where: {
        id: {
          equals: categoryId,
        },
      },
    });

    if (!existCategory) throw new Error("Category does not exist");

    const existProduct = await prisma.product.findFirst({
      where: {
        name,
      },
    });

    if (existProduct) throw new Error("Product already exists");

    const product = await prisma.product.create({
      data: {
        name,
        description,
        sellPrice,
        purchasePrice,
        quantity,
        categoryId,
        storeId: request.id_store,
      },
    });

    return product;
  }
}
