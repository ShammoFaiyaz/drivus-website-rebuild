import Link from "next/link";
import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Navbar from "../components/Navbar";

const Error = () => {
  return (
    <div>
      {/* <Header />/ */}
      <Navbar />
      <div className="border-bottom">
        <div className="text-center mb-5 pb-5" style={{ marginTop: 150 }}>
          <h2 style={{ color: "#0A2457" }}>This Page Could Not Be Found!</h2>
          <h1 style={{ fontSize: 220, color: "#0A2457" }} className="mt-4">
            4<span style={{ color: "#F5C24C" }}>0</span>4
          </h1>
          <Link href="/" passHref>
            <a
              type="button"
              className="btn px-4 py-2 mt-4"
              style={{
                backgroundColor: "#F5C24C",
                fontSize: 14,
                fontWeight: 500,
                borderRadius: 8,
                color: "#0A2457",
              }}
            >
              Back to Home
            </a>
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Error;
