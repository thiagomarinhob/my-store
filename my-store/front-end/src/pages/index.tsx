import { withSSRAuth } from "@/utils/withSSRAuth";
import React from "react";

export default function Home() {
  return <h1>Dashboard</h1>;
}

export const getServerSideProps = withSSRAuth(async (ctx) => {
  return {
    props: {},
  };
});
