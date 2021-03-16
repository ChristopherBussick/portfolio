import React from "react";
import styled from "styled-components";
import { NavProps } from "./Nav";

interface NavbarProps {
  children: React.ReactElement<NavProps> | React.ReactElement<NavProps>[];
}

export const Navbar: React.FC<NavbarProps> = ({ children }) => {
  return <StyledNavbar>{children}</StyledNavbar>;
};

const StyledNavbar = styled.div`
  display: flex;
  justify-content: flex-end;
  flex-wrap: wrap;
  border-bottom: 1px solid ${(props) => props.theme.colors.gray};
  box-shadow: 1px 1px 7px rgba(0, 0, 0, 0.25);
`;
export default Navbar;
