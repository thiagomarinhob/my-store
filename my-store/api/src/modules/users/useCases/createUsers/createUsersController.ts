import { Request, Response } from "express";
import { CreateUserUseCase } from "./createUsersUseCase";

export class CreateUsersController {
  async handle(request: Request, response: Response) {
    const { phone, username, password, storeId, roleId } = request.body;

    const createUserUseCase = new CreateUserUseCase();
    const result = await createUserUseCase.execute({
      phone,
      username,
      password,
      storeId,
      roleId,
    });

    return response.json(result);
  }
}
