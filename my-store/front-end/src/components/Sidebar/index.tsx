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
        <SidebarItem Icon={FaHome} link={"/products"} Text="Home" />
        <SidebarItem Icon={FaChartBar} link={"/products"} Text="Produtos" />
        <SidebarItem Icon={FaUserAlt} link={"/"} Text="Users" />
        <SidebarItem Icon={FaEnvelope} link={"/"} Text="Mail" />
        <SidebarItem Icon={FaRegCalendarAlt} link={"/"} Text="Calendar" />
        <SidebarItem Icon={FaIdCardAlt} link={"/"} Text="Employees" />
        <SidebarItem Icon={FaRegFileAlt} link={"/"} Text="Reports" />
        <SidebarItem Icon={FaRegSun} link={"/"} Text="Settings" />
      </Content>
    </Container>
  );
};

export default Sidebar;
