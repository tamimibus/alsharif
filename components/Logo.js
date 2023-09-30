import React from "react";
import style from "../styles/Header.module.css";
import Image from "next/image";
const Logo = () => {
  return (
    <div className={style.logo}>
      <Image
        src={"/images/logo.png"}
        layout="fill"
        objectFit="contain"
        alt={"image.alt"}
      />
    </div>
  );
};

export default Logo;
