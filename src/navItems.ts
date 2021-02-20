import { NavItemProps, NavItemType } from "./components/NavItem";

export const NavItems: Array<NavItemProps> = [
  { id: 0, itemType: NavItemType.Anchor, label: "Home", isActive: true },
  { id: 1, itemType: NavItemType.Anchor, label: "Projects", isActive: false },
  { id: 2, itemType: NavItemType.Anchor, label: "Skillset", isActive: false },
  { id: 3, itemType: NavItemType.Anchor, label: "Hobbies", isActive: false },
  { id: 4, itemType: NavItemType.Anchor, label: "Contact", isActive: false },
];

export function getDefaultActiveSiteId(navItems: Array<NavItemProps>) {
  return navItems.find((navItem) => navItem.isActive)?.id;
}
