import React from "react";
import Image from "next/image";
import styles from "../styles/Testimonial.module.css";
import { BsArrowRight } from "react-icons/bs";
import Link from "next/link";
import plate from "../public/12344.png";
import "animate.css";

const How = () => {
  return (
    <div>
      <div
        className={`${styles.home} animate__animated animate__fadeIn animate__slow`}
      >
        <div className="container pt-5" style={{ height: 580 }}>
          <div className="row align-items-center mt-5 pt-5">
            <div className="col-md-5 mt-5 pt-3">
              <div className="pt-5 mt-4">
                <h1
                  className="fw-bold animate__animated animate__fadeIn animate__delay-1s"
                  style={{ color: "#272561", fontSize: 40 }}
                >
                  Join Drivus <br />
                  <span className="ms-4">Drive your freedom!</span>
                  <br />
                  <span className="ms-4">…own a brand new car</span>
                </h1>
                <h6
                  className="pt-1 animate__animated animate__fadeInUp animate__delay-2s"
                  style={{ color: "black", fontSize: 17 }}
                >
                  We will set you up with wheels and continued support!
                </h6>
                <div className="mt-2 mb-5 pb-3 animate__animated animate__fadeInUp animate__delay-2s">
                  Join Drivus and get your dream car today!
                </div>
                <Link href="/how-it-work">
                  <a className="btn-primary animate__animated animate__fadeInUp animate__delay-2s">
                    How it works
                  </a>
                </Link>
                <Link href="/our-plan">
                  <a className="ms-3 btn-primary-outline animate__animated animate__fadeInUp animate__delay-2s">
                    Our Plans
                  </a>
                </Link>
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
        <div className="container p-3 pt-5 mt-5">
          <div className="row pb-3 flex-column-reverse flex-md-row mt-5">
            <div className="col-md-6 mt-0 mt-md-3">
              <div
                style={{ color: "#272561" }}
                className="text-center text-md-start mt-2 mt-md-0 fs-1 fw-bold"
              >
                How it works
              </div>
              <p
                className="pt-4 text-justify text-md-start"
                style={{ fontSize: 17, color: "#25225B" }}
              >
                We will set you up with wheels and continued support, making
                paperwork, legislation and competition. At Splend, we will help
                you manage the business side of things so you can earn more, get
                better ratings, and do what you do best. Drive.
              </p>
              <p style={{ fontSize: 17, color: "#25225B" }}>
                We will set you up with wheels and continued support, making
                paperwork, legislation and competition. At Splend, we will help
                you manage the business side of things so you can earn more, get
                better ratings, and do what you do best. Drive.
              </p>
              <Link href="/">
                <a className="btn-primary">
                  How it works
                  <BsArrowRight className="ms-1" />
                </a>
              </Link>
            </div>
            <div className="col-md-6 d-flex  justify-content-center animate__animated animate__fadeInUp animate__delay-2s">
              <Image
                src="/bentley.jpg"
                objectFit="contain"
                className="rounded-2"
                layout="fill"
                alt="car"
              />
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
              <h1 className="text-white fw-bold">Rental Contracts</h1>
              <p className="pb-3 mt-3 me-5" style={{ fontSize: 17 }}>
                Claim your freedom to drive. Get started with a rental program
                you can rely on!
              </p>
              <div className="text-center">
                <Link href="/rental-contract">
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
                      fontSize: 18,
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
              <h1 className="text-white fw-bold">Rent-to-Own Contracts</h1>
              <p className="pb-3 mt-3 me-5" style={{ fontSize: 17 }}>
                Start the journey towards owning your ultimate freedom, your own
                brand new car!
              </p>
              <div className="text-center">
                {" "}
                <Link href="/rental-contract">
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
                      fontSize: 18,
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
    </div>
  );
};

export default How;
