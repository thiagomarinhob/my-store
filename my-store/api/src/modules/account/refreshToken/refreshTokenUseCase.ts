import { prisma } from "../../../database/prismaClient";
import { sign } from "jsonwebtoken";

interface IRefreshToken {
  refreshToken: string;
}

export class RefreshTokenUseCase {
  async execute({ refreshToken }: IRefreshToken) {
    try {
      const storedToken = await prisma.refreshToken.findFirst({
        where: {
          token: refreshToken,
        },
      });

      if (!storedToken || new Date() > storedToken.expiresAt) {
        throw new Error("Refresh token inválido ou expirado");
      }

      const token = sign(
        { username: storedToken.userId },
        String(process.env.SECRET_PASS),
        {
          subject: storedToken.id,
          expiresIn: "1d",
        }
      );

      return {
        token,
        refreshToken,
      };
    } catch (err) {
      throw new Error("Erro ao renovar o token de acesso");
    }
  }
}
