import { Request, Response } from "express";
import { FindByIdCategoriesUseCase } from "./findByIdCategoriesUseCase";

export class FindByIdCategoriesController {
  async handle(request: Request, response: Response) {
    const { id } = request.params;

    const findByIdCategoriesUseCase = new FindByIdCategoriesUseCase();

    const category = await findByIdCategoriesUseCase.execute({
      id,
    });

    return response.json(category);
  }
}
