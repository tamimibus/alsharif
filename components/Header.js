import Link from "next/link";
import React from "react";
import style from "../styles/Header.module.css";
import { CustomerInformationRoute } from "../utils";
import Logo from "./Logo";
import { useRouter } from "next/router";
const MENU_LIST = [
  { text: "Home", href: "/" },
  { text: "About Us", href: "/about" },
  { text: "Contact", href: "/contact" },
];
const Navbar = ({}) => {
  const router = useRouter();
  console.log("checking tamimi==>Navbar", router);
  return (
    <header className={`${style.main} `}>
      <nav className={style.nav}>
        <Link href={"/"}>
          <Logo />
        </Link>
        {router.route !== "/Calculate" ? (
          <Link href={CustomerInformationRoute}>
            <button className={style.codepenButton}>
              <span>cost of windows</span>
            </button>
          </Link>
        ) : null}
      </nav>
    </header>
  );
};

export default React.memo(Navbar);
