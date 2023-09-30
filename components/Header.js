import Link from "next/link";
import Image from "next/image";
import React, { useState } from "react";
import Logo from "./Logo";
import NavItem from "./NavItem";
import style from "../styles/Header.module.css";
import { CustomerInformationRoute } from "../utils";

const MENU_LIST = [
  { text: "Home", href: "/" },
  { text: "About Us", href: "/about" },
  { text: "Contact", href: "/contact" },
];
const Navbar = ({}) => {
  return (
    <header className={`${style.main} `}>
      <nav className={style.nav}>
        <Link href={"/"}>
          <Logo />
        </Link>
        <Link href={CustomerInformationRoute}>
          <button className={style.codepenButton}>
            <span>Start Coding</span>
          </button>
        </Link>
      </nav>
    </header>
  );
};

export default React.memo(Navbar);
