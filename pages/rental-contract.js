import Image from "next/image";
import React, { useState } from "react";
import { Card } from "antd";
import { Swiper, SwiperSlide } from "swiper/react";
import suv1 from "../public/suv1.png";
import sedan1 from "../public/sedan1.png";
import coupe1 from "../public/coupe1.png";
import compactSuv1 from "../public/compactSuv1.png";
import car1 from "../public/carr.png";
import { BsGeoAlt, BsEnvelope, BsPhone } from "react-icons/bs";
import { Modal } from "antd";
import { AiOutlineCloseCircle } from "react-icons/ai";
import styles from "../styles/SignUp.module.css";
import Link from "next/link";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/autoplay";

import { Pagination, Navigation, Autoplay } from "swiper";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ClientSay from "./client-say";

const Our = () => {
  const [breakPoints] = useState([
    { width: 1, itemsToShow: 1, itemsToScroll: 1, showArrows: false },
    { width: 550, itemsToShow: 2, itemsToScroll: 1, pagination: false },
    { width: 850, itemsToShow: 3, itemsToScroll: 1, pagination: false },
    { width: 1150, itemsToShow: 4, itemsToScroll: 1, pagination: false },
    { width: 1450, itemsToShow: 5, itemsToScroll: 1, pagination: false },
    { width: 1750, itemsToShow: 6, itemsToScroll: 1, pagination: false },
  ]);

  const [data, setData] = useState({});
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [submited, setSubmited] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleChange = ({ target }) => {
    setData({ ...data, [target.name]: target.value });
  };

  const handleCancel = () => {
    setData({});
    setIsModalVisible(false);
  };

  const handleSubmit = async () => {
    const newData = { ...data };

    try {
      // await sendEmail(newData);
      setSubmited(true);
    } catch (err) {
      if (err?.response.data) {
        console.log(err);
      }
    }
  };

  const handleReset = () => {
    setSubmited(false);
    setData({});
  };

  return (
    <div className="bg-light">
      {/* <Header /> */}
      <Navbar />

      <div className="container my-5 pb-0 pt-3 pb-md-5">
        <div className="row">
          <div className="col-md-5">
            <h2 className="fw-bold" style={{ color: "#8B37B3" }}>
              Looking for ultimate flexibility?
            </h2>
            <h2 className="fw-bold" style={{ color: "#272561" }}>
              Get statred with weekly subscriptions that meet your needs
            </h2>
            <p className="mt-4" style={{ color: "#272561", fontSize: 17 }}>
              We provide a new model, five-star ANCAP ? rated car with all the
              essentials, so you can get on the road fast. Quality cars. Simple
              solutions. Low commitment. If your car breaks down, we will sort
              it out. We have got your back with a flexible plan to fuel your
              career.
            </p>
          </div>
          <div className="col-md-1"></div>
          <div className="col-md-6">
            <Image src={car1} alt="car" height={1000} />
          </div>
        </div>

        <button className="btn-primary mt-4 mt-md-0">Enquire Today</button>
        <button className="btn-primary-outline ms-3 mt-4 mt-md-0">
          Compare Our Plans
        </button>
      </div>

      <div className="bg-white pt-4">
        <div className=" p-3">
          <div className="pb-3">
            <div className="container">
              <div className="fs-1 fw-bold" style={{ color: "#272561" }}>
                Our Rental Cars!
              </div>
              <p className="py-3" style={{ fontSize: 17, color: "#25225B" }}>
                Lorem ipsum is simply dummy text of the printing andtypesetting
                industry.Lorem ipsum has been the isdustrys standard dummy text
                ever since the 1500s, when an unknown printer took a galley of
                type and scrambled it to make a type specimen book.
              </p>
            </div>

            <section id="pricing" className="pricing py-0">
              <Swiper
                // slidesPerView={1}
                spaceBetween={18}
                pagination={{
                  clickable: true,
                }}
                className="mySwiper px-2"
                // initialSlide="3"
                centeredSlides={true}
                loop={true}
                // loopedSlides={1}
                autoplay={{
                  delay: 5000,
                  disableOnInteraction: false,
                }}
                modules={[Pagination, Navigation, Autoplay]}
                breakpoints={{
                  320: {
                    slidesPerView: 1,
                    spaceBetween: 20,
                  },
                  // when window width is >= 480px
                  480: {
                    slidesPerView: 1,
                    spaceBetween: 30,
                  },
                  // when window width is >= 640px
                  640: {
                    slidesPerView: 2,
                    spaceBetween: 40,
                  },
                  850: {
                    slidesPerView: 3,
                    spaceBetween: 40,
                  },
                  1200: {
                    slidesPerView: 5,
                    spaceBetween: 40,
                  },
                }}
                style={{ paddingBottom: "50px", paddingTop: "30px" }}
              >
                <div
                  className="col-lg-3 col-md-6"
                  data-aos="zoom-in"
                  data-aos-delay="100"
                >
                  <SwiperSlide key={"1"}>
                    {({ isActive }) => (
                      <div className={isActive ? "box boxactive" : "box"}>
                        <h3 style={{ color: "#07d5c0" }}>Suv</h3>
                        <div className="price">
                          <sup>$</sup>450<span> / mo</span>
                        </div>
                        <Image src={suv1} className="img-fluid" alt="car" />
                        <ul>
                          <li>Aida dere</li>
                          <li>Nec feugiat nisl</li>
                          <li>Nulla at volutpat dola</li>
                          <li className="na">Pharetra massa</li>
                          <li className="na">Massa ultricies mi</li>
                        </ul>
                        <a
                          href="#"
                          className="btn-buy"
                          style={{ textDecoration: "none" }}
                        >
                          See more
                        </a>
                      </div>
                    )}
                  </SwiperSlide>
                </div>

                <div
                  className="col-lg-3 col-md-6"
                  data-aos="zoom-in"
                  data-aos-delay="200"
                >
                  <SwiperSlide key={"2"}>
                    {({ isActive }) => (
                      <div className={isActive ? "box boxactive" : "box"}>
                        <h3 style={{ color: "#65c600" }}>Sedan</h3>
                        <div className="price">
                          <sup>$</sup>375<span> / mo</span>
                        </div>
                        <Image src={sedan1} className="img-fluid" alt="car2" />
                        <ul>
                          <li>Aida dere</li>
                          <li>Nec feugiat nisl</li>
                          <li>Nulla at volutpat dola</li>
                          <li>Pharetra massa</li>
                          <li className="na">Massa ultricies mi</li>
                        </ul>
                        <a
                          href="#"
                          className="btn-buy"
                          style={{ textDecoration: "none" }}
                        >
                          See more
                        </a>
                      </div>
                    )}
                  </SwiperSlide>
                </div>

                <div
                  className="col-lg-3 col-md-6"
                  data-aos="zoom-in"
                  data-aos-delay="300"
                >
                  <SwiperSlide key={"3"}>
                    {({ isActive }) => (
                      <div className={isActive ? "box boxactive" : "box"}>
                        <h3 style={{ color: "#ff901c" }}>Cupe</h3>
                        <div className="price">
                          <sup>$</sup>400<span> / mo</span>
                        </div>
                        <Image src={coupe1} className="img-fluid" alt="car3" />
                        <ul>
                          <li>Aida dere</li>
                          <li>Nec feugiat nisl</li>
                          <li>Nulla at volutpat dola</li>
                          <li>Pharetra massa</li>
                          <li>Massa ultricies mi</li>
                        </ul>
                        <a
                          href="#"
                          className="btn-buy"
                          style={{ textDecoration: "none" }}
                        >
                          See more
                        </a>
                      </div>
                    )}
                  </SwiperSlide>
                </div>

                <div
                  className="col-lg-3 col-md-6"
                  data-aos="zoom-in"
                  data-aos-delay="400"
                >
                  <SwiperSlide key={"4"}>
                    {({ isActive }) => (
                      <div className={isActive ? "box boxactive" : "box"}>
                        <h3 style={{ color: "#ff0071" }}>Compact Sedan</h3>
                        <div className="price">
                          <sup>$</sup>350<span> / mo</span>
                        </div>
                        <Image
                          src={compactSuv1}
                          className="img-fluid"
                          alt="car4"
                        />
                        <ul>
                          <li>Aida dere</li>
                          <li>Nec feugiat nisl</li>
                          <li>Nulla at volutpat dola</li>
                          <li>Pharetra massa</li>
                          <li>Massa ultricies mi</li>
                        </ul>
                        <a
                          href="#"
                          className="btn-buy"
                          style={{ textDecoration: "none" }}
                        >
                          See more
                        </a>
                      </div>
                    )}
                  </SwiperSlide>
                </div>

                <div
                  className="col-lg-3 col-md-6"
                  data-aos="zoom-in"
                  data-aos-delay="400"
                >
                  <SwiperSlide key={"5"}>
                    {({ isActive }) => (
                      <div className={isActive ? "box boxactive" : "box"}>
                        <h3 style={{ color: "#ff0071" }}>Compact Sedan</h3>
                        <div className="price">
                          <sup>$</sup>350<span> / mo</span>
                        </div>
                        <Image
                          src={compactSuv1}
                          className="img-fluid"
                          alt="car6"
                        />
                        <ul>
                          <li>Aida dere</li>
                          <li>Nec feugiat nisl</li>
                          <li>Nulla at volutpat dola</li>
                          <li>Pharetra massa</li>
                          <li>Massa ultricies mi</li>
                        </ul>
                        <a
                          href="#"
                          className="btn-buy"
                          style={{ textDecoration: "none" }}
                        >
                          See more
                        </a>
                      </div>
                    )}
                  </SwiperSlide>
                </div>

                <div
                  className="col-lg-3 col-md-6"
                  data-aos="zoom-in"
                  data-aos-delay="400"
                >
                  <SwiperSlide key={"6"}>
                    {({ isActive }) => (
                      <div className={isActive ? "box boxactive" : "box"}>
                        <h3 style={{ color: "#ff0071" }}>Compact Sedan</h3>
                        <div className="price">
                          <sup>$</sup>350<span> / mo</span>
                        </div>
                        <Image
                          src={compactSuv1}
                          className="img-fluid"
                          alt="car9"
                        />
                        <ul>
                          <li>Aida dere</li>
                          <li>Nec feugiat nisl</li>
                          <li>Nulla at volutpat dola</li>
                          <li>Pharetra massa</li>
                          <li>Massa ultricies mi</li>
                        </ul>
                        <a
                          href="#"
                          className="btn-buy"
                          style={{ textDecoration: "none" }}
                        >
                          See more
                        </a>
                      </div>
                    )}
                  </SwiperSlide>
                </div>
              </Swiper>
            </section>
          </div>
        </div>
      </div>
      <ClientSay />
      <section id="contact" className="contact">
        <div className="container" data-aos="fade-up">
          <div className="section-title">
            <h2 className="fw-bold">Contact Us</h2>
            <p style={{ fontSize: 17 }}>Contact us to get started</p>
          </div>

          <div className="row">
            <div
              className="col-lg-5 d-flex align-items-stretch"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <div className="info">
                <div className="address">
                  <i>
                    <BsGeoAlt />
                  </i>
                  <h4>Location:</h4>
                  <p>56 Williamson Street Oran park NSW 2570</p>
                </div>

                <div className="email">
                  <i>
                    <BsEnvelope />
                  </i>
                  <h4>Email:</h4>
                  <p>info.drivus@gmail.com</p>
                </div>

                <div className="phone">
                  <i>
                    <BsPhone />
                  </i>
                  <h4>Call:</h4>
                  <p>0410567867, 0490887210</p>
                </div>

                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3307.8566707294053!2d150.7332831!3d-33.9962151!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b12f239fc2ec7b3%3A0x1661827db8dad810!2s56%20Williamson%20St%2C%20Oran%20Park%20NSW%202570%2C%20Australia!5e0!3m2!1sen!2sbd!4v1719727008192!5m2!1sen!2sbd"
                  frameBorder="0"
                  style={{ border: 0, width: "100%", height: 290 }}
                  allowFullScreen
                ></iframe>
              </div>
            </div>

            <div
              className="col-lg-7 mt-5 mt-lg-0 d-flex align-items-stretch"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <form
                action="forms/contact.php"
                method="post"
                role="form"
                className="php-email-form"
              >
                <div className="row">
                  <h4 className="text-center mb-4" style={{ color: "#272561" }}>
                    Send us a Message
                  </h4>
                  <div className="form-group col-md-6">
                    <label htmlFor="name">Your Name</label>
                    <input
                      type="text"
                      name="name"
                      className="form-control"
                      id="name"
                      placeholder="Your Name"
                      required
                    />
                  </div>
                  <div className="form-group col-md-6 mt-3 mt-md-0">
                    <label htmlFor="name">Your Email</label>
                    <input
                      type="email"
                      className="form-control"
                      name="email"
                      id="email"
                      placeholder="Your Email"
                      required
                    />
                  </div>
                </div>
                <div className="form-group mt-3">
                  <label htmlFor="name">Subject</label>
                  <input
                    type="text"
                    className="form-control"
                    name="subject"
                    id="subject"
                    placeholder="Subject"
                    required
                  />
                </div>
                <div className="form-group mt-3">
                  <label htmlFor="name">Message</label>
                  <textarea
                    className="form-control"
                    name="message"
                    rows="10"
                    required
                  ></textarea>
                </div>
                <div className="my-3">
                  <div className="loading">Loading</div>
                  <div className="error-message"></div>
                  <div className="sent-message">
                    Your message has been sent. Thank you!
                  </div>
                </div>
                <div className="text-center">
                  <span type="submit" className="btn-primary">
                    Send Message
                  </span>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
      <Footer />

      <Modal
        style={{ marginTop: "30px", borderRadius: 40 }}
        maskClosable={false}
        visible={isModalVisible}
        onCancel={handleCancel}
        footer={null}
        width="670px"
        bodyStyle={{ padding: 0 }}
        closeIcon={
          <AiOutlineCloseCircle color="#DAB6EB" size={35} className="me-5" />
        }
      >
        {submited ? (
          <div className={`${styles.back} p-3 px-4 px-md-5`}>
            <div className="d-flex container-fluid justify-content-center pt-5 px-0 px-md-5">
              <div className={`${styles.wrapper} px-5 text-center pt-5`}>
                <Image src={email} height={160} width={160} alt="email" />
                <h3 className=" text-white">Hi, Check Your Email</h3>
                <h6 className="mt-4 text-white ">
                  We have sent a email verify instructions to your email. Check{" "}
                  {data.email}
                </h6>
                <Link href="https://www.gmail.com">
                  <a target="_blank">
                    <button
                      className="mt-3"
                      style={{
                        backgroundColor: "#8D01FC",
                        color: "white",
                        fontSize: 19,
                        height: 45,
                        width: "100%",
                        borderRadius: 15,
                        border: "none",
                      }}
                      onClick={handleSubmit}
                    >
                      Check Mail
                    </button>
                  </a>
                </Link>

                <p style={{ fontSize: 14 }} className="text-white  mt-3">
                  Have not you receive the email yet? Please check your spam
                  folder, or{" "}
                  <span
                    style={{
                      color: "#E7B403",
                      textDecoration: "underline",
                      cursor: "pointer",
                    }}
                  >
                    <a onClick={handleReset}>try again.</a>
                  </span>
                </p>
              </div>
            </div>
          </div>
        ) : (
          <div className={`${styles.back} p-3 px-4 px-md-5`}>
            <div className="d-flex container-fluid justify-content-center pt-5 px-0 px-md-5">
              <div className={`${styles.wrapper} p-5`}>
                <h1 className="text-white" style={{ fontSize: 33 }}>
                  Hi,There
                </h1>
                <h1 className="text-white" style={{ fontSize: 33 }}>
                  Welcome
                </h1>

                <input
                  type="text"
                  className="mt-3 fw-bold ps-2 text-white"
                  autoComplete={false}
                  name="firstName"
                  value={data.firstName}
                  onChange={handleChange}
                  placeholder="First Name"
                  style={{
                    background: "transparent",
                    fontSize: 18,
                    height: 45,
                    width: "100%",
                    borderRadius: 15,
                    border: "2px solid gray",
                  }}
                />

                <input
                  type="text"
                  className="mt-3 fw-bold ps-2 text-white"
                  autoComplete={false}
                  name="lastName"
                  value={data.lastName}
                  onChange={handleChange}
                  placeholder="Last Name"
                  style={{
                    background: "transparent",
                    fontSize: 18,
                    height: 45,
                    width: "100%",
                    borderRadius: 15,
                    border: "2px solid gray",
                  }}
                />

                <input
                  type="email"
                  value={data.email}
                  onChange={handleChange}
                  autoComplete={false}
                  name="email"
                  className="mt-3 fw-bold ps-2 text-white"
                  placeholder="Email"
                  style={{
                    background: "transparent",
                    fontSize: 18,
                    height: 45,
                    width: "100%",
                    borderRadius: 15,
                    border: "2px solid gray",
                  }}
                />

                <button
                  className="mt-3"
                  style={{
                    backgroundColor: "#8D01FC",
                    color: "white",
                    fontSize: 20,
                    height: 45,
                    width: "100%",
                    borderRadius: 15,
                    border: "none",
                  }}
                  onClick={handleSubmit}
                >
                  JOIN NOW
                </button>

                <p className="text-white mt-5" style={{ fontSize: 12 }}>
                  By clicking Join,you to our{" "}
                  <span
                    style={{
                      color: "#E7B403",
                      textDecoration: "underline",
                      cursor: "pointer",
                    }}
                  >
                    Terms and Conditions
                  </span>{" "}
                  and Privacy Policy and understand that we will create an
                  account linked your emaiul address.{" "}
                </p>
                <p className="text-white mt-4" style={{ fontSize: 12 }}>
                  Personal information collaction{" "}
                  <span
                    style={{
                      color: "#E7B403",
                      textDecoration: "underline",
                      cursor: "pointer",
                    }}
                  >
                    Statement.
                  </span>
                </p>
              </div>
            </div>
          </div>
        )}
      </Modal>
    </div>
  );
};

export default Our;
