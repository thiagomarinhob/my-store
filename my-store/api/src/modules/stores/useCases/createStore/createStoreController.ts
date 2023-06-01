import { Request, Response } from "express";
import { CreateStoreUseCase } from "./createStoreUseCase";

export class CreateStoreController {
  async handle(request: Request, response: Response) {
    const { name, email, password, address, city, state, zipCode, phone } =
      request.body;

    const createStoreUseCase = new CreateStoreUseCase();
    const result = await createStoreUseCase.execute({
      name,
      email,
      password,
      address,
      city,
      state,
      zipCode,
      phone,
    });

    return response.json(result);
  }
}
