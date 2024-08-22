import React from "react";
import Navbar from "../components/Navbar";
import { FaCheck } from "react-icons/fa";
import Footer from "../components/Footer";
import ClientReview from "../components/ClientReview";
import JoinUs from "../components/JoinUs";
import Link from "next/link";

const RentToOwn = () => {
  return (
    <div>
      <Navbar />
      <div
        style={{
          backgroundColor: "#FEF3D2",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "45vh",
            // backgroundColor: "#FDDDBC",
            transform: "rotateY(67deg)",
          }}
        ></div>
        <div
          className="container d-flex justify-content-start align-items-center"
          style={{ height: "45vh" }}
        >
          <div className="py-5 px-3">
            <h2 className="text-start">Rent to Own Cars Available at Drivus</h2>
            <ul className="mt-2 list-unstyled">
              <li className="d-flex align-items-center">
                <FaCheck
                  className="me-2"
                  size={20}
                  style={{ color: "#9315CD" }}
                />
                For those looking to get their own Brand New Car, our
                Rent-to-Own program is the perfect solution.
              </li>
              <li className="d-flex align-items-center mt-2">
                <FaCheck
                  className="me-2"
                  size={20}
                  style={{ color: "#9315CD" }}
                />
                After renting a rental car for 12 months, you qualify for a
                Rent-to-Own!
              </li>
              <li className="d-flex align-items-center mt-2">
                <FaCheck
                  className="me-2"
                  size={20}
                  style={{ color: "#9315CD" }}
                />
                We finance up to $35,000 for a brand-new vehicle straight from
                the dealership!
              </li>
              <li className="d-flex align-items-center mt-2">
                <FaCheck
                  className="me-2"
                  size={20}
                  style={{ color: "#9315CD" }}
                />
                Experience driving your own car from $350 per week!
              </li>
            </ul>
            <div className="text-start mt-4">
              <JoinUs />
            </div>
          </div>
        </div>
      </div>
      <div className="bg-light">
        <div className="container py-5" style={{ color: "#272561" }}>
          <div className="row justify-content-between align-items-start">
            <div
              style={{ color: "#272561" }}
              className="text-center heading fw-bold mb-3"
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
            <div className="text-center d-flex justify-content-center gap-3 align-items-center">
              <Link href="/how-it-work">
                <button
                  className="btn-primary py-2"
                  style={{ fontSize: "19px" }}
                >
                  Find out More
                </button>
              </Link>
              <JoinUs classNames="btn-primary-outline" fontSize="19px" />
            </div>
          </div>
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
              We offer a personalized driving experience to each client. We are
              only a call away, ready to assist you with any queries or
              concerns. Unleash a hassle-free driving experience. Fall in love
              with the road knowing that we are here to support you every step
              of the way!
            </p>
            <JoinUs />
          </div>
          <div className="col-md-8 mb-4">
            <h1
              className="fw-bold pt-5"
              style={{ fontSize: "32px", color: "#272561" }}
            >
              What’s Included with Drivus Rent to Own?
            </h1>
            <ul className="normal-text">
              <li>Car Ownership</li>
              <li>Replacement vehicles during breakdowns/servicing</li>
              <li>Regular Car Services</li>
              <li>Regular Car Maintenance</li>
              <li>Annual Registration</li>
              <li>Comprehensive Car Insurance</li>
              <li>24/7 roadside assistance</li>
              <li>Dedicated customer service</li>
              <li>Referral bonuses</li>
              <li>Opportunity to upgrade to rent-to-own after 1 year</li>
              <li>
                Flexibility to return the car without any further payments
              </li>
            </ul>
            <JoinUs />
          </div>
        </div>
      </div>
      <ClientReview />
      <Footer />
    </div>
  );
};

export default RentToOwn;
