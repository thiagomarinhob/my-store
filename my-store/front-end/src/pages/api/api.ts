import { SignOut } from "@/context/AuthContext";
import axios, { AxiosError } from "axios";
import { GetServerSidePropsContext } from "next";
import { parseCookies, setCookie } from "nookies";

let isRefreshing = false;
let failedRequestsQueue: any = [];

export function setupAPIClient(
  ctx: GetServerSidePropsContext | undefined = undefined
) {
  let cookies = parseCookies(ctx);
  const api = axios.create({
    baseURL: "http://localhost:3000",
    headers: {
      Authorization: `Bearer ${cookies["store.token"]}`,
    },
  });

  api.interceptors.response.use(
    (response) => {
      return response;
    },
    (error: AxiosError) => {
      if (error.response?.status === 401) {
        if (error.response.data?.message === "Invalid token!") {
          cookies = parseCookies(ctx);

          const { "store.refreshToken": refreshToken } = cookies;
          const originalConfig = error.config;

          if (!isRefreshing) {
            isRefreshing = true;
            api
              .post("/refresh", {
                refreshToken,
              })
              .then((response) => {
                const { token } = response.data;

                setCookie(ctx, "store.token", token, {
                  maxAge: 60 * 60 * 24 * 30,
                  path: "/",
                });

                setCookie(ctx, "store.token", response.data.refreshToken, {
                  maxAge: 60 * 60 * 24 * 30,
                  path: "/",
                });

                api.defaults.headers["Authorization"] = `Bearer ${token}`;

                failedRequestsQueue.forEach((request: any) =>
                  request.onSuccess(token)
                );
                failedRequestsQueue = [];
              })
              .catch((err) => {
                failedRequestsQueue.forEach((request: any) =>
                  request.onFailure(err)
                );
                failedRequestsQueue = [];

                if (process.browser) {
                  SignOut();
                }
              })
              .finally(() => {
                isRefreshing = false;
              });
          }

          return new Promise((resolve, reject) => {
            failedRequestsQueue.push({
              onSuccess: (token: string) => {
                if (originalConfig)
                  originalConfig.headers["Authorization"] = `Bearer ${token}`;

                resolve(api(originalConfig));
              },
              onFailure: (err: AxiosError) => {
                reject(err);
              },
            });
          });
        } else {
          if (process.browser) {
            SignOut();
          }
        }
      }

      return Promise.reject(error);
    }
  );

  return api;
}
