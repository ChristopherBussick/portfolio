import React from "react";
import styled from "styled-components";
import { NavItem, NavItemProps } from "./NavItem";

export interface NavProps {
  navItems: Array<NavItemProps>;
}

export const Nav: React.FC<NavProps> = ({ navItems }) => {
  return (
    <StyledNav>
      {navItems.map((navItem, index) => {
        return (
          <NavItem
            key={index}
            itemType={navItem.itemType}
            label={navItem.label}
          />
        );
      })}
    </StyledNav>
  );
};

const StyledNav = styled.div`
  display: flex;
`;

export default Nav;
