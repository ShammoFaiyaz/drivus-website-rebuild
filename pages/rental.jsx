import React from "react";
import Navbar from "../components/Navbar";
import { FaCheck } from "react-icons/fa";
import Footer from "../components/Footer";
import ClientReview from "../components/ClientReview";
import JoinUs from "../components/JoinUs";

const Rental = () => {
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
            <h2 className="text-start">Rental Cars Available at Drivus</h2>
            <ul className="mt-2 list-unstyled">
              <li className="d-flex align-items-center">
                <FaCheck
                  className="me-2"
                  size={20}
                  style={{ color: "#9315CD" }}
                />
                Discover our fleet from $300 per week
              </li>
              <li className="d-flex align-items-center mt-2">
                <FaCheck
                  className="me-2"
                  size={20}
                  style={{ color: "#9315CD" }}
                />
                Empower your freedom on the road with our affordable rental
                programs
              </li>
              <li className="d-flex align-items-center mt-2">
                <FaCheck
                  className="me-2"
                  size={20}
                  style={{ color: "#9315CD" }}
                />
                Embrace a driving experience where you drive and we take care of
                the rest
              </li>
            </ul>
            <div className="text-start mt-4">
              <JoinUs />
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row my-md-5">
          {[
            { title: "Sedans", desc: "Weekly pricing from $300" },
            { title: "5 seater SUV", desc: "Weekly pricing from $350" },
            { title: "UTEs", desc: "Weekly pricing from $400" },
            { title: "7- 8 seater", desc: "Weekly pricing from $400" },
          ].map((item, idx) => {
            return (
              <div className="col-md-6 mb-4">
                <div className="card-container">
                  <div className="card custom-card shadow">
                    <div style={{ height: "250px" }}>
                      <h4 className="text-center mt-5">{item.title}</h4>
                      <h6 className="text-center mb-5">{item.desc}</h6>
                    </div>
                    <div className="card-footer position-relative">
                      <img
                        src="/car/suv.png"
                        className="w-50 position-absolute top-0 start-50 translate-middle"
                        alt="Card Image"
                      />
                    </div>
                    <div className="overlay">
                      <JoinUs title="Start Driving!" />
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
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
          <div className="col-md-8 mb-3">
            <h1
              className="fw-bold pt-5"
              style={{ fontSize: "32px", color: "#272561" }}
            >
              What’s Included with Drivus Rentals?
            </h1>
            <ul className="normal-text">
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

export default Rental;
