import { Request, Response } from "express";
import { DeleteProductsUseCase } from "./deleteProductsUseCase";

export class DeleteProductsController {
  async handle(request: Request, response: Response) {
    const { id } = request.params;
    const deleteProductsUseCase = new DeleteProductsUseCase();
    const result = await deleteProductsUseCase.execute({
      id,
    });

    return response.json(result);
  }
}
