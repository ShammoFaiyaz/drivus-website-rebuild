import { BsFacebook, BsTwitter, BsLinkedin, BsPhone } from "react-icons/bs";
import { BiEnvelope } from "react-icons/bi";
import Link from "next/link";
import { RiInstagramFill } from "react-icons/ri";

const Header = () => {
  return (
    <div
      id="topbar"
      className="d-flex align-items-center"
      style={{ background: "#eff6ff" }}
    >
      <div className="container d-flex justify-content-between">
        <div className="contact-info d-flex align-items-center">
          <i>
            <BiEnvelope />
          </i>{" "}
          <a href="mailto:contact@example.com">contact@example.com</a>
          <i>
            <BsPhone /> +1 5589 55488 55
          </i>
        </div>
        <div className="d-none d-lg-flex social-links align-items-center">
          <Link href="/">
            <a className="twitter" data-bs-toggle="tooltip" title="Twitter">
              <i>
                <BsTwitter />
              </i>
            </a>
          </Link>
          <Link href="/">
            <a className="facebook" data-bs-toggle="tooltip" title="Facebook">
              <i>
                <BsFacebook />
              </i>
            </a>
          </Link>
          <Link href="/">
            <a className="instagram" data-bs-toggle="tooltip" title="Instagram">
              <i>
                <RiInstagramFill size={16} />
              </i>
            </a>
          </Link>
          <Link href="/">
            <a className="linkedin" data-bs-toggle="tooltip" title="Linkedin">
              <i>
                <BsLinkedin />
              </i>
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
