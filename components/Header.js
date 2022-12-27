import Link from "next/link";
import styles from "../styles/components/Header.module.scss";
import logo from "../public/img/logo.png";
import Image from "next/image";
import React, { useEffect, useState } from "react";

const Header = () => {
  // const [divHeight, setDivHeight] = useState(0);
  const [sidebarActive, setSidebarActive] = useState(false);

  useEffect(() => {
    let calHeight = document.querySelector("header");
    let height = calHeight.offsetHeight + "px";
    console.log(height);

    document.documentElement.style.setProperty("--headerHeight", height);
  }, []);

  return (
    <>
      <header className={`${styles.main_header}`}>
        <div className="container">
          <nav className={`${styles.navbar}`}>
            <div className={`${styles.brand}`}>
              <Link href="/">
                <a>
                  <Image src={logo} />
                </a>
              </Link>
            </div>
            <div className={`${styles.menu}`}>
              <ul>
                <li>
                  <Link href="/about">
                    <a className="text_xs font_primary">ABOUT</a>
                  </Link>
                </li>
                <li>
                  <Link href="/books">
                    <a className="text_xs font_primary">COLLECTIONS</a>
                  </Link>
                </li>
                <li>
                  <Link href="/news">
                    <a className="text_xs font_primary">REVIEWS</a>
                  </Link>
                </li>
                <li>
                  <Link href="/media">
                    <a className="text_xs font_primary">CONTACT US</a>
                  </Link>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </header>
      <div
        className={`${styles.sidenav} ${sidebarActive ? styles.active : ""}`}
      >
        <ul>
          <li>
            <Link href="/about">
              <a className="text_xl font_primary color_white">ABOUT</a>
            </Link>
          </li>
          <li>
            <Link href="/books">
              <a className="text_xl font_primary color_white">COLLECTIONS</a>
            </Link>
          </li>
          <li>
            <Link href="/news">
              <a className="text_xl font_primary color_white">REVIEWS</a>
            </Link>
          </li>
          <li>
            <Link href="/media">
              <a className="text_xl font_primary color_white">CONTACT US</a>
            </Link>
          </li>
        </ul>
      </div>
      <div className={`${styles.openClosebutton}`}>
        <div className={`${styles.main}`}>
          <div className={`${styles.image}`}>
            <Link href="/">
              <a>
                <Image src={logo} className={`${styles.headLogo}`} />
              </a>
            </Link>
          </div>
          <div
            onClick={() => setSidebarActive(!sidebarActive)}
            className={`${styles.bar_icon} ${
              sidebarActive ? styles.close_icon : ""
            }`}
          >
            <span className={`${styles.bar}`}></span>
            <span className={`${styles.bar}`}></span>
            <span className={`${styles.bar}`}></span>
            <span className={`${styles.bar}`}></span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
