import React from "react";
import { BsGeoAlt, BsEnvelope, BsPhone } from "react-icons/bs";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Link from "next/link";

function Contacts() {
  return (
    <div>
      {/* <Header /> */}
      <Navbar />
      <section id="contact" className="contact">
        <div className="container" data-aos="fade-up">
          <div className="section-title">
            <h2 className="fw-bold">Contact Us</h2>
            <p style={{ fontSize: 17 }}>Contact us to get started</p>
          </div>

          <div className="row justify-content-center">
            <div
              className="col-lg-10 my-5"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <div className="info">
                <div className="row">
                  <div className="col-md-6">
                    <h2 className="mb-2">
                      <span className="text-danger">D</span>rivus
                    </h2>
                    <h2>
                      <p className="p-0 m-0">
                        <strong className="fw-bolder inline">Address :</strong>{" "}
                        56 Williamson Street Oran Park NSW 2570
                      </p>
                      <p className="p-0">
                        <strong className="fw-bolder inline">
                          Phone Number :{" "}
                        </strong>
                        56 0410567867, 0490887210
                      </p>
                    </h2>
                    <a
                      href="https://maps.app.goo.gl/8VdHafV4w62rzGw89"
                      target="_blank"
                      // className="p-0"
                      style={{ fontSize: 17 }}
                    >
                      Get directions
                    </a>

                    <table className="table mt-3">
                      <tr className="border">
                        <td className="p-2">
                          Monday, Tuesday, Wednesday, Thursday, Friday, and
                          Saturday
                        </td>
                        <td className="p-2"> 9 AM - 7 PM</td>
                      </tr>
                      <tr className="border">
                        <td className="p-2">Sunday</td>
                        <td className="p-2"> Closed</td>
                      </tr>
                    </table>
                  </div>
                  <div className="col-md-6">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3307.8566707294053!2d150.7332831!3d-33.9962151!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b12f239fc2ec7b3%3A0x1661827db8dad810!2s56%20Williamson%20St%2C%20Oran%20Park%20NSW%202570%2C%20Australia!5e0!3m2!1sen!2sbd!4v1719727008192!5m2!1sen!2sbd"
                      frameBorder="0"
                      style={{ border: 0, width: "100%", height: 290 }}
                      allowFullScreen
                    ></iframe>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-lg-10 mt-5 mt-lg-0 d-flex align-items-stretch"
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
                    rows="6"
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
    </div>
  );
}

export default Contacts;
