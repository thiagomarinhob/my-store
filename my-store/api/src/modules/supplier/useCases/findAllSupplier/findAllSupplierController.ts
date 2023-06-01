import { Request, Response } from "express";
import { FindAllSupplierUseCase } from "./findAllSupplierUseCase";

export class FindAllSupplierController {
  async handle(request: Request, response: Response) {
    const findAllSupplierUseCase = new FindAllSupplierUseCase();

    const suppliers = await findAllSupplierUseCase.execute();

    return response.json(suppliers);
  }
}
