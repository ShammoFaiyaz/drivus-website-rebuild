import { Alert, Modal, message } from "antd";
import Link from "next/link";
import Image from "next/image";
import email from "../public/mail.png";
import { useRouter } from "next/router";
import React, { useState } from "react";
import dlogo from "../public/drivus-03.png";
import styles from "../styles/SignUp.module.css";
import { AiOutlineCloseCircle } from "react-icons/ai";

import { findCustomerByEmail, sendEmail } from "../service/lead.service";
import { Loading } from "@nextui-org/react";

const menu = [
  { title: "Home", path: "/" },
  { title: "About us", path: "/about-us" },
  { title: "How it works", path: "/how-it-work" },
  { title: "Our Plans", path: "/our-plan" },
  { title: "FAQ", path: "/faqs" },
  { title: "Contact us", path: "/contact-us" },
];

const Navbar = () => {
  const [data, setData] = useState({});
  const [show, setShow] = useState({});
  const [loading, setLoading] = useState({});
  const [joined, setJoined] = useState(false);
  const [notjoined, setNotjoined] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const router = useRouter();

  const handleChange = ({ target }) => {
    setData({ ...data, [target.name]: target.value });
  };

  const handleShow = (type) => {
    setShow({ ...show, [type]: true });
  };

  const handleClose = () => {
    setData({});
    setShow({});
    setJoined(false);
    setNotjoined(false);
    setSubmitted(false);
  };

  const handleTryAgain = () => {
    setData({});
    // setShow({});
    setJoined(false);
    setNotjoined(false);
    setSubmitted(false);
  };

  const findCustomer = async (e, email) => {
    e.preventDefault();
    // return console.log(email);
    setLoading({ findCustomer: true });
    try {
      const {
        data: { data: result },
      } = await findCustomerByEmail(email);
      // return console.log("found", result);
      if (result) {
        const { email, firstName, lastName } = result;
        setData({ email, firstName, lastName });
        setJoined(true);
      } else {
        setData({ email });
        setNotjoined(true);
      }
      setLoading({});
    } catch (err) {
      setLoading({});
      message.error("Something wrong!!");
      console.log(err.response?.data);
    }
  };

  const handleSubmit = async (e) => {
    if (e) e.preventDefault();
    const { email, firstName, lastName } = data;
    setLoading({ submit: true });
    try {
      await sendEmail({ email, firstName, lastName });
      setSubmitted(true);
      setLoading({});
    } catch (err) {
      setLoading({});
      message.error("Something wrong!!");
      console.log(err.response.data);
    }
  };

  return (
    <React.Fragment>
      <nav
        className="navbar navbar-expand-lg sticky-top navbar-light bg-white p-0 shadow"
        style={{ zIndex: 1000 }}
      >
        <div className="container">
          <Link href="/">
            <a className="navbar-brand customsss">
              <Image src={dlogo} height={60} width={150} alt="logo" />
            </a>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav ms-auto">
              <ul className="navbar-nav ps-md-5">
                {menu.map((item, index) => {
                  return (
                    <li className="nav-item pe-3 nav link" key={index}>
                      <Link href={item.path}>
                        <a
                          style={{ textDecoration: "none" }}
                          className={`cursor-pointer ${
                            router.pathname === item.path ? `active` : ""
                          }`}
                        >
                          {item.title}
                        </a>
                      </Link>
                    </li>
                  );
                })}

                <li className="nav-item">
                  <span
                    className="btn-primary-outline px-4 py-1"
                    onClick={() => handleShow("enquire")}
                  >
                    Join Us
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>

      <Modal
        width="670px"
        centered
        footer={null}
        visible={show.enquire}
        onCancel={handleClose}
        bodyStyle={{ padding: 0 }}
        style={{ borderRadius: 40 }}
        closeIcon={
          <AiOutlineCloseCircle color="#DAB6EB" size={35} className="me-5" />
        }
      >
        <div className={`${styles.back} p-3 px-4 px-md-5`}>
          <div className="d-flex container-fluid justify-content-center p-4 px-0 px-md-5">
            <div
              className={`${styles.wrapper} px-5 text-center p-5`}
              style={{ width: "670px" }}
            >
              {submitted ? (
                <div className="text-center">
                  <Image
                    src={email}
                    height={140}
                    width={140}
                    alt="Send mail image"
                  />
                  <div className="text-white">
                    Hi {data.firstName + " " + data.lastName},
                  </div>
                  <h3 className="text-white">Check Your Email</h3>
                  <h6 className="my-3 text-white ">
                    We have sent email verification instructions to your email.
                    Check {data.email}{" "}
                  </h6>

                  <Link href={`https://www.${data.email.split("@").pop()}`}>
                    <a target="_blank">
                      <button className="modal-button">Check Mail</button>
                    </a>
                  </Link>

                  <p style={{ fontSize: 14 }} className="text-white mt-3">
                    Have not you receive the email yet? Please check your spam
                    folder, or{" "}
                    <span
                      style={{
                        color: "#E7B403",
                        textDecoration: "underline",
                        cursor: "pointer",
                      }}
                    >
                      <a onClick={handleTryAgain}>try again.</a>
                    </span>
                  </p>
                </div>
              ) : joined ? (
                <>
                  <h1 className="text-white" style={{ fontSize: 33 }}>
                    Already Joined!
                  </h1>
                  <p className="text-white mb-3">
                    Continue your journey with drivus.
                  </p>
                  <div className="text-start my-3">
                    <div className="text-white">Email: {data.email}</div>
                    <div className="text-white">
                      First name: {data.firstName}
                    </div>
                    <div className="text-white">Last name: {data.lastName}</div>
                  </div>
                  <button onClick={handleSubmit} className="modal-button my-3">
                    {loading.submit ? (
                      <Loading type="spinner" color="white" className="mx-1" />
                    ) : (
                      "Verify email & continue application"
                    )}
                  </button>

                  <p style={{ fontSize: 14 }} className="text-white mt-3">
                    Have not you verify the email yet? Please check your spam
                    folder, or{" "}
                    <span
                      style={{
                        color: "#E7B403",
                        textDecoration: "underline",
                        cursor: "pointer",
                      }}
                    >
                      <a onClick={handleTryAgain}>try again.</a>
                    </span>
                  </p>
                </>
              ) : notjoined ? (
                <>
                  <h1 className="text-white" style={{ fontSize: 33 }}>
                    Join Us
                  </h1>
                  <p className="text-white">
                    Continue with your name and explore drivus
                  </p>

                  <form onSubmit={handleSubmit}>
                    <input
                      required
                      type="email"
                      name="email"
                      value={data.email}
                      onChange={handleChange}
                      placeholder="Enter Email"
                      className="text-center w-75"
                      disabled
                    />
                    <input
                      required
                      type="text"
                      name="firstName"
                      value={data.firstName}
                      onChange={handleChange}
                      placeholder="Enter First Name"
                      className="mt-3 ps-2 modal-input"
                    />
                    <input
                      required
                      type="text"
                      name="lastName"
                      value={data.lastName}
                      onChange={handleChange}
                      placeholder="Enter Last Name"
                      className="mt-3 ps-2 modal-input"
                    />
                    <button type="submit" className="mt-3 modal-button">
                      {loading.submit ? (
                        <Loading
                          type="spinner"
                          color="white"
                          className="mx-1"
                        />
                      ) : (
                        "JOIN NOW"
                      )}
                    </button>
                  </form>

                  <p className="text-white mt-4" style={{ fontSize: 12 }}>
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
                  <p className="text-white" style={{ fontSize: 12 }}>
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
                </>
              ) : (
                <>
                  <h1 className="text-white mb-5" style={{ fontSize: 33 }}>
                    Hi,There <br /> Welcome to Drivus
                  </h1>

                  <form onSubmit={(e) => findCustomer(e, data.email)}>
                    <input
                      required
                      name="email"
                      type="email"
                      value={data.email}
                      onChange={handleChange}
                      placeholder="Enter Email"
                      className="mb-3 ps-2 modal-input"
                    />
                    <button
                      type="submit"
                      disabled={loading.findCustomer}
                      className="mb-3 modal-button"
                    >
                      {loading.findCustomer ? (
                        <Loading
                          type="spinner"
                          color="white"
                          className="mx-1"
                        />
                      ) : (
                        <span>CONTINUE</span>
                      )}
                    </button>
                  </form>

                  <p className="text-white my-3" style={{ fontSize: 12 }}>
                    By clicking "continue", you agree to our{" "}
                    <span
                      style={{
                        color: "#E7B403",
                        textDecoration: "underline",
                        cursor: "pointer",
                      }}
                    >
                      Terms and Conditions
                    </span>{" "}
                    and Privacy Policy. You understand that we will create an
                    account linked your email address.{" "}
                  </p>

                  <p className="text-white" style={{ fontSize: 12 }}>
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
                </>
              )}
            </div>
          </div>
        </div>
      </Modal>
    </React.Fragment>
  );
};

export default Navbar;
