import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";

interface IPayload {
  sub: string;
}

export async function ensureAuthenticateUser(
  request: Request,
  response: Response,
  next: NextFunction
) {
  const authHeader = request.headers.authorization;

  if (!authHeader) {
    return response.status(401).json({
      code: "token.invalid",
      message: "Token missing",
    });
  }

  const [, token] = authHeader.split(" ");

  try {
    const { sub } = verify(token, String(process.env.SECRET_PASS)) as IPayload;

    request.id_store = sub;

    return next();
  } catch (err) {
    return response.status(401).json({
      message: "Invalid token!",
    });
  }
}
