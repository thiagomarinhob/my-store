import { Request, Response } from "express";
import { CreateCategoriesUseCase } from "./createCategoriesUseCases";

export class CreateCategoriesController {
  async handle(request: Request, response: Response) {
    const { name } = request.body;

    const createCategoriesUseCase = new CreateCategoriesUseCase();
    const result = await createCategoriesUseCase.execute({
      name,
    });

    return response.json(result);
  }
}
