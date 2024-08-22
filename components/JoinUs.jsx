import { Checkbox, Modal, Tooltip, message } from "antd";
import Link from "next/link";
import Image from "next/image";
import email from "../public/mail.png";
import React, { useState } from "react";
import styles from "../styles/SignUp.module.css";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { findCustomerByEmail, sendEmail } from "../service/lead.service";
import { Loading } from "@nextui-org/react";

const JoinUs = ({ title, classNames, fontSize }) => {
  const [data, setData] = useState({});
  const [show, setShow] = useState({});
  const [loading, setLoading] = useState({});
  const [joined, setJoined] = useState(false);
  const [notjoined, setNotjoined] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);

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
    setShowTooltip(false);
  };

  const handleTryAgain = () => {
    setData({});
    setJoined(false);
    setNotjoined(false);
    setSubmitted(false);
    setShowTooltip(false);
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
    if (!joined) {
      if (!data.terms) {
        setShowTooltip(true);
        return;
      }
    }

    const { email, firstName, lastName } = data;
    setLoading({ submit: true });
    try {
      await sendEmail({ email, firstName, lastName });
      setSubmitted(true);
      setLoading({});
    } catch (err) {
      setLoading({});
      message.error("Something wrong!!");
      // console.log(err.response.data);
    }
  };

  return (
    <div>
      {" "}
      <span
        style={{ fontSize: fontSize ? fontSize : "17px" }}
        className={`${classNames ? classNames : "btn-primary"} px-4 py-2`}
        onClick={() => handleShow("enquire")}
      >
        {title ? title : "Join Us"}
      </span>
      <Modal
        width="670px"
        centered
        footer={null}
        open={show.enquire}
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
                  <div className="text-white" style={{ fontSize: "20px" }}>
                    Hi {data.firstName + " " + data.lastName},
                  </div>
                  <h3 className="text-white" style={{ fontSize: "17px" }}>
                    Check Your Email
                  </h3>
                  <h6 className="my-3 text-white" style={{ fontSize: "16px" }}>
                    We have sent email verification instructions to your email.
                    Check {data.email}{" "}
                  </h6>

                  <Link href={`https://www.${data.email.split("@").pop()}`}>
                    <a target="_blank">
                      <button className="modal-button">Check Mail</button>
                    </a>
                  </Link>

                  <p style={{ fontSize: "16px" }} className="text-white mt-3">
                    Not receiving the verification email? Please check your spam
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
                  <p className="text-white" style={{ fontSize: "17px" }}>
                    Continue with your email and explore{" "}
                    <span className="text-danger">D</span>rivus!
                  </p>

                  <form onSubmit={handleSubmit}>
                    <input
                      required
                      type="email"
                      name="email"
                      value={data.email}
                      onChange={handleChange}
                      placeholder="Enter Email"
                      className="mt-3 ps-2 modal-input"
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
                    <div className="d-flex justify-content-start align-items-center gap-2 mt-2">
                      <input
                        required
                        type="checkbox"
                        id="agree"
                        // name="lastName"
                        // value={data.lastName}
                        // onChange={handleChange}
                        // placeholder="Enter Last Name"
                        // className="mt-3 ps-2 modal-input"
                        title="You must check this box to agree with our terms and conditions"
                      />
                      <label htmlFor="#agree">
                        I have read and agreed to the{" "}
                        <Link href="/terms-and-conditions">
                          <a
                            style={{
                              color: "#E7B403",
                              textDecoration: "underline",
                            }}
                          >
                            Terms and Conditions.
                          </a>
                        </Link>
                      </label>
                    </div>

                    {/* <Tooltip
                      title={
                        data.terms
                          ? "xxxxxx"
                          : "You must check this box to agree with our terms and conditions"
                      }
                      open={showTooltip && !data.terms}
                      placement="topLeft"
                    >
                      <Checkbox
                        className={`${styles.customCheckbox} ${
                          showTooltip && !data.terms ? "text-danger" : ""
                        } mt-3`}
                        onChange={(e) => {
                          setData({ ...data, terms: e.target.checked });
                          setShowTooltip(false);
                        }}
                        value={data.terms}
                        checked={data.terms}
                        style={{
                          width: "100%",
                          fontWeight: "bold",
                        }}
                      >
                        I have read and agreed to the{" "}
                        <Link href="/terms-and-conditions">
                          <a
                            style={{
                              color: "#E7B403",
                              textDecoration: "underline",
                            }}
                          >
                            Terms and Conditions.
                          </a>
                        </Link>
                      </Checkbox>
                    </Tooltip> */}
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
                </>
              ) : (
                <>
                  <h1 className="text-white heading mb-5">
                    Get started on <span className="text-danger">D</span>riving
                    your Freedom!
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

                  <p className="text-white my-3" style={{ fontSize: "17px" }}>
                    By clicking "continue", you agree to our <br />
                    <Link href="/terms-and-conditions">
                      <a
                        style={{
                          color: "#E7B403",
                          textDecoration: "underline",
                        }}
                      >
                        Terms and Conditions
                      </a>
                    </Link>{" "}
                    and{" "}
                    <Link href="/privacy-policy">
                      <a
                        style={{
                          color: "#E7B403",
                          textDecoration: "underline",
                        }}
                      >
                        Privacy Policy.
                      </a>
                    </Link>{" "}
                    We will create an account for you using this email address.{" "}
                  </p>
                </>
              )}
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default JoinUs;
