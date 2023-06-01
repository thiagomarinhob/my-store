import { prisma } from "../../../../database/prismaClient";
import { hash } from "bcrypt";

interface ICreateStore {
  name: string;
  email: string;
  password: string;
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
    password,
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

    const hashPassword = await hash(password, 10);

    const store = await prisma.store.create({
      data: {
        name,
        email,
        password: hashPassword,
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
