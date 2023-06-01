import { Request, Response } from "express";
import { AuthenticateStoresUseCase } from "./AuthenticateStoresUseCase";

export class AuthenticateStoresController {
  async handle(request: Request, response: Response) {
    const { email, password } = request.body;

    const authenticateStoresUseCase = new AuthenticateStoresUseCase();
    const result = await authenticateStoresUseCase.execute({
      email,
      password,
    });

    return response.json(result);
  }
}
