import Head from "next/head";
import Header from "./Header.js";
// import Footer from './Footer.jsx'
import style from "../styles/Header.module.css";
import React, { useEffect, useState } from "react";
import { UserSelectionProvider } from "../utils/context/userSelection.context.js";
const Layout = (props) => {
  const [navBg, setNavBg] = useState(false);
  // const isHome = props.name === 'Homepage' ? true : false;
  console.log("checking==>propspropsprops", props);
  // const changeNavBg = () => {
  //   window.scrollY >= 200 ? setNavBg(true) : setNavBg(false);
  // };

  // useEffect(() => {
  //   window.addEventListener("scroll", changeNavBg);
  //   return () => {
  //     window.removeEventListener("scroll", changeNavBg);
  //   };
  // }, []);

  return (
    <>
      <Head>
        <title>My App</title>
        <link rel="stylesheet" href="/static/css/style.css" />
      </Head>

      <Header />

      <div className={`${style.layoutPadding} ${props.className}`}>
        {props.children}
      </div>
    </>
  );
};

export default React.memo(Layout);
