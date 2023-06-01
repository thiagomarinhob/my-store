import React from "react";
import { Container, Content, Command } from "@/styles/pages/home";
import { parseCookies } from "nookies";
import { GetServerSideProps } from "next";

export default function Home() {
  return <h1>Dashboard</h1>;
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const cookies = parseCookies(ctx);

  if (cookies["nextauth.token"]) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }

  return {
    props: {},
  };
};
