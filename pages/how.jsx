import React, { useState } from "react";
import Image from "next/image";
import styles from "../styles/Testimonial.module.css";
import { BsArrowRight } from "react-icons/bs";
import Link from "next/link";
import plate from "../public/12344.png";
import "animate.css";
import { Modal } from "antd";
import { AiOutlineCloseCircle } from "react-icons/ai";

const How = () => {
  const [show, setShow] = useState(false);

  return (
    <div>
      <div
        className={`${styles.home} animate__animated animate__fadeIn animate__slow`}
      >
        <div className="container pt-5" style={{ height: 580 }}>
          <div className="row align-items-center mt-5 pt-5">
            <div className="col-md-5 mt-5 pt-3">
              <div className="pt-5">
                <h1
                  className="fw-bold animate__animated animate__fadeIn animate__delay-1s"
                  style={{ color: "#272561", fontSize: "32px" }}
                >
                  Join <span className="text-danger">D</span>rivus <br />
                  <span className="ms-4">Drive your freedom!</span>
                  <br />
                  <span className="ms-4">…own a brand new car</span>
                </h1>
                <Link href="/how-it-work">
                  <button
                    className="btn-primary px-4 py-2"
                    style={{ fontSize: "18px" }}
                  >
                    How it works
                  </button>
                </Link>
                {/* <button>
                </button> */}
                <span
                  className="ms-3 btn-primary-outline animate__animated animate__fadeInUp animate__delay-2s"
                  style={{ fontSize: "18px" }}
                  onClick={() => setShow(true)}
                >
                  Our Services
                </span>
              </div>
            </div>
            <div className="col-md-7 py-0 mt-0 mt-md-5 py-md-5 animate__animated animate__fadeIn animate__delay-1s">
              <div className="mt-5">
                <Image src={plate} alt="plate" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div style={{ marginTop: 110 }}>
        <div className="container" style={{ color: "#272561" }}>
          <div className="row justify-content-between align-items-start">
            <div
              style={{ color: "#272561" }}
              className="text-center heading fw-bold mb-5"
            >
              How it works
            </div>
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
                Step 1: Choose Your Preferred Used Car
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
                We will call you to discuss your car availability and your start
                date so that you can get driving!
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
                fees. We will handle insurances, registration, car-services, and
                24/7 support so you can drive with peace.
              </p>
              <p>
                After renting a second-hand car for a year, you qualify for our
                Rent-to-Own scheme. We cover up to $35,000 towards your brand
                new car straight from the dealership
              </p>
            </div>
            <div className="col-md-12 text-center">
              <Link href="how-it-work">
                <a className="btn-primary">
                  Find out More
                  <BsArrowRight className="ms-1" />
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="container my-5 py-5">
        <div className="row mb-4 pt-3">
          <div className="col-md-6">
            <div
              className="text-white p-5"
              style={{ backgroundColor: "#272561", borderRadius: 23 }}
            >
              <h1 className="text-white fw-bold" style={{ fontSize: "32px" }}>
                Rental
              </h1>
              <p className="pb-3 mt-3 me-5" style={{ fontSize: "17px" }}>
                Claim your freedom to drive. Get started with a rental program
                you can rely on!
              </p>
              <div className="text-center">
                <Link href="/rental">
                  <a
                    className="mb-2 change"
                    style={{
                      backgroundColor: "#9315cd",
                      padding: "13px 50px 15px",
                      color: "white",
                      textShadow: "1px 1px 2px grey",
                      border: "5px solid #9315cd",
                      borderRadius: 15,
                      fontWeight: 600,
                      fontSize: "18px",
                    }}
                  >
                    Find out more
                  </a>
                </Link>
              </div>
            </div>
          </div>
          <div className="col-md-6 mt-4 mt-md-0">
            <div
              className="text-white p-5"
              style={{ backgroundColor: "#272561", borderRadius: 23 }}
            >
              <h1 className="text-white fw-bold" style={{ fontSize: "32px" }}>
                Rent-To-Own
              </h1>
              <p className="pb-3 mt-3 me-5" style={{ fontSize: "17px" }}>
                Start the journey towards owning your ultimate freedom, your own
                brand new car!
              </p>
              <div className="text-center">
                {" "}
                <Link href="/rent-to-own">
                  <a
                    className="mb-2 change"
                    style={{
                      backgroundColor: "#9315cd",
                      padding: "13px 50px 15px",
                      color: "white",
                      textShadow: "1px 1px 2px grey",
                      border: "5px solid #9315cd",
                      borderRadius: 15,
                      fontWeight: 600,
                      fontSize: "18px",
                    }}
                  >
                    Find out more
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Modal
        width="1200px"
        centered
        footer={null}
        open={show}
        onCancel={() => setShow(false)}
        bodyStyle={{ padding: 10 }}
      >
        <div className="container py-5">
          <div className="row">
            <div className="col-md-6">
              <div
                className="text-white p-5"
                style={{ backgroundColor: "#272561", borderRadius: 23 }}
              >
                <h1 className="text-white fw-bold" style={{ fontSize: "32px" }}>
                  Rental
                </h1>
                <p className="pb-3 mt-3 me-5" style={{ fontSize: "17px" }}>
                  Claim your freedom to drive. Get started with a rental program
                  you can rely on!
                </p>
                <div className="text-center">
                  <Link href="/rental">
                    <a
                      className="mb-2 change"
                      style={{
                        backgroundColor: "#9315cd",
                        padding: "13px 50px 15px",
                        color: "white",
                        textShadow: "1px 1px 2px grey",
                        border: "5px solid #9315cd",
                        borderRadius: 15,
                        fontWeight: 600,
                        fontSize: "18px",
                      }}
                    >
                      Find out more
                    </a>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-md-6 mt-4 mt-md-0">
              <div
                className="text-white p-5"
                style={{ backgroundColor: "#272561", borderRadius: 23 }}
              >
                <h1 className="text-white fw-bold" style={{ fontSize: "32px" }}>
                  Rent-To-Own
                </h1>
                <p className="pb-3 mt-3 me-5" style={{ fontSize: "17px" }}>
                  Start the journey towards owning your ultimate freedom, your
                  own brand new car!
                </p>
                <div className="text-center">
                  {" "}
                  <Link href="/rent-to-own">
                    <a
                      className="mb-2 change"
                      style={{
                        backgroundColor: "#9315cd",
                        padding: "13px 50px 15px",
                        color: "white",
                        textShadow: "1px 1px 2px grey",
                        border: "5px solid #9315cd",
                        borderRadius: 15,
                        fontWeight: 600,
                        fontSize: "18px",
                      }}
                    >
                      Find out more
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default How;
