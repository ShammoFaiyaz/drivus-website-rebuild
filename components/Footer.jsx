import Link from "next/link";
import { BsFacebook, BsTwitter, BsInstagram, BsLinkedin } from "react-icons/bs";
import { HiChevronRight } from "react-icons/hi";
import Image from "next/image";
import dlogo from "../public/drivus-03.png";
import { RiInstagramFill } from "react-icons/ri";

const Footer = () => {
  return (
    <footer id="footer">
      <div className="footer-top" style={{ backgroundColor: "#d6b2e0" }}>
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-6 footer-contact">
              <div className="pb-2">
                <Link href="/">
                  <a className="navbar-brand">
                    <Image src={dlogo} height={60} width={150} alt="logo" />
                  </a>
                </Link>
              </div>
              <p>
                56 Williamson Street <br />
                Oran park NSW 2570
                <br />
                <strong>Phone:</strong> 0410567867, 0490887210
                <br />
                <strong>Email:</strong>{" "}
                <a href="mailto:info.drivus@gmail.com" target="_blank">
                  info.drivus@gmail.com
                </a>
                <br />
              </p>
            </div>

            <div className="col-lg-3 col-md-6 footer-links">
              <h4>Useful Links</h4>
              <ul>
                <li>
                  <i>
                    <HiChevronRight />
                  </i>
                  <Link href="/">
                    <a>Home</a>
                  </Link>{" "}
                </li>
                <li>
                  <i>
                    <HiChevronRight />
                  </i>
                  <Link href="/about-us">
                    <a>About us</a>
                  </Link>
                </li>
                <li>
                  <i>
                    <HiChevronRight />
                  </i>
                  <Link href="/how-it-work">
                    <a>How it Works</a>
                  </Link>
                </li>
                <li>
                  <i>
                    <HiChevronRight />
                  </i>
                  <Link href="/our-plans">
                    <a>Our plans</a>
                  </Link>
                </li>
                <li>
                  <i>
                    <HiChevronRight />
                  </i>
                  <Link href="/faqs">
                    <a>FAQ</a>
                  </Link>
                </li>
                <li>
                  <i>
                    <HiChevronRight />
                  </i>
                  <Link href="/contact">
                    <a>Contact us</a>
                  </Link>
                </li>
              </ul>
            </div>

            <div className="col-lg-3 col-md-6 footer-links">
              <h4>Our Services</h4>
              <ul>
                <li>
                  <i>
                    <HiChevronRight />
                  </i>
                  <Link href="/rental-contract">
                    <a>Rental Contract</a>
                  </Link>{" "}
                </li>
                <li>
                  <i>
                    <HiChevronRight />
                  </i>
                  <Link href="/rental-contract">
                    <a>Rent To own Contract</a>
                  </Link>
                </li>
              </ul>
            </div>

            <div className="col-lg-3 col-md-6 footer-links">
              <h4>Our Social Networks</h4>
              {/* <p>
                Cras fermentum odio eu feugiat lide par naso tierra videa magna
                derita valies
              </p> */}
              <div className="social-links mt-3">
                <Link href="/">
                  <a
                    className="twitter"
                    data-bs-toggle="tooltip"
                    title="Twitter"
                  >
                    <i>
                      <BsTwitter />
                    </i>
                  </a>
                </Link>
                <Link href="/">
                  <a
                    className="facebook"
                    data-bs-toggle="tooltip"
                    title="Facebook"
                  >
                    <i>
                      <BsFacebook />
                    </i>
                  </a>
                </Link>
                <Link href="/">
                  <a
                    className="instagram"
                    data-bs-toggle="tooltip"
                    title="Instagram"
                  >
                    <i>
                      <RiInstagramFill size={20} />
                    </i>
                  </a>
                </Link>
                <Link href="/">
                  <a
                    className="linkedin"
                    data-bs-toggle="tooltip"
                    title="Linkedin"
                  >
                    <i>
                      <BsLinkedin />
                    </i>
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container py-4">
        <div className="copyright">
          &copy; Copyright{" "}
          <strong>
            <span>
              <span className="text-danger">D</span>rivus
            </span>
          </strong>
          . All Rights Reserved
        </div>
      </div>
    </footer>
  );
};

export default Footer;
