import { Request, Response } from "express";
import { CreateRolesUseCase } from "./createRolesUseCase";

export class CreateRoleController {
  async handle(request: Request, response: Response) {
    const { name } = request.body;

    const createRolesUseCase = new CreateRolesUseCase();
    const result = await createRolesUseCase.execute({
      name,
    });

    return response.json(result);
  }
}
