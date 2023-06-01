import { Request, Response } from "express";
import { UpdateProductUseCase } from "./updateProductsUseCase";

export class UpdateProductsController {
  async handle(request: Request, response: Response) {
    const {
      name,
      description,
      sellPrice,
      purchasePrice,
      quantity,
      categoryId,
    } = request.body;

    const { id } = request.params;

    const updateProductUseCase = new UpdateProductUseCase();
    const result = await updateProductUseCase.execute({
      id,
      name,
      description,
      sellPrice,
      purchasePrice,
      quantity,
      categoryId,
    });

    return response.json(result);
  }
}
