import Link from "next/link";
import style from "../styles/Header.module.css"
const NavItem = ({ text, href }) => {
  return (
    <Link href={href}>
    
      <div className={style.navLink}>{text}</div>
    </Link>
  );
};

export default NavItem;