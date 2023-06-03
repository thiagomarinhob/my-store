import { Request, Response } from "express";
import { CreatePermissionssUseCase } from "./createPermissionsUseCase";

export class CreatePermissionsController {
  async handle(request: Request, response: Response) {
    const { name } = request.body;

    const createPermissionssUseCase = new CreatePermissionssUseCase();
    const result = await createPermissionssUseCase.execute({
      name,
    });

    return response.json(result);
  }
}
