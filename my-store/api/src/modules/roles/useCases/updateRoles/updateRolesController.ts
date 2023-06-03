import { Request, Response } from "express";
import { UpdateRolesUseCase } from "./updateRolesUseCase";

export class UpdateRolesController {
  async handle(request: Request, response: Response) {
    const { name, permissionId } = request.body;
    const { id } = request.params;

    const updateRolesUseCase = new UpdateRolesUseCase();
    const result = await updateRolesUseCase.execute({
      id,
      name,
      permissionId,
    });

    return response.json(result);
  }
}
