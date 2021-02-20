import React, { Dispatch, SetStateAction } from "react";
import styled from "styled-components";

export enum NavItemType {
  Anchor,
  Button,
  Checkbox,
}

export interface NavItemProps {
  id: number;
  itemType: NavItemType;
  label: string;
  isActive: boolean;
  setIsActive?: Dispatch<SetStateAction<number | undefined>>;
}

export const NavItem: React.FC<NavItemProps> = ({
  id,
  itemType: type,
  label,
  isActive,
  setIsActive,
}) => {
  switch (type) {
    case NavItemType.Anchor: {
      return (
        <StyledNavItemAnchor
          isActive={isActive}
          href="#"
          onClick={
            setIsActive === undefined ? undefined : () => setIsActive(id)
          }
        >
          {label}
        </StyledNavItemAnchor>
      );
    }
    default: {
      return <div>error, not done yet</div>;
    }
  }
};

const StyledNavItemAnchor = styled.a<{ isActive: boolean }>`
  padding: 20px 30px;
  font-size: 1.2rem;
  font-weight: 400;
  color: ${(props) =>
    props.isActive ? props.theme.colors.secondary : "#a4a4a4"};

  &:hover {
    color: ${(props) =>
      props.isActive ? props.theme.colors.primary : "#2b2b2b"};
  }
`;
export default NavItem;
