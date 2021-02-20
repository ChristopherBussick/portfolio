import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { getDefaultActiveSiteId } from "../navItems";
import { NavItem, NavItemProps } from "./NavItem";

export interface NavProps {
  navItems: Array<NavItemProps>;
}

export const Nav: React.FC<NavProps> = ({ navItems }) => {
  const [activeSite, setActiveSite] = useState<number | undefined>(
    getDefaultActiveSiteId(navItems)
  );

  function constructNavItems(navItems: Array<NavItemProps>) {
    return navItems.map((navItem) => {
      return (
        <NavItem
          key={navItem.id}
          id={navItem.id}
          itemType={navItem.itemType}
          label={navItem.label}
          isActive={navItem.id === activeSite}
          setIsActive={setActiveSite}
        />
      );
    });
  }

  return <StyledNav>{constructNavItems(navItems)}</StyledNav>;
};

const StyledNav = styled.div`
  display: flex;
`;

export default Nav;
