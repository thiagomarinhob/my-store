import { prisma } from "../../../../database/prismaClient";

export class FindAllSupplierUseCase {
  async execute() {
    const suppliers = await prisma.supplier.findMany();

    return suppliers;
  }
}
