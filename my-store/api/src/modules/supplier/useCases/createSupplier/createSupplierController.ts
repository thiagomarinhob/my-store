import { Request, Response } from "express";
import { CreateSupplierUseCase } from "./createSupplierUseCase";

export class CreateSupplierController {
  async handle(request: Request, response: Response) {
    const { name, address, city, state, zipCode, phone } = request.body;

    const createSupplierUseCase = new CreateSupplierUseCase();
    const result = await createSupplierUseCase.execute({
      name,
      address,
      city,
      state,
      zipCode,
      phone,
    });

    return response.json(result);
  }
}
