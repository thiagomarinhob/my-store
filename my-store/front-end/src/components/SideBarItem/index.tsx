import React from "react";
import { Container } from "./styles";
import { useRouter } from "next/router";

const SidebarItem = ({ Icon, Text, link }: any) => {
  const router = useRouter();
  return (
    <Container onClick={() => router.push(link)}>
      <Icon />
      {Text}
    </Container>
  );
};

export default SidebarItem;
