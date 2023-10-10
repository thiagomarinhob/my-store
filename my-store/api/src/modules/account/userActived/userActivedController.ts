import { Request, Response } from "express";
import { UserActivedUseCase } from "./userActivedUseCase";

export class UserActivedController {
  async handle(request: Request, response: Response) {
    const id = request.id_user;

    const userActivedUseCase = new UserActivedUseCase();
    const result = await userActivedUseCase.execute({
      id,
    });

    return response.json(result);
  }
}
