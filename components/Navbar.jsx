import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import React, { useEffect, useRef, useState } from "react";
import dlogo from "../public/drivus-03.png";

import { IoIosCall } from "react-icons/io";
import { MdKeyboardArrowDown } from "react-icons/md";
import JoinUs from "./JoinUs";

const menu = [
  { title: "Home", path: "/" },
  { title: "About us", path: "/about-us" },
  { title: "How it Works", path: "/how-it-work" },
  { title: "Our Services" },
  { title: "FAQ", path: "/faqs" },
  { title: "Contact us", path: "/contact-us" },
];

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const router = useRouter();

  const dropdownRef = useRef(null);

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setToggle(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <React.Fragment>
      <nav
        className="navbar navbar-expand-lg sticky-top navbar-light bg-white p-0 shadow"
        style={{ zIndex: 1000 }}
      >
        <div className="container">
          {/* Left side: Logo */}
          <Link href="/">
            <a className="navbar-brand">
              <Image src={dlogo} height={60} width={150} alt="logo" />
            </a>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* Center: Menu Items */}
          <div
            className="collapse navbar-collapse justify-content-start"
            id="navbarNavAltMarkup"
          >
            <ul className="navbar-nav">
              {menu.map((item, index) =>
                item.title !== "Our Services" ? (
                  <li className="nav-item pe-5" key={index}>
                    <Link href={item.path && item.path}>
                      <a
                        style={{ textDecoration: "none" }}
                        className={`cursor-pointer ${
                          router.pathname === item.path ? `active` : ""
                        }`}
                      >
                        {item.title}
                      </a>
                    </Link>
                  </li>
                ) : (
                  <li
                    className="nav-item dropdown pe-5"
                    key={index}
                    ref={dropdownRef}
                  >
                    <a
                      className={`${
                        router.pathname === item.path ? `active` : ""
                      }`}
                      role="button"
                      onClick={() => setToggle(!toggle)}
                    >
                      {item.title}
                      <MdKeyboardArrowDown size={20} />
                    </a>
                    {toggle && (
                      <ul className="dropdown-menu d-flex flex-column align-items-start p-2">
                        <li className="mb-1" style={{ width: "100%" }}>
                          <Link href="/rental">
                            <a
                              className={`${
                                router.pathname === "/rental" ? `active` : ""
                              }`}
                            >
                              Rental
                            </a>
                          </Link>
                        </li>
                        <li style={{ width: "100%" }}>
                          <Link href="/rent-to-own">
                            <a
                              className={`${
                                router.pathname === "/rent-to-own"
                                  ? `active`
                                  : ""
                              }`}
                            >
                              Rent-to-Own
                            </a>
                          </Link>
                        </li>
                      </ul>
                    )}
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Right side: Contact Number and Button */}
          <div className="d-none d-md-block">
            <div className="d-flex align-items-center">
              <span
                style={{
                  fontSize: "20px",
                  marginRight: "15px",
                  color: "#8B37B3",
                }}
              >
                <IoIosCall size={20} className="mb-1 me-1" />
                0410567867
              </span>
              <JoinUs />
            </div>
          </div>
        </div>
      </nav>
    </React.Fragment>
  );
};

export default Navbar;
