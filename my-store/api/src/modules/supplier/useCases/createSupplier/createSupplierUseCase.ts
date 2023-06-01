import { prisma } from "../../../../database/prismaClient";

interface ICreateSupplier {
  name: string;
  address: string;
  city: string;
  state: string;
  zipCode: string;
  phone: string;
}

export class CreateSupplierUseCase {
  async execute({
    name,
    address,
    city,
    state,
    zipCode,
    phone,
  }: ICreateSupplier) {
    const existSupplier = await prisma.supplier.findFirst({
      where: {
        name,
      },
    });

    if (existSupplier) throw new Error("Supplier already exists");

    const supplier = await prisma.supplier.create({
      data: {
        name,
        address,
        city,
        state,
        zipCode,
        phone,
      },
    });

    return supplier;
  }
}
