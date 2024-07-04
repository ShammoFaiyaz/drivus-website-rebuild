import { Alert, Modal } from "antd";
import Link from "next/link";
import Image from "next/image";
import email from "../public/mail.png";
import { useRouter } from "next/router";
import React, { useState } from "react";
import dlogo from "../public/drivus-03.png";
import styles from "../styles/SignUp.module.css";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { sendEmail } from "../service/lead.service";

const menu = [
  { title: "Home", path: "/" },
  { title: "About us", path: "/about-us" },
  { title: "How it works", path: "/how-it-work" },
  { title: "Our Plans", path: "/our-plan" },
  { title: "FAQ", path: "/faqs" },
  { title: "Contact", path: "/contact" },
];

const Navbar = () => {
  const [data, setData] = useState({});
  const [show, setShow] = useState({});
  const [errorMsg, setErrorMsg] = useState("");
  const [joined, setJoined] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [password, setPassword] = useState(false);

  const router = useRouter();

  const handleChange = ({ target }) => {
    setErrorMsg("");
    setData({ ...data, [target.name]: target.value });
  };

  const handleShow = (type) => {
    setShow({ ...show, [type]: true });
  };

  const handleClose = () => {
    setData({});
    setShow({});
    setErrorMsg("");
    setJoined(false);
    setPassword(false);
    setSubmitted(false);
  };

  const handleTryAgain = () => {
    setData({});
    setShow({});
    setErrorMsg("");
    setJoined(false);
    setPassword(false);
    setSubmitted(false);
  };

  const handleSubmit = async (e, type) => {
    e.preventDefault();

    const newData = { ...data };
    newData.type = type;
    // return console.log(newData);
    try {
      await sendEmail(newData);
      setSubmitted(true);
    } catch (err) {
      if (err.response?.data) {
        if (err.response.data.errorName === "ConflictException") {
          setJoined(true);
        }
      }
    }
  };

  const handleNext = async (e) => {
    e.preventDefault();
    const newData = { ...data };

    // return console.log(newData);

    try {
      // await findCustomerUser(newData);
      setPassword(true);
    } catch (err) {
      if (err?.response.data) {
        if (err.response.data.message === "Customer Not Found") {
          setErrorMsg(err.response.data.message);
        } else if (err.response.data.message === "Customer User Not Found") {
          setJoined(true);
        }
      }
    }
  };

  const handleSignIn = async (e, type) => {
    e.preventDefault();

    const newData = { ...data };
    newData.type = type;

    try {
      await sendEmail(newData);
      setSubmitted(true);
    } catch (err) {
      if (err?.response.data) {
        if (err.response.data.errorName === "ConflictException") {
          setJoined(true);
        }
      }
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
                  <button
                    type="button"
                    className="btn customs mt-1"
                    onClick={() => handleShow("enquire")}
                    style={{
                      fontSize: 14,
                      display: "inline-block",
                      padding: "6px 15px",
                      borderRadius: 3,
                      transition: "0.5s",
                      color: "#272561",
                      border: " 2px solid #8B37B3",
                      position: "relative",
                      textDecoration: "none",
                    }}
                  >
                    Join Us
                  </button>
                </li>

                {/* <li className="nav-item">
                  <a
                    className="appointment-btn scrollto mt-3 mt-md-2 mb-1 ms-4"
                    onClick={() => handleShow("signin")}
                    style={{
                      padding: "8px 24px",
                      borderRadius: 25,
                      textDecoration: "none",
                    }}
                  >
                    <span className="d-md-inline text-white">Sign In</span>
                  </a>
                </li> */}
              </ul>
            </div>
          </div>
        </div>
      </nav>

      <Modal
        width="670px"
        footer={null}
        maskClosable={false}
        visible={show.enquire}
        onCancel={handleClose}
        bodyStyle={{ padding: 0 }}
        style={{ marginTop: "30px", borderRadius: 40 }}
        closeIcon={
          <AiOutlineCloseCircle color="#DAB6EB" size={35} className="me-5" />
        }
      >
        <div className={`${styles.back} p-3 px-4 px-md-5`}>
          <div className="d-flex container-fluid justify-content-center pt-5 px-0 px-md-5">
            <div
              className={`${styles.wrapper} px-5 text-center pt-5`}
              style={{ width: "670px" }}
            >
              {submitted ? (
                <div className="text-center">
                  <Image src={email} height={160} width={160} />

                  <h3 className=" text-white">Hi, Check Your Email</h3>
                  <h6 className="mt-4 text-white ">
                    We have sent a email verify instructions to your email.
                    Check {data.email}
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
                <React.Fragment>
                  <h1 className="text-white" style={{ fontSize: 33 }}>
                    Already Joined!
                  </h1>
                  <p className="mt-4 text-white ">Please verify your email</p>
                  <p className="mt-4 text-white">{data.email}</p>
                  <button
                    onClick={(e) => handleSubmit(e, "verify")}
                    className="modal-button"
                  >
                    Verify Mail
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
                </React.Fragment>
              ) : (
                <React.Fragment>
                  <h1 className="text-white" style={{ fontSize: 33 }}>
                    Hi,There <br /> Welcome to Drivus
                  </h1>

                  <form onSubmit={(e) => handleSubmit(e, "join")}>
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

                    <input
                      required
                      type="email"
                      name="email"
                      value={data.email}
                      onChange={handleChange}
                      placeholder="Enter Email"
                      className="mt-3 ps-2 modal-input"
                    />

                    <button type="submit" className="mt-3 modal-button">
                      JOIN NOW
                    </button>
                  </form>

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
                </React.Fragment>
              )}
            </div>
          </div>
        </div>
      </Modal>

      <Modal
        width="670px"
        footer={null}
        maskClosable={false}
        visible={show.signin}
        onCancel={handleClose}
        bodyStyle={{ padding: 0 }}
        style={{ marginTop: "30px", borderRadius: 40 }}
        closeIcon={
          <AiOutlineCloseCircle color="#DAB6EB" size={35} className="me-5" />
        }
      >
        <div className={`${styles.back} p-3 px-4 px-md-5`}>
          <div className="d-flex container-fluid justify-content-center pt-5 px-0 px-md-5">
            <div
              className={`${styles.wrapper} px-5 pt-5`}
              style={{ width: "670px" }}
            >
              {submitted ? (
                <div className="text-center">
                  <Image src={email} height={160} width={160} />

                  <h3 className=" text-white">Hi, Check Your Email</h3>
                  <h6 className="mt-4 text-white ">
                    We have sent a email verify instructions to your email.
                    Check {data.email}
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
                <div className="text-center">
                  <h1 className="text-white" style={{ fontSize: 33 }}>
                    Already Joined!
                  </h1>
                  <p className="mt-4 text-white ">Please verify your email</p>
                  <p className="mt-4 text-white">{data.email}</p>
                  <button
                    onClick={(e) => handleSubmit(e, "verify")}
                    className="modal-button"
                  >
                    Verify Mail
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
                </div>
              ) : password ? (
                <React.Fragment>
                  <h1
                    className="text-white text-center"
                    style={{ fontSize: 33 }}
                  >
                    Welcome to Drivus, <br /> Sign in to Continue
                  </h1>

                  <form>
                    <input
                      required
                      type="password"
                      name="password"
                      value={data.password}
                      onChange={handleChange}
                      placeholder="Enter Password"
                      className="mt-3 ps-2 modal-input"
                    />

                    <button type="submit" className="mt-3 modal-button">
                      Sign In
                    </button>
                  </form>

                  <p className="text-white mt-2" style={{ fontSize: 13 }}>
                    <span
                      style={{
                        color: "#E7B403",
                        textDecoration: "underline",
                        cursor: "pointer",
                      }}
                    >
                      Forgotten Password?
                    </span>
                  </p>
                </React.Fragment>
              ) : (
                <React.Fragment>
                  <h1
                    className="text-white text-center"
                    style={{ fontSize: 33 }}
                  >
                    Welcome to Drivus, <br /> Sign in to Continue
                  </h1>

                  <form onSubmit={(e) => handleNext(e, "join")}>
                    <input
                      required
                      type="email"
                      name="email"
                      value={data.email}
                      onChange={handleChange}
                      placeholder="Enter Email"
                      className="mt-3 ps-2 modal-input"
                    />

                    <button type="submit" className="mt-3 modal-button">
                      Next
                    </button>
                  </form>

                  <div className="text-center mt-3">
                    {errorMsg && (
                      <Alert
                        closable
                        type="error"
                        onClose={() => setErrorMsg("")}
                        description="Invalid Signin Credentials !"
                        style={{
                          borderRadius: "15px",
                          backgroundColor: "#F8D7DA",
                          color: "#AA3832",
                        }}
                      />
                    )}
                  </div>

                  <p className="text-white mt-2" style={{ fontSize: 13 }}>
                    <span
                      style={{
                        color: "#E7B403",
                        textDecoration: "underline",
                        cursor: "pointer",
                      }}
                    >
                      Forgotten Password?
                    </span>
                  </p>
                </React.Fragment>
              )}
            </div>
          </div>
        </div>
      </Modal>
    </React.Fragment>
  );
};

export default Navbar;
