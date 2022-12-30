import styles from "../styles/components/Footer.module.scss";

const Footer = () => {
  return (
    <>
      <footer className={`${styles.footer_main} ptb_60`}>
        <div class="container">
          <div className={`${styles.footer_flex} d_f`}>
            <div className={`${styles.footer_item}`}>
              <div className={`${styles.both_logo}`}>
                <div className={`${styles.footer_logo}`}>
                  <img src="img/logo.png" alt="logo" />
                </div>
                <div className={`${styles.footer_logo1}`}>
                  <img src="img/logo_ban.png" alt="logo" />
                </div>
              </div>
              <p className={`${styles.top_space} para`}>
                A trusted name in the wellness <br />
                circles for over 55 years
              </p>
            </div>
            <div className={`${styles.footer_item}`}>
              <ul>
                <li>
                  <a class="para scrollTo" href="#about_us">
                    About
                  </a>
                </li>
                <li>
                  <a class="para scrollTo" href="#product_collection">
                    Collections
                  </a>
                </li>
                <li>
                  <a class="para scrollTo" href="#testimonial">
                    Reviews
                  </a>
                </li>
              </ul>
            </div>

            <div className={`${styles.footer_item}`}>
              <h2 className={`${styles.heading_section}`}>Contact Us</h2>
              <p className="para">
                For queries or business inquiries, dial us, write to us at
              </p>
              <p className={`${styles.para} ${styles.link_txt}`}>
                <img src="img/mail.png" alt="mail" />{" "}
                <a
                  className={`${styles.para}`}
                  href="mailto:customer.care@banlab.com"
                >
                  customer.care@banlab.com
                </a>
              </p>
              <p className={`${styles.para} ${styles.link_txt}`}>
                <img src="img/call.png" alt="call" />{" "}
                <a className={`${styles.para}`} href="tel:+91-7043991157">
                  +91-7043991157
                </a>
              </p>
            </div>
          </div>
        </div>
      </footer>

      <div className={`${styles.footer_strip}`}>
        <div class="container">
          <div className={`${styles.footer_strip} d_f`}>
            <div className={`${styles.strip_item}`}>
              <p className={`${styles.para}`}>
                Copyright 2022 © Charm & Glow Pvt. Ltd.
              </p>
            </div>
            <div className={`${styles.strip_item} ${styles.social_link}`}>
              <a href="https://www.facebook.com/598216606918200/posts/pfbid02zGJ124VsPun6UCD6hvyLYzqF25PMHEzYpPnvNvXEcsPsRmKisStArQmtHetXMvkdl/?sfnsn=wiwspmo">
                <img src="img/facebook.png" alt="facebook" />
              </a>
              <a href="https://www.instagram.com/accounts/login/?next=/charmnglow/">
                <img src="img/instagram.png" alt="instagram" />
              </a>
            </div>
            <div className={`${styles.strip_item}`}>
              <a href="https://www.ting.in/" target="_blank">
                <img src="img/ting.svg" alt="ting logo" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
