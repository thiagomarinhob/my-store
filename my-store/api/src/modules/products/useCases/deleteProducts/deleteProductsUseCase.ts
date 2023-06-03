import { prisma } from "../../../../database/prismaClient";

interface ProductId {
  id: string;
}

export class DeleteProductsUseCase {
  async execute({ id }: ProductId) {
    const deleteProdct = await prisma.product.delete({
      where: {
        id,
      },
    });

    return deleteProdct;
  }
}
