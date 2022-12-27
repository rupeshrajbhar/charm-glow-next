import styles from "../styles/pages/Home.module.scss";

//import components
import React from "react";
import Slider from "react-slick";
import Head from "next/head";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { useState, useEffect, useRef } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import aboutus from "../public/img/home/about_us.png";
import uniqueicon1 from "../public/img/home/unique_icon_1.gif";
import uniqueicon2 from "../public/img/home/unique_icon_2.gif";
import uniqueicon3 from "../public/img/home/unique_icon_3.gif";
import uniqueicon4 from "../public/img/home/unique_icon_4.gif";
import tabicon1 from "../public/img/home/tab_icon_one.gif";
import tabicon2 from "../public/img/home/tab_icon_two.gif";
import tabicon3 from "../public/img/home/tab_icon_three.gif";
import tabicon4 from "../public/img/home/tab_icon_four.gif";
import tabicon5 from "../public/img/home/tab_icon_five.gif";
import hair1 from "../public/img/home/hair_1.png";
import hair2 from "../public/img/home/hair_2.png";
import hair3 from "../public/img/home/hair_3.png";
import hair4 from "../public/img/home/hair_4.png";
import coments_star from "../public/img/home/coments_star.png";
import quate_one from "../public/img/quate_one.png";
import Anuj_Kumar_Saroj from "../public/img/home/Neha-Kucheria.jpg";

