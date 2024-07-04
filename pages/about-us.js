import React from "react";
import Image from "next/image";
import styles from "../styles/Testimonial.module.css";
// import journey1 from '../public/journey1.jpg'
// import journey2 from '../public/journey2.jpg'
import "animate.css";
// import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const AboutUs = () => {
  return (
    <div>
      {/* <Header /> */}
      <Navbar />
      <div
        className={`${styles.vision} animate__animated animate__fadeIn animate__slow`}
      >
        <div className="container-fluid" style={{ height: 520 }}>
          <div className="row">
            <div className="col-md-2"></div>

            <div className="col-md-4 mt-4 pt-5 animate__animated animate__fadeInUp animate__delay-2s">
              <h3
                className="fw-bold"
                style={{ fontSize: 27, color: "#272561" }}
              >
                Our Vision
              </h3>
              <h1
                className="fw-bold mt-3"
                style={{ color: "#272561", fontSize: 40 }}
              >
                is to unleash your freedom to own <br />
                <span className="text-danger">your brand new car!</span>
              </h1>
            </div>

            <div className="col-md-5"></div>
          </div>
        </div>
      </div>

      <div className="bg-light">
        <div className="container">
          <div className="row py-5 mb-5">
            <div
              className="col-md-6"
              style={{ color: "#25225B", fontSize: 17 }}
            >
              <h1
                className="fw-bold"
                style={{ color: "#272561", fontSize: 32 }}
              >
                Our journey
              </h1>
              <p>
                Drivus was founded in 2015 with a simple yet powerful mission:
                “Make car rental services accessible and convenient for
                everyone”. Starting with a small fleet, we aimed to fill a gap
                in the market by offering well-maintained second-hand cars at
                affordable rates. Today, we are proud to have a diverse fleet of
                over 200 second-hand cars.
              </p>
            </div>

            <div className="col-md-6">
              <img
                src="/journey1.jpg"
                alt="journey"
                className="img-fluid rounded-3"
              />
            </div>
          </div>

          <div className="row mb-5">
            <div className="col-md-6">
              <img
                src="/journey2.jpg"
                alt="travel"
                className="img-fluid rounded-3"
              />
            </div>

            <div
              className="col-md-6"
              style={{ color: "#25225B", fontSize: 17 }}
            >
              <p>
                In our second year, we listened to our evolving client demands
                and introduced the Rent-to-Own program to help clients achieve
                their truest sense of freedom on the road. We are committed to
                continually improving and expanding our services.
              </p>
              <p>
                In the near future, we plan to add luxury cars to our fleet,
                offering our customers an even wider range of choices. We are
                also working on enhancing and extending our customer support
                network to provide services interstate and then internationally!
                We aim to grow our fleet so that all Australians can drive the
                freedom they deserve!
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* <div className="container">
        <iframe
          className="mt-5 mb-4"
          style={{ width: "100%", height: "590px", borderRadius: 16 }}
          src="https://www.youtube.com/embed/8LSt8_11wbQ"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div> */}

      <Footer />
    </div>
  );
};

export default AboutUs;
