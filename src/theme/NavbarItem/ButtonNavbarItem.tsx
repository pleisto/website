import React from "react";
import clsx from "clsx";
import NavbarNavLink from "./NavbarNavLink";
import type {
  DesktopOrMobileNavBarItemProps,
  Props,
} from "@theme/NavbarItem/DefaultNavbarItem";
import { ArrowRight } from "@site/src/components/icons/ArrowRight";

function ButtonNavbarItemDesktop({
  className,
  isDropdownItem = false,
  ...props
}: DesktopOrMobileNavBarItemProps) {
  const element = (
    <NavbarNavLink
      className={clsx(
        isDropdownItem ? "dropdown__link" : "navbar__item navbar__link",
        "navbar__button",
        className
      )}
      isDropdownLink={isDropdownItem}
      {...props}
      label={
        <>
          <ArrowRight className="navbar__button__icon" />
          {props.label}
        </>
      }
    />
  );

  if (isDropdownItem) {
    return <li>{element}</li>;
  }

  return element;
}

function ButtonNavbarItemMobile({
  className,
  isDropdownItem,
  ...props
}: DesktopOrMobileNavBarItemProps) {
  return (
    <li className="menu__list-item">
      <NavbarNavLink
        className={clsx("menu__link", "navbar__button", className)}
        {...props}
      />
    </li>
  );
}

export default function ButtonNavbarItem({
  mobile = false,
  position, // Need to destructure position from props so that it doesn't get passed on.
  ...props
}: Props): JSX.Element {
  const Comp = mobile ? ButtonNavbarItemMobile : ButtonNavbarItemDesktop;
  return (
    <Comp
      {...props}
      activeClassName={
        props.activeClassName ??
        (mobile ? "menu__link--active" : "navbar__link--active")
      }
    />
  );
}