export default function Home() {
  const [nav1, setNav1] = useState();
  const [nav2, setNav2] = useState();
  const [nav3, setNav3] = useState();
  const sliderRef = useRef();
  var settings1 = {
    // prevArrow: (
    //   <img className="slickA ban_right_arrow" src={arrow_slider.src} />
    // ),
    // nextArrow: <img className="slickA ban_left_arrow" src={arrow_slider.src} />,
    dots: false,
  };
  var settings2 = {
    dots: false,
    infinite: true,
    arrows: false,
  };
  var settings3 = {
    dots: true,
    infinite: true,
    speed: 500,
    arrows: false,
    // asNavFor: `${nav1}, ${nav2}`,
    slidesToShow: 2,
    slidesToScroll: 1,
    dots: false,
  };
  var product_slider = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    // prevArrow: (
    //   <button className={`${styles.prevarrow} about_prevarrow`}>
    //     <img src={arrow_slider.src} alt="" />
    //   </button>
    // ),
    // nextArrow: (
    //   <button className={`${styles.nextarrow} about_nextarrow`}>
    //     <img src={arrow_slider.src} alt="" />
    //   </button>
    // ),
    responsive: [
      {
        breakpoint: 1199,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  var product_slider1 = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    // prevArrow: (
    //   <button className={`${styles.prevarrow} about_prevarrow`}>
    //     <img src={arrow_slider.src} alt="" />
    //   </button>
    // ),
    // nextArrow: (
    //   <button className={`${styles.nextarrow} about_nextarrow`}>
    //     <img src={arrow_slider.src} alt="" />
    //   </button>
    // ),
    responsive: [
      {
        breakpoint: 1199,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div>
      <Head>
        <title> Home </title>{" "}
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main className={`${styles.index_page} bg_secondary`}>
        <div className={`${styles.banner}`}>
          <div className={`${styles.banner_slider}`}>
            <div className={`${styles.slider_1} banner_item`}>
              <div class="container">
                <div className={`${styles.text_section}`}>
                  <h2 className="banner_heading f_w_s">Nurtured with Nature</h2>
                </div>
              </div>
            </div>
          </div>
        </div>

        <section className={`${styles.about_signature} ptb_100`}>
          <div class="container">
            <div className={`${styles.about_signature_flex} f_r_aj_center`}>
              <div className={`${styles.about_signature_img} f_r_aj_center`}>
                <img
                  src={aboutus.src}
                  className={`${styles.paly_button}`}
                  alt=""
                />
                {/* <img src="img/home/about_us.png" class="img-responsive toTop" data-scroll alt="about img"> */}
              </div>
              <div className={`${styles.about_signature_content}`}>
                <h2
                  className={`${styles.heading_section} heading_section toTop`}
                  class=" toTop"
                  data-scroll
                >
                  About Charm & Glow
                </h2>
                <p className={`${styles.para} para toTop`} data-scroll>
                  Experience a diverse range of herbal skin and hair care
                  products with Charm & Glow. From facial kits to shampoos,
                  conditioners, and beauty creams, our elaborate selection
                  offers the best of beauty and nature. Developed by experts and
                  backed by age-old beauty secrets, Charm & Glow is the perfect
                  way to get that charismatic beauty you desire.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className={`${styles.unique_features}`}>
          <div class="container">
            <div className={`${styles.wrapper_unique_features}`}>
              <div className={`${styles.title_text} pb_30 toTop`} data-scroll>
                <h2 className={`${styles} heading_section`}>
                  What's Our Secret?
                </h2>
              </div>
              <div className={`${styles.unique_flex} f_r_aj_between`}>
                <div className={`${styles.unique_content}`}>
                  <div className={`${styles.unique_icon}`}>
                    <img src={uniqueicon1.src} alt="" />
                  </div>
                  <p className={`${styles.para} para_opacity`}>
                    Fresh & Hygienic
                  </p>
                </div>
                <div className={`${styles.unique_content}`}>
                  <div className={`${styles.unique_icon}`}>
                    <img src={uniqueicon2.src} alt="" />
                  </div>
                  <p className={`${styles.para} para_opacity`}>Natural Blend</p>
                </div>
                <div className={`${styles.unique_content}`}>
                  <div className={`${styles.unique_icon}`}>
                    <img src={uniqueicon3.src} alt="" />
                  </div>
                  <p className={`${styles.para} para_opacity`}>
                    Enriched with Active Herbs
                  </p>
                </div>
                <div className={`${styles.unique_content}`}>
                  <div className={`${styles.unique_icon}`}>
                    <img src={uniqueicon4.src} alt="" />
                  </div>
                  <p className={`${styles.para} para_opacity`}>GMP Certified</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section
          className={`${styles.best_sellers} ptb_100`}
          id="product_collection"
        >
          <div className={`${styles.container_main}`}>
            <div class="container">
              <div className={`${styles.popular_title}`}>
                <h2
                  className={`${styles.heading_section} heading_section f_w_b`}
                >
                  Our Beauty Range
                </h2>
                <p className={`${styles.para} para f_w_b`}>
                  Pick what suits your beauty regime best from our wide
                  selection of products.
                </p>
              </div>
              <Tabs>
                <TabList>
                  <Tab>Title 1</Tab>
                  <Tab>Title 2</Tab>
                </TabList>

                <TabPanel>
                  <div className={`${styles.tab_content} current`}>
                    <div class="container">
                      <div className={`${styles.tab_description}`}>
                        <div
                          className={`${styles.tab_description_inside} d_f pb_100 pt_30`}
                        >
                          <div
                            className={`${styles.tab_description_flex} f_r_aj_center`}
                          >
                            <div
                              className={`${styles.tab_description_icon} f_r_aj_center`}
                            >
                              <img src={tabicon1.src} alt="" />
                            </div>
                            <div
                              className={`${styles.tab_description_content} f_r_aj_center`}
                            >
                              <p className={`${styles.para} para`} class="">
                                Adds Lusture
                                <br />
                                and Strength
                              </p>
                            </div>
                          </div>
                          <div
                            className={`${styles.tab_description_flex} f_r_aj_center`}
                          >
                            <div
                              className={`${styles.tab_description_icon} f_r_aj_center`}
                            >
                              <img src={tabicon2.src} alt="" />
                            </div>
                            <div
                              className={`${styles.tab_description_content} f_r_aj_center`}
                            >
                              <p className={`${styles.para} para`} class="">
                                Reduces
                                <br />
                                Build-ups
                              </p>
                            </div>
                          </div>

                          <div
                            className={`${styles.tab_description_flex} f_r_aj_center`}
                          >
                            <div
                              className={`${styles.tab_description_icon} f_r_aj_center`}
                            >
                              <img src={tabicon3.src} alt="" />
                            </div>
                            <div
                              className={`${styles.tab_description_content} f_r_aj_center`}
                            >
                              <p className={`${styles.para} para`} class="">
                                Controls
                                <br />
                                Dandruff
                              </p>
                            </div>
                          </div>

                          <div
                            className={`${styles.tab_description_flex} f_r_aj_center`}
                          >
                            <div
                              className={`${styles.tab_description_icon} f_r_aj_center`}
                            >
                              <img src={tabicon4.src} alt="" />
                            </div>
                            <div
                              className={`${styles.tab_description_content} f_r_aj_center`}
                            >
                              <p className={`${styles.para} para`} class="">
                                Reduces
                                <br />
                                Split Ends
                              </p>
                            </div>
                          </div>

                          <div
                            className={`${styles.tab_description_flex} f_r_aj_center`}
                          >
                            <div
                              className={`${styles.tab_description_icon} f_r_aj_center`}
                            >
                              <img src={tabicon5.src} alt="" />
                            </div>
                            <div
                              className={`${styles.tab_description_content} f_r_aj_center`}
                            >
                              <p className={`${styles.para} para`} class="">
                                Paraben
                                <br />
                                Free
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className={`${styles.best_sellers_flex}`}>
                        <Slider {...product_slider}>
                          <div className={`${styles.best_sellers_box}`}>
                            <div className={`${styles.best_sellers_content}`}>
                              <div className={`${styles.best_sellers_product}`}>
                                <img src={hair1.src} alt="" />
                              </div>
                              <p className={`${styles.para} para`}>
                                Amla, Aritha & Shikakai Shampoo
                              </p>
                              <p className={`${styles.price_txt} para`}>
                                ₹99.00
                              </p>
                              <div
                                className={`${styles.btn_section} btn_section`}
                              >
                                <a
                                  className={`${styles} btn_txt`}
                                  href="https://www.amazon.in/CHARM-GLOW-Aritha-Shikakai-Shampoo/dp/B08L5B8L7H/ref=sr_1_1_sspa?keywords=charm%2B%26%2Bglow%2Bshampoo&qid=1660299190&sprefix=charm%2B%26%2Bglow%2B%2Caps%2C250&sr=8-1-spons&smid=A3074GI1666KH5&spLa=ZW5jcnlwdGVkUXVhbGlmaWVyPUE3NlkxQ0UzSjRFVUcmZW5jcnlwdGVkSWQ9QTA4ODE5MjE0Vk9TTkZLRjk2RlYmZW5jcnlwdGVkQWRJZD1BMDk0MjM0ODM5Qk41NlRMQ0FPU0Emd2lkZ2V0TmFtZT1zcF9hdGYmYWN0aW9uPWNsaWNrUmVkaXJlY3QmZG9Ob3RMb2dDbGljaz10cnVl&th=1"
                                  target="_blank"
                                >
                                  BUY NOW
                                </a>
                              </div>
                            </div>
                          </div>

                          <div className={`${styles.best_sellers_box}`}>
                            <div className={`${styles.best_sellers_content}`}>
                              <div className={`${styles.best_sellers_product}`}>
                                <img src={hair2.src} alt="" />
                              </div>
                              <p className={`${styles.para} para`}>
                                Amla, Aritha & Shikakai Shampoo
                              </p>
                              <p className={`${styles.price_txt} para`}>
                                ₹99.00
                              </p>
                              <div
                                className={`${styles.btn_section} btn_section`}
                              >
                                <a
                                  className={`${styles} btn_txt`}
                                  href="https://www.amazon.in/CHARM-GLOW-Aritha-Shikakai-Shampoo/dp/B08L5B8L7H/ref=sr_1_1_sspa?keywords=charm%2B%26%2Bglow%2Bshampoo&qid=1660299190&sprefix=charm%2B%26%2Bglow%2B%2Caps%2C250&sr=8-1-spons&smid=A3074GI1666KH5&spLa=ZW5jcnlwdGVkUXVhbGlmaWVyPUE3NlkxQ0UzSjRFVUcmZW5jcnlwdGVkSWQ9QTA4ODE5MjE0Vk9TTkZLRjk2RlYmZW5jcnlwdGVkQWRJZD1BMDk0MjM0ODM5Qk41NlRMQ0FPU0Emd2lkZ2V0TmFtZT1zcF9hdGYmYWN0aW9uPWNsaWNrUmVkaXJlY3QmZG9Ob3RMb2dDbGljaz10cnVl&th=1"
                                  target="_blank"
                                >
                                  BUY NOW
                                </a>
                              </div>
                            </div>
                          </div>

                          <div className={`${styles.best_sellers_box}`}>
                            <div className={`${styles.best_sellers_content}`}>
                              <div className={`${styles.best_sellers_product}`}>
                                <img src={hair3.src} alt="" />
                              </div>
                              <p className={`${styles.para} para`}>
                                Amla, Aritha & Shikakai Shampoo
                              </p>
                              <p className={`${styles.price_txt} para`}>
                                ₹99.00
                              </p>
                              <div
                                className={`${styles.btn_section} btn_section`}
                              >
                                <a
                                  className={`${styles} btn_txt`}
                                  href="https://www.amazon.in/CHARM-GLOW-Aritha-Shikakai-Shampoo/dp/B08L5B8L7H/ref=sr_1_1_sspa?keywords=charm%2B%26%2Bglow%2Bshampoo&qid=1660299190&sprefix=charm%2B%26%2Bglow%2B%2Caps%2C250&sr=8-1-spons&smid=A3074GI1666KH5&spLa=ZW5jcnlwdGVkUXVhbGlmaWVyPUE3NlkxQ0UzSjRFVUcmZW5jcnlwdGVkSWQ9QTA4ODE5MjE0Vk9TTkZLRjk2RlYmZW5jcnlwdGVkQWRJZD1BMDk0MjM0ODM5Qk41NlRMQ0FPU0Emd2lkZ2V0TmFtZT1zcF9hdGYmYWN0aW9uPWNsaWNrUmVkaXJlY3QmZG9Ob3RMb2dDbGljaz10cnVl&th=1"
                                  target="_blank"
                                >
                                  BUY NOW
                                </a>
                              </div>
                            </div>
                          </div>

                          <div className={`${styles.best_sellers_box}`}>
                            <div className={`${styles.best_sellers_content}`}>
                              <div className={`${styles.best_sellers_product}`}>
                                <img src={hair4.src} alt="" />
                              </div>
                              <p className={`${styles.para} para`}>
                                Amla, Aritha & Shikakai Shampoo
                              </p>
                              <p className={`${styles.price_txt} para`}>
                                ₹99.00
                              </p>
                              <div
                                className={`${styles.btn_section} btn_section`}
                              >
                                <a
                                  className={`${styles} btn_txt`}
                                  href="https://www.amazon.in/CHARM-GLOW-Aritha-Shikakai-Shampoo/dp/B08L5B8L7H/ref=sr_1_1_sspa?keywords=charm%2B%26%2Bglow%2Bshampoo&qid=1660299190&sprefix=charm%2B%26%2Bglow%2B%2Caps%2C250&sr=8-1-spons&smid=A3074GI1666KH5&spLa=ZW5jcnlwdGVkUXVhbGlmaWVyPUE3NlkxQ0UzSjRFVUcmZW5jcnlwdGVkSWQ9QTA4ODE5MjE0Vk9TTkZLRjk2RlYmZW5jcnlwdGVkQWRJZD1BMDk0MjM0ODM5Qk41NlRMQ0FPU0Emd2lkZ2V0TmFtZT1zcF9hdGYmYWN0aW9uPWNsaWNrUmVkaXJlY3QmZG9Ob3RMb2dDbGljaz10cnVl&th=1"
                                  target="_blank"
                                >
                                  BUY NOW
                                </a>
                              </div>
                            </div>
                          </div>
                        </Slider>
                      </div>
                    </div>
                  </div>
                </TabPanel>
                <TabPanel>
                  <div className={`${styles.tab_content}`}>
                    <div class="container">
                      <div className={`${styles.tab_description}`}>
                        <div
                          className={`${styles.tab_description_inside} d_f pb_100 pt_30`}
                        >
                          <div
                            className={`${styles.tab_description_flex} f_r_aj_center`}
                          >
                            <div
                              className={`${styles.tab_description_icon} f_r_aj_center`}
                            >
                              <img src={tabicon1.src} alt="" />
                            </div>
                            <div
                              className={`${styles.tab_description_content} f_r_aj_center`}
                            >
                              <p className={`${styles.para} para`} class="">
                                Adds Lusture
                                <br />
                                and Strength
                              </p>
                            </div>
                          </div>
                          <div
                            className={`${styles.tab_description_flex} f_r_aj_center`}
                          >
                            <div
                              className={`${styles.tab_description_icon} f_r_aj_center`}
                            >
                              <img src={tabicon2.src} alt="" />
                            </div>
                            <div
                              className={`${styles.tab_description_content} f_r_aj_center`}
                            >
                              <p className={`${styles.para} para`} class="">
                                Reduces
                                <br />
                                Build-ups
                              </p>
                            </div>
                          </div>

                          <div
                            className={`${styles.tab_description_flex} f_r_aj_center`}
                          >
                            <div
                              className={`${styles.tab_description_icon} f_r_aj_center`}
                            >
                              <img src={tabicon3.src} alt="" />
                            </div>
                            <div
                              className={`${styles.tab_description_content} f_r_aj_center`}
                            >
                              <p className={`${styles.para} para`} class="">
                                Controls
                                <br />
                                Dandruff
                              </p>
                            </div>
                          </div>

                          <div
                            className={`${styles.tab_description_flex} f_r_aj_center`}
                          >
                            <div
                              className={`${styles.tab_description_icon} f_r_aj_center`}
                            >
                              <img src={tabicon4.src} alt="" />
                            </div>
                            <div
                              className={`${styles.tab_description_content} f_r_aj_center`}
                            >
                              <p className={`${styles.para} para`} class="">
                                Reduces
                                <br />
                                Split Ends
                              </p>
                            </div>
                          </div>

                          <div
                            className={`${styles.tab_description_flex} f_r_aj_center`}
                          >
                            <div
                              className={`${styles.tab_description_icon} f_r_aj_center`}
                            >
                              <img src={tabicon5.src} alt="" />
                            </div>
                            <div
                              className={`${styles.tab_description_content} f_r_aj_center`}
                            >
                              <p className={`${styles.para} para`} class="">
                                Paraben
                                <br />
                                Free
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className={`${styles.best_sellers_flex}`}>
                        <Slider {...product_slider1}>
                          <div className={`${styles.best_sellers_box}`}>
                            <div className={`${styles.best_sellers_content}`}>
                              <div className={`${styles.best_sellers_product}`}>
                                <img src={hair1.src} alt="" />
                              </div>
                              <p className={`${styles.para} para`}>
                                Amla, Aritha & Shikakai Shampoo
                              </p>
                              <p className={`${styles.price_txt} para`}>
                                ₹99.00
                              </p>
                              <div
                                className={`${styles.btn_section} btn_section`}
                              >
                                <a
                                  className={`${styles} btn_txt`}
                                  href="https://www.amazon.in/CHARM-GLOW-Aritha-Shikakai-Shampoo/dp/B08L5B8L7H/ref=sr_1_1_sspa?keywords=charm%2B%26%2Bglow%2Bshampoo&qid=1660299190&sprefix=charm%2B%26%2Bglow%2B%2Caps%2C250&sr=8-1-spons&smid=A3074GI1666KH5&spLa=ZW5jcnlwdGVkUXVhbGlmaWVyPUE3NlkxQ0UzSjRFVUcmZW5jcnlwdGVkSWQ9QTA4ODE5MjE0Vk9TTkZLRjk2RlYmZW5jcnlwdGVkQWRJZD1BMDk0MjM0ODM5Qk41NlRMQ0FPU0Emd2lkZ2V0TmFtZT1zcF9hdGYmYWN0aW9uPWNsaWNrUmVkaXJlY3QmZG9Ob3RMb2dDbGljaz10cnVl&th=1"
                                  target="_blank"
                                >
                                  BUY NOW
                                </a>
                              </div>
                            </div>
                          </div>

                          <div className={`${styles.best_sellers_box}`}>
                            <div className={`${styles.best_sellers_content}`}>
                              <div className={`${styles.best_sellers_product}`}>
                                <img src={hair4.src} alt="" />
                              </div>
                              <p className={`${styles.para} para`}>
                                Amla, Aritha & Shikakai Shampoo
                              </p>
                              <p className={`${styles.price_txt} para`}>
                                ₹99.00
                              </p>
                              <div
                                className={`${styles.btn_section} btn_section`}
                              >
                                <a
                                  className={`${styles} btn_txt`}
                                  href="https://www.amazon.in/CHARM-GLOW-Aritha-Shikakai-Shampoo/dp/B08L5B8L7H/ref=sr_1_1_sspa?keywords=charm%2B%26%2Bglow%2Bshampoo&qid=1660299190&sprefix=charm%2B%26%2Bglow%2B%2Caps%2C250&sr=8-1-spons&smid=A3074GI1666KH5&spLa=ZW5jcnlwdGVkUXVhbGlmaWVyPUE3NlkxQ0UzSjRFVUcmZW5jcnlwdGVkSWQ9QTA4ODE5MjE0Vk9TTkZLRjk2RlYmZW5jcnlwdGVkQWRJZD1BMDk0MjM0ODM5Qk41NlRMQ0FPU0Emd2lkZ2V0TmFtZT1zcF9hdGYmYWN0aW9uPWNsaWNrUmVkaXJlY3QmZG9Ob3RMb2dDbGljaz10cnVl&th=1"
                                  target="_blank"
                                >
                                  BUY NOW
                                </a>
                              </div>
                            </div>
                          </div>
                        </Slider>
                      </div>
                    </div>
                  </div>
                </TabPanel>
              </Tabs>
            </div>
          </div>
        </section>

        <section className={`${styles.testimonials} ptb_100`}>
          <div className="container">
            <div className={`${styles.testimonials_title}`}>
              <h2 className={`${styles.heading_section1} heading_section`}>
                Don't believe us?
              </h2>
              <p className={`${styles.para1} para`}>
                Listen in straight from the users
              </p>
            </div>
            <div className={`${styles.customers_say_main} d_flex`}>
              <Slider
                {...settings1}
                asNavFor={nav2 || nav3}
                ref={(slider1) => setNav1(slider1)}
                slidesToShow={1}
                dots={false}
                className={`${styles.slider} ${styles.slider_content} ${styles.customers_slider_1}`}
              >
                <div className={`${styles.slider_content_item}`}>
                  <img src={coments_star.src} />
                  <p className={`${styles.para1} para f_w_m`}>
                    <img
                      className={`${styles.c_quate_one}`}
                      src={quate_one.src}
                    />
                    Signature TBH has excellent aroma. The fragrance also lasts
                    for a long time. This deodorant is ideal for wearing at
                    work, at daytime functions, and with casual outfits.
                    <img
                      className={`${styles.c_quate_two}`}
                      src={quate_one.src}
                    />
                  </p>
                  <p className={` ${styles.person_name} para f_w_m`}>
                    Anuj Kumar Saroj
                  </p>
                  <p className={` ${styles.person_degination} para f_w_m`}>
                    Textile Designer
                  </p>
                </div>
                <div className={`${styles.slider_content_item}`}>
                  <img src={coments_star.src} />
                  <p className={`${styles.para1} para f_w_m`}>
                    <img
                      className={`${styles.c_quate_one}`}
                      src={quate_one.src}
                    />
                    Superb Smell!!! The best part of Signature Yolo is that it
                    instantly uplifts my mood. I'm totally in love with this
                    perfume. Comes at a very affordable price. I'm definitely
                    gonna buy it again!
                    <img
                      className={`${styles.c_quate_two}`}
                      src={quate_one.src}
                    />
                  </p>
                  <p className={` ${styles.person_name} para f_w_m`}>
                    Nirav Patva
                  </p>
                  <p className={` ${styles.person_degination} para f_w_m`}>
                    Accounts Manager
                  </p>
                </div>
                <div className={`${styles.slider_content_item}`}>
                  <img src={coments_star.src} />
                  <p className={`${styles.para1} para f_w_m`}>
                    <img
                      className={`${styles.c_quate_one}`}
                      src={quate_one.src}
                    />
                    I am super impressed with Signature Cocktail. Classic &
                    energetic, the fragrance is a pleasure to wear. This perfume
                    keeps me feeling refreshed all day long.
                    <img
                      className={`${styles.c_quate_two}`}
                      src={quate_one.src}
                    />
                  </p>
                  <p className={` ${styles.person_name} para f_w_m`}>
                    Lalit Chauhan
                  </p>
                  <p className={` ${styles.person_degination} para f_w_m`}>
                    Businessman
                  </p>
                </div>
                <div className={`${styles.slider_content_item}`}>
                  <img src={coments_star.src} />
                  <p className={`${styles.para1} para f_w_m`}>
                    <img
                      className={`${styles.c_quate_one}`}
                      src={quate_one.src}
                    />
                    Having tried almost every popular room freshener,
                    Signature's product is the only one I would recommend to
                    anyone as a pocket-friendly, great smelling and long-lasting
                    alternative.
                    <img
                      className={`${styles.c_quate_two}`}
                      src={quate_one.src}
                    />
                  </p>
                  <p className={` ${styles.person_name} para f_w_m`}>
                    Vishal Bhogayta
                  </p>
                  <p className={` ${styles.person_degination} para f_w_m`}>
                    Sales Manager
                  </p>
                </div>
                <div className={`${styles.slider_content_item}`}>
                  <img src={coments_star.src} />
                  <p className={`${styles.para1} para f_w_m`}>
                    <img
                      className={`${styles.c_quate_one}`}
                      src={quate_one.src}
                    />
                    I was blown away by the scent of the Signature Amour
                    perfume. I found it suitable for my skin. Its scent
                    refreshes the mind and lasts for hours. Everyone around me
                    praised the smell. Thank you, Signature, for enhancing my
                    charm and persona.
                    <img
                      className={`${styles.c_quate_two}`}
                      src={quate_one.src}
                    />
                  </p>
                  <p className={` ${styles.person_name} para f_w_m`}>
                    Darshita Sanghrajka
                  </p>
                  <p className={` ${styles.person_degination} para f_w_m`}>
                    Founder
                  </p>
                </div>
              </Slider>
              ​
              <Slider
                {...settings2}
                asNavFor={nav3}
                ref={(slider2) => setNav2(slider2)}
                slidesToShow={1}
                dots={false}
                className={`${styles.slider} ${styles.slider_img} ${styles.customers_slider_2}`}
              >
                <div className={`${styles.slider_img_item}`}>
                  <div className={`${styles.slider_img_item_content}`}>
                    <img
                      className={`${styles.img_radius}`}
                      src={Anuj_Kumar_Saroj.src}
                    />
                  </div>
                </div>
                <div className={`${styles.slider_img_item}`}>
                  <div className={`${styles.slider_img_item_content}`}>
                    <img
                      className={`${styles.img_radius}`}
                      src={Anuj_Kumar_Saroj.src}
                    />
                  </div>
                </div>
                <div className={`${styles.slider_img_item}`}>
                  <div className={`${styles.slider_img_item_content}`}>
                    <img
                      className={`${styles.img_radius}`}
                      src={Anuj_Kumar_Saroj.src}
                    />
                  </div>
                </div>
                <div className={`${styles.slider_img_item}`}>
                  <div className={`${styles.slider_img_item_content}`}>
                    <img
                      className={`${styles.img_radius}`}
                      src={Anuj_Kumar_Saroj.src}
                    />
                  </div>
                </div>
                <div className={`${styles.slider_img_item}`}>
                  <div className={`${styles.slider_img_item_content}`}>
                    <img
                      className={`${styles.img_radius}`}
                      src={Anuj_Kumar_Saroj.src}
                    />
                  </div>
                </div>
              </Slider>
              <Slider
                {...settings3}
                asNavFor={nav2}
                ref={(slider3) => setNav3(slider3)}
                slidesToShow={2}
                dots={false}
                className={`${styles.slider} ${styles.slider_img} ${styles.customers_slider_3}`}
              >
                <div className={`${styles.slider_img_item}`}>
                  <div className={`${styles.slider_img_item_content}`}>
                    <img
                      className={`${styles.img_radius}`}
                      src={Anuj_Kumar_Saroj.src}
                    />
                    <p className={`para ${styles.person_name} f_w_m`}>
                      Nirav Patva
                    </p>
                    <p className={`para ${styles.person_degination} f_w_m`}>
                      Accounts Manager
                    </p>
                  </div>
                </div>
                <div className={`${styles.slider_img_item}`}>
                  <div className={`${styles.slider_img_item_content}`}>
                    <img
                      className={`${styles.img_radius}`}
                      src={Anuj_Kumar_Saroj.src}
                    />
                    <p className={`para ${styles.person_name} f_w_m`}>
                      Nirav Patva
                    </p>
                    <p className={`para ${styles.person_degination} f_w_m`}>
                      Accounts Manager
                    </p>
                  </div>
                </div>
                <div className={`${styles.slider_img_item}`}>
                  <div className={`${styles.slider_img_item_content}`}>
                    <img
                      className={`${styles.img_radius}`}
                      src={Anuj_Kumar_Saroj.src}
                    />
                    <p className={`para ${styles.person_name} f_w_m`}>
                      Nirav Patva
                    </p>
                    <p className={`para ${styles.person_degination} f_w_m`}>
                      Accounts Manager
                    </p>
                  </div>
                </div>
                <div className={`${styles.slider_img_item}`}>
                  <div className={`${styles.slider_img_item_content}`}>
                    <img
                      className={`${styles.img_radius}`}
                      src={Anuj_Kumar_Saroj.src}
                    />
                    <p className={`para ${styles.person_name} f_w_m`}>
                      Nirav Patva
                    </p>
                    <p className={`para ${styles.person_degination} f_w_m`}>
                      Accounts Manager
                    </p>
                  </div>
                </div>
                <div className={`${styles.slider_img_item}`}>
                  <div className={`${styles.slider_img_item_content}`}>
                    <img
                      className={`${styles.img_radius}`}
                      src={Anuj_Kumar_Saroj.src}
                    />
                    <p className={`para ${styles.person_name} f_w_m`}>
                      Nirav Patva
                    </p>
                    <p className={`para ${styles.person_degination} f_w_m`}>
                      Accounts Manager
                    </p>
                  </div>
                </div>
              </Slider>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}