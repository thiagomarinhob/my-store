import { prisma } from "../../../../database/prismaClient";

interface ICreateStore {
  name: string;
  email: string;
  address: string;
  city: string;
  state: string;
  zipCode: string;
  phone: string;
}

export class CreateStoreUseCase {
  async execute({
    name,
    email,
    address,
    city,
    state,
    zipCode,
    phone,
  }: ICreateStore) {
    const existStore = await prisma.store.findFirst({
      where: {
        email,
      },
    });

    if (existStore) throw new Error("Store already exists");

    const store = await prisma.store.create({
      data: {
        name,
        email,
        address,
        city,
        state,
        zipCode,
        phone,
      },
    });

    return store;
  }
}
