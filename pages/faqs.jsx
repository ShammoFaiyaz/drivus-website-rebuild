import React from "react";
import { BiPlus, BiX } from "react-icons/bi";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Link from "next/link";
import { faqData } from "../utils/array";

const Faqs = () => {
  const [active, setActive] = React.useState(0);
  return (
    <div>
      <Navbar />
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
              {faqData.map((faq, index) => (
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
                    {faq.question}

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
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Faqs;
