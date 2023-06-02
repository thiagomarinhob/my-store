import React, { useState, useContext } from "react";
import { Input } from "@/common/input";
import { useRouter } from "next/router";
import { AuthContext } from "@/context/AuthContext";

import {
  Container,
  Content,
  ContainerImage,
  Form,
  Button,
} from "../../styles/pages/login";
import Image from "next/image";
import Logo from "@/assets/image.jpg";
import { GetServerSideProps } from "next";
import { parseCookies } from "nookies";
import { withSSRGuest } from "@/utils/withSSRGuest";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isError, setIsError] = useState(false);
  const { signIn } = useContext(AuthContext);

  const Router = useRouter();

  async function handleSunmit() {
    await signIn({ email, password });
    Router.push("/products");
  }

  return (
    <Container>
      <ContainerImage>
        <Image src={Logo} alt="image" />
      </ContainerImage>
      <Content>
        <h1>Bem Vindo!</h1>

        <Form>
          <Input
            labelText="Email"
            InputType="text"
            disabled={false}
            isRequired
            name="email"
            onChange={setEmail}
            placeholder="Digite seu email"
            value={email}
            mask=""
            isErrorState={isError}
            setErrorState={setIsError}
          />

          <Input
            labelText="Password"
            InputType="password"
            disabled={false}
            isRequired
            name="password"
            onChange={setPassword}
            placeholder="Digite sua senha"
            value={password}
            mask=""
            isErrorState={isError}
            setErrorState={setIsError}
          />

          <Button onClick={handleSunmit}>Login</Button>
        </Form>
      </Content>
    </Container>
  );
}

export const getServerSideProps = withSSRGuest(async (ctx) => {
  return {
    props: {},
  };
});
