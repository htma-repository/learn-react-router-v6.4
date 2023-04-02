import React from "react";
import { NavLink } from "react-router-dom";

const navigations = [
  {
    id: "n1",
    href: "",
    name: "Home",
  },
  {
    id: "n2",
    href: "about",
    name: "About",
  },
  {
    id: "n3",
    href: "product",
    name: "Products",
  },
];

const Navigation = () => {
  return (
    <header className="p-4">
      <nav>
        <ul className="flex flex-row items-center justify-center gap-x-8">
          {navigations.map((nav) => (
            <li key={nav.id}>
              <NavLink
                to={nav.href}
                className={({ isActive }) => (isActive ? "underline" : "")}
                end={nav.id === "n1" ? true : false}
              >
                {nav.name}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Navigation;
