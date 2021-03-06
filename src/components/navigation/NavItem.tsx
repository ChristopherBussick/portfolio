import React, { Dispatch, SetStateAction } from "react";
import { Link } from "react-router-dom";
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
  linkTo: string;
}

export const NavItem: React.FC<NavItemProps> = ({
  id,
  itemType: type,
  label,
  isActive,
  setIsActive,
  linkTo,
}) => {
  switch (type) {
    case NavItemType.Anchor: {
      return (
        <StyledNavItemAnchor
          $isActive={isActive}
          onClick={
            setIsActive === undefined ? undefined : () => setIsActive(id)
          }
          to={linkTo}
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

// "isActive" is prefixed with a "$" in order to make it a transient prop in order to prevent it from being rendered to the DOM element.
// It would be rendered to the DOM element because the React Router Link component passes all unknown properties to it.
// - See: https://styled-components.com/docs/api#transient-props
const StyledNavItemAnchor = styled(Link)<{ $isActive: boolean }>`
  padding: 20px 30px;
  font-size: 1.2rem;
  font-weight: 400;
  color: ${(props) =>
    props.$isActive ? props.theme.colors.secondary : "#a4a4a4"};
  user-select: none;

  &:hover {
    background: none;
    color: ${(props) =>
      props.$isActive ? props.theme.colors.primary : "#2b2b2b"};
  }
`;
export default NavItem;
