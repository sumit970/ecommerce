import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import Nav from "./Nav";
// import  {logo}   from "../../src/Assets/logo.png"
import log from "../Assets/index"
const Header = () => {
  return (

    <MainHeader>
      <NavLink className="logo" to="/">
        <img sizes="" src={log} alt="my logo img" />
      </NavLink>
      <Nav />
    </MainHeader>

  );
};

const MainHeader = styled.header`

  padding: 0 4.8rem;
  height: 10rem;
  background-color: ${({ theme }) => theme.colors.bg};
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;

  .logo {
    height: 40px;
    width:110px;
  }
`;
export default Header;
