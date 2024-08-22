import React, { useState } from "react";
import styles from "../styles/Testimonial.module.css";
import "animate.css";
// import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { findCustomerByEmail, sendEmail } from "../service/lead.service";
import { useRouter } from "next/router";
import { Modal } from "antd";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { Loading } from "@nextui-org/react";
import email from "../public/mail.png";
import Link from "next/link";

const HowItWorks = () => {
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
      // setSubmitted(true);
      setLoading({});
    } catch (err) {
      setLoading({});
      message.error("Something wrong!!");
      console.log(err.response.data);
    }
  };

  return (
    <>
      <div className="">
        {/* <Header /> */}
        <Navbar />
        <div
          className={`${styles.how} animate__animated animate__fadeIn animate__slow`}
        >
          <div className="container-fluid" style={{ height: 660 }}>
            <div className="row">
              <div className="col-md-1"></div>

              <div className="col-md-4 m-5 py-5 animate__animated animate__fadeInUp animate__delay-2s">
                <h1
                  className="fw-bold animate__animated animate__fadeIn animate__delay-1s"
                  style={{ color: "#272561" }}
                >
                  How Does It Work? <br />
                  <span className="ms-4">Complete three steps</span>
                  <br />
                  <span className="ms-5">
                    …and drive your <span>brand new</span> car
                  </span>
                </h1>
                <span
                  onClick={() => handleShow("enquire")}
                  className="btn-primary"
                  style={{ marginLeft: "120px" }}
                >
                  Join Us
                </span>
              </div>

              <div className="col-md-5"></div>
            </div>
          </div>
        </div>
        <div className="bg-light my-5">
          <div className="container py-5" style={{ color: "#272561" }}>
            <div className="row justify-content-between align-items-start">
              <div className="col-md-4 normal-text">
                <div className="text-center">
                  <img
                    style={{ width: "80px" }}
                    src="/icons/car.png"
                    className="img-fuild pb-3 "
                    alt=""
                  />
                </div>
                <h5
                  className="fw-bolder"
                  style={{ fontSize: "20px", color: "#272561" }}
                >
                  Step 1: Choose Your Preferred Used Car Plan
                </h5>
                <p>
                  Choose a used-car rental plan that fits your need between
                  sedans, 5 seater SUVs, UTEs, and 7- 8 seaters.
                </p>
              </div>
              <div className="col-md-4 normal-text">
                <div className="text-center">
                  {" "}
                  <img
                    style={{ width: "80px" }}
                    src="/icons/accounts.png"
                    className="img-fuild pb-3"
                    alt=""
                  />
                </div>
                <h5
                  className="fw-bolder"
                  style={{ fontSize: "20px", color: "#272561" }}
                >
                  Step 2: Complete Setting up Your Account
                </h5>
                <p>
                  Submit the required documents & get pre-approved in minutes!
                </p>
                <p>
                  We will call you to discuss your car availability and your
                  start date so that you can get driving!
                </p>
              </div>
              <div className="col-md-4 normal-text">
                <div className="text-center">
                  <img
                    style={{ width: "80px" }}
                    src="/icons/steering.png"
                    className="img-fuild pb-3"
                    alt=""
                  />
                </div>
                <h5
                  className="fw-bolder"
                  style={{ fontSize: "20px", color: "#272561" }}
                >
                  Step 3: Drive and Qualify for a Brand-New Rent
                </h5>
                <p>
                  With Drivus, you only pay for petrol and your weekly rental
                  fees. We will handle insurances, registration, car-services,
                  and 24/7 support so you can drive with peace.
                </p>
                <p>
                  After renting a second-hand car for a year, you qualify for
                  our Rent-to-Own scheme. We cover up to $35,000 towards your
                  brand new car straight from the dealership
                </p>
              </div>
              <div className="text-center">
                <span
                  onClick={() => handleShow("enquire")}
                  className="btn-primary"
                >
                  Get Started Today
                </span>
              </div>
            </div>

            {/* <div className="row mb-5 pb-5">
            <div className="col-md-6">
              <div
                className="p-4 shadow-lg "
                style={{
                  backgroundColor: "#EDEDED",
                  borderRadius: 20,
                  minHeight: 360,
                }}
              >
                <h1
                  className="fw-bold"
                  style={{ color: "#272561", fontSize: 34 }}
                >
                  What documents do I need for signing up?
                </h1>
                <div className="mt-4" style={{ fontSize: 17, color: "#2522B" }}>
                  -- <span className="ms-2">Drivers license</span>
                </div>
                <div style={{ fontSize: 17, color: "#2522B" }}>
                  -- <span className="ms-2">Proof of address</span>
                </div>
                <div style={{ fontSize: 17, color: "#2522B" }}>
                  --{" "}
                  <span className="ms-2">
                    Your passport or citizenship certificate
                  </span>
                </div>
                <div style={{ fontSize: 17, color: "#2522B" }}>
                  -- <span className="ms-2">Driving history</span>
                </div>
              </div>
            </div>

            <div className="col-md-6 mt-md-0 mt-3">
              <div
                className="p-4 shadow-lg"
                style={{
                  backgroundColor: "#B8BFFF",
                  borderRadius: 20,
                  minHeight: 360,
                }}
              >
                <h1
                  className="fw-bold"
                  style={{ color: "#272561", fontSize: 34 }}
                >
                  How much does it cost to get started?
                </h1>

                <div className="mt-4" style={{ fontSize: 17, color: "#2522B" }}>
                  New members pay a $275 joining fee with weekly car payments
                  starting from $188 on a Flexi subscription, and a $990 joining
                  fee with cars starting from $329 on Flexi own.
                </div>

                <div className="mt-4" style={{ fontSize: 17, color: "#2522B" }}>
                  Our weekly plans run Monday-Sunday. When collecting your car,
                  you will pay one full week in advance, plus remaining days of
                  the current week including collection day. So, if you collect
                  your car on a Friday, for example, we will charge you one full
                  week covering next weeks subscription, plus daily rates for
                  Friday to Sunday.{" "}
                  <span className="text-primary" style={{ cursor: "pointer" }}>
                    Learn more about our start-up costs
                  </span>
                </div>
              </div>
            </div>
          </div> */}
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-md-8">
              <h1
                className="fw-bold pt-5"
                style={{ fontSize: "32px", color: "#272561" }}
              >
                Why Drivus?
              </h1>
              <p className="mt-3 normal-text">
                At Drivus, we offer personalized service to each client. We are
                only a call away, ready to assist you with any queries or
                concerns. Our goal is to facilitate a hassle-free driving
                experience for everyone. With Drivus, you can drive with
                confidence, knowing that we are here to support you every step
                of the way.
              </p>
            </div>
            <div className="col-md-8">
              <h1
                className="fw-bold pt-5"
                style={{ fontSize: "32px", color: "#272561" }}
              >
                What Documents Do I Need for Signing up?
              </h1>
              <ul className="normal-text">
                <li>100 pts ID ( Driving licence / Passport /Medicare)</li>
                <li>Bank Statement</li>
                <li>Tenancy agreement or Utility Bill</li>
                <li>3 payslips</li>
              </ul>
            </div>
            <div className="col-md-8 normal-text">
              <h1
                className="fw-bold pt-5"
                style={{ fontSize: "32px", color: "#272561" }}
              >
                How Much Does it Cost to Get Started?
              </h1>
              <p>
                You only pay a security deposit of $1000 and first week’s rent
                during car pickup.
              </p>
              <p>The weekly car prices range from:</p>
              <ul>
                <li>$300 - $350 (Sedans)</li>
                <li>$350 - $400 (5 seater SUV)</li>
                <li>$400 - $450 (UTEs)</li>
                <li>$400 - $450 (7- 8 seater)</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="mt-5">
          <div className="container animate__animated animate__fadeInUp animate__delay-1s">
            <iframe
              className="my-5 pb-2"
              style={{ width: "100%", height: "590px" }}
              src="https://www.youtube.com/embed/b6FRcAHJYNI"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
        <Footer />
      </div>
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
    </>
  );
};

export default HowItWorks;
