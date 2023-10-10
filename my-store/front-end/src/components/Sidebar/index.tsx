import React from "react";
import { Container, Content } from "./styles";
import {
  FaHome,
  FaEnvelope,
  FaRegSun,
  FaUserAlt,
  FaIdCardAlt,
  FaRegFileAlt,
  FaRegCalendarAlt,
  FaChartBar,
} from "react-icons/fa";

import SidebarItem from "../SideBarItem";

const Sidebar = ({ active }: any) => {
  const closeSidebar = () => {
    active(false);
  };

  return (
    <Container sidebar={active}>
      <FaHome onClick={closeSidebar} />
      <Content>
        <SidebarItem Icon={FaHome} link={"/"} Text="Home" />
        <SidebarItem Icon={FaChartBar} link={"/products"} Text="Produtos" />
      </Content>
    </Container>
  );
};

export default Sidebar;
