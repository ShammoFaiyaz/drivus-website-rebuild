import ClientSay from "./client-say";
import How from "./how";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
// import Header from "../components/Header";
import { BsGeoAlt, BsEnvelope, BsPhone } from "react-icons/bs";
import {
  BiHelpCircle,
  BiChevronDown,
  BiChevronUp,
  BiPlus,
  BiX,
} from "react-icons/bi";
import Link from "next/link";
import { faqData } from "../utils/array";
import { useState } from "react";

const Home = () => {
  const [active, setActive] = useState(0);

  return (
    <div>
      <Navbar />
      <How />
      <ClientSay />
      <section id="faq" className="faq section-bg">
        <div className="container" data-aos="fade-up">
          <div className="accordion-list">
            <div className="section-title">
              <h2 className="fw-bold">Frequently Asked Questions</h2>
              <p style={{ fontSize: 17, padding: 0 }}>
                If you can't find what you're looking for, please give us a call
                at +610410567867 or{" "}
                <Link href="/contact-us" className="nav-link">
                  Send us a message
                </Link>
              </p>
            </div>
            <ul>
              {faqData.slice(0, 6).map((faq, index) => (
                <li
                  key={index}
                  data-aos="fade-up"
                  data-bs-toggle="collapse"
                  data-bs-target={`#accordion-list-${index}`}
                  data-aos-delay={faq.delay}
                  className={`faq-item ${index === 0 ? "faq-item-first" : ""} ${
                    index === faqData.length - 1 ? "faq-item-last" : ""
                  } ${index === 0 ? "collapse" : "collapsed"}`}
                  style={{ cursor: "pointer" }}
                  onClick={() => setActive(index)}
                >
                  <div
                    className="d-flex align-items-center justify-content-between"
                    style={{ fontSize: 17 }}
                  >
                    <h6 className="fw-bold">{faq.question}</h6>
                    {index === active ? <BiX /> : <BiPlus />}
                  </div>
                  <div
                    id={`accordion-list-${index}`}
                    data-aos="fade-up"
                    data-aos-delay="400"
                    className={`collapse${index === 0 ? " show" : ""}`}
                    data-bs-parent=".accordion-list"
                  >
                    <p style={{ fontSize: 17 }}>{faq.answer}</p>
                  </div>
                </li>
              ))}
            </ul>
            <div className="text-center">
              <Link href="/faqs">
                <span className="btn-primary"> See More</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="contact">
        <div className="container" data-aos="fade-up">
          <div className="section-title">
            <h2 className="fw-bold">Contact Us</h2>
            <p style={{ fontSize: 17 }}>Contact us to get started</p>
          </div>

          <div className="row">
            <div
              className="col-lg-5 d-flex align-items-stretch"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <div className="info">
                <div className="address">
                  <i>
                    <BsGeoAlt />
                  </i>
                  <h4>Location:</h4>
                  <p>56 Williamson Street Oran park NSW 2570</p>
                </div>

                <div className="email">
                  <i>
                    <BsEnvelope />
                  </i>
                  <h4>Email:</h4>
                  <p>info.drivus@gmail.com</p>
                </div>

                <div className="phone">
                  <i>
                    <BsPhone />
                  </i>
                  <h4>Call:</h4>
                  <p>0410567867, 0490887210</p>
                </div>

                <a
                  href="https://maps.app.goo.gl/8VdHafV4w62rzGw89"
                  target="_blank"
                  className="py-2"
                  style={{ fontSize: 17 }}
                >
                  Get directions
                </a>

                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3307.8566707294053!2d150.7332831!3d-33.9962151!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b12f239fc2ec7b3%3A0x1661827db8dad810!2s56%20Williamson%20St%2C%20Oran%20Park%20NSW%202570%2C%20Australia!5e0!3m2!1sen!2sbd!4v1719727008192!5m2!1sen!2sbd"
                  frameBorder="0"
                  style={{ border: 0, width: "100%", height: 290 }}
                  allowFullScreen
                ></iframe>
              </div>
            </div>

            <div
              className="col-lg-7 mt-5 mt-lg-0 d-flex align-items-stretch"
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
                    rows="10"
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
};

export default Home;
