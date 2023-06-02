import { Request, Response } from "express";
import { FindAllProductsUseCase } from "./findAllProductsUseCase";

export class FindAllProductsController {
  async handle(request: Request, response: Response) {
    const findAllProductsUseCase = new FindAllProductsUseCase();

    const products = await findAllProductsUseCase.execute();

    return response.json(products);
  }
}
