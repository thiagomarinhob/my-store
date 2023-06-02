import { Request, Response } from "express";
import { RefreshTokenUseCase } from "./refreshTokenUseCase";

export class RefreshTokenController {
  async handle(request: Request, response: Response) {
    const { refreshToken } = request.body;

    const refreshTokenUseCase = new RefreshTokenUseCase();
    const result = await refreshTokenUseCase.execute({
      refreshToken,
    });

    return response.json(result);
  }
}
