import { NavItemProps, NavItemType } from "./components/navigation/NavItem";

export const NavItems: Array<NavItemProps> = [
  {
    id: 0,
    itemType: NavItemType.Anchor,
    label: "Home",
    isActive: true,
    linkTo: "/",
  },
  {
    id: 1,
    itemType: NavItemType.Anchor,
    label: "Projects",
    isActive: false,
    linkTo: "/Projects",
  },
  {
    id: 2,
    itemType: NavItemType.Anchor,
    label: "Skillset",
    isActive: false,
    linkTo: "/",
  },
  {
    id: 3,
    itemType: NavItemType.Anchor,
    label: "Hobbies",
    isActive: false,
    linkTo: "/",
  },
  {
    id: 4,
    itemType: NavItemType.Anchor,
    label: "Contact",
    isActive: false,
    linkTo: "/",
  },
];

export function getDefaultActiveSiteId(navItems: Array<NavItemProps>) {
  return navItems.find((navItem) => navItem.isActive)?.id;
}
