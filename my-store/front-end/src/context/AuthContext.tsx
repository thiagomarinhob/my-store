import React, { createContext, ReactNode, useState, useEffect } from "react";
import { api } from "@/pages/api/apiClient";
import { setCookie, parseCookies, destroyCookie } from "nookies";
import Router from "next/router";

type User = {
  username: string;
};

type SignCredentials = {
  username: string;
  password: string;
};

type AuthContextData = {
  signIn(credentiols: SignCredentials): Promise<void>;
  isAuthenticated: boolean;
};

type AuthProviderProps = {
  children: ReactNode;
};

export const AuthContext = createContext({} as AuthContextData);

export function SignOut() {
  destroyCookie(undefined, "store.token");
  destroyCookie(undefined, "store.refreshToken");

  Router.push("/");
}

export function AuthProvider({ children }: AuthProviderProps) {
  const [user, setUser] = useState<User>();
  const isAuthenticated = !!user;

  useEffect(() => {
    const { "store.token": token } = parseCookies();

    if (token) {
      // pegar dados de acesso do user
      // logout automatico
    }
  }, []);

  async function signIn({ username, password }: SignCredentials) {
    try {
      const response = await api.post("/authenticate", {
        username,
        password,
      });

      const { token, refreshToken } = response.data;

      setCookie(undefined, "store.token", token, {
        maxAge: 60 * 60 * 24 * 30,
        path: "/",
      });

      setCookie(undefined, "store.refreshToken", refreshToken, {
        maxAge: 60 * 60 * 24 * 30,
        path: "/",
      });

      setUser({ username });

      api.defaults.headers["Authorization"] = `Bearer ${token}`;
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <AuthContext.Provider value={{ signIn, isAuthenticated }}>
      {children}
    </AuthContext.Provider>
  );
}
