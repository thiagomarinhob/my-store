import { Request, Response } from "express";
import { FindByIdProductsUseCase } from "./findByIdProductsUseCase";

export class FindByIdProductController {
  async handle(request: Request, response: Response) {
    const { id } = request.params;
    const findByIdProductsUseCase = new FindByIdProductsUseCase();
    const result = await findByIdProductsUseCase.execute({
      id,
    });

    return response.json(result);
  }
}
