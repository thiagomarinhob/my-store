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
import { withSSRGuest } from "@/utils/withSSRGuest";
import { GetServerSidePropsContext } from "next";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isErrorUsername, setIsErrorUsername] = useState(false);
  const [isErrorPassword, setIsErrorPassword] = useState(false);
  const { signIn } = useContext(AuthContext);

  const Router = useRouter();

  async function handleSunmit() {
    await signIn({ username, password });
    Router.push("/");
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
            labelText="Username"
            InputType="text"
            disabled={false}
            isRequired
            name="Username"
            onChange={setUsername}
            placeholder="Digite seu Username"
            value={username}
            mask=""
            isErrorState={isErrorUsername}
            setErrorState={setIsErrorUsername}
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
            isErrorState={isErrorPassword}
            setErrorState={setIsErrorPassword}
          />

          <Button onClick={handleSunmit}>Login</Button>
        </Form>
      </Content>
    </Container>
  );
}

export const getServerSideProps = withSSRGuest(
  async (ctx: GetServerSidePropsContext) => {
    return {
      props: {},
    };
  }
);
