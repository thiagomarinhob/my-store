import { Request, Response } from "express";
import { CreateUserUseCase } from "./createUsersUseCase";

export class CreateUsersController {
  async handle(request: Request, response: Response) {
    const { username, password, storeId } = request.body;

    const createUserUseCase = new CreateUserUseCase();
    const result = await createUserUseCase.execute({
      username,
      password,
      storeId,
    });

    return response.json(result);
  }
}
