// Footer.js

import React from "react";
import style from "./style.module.css"; // Import the CSS file for this component

const Footer = () => {
  return (
    <div className={style.footerDark}>
      <footer>
        <div className={style.container}>
          <div className={style.row}>
            <div className={` ${style.text} ${style.item}`}>
              <h3>Company Name</h3>
              <p>
                Praesent sed lobortis mi. Suspendisse vel placerat ligula.
                Vivamus ac sem lacus. Ut vehicula rhoncus elementum. Etiam quis
                tristique lectus. Aliquam in arcu eget velit pulvinar dictum vel
                in justo.
              </p>
            </div>
            <div className={style.address}>
              <a href="tel:00962795022441">
                <p>
                  <i className={`${style.icon} ${style.phone}`}></i>
                  00962795022441
                </p>
              </a>
              <a
                href="https://maps.app.goo.gl/oSfg4z1Fj4TP2dYbA"
                target="_blank"
              >
                <p>
                  {" "}
                  <i className={`${style.icon} ${style.location}`}></i>
                  الزرقاء الجديدة -مقابل-اشارت السيفوي
                </p>
              </a>{" "}
            </div>

            <div className={`${style.col} ${style.item} ${style.social}`}>
              <a href="https://www.facebook.com/profile.php?id=100083974967147">
                <i className={`${style.icon} ${style.facebook}`}></i>
                {/* <i ></i> */}
              </a>
              <a href="https://wa.me/962795022441">
                <i className={`${style.icon} ${style.whatsapp}`}></i>
              </a>
            </div>
          </div>
          <p className={`${style.copyright}`}>Company Name © 2018</p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
