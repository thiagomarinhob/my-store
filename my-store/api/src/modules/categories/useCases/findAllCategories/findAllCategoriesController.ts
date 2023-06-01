import { Request, Response } from "express";
import { FindAllCategoriesUseCase } from "./findAllCategoriesUseCase";

export class FindAllCategoriesController {
  async handle(request: Request, response: Response) {
    const findAllCategoriesUseCase = new FindAllCategoriesUseCase();

    const categories = await findAllCategoriesUseCase.execute();

    return response.json(categories);
  }
}
