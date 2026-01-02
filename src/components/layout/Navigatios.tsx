"use client";

import Link from "next/link";
import { useState } from "react";
import SVG from "react-inlinesvg";

interface NavItemProps {
  children: string;
  href: string;
}
const NavItem = ({ children, href }: NavItemProps) => {
  return (
    <li className="w-full md:w-auto">
      <Link
        className="block py-4 md:py-0 border-b border-gray-200 text-black md:border-b-0 md:border-transparent"
        href={href}
      >
        {children}
      </Link>
    </li>
  );
};

export default function Navigation() {
  const [menu, setMenu] = useState(false);

  return (
    <div
      className="bg-transparent shadow-lg top-0 flex items-center"
      style={{ zIndex: "99999" }}
    >
      <div className="container mx-auto max-w-7xl">
        <div className="flex flex-row items-center py-6 justify-between">
          <div className="md:w-1/2">
            <SVG src="/svg/logo.svg" className="w-auto h-16" />
          </div>
          <div className="w-1/4 md:hidden block">
            <button
              id="menu-toggle"
              aria-label="Menu Toggle"
              className="cursor-pointer"
            >
              <SVG
                src="/svg/menu.svg"
                className="fill-current text-black w-6 h-6"
                onClick={() => setMenu(!menu)}
              />
            </button>
          </div>

          <div
            className={`md:w-1/2 md:flex justify-center md:justify-end ${
              menu ? " flex" : " hidden"
            }`}
          >
            <ul className="flex w-full p-5 space-x-10 flex-col bg-white bg-opacity-10 dark:bg-opacity-10 rounded-[40px] md:w-auto md:py-6 px-14 md:flex-row items-center">
              <NavItem href="/">Home</NavItem>
              <NavItem href="/about">About</NavItem>
              <NavItem href="/services">Services</NavItem>
              <NavItem href="/blog">Blog</NavItem>
              <NavItem href="/contact">Contact</NavItem>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}