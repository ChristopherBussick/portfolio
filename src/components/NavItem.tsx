import React from "react";
import styled from "styled-components";

export enum NavItemType {
  Anchor,
  Button,
  Checkbox,
}

export interface NavItemProps {
  itemType: NavItemType;
  label: string;
}

export const NavItem: React.FC<NavItemProps> = ({ itemType: type, label }) => {
  switch (type) {
    case NavItemType.Anchor: {
      return <StyledNavItemAnchor href="#">{label}</StyledNavItemAnchor>;
    }
    default: {
      return <div>error, not done yet</div>;
    }
  }
};

const StyledNavItemAnchor = styled.a`
  padding: 20px 30px;
  font-size: 1.2rem;
  font-weight: 400;
  color: #a4a4a4;

  &:hover {
    color: #2b2b2b;
  }
`;
export default NavItem;
