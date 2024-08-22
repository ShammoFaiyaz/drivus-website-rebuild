import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import jwtDecode from "jwt-decode";
import { Modal, message } from "antd";
import { GoVerified } from "react-icons/go";
import { verifyLead, saveApplication } from "../../service/lead.service";
import { Button, Link, Loading } from "@nextui-org/react";

function isJwtToken(str) {
  const regexExp =
    /^([a-zA-Z0-9_=]+)\.([a-zA-Z0-9_=]+)\.([a-zA-Z0-9_\-\+\/=]*)/gi;
  return regexExp.test(str);
}

const VerifyCustomer = () => {
  const [data, setData] = useState({});
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [verified, setVerified] = useState(false);

  const router = useRouter();
  const {
    query: { token },
  } = router;

  useEffect(() => {
    (async () => {
      try {
        if (!isJwtToken(token)) {
          setError("Invalid token !");
        }
        const decode = jwtDecode(token) || {};
        // console.log("WHAT", decode);
        setData({
          firstName: decode.firstName,
          lastName: decode.lastName,
          email: decode.email,
        });
        setError(null);
      } catch (err) {
        console.log("ERROR", err);
        setError("Invalid token !!!");
      }
    })();
  }, [token]);

  const handleVerify = async () => {
    setLoading(true);
    setTimeout(async () => {
      try {
        const {
          data: { data: newToken },
        } = await verifyLead({ verifyToken: token });
        const { id } = jwtDecode(newToken) || {};
        setData({ ...data, id, token: newToken });
        setVerified(true);
        setLoading(false);
      } catch (err) {
        setLoading(false);
        if (err?.response.data) {
          console.log(err);
        }
      }
    }, 100);
  };

  const handleContinue = async () => {
    const { id } = data;
    const newData = { step: 0 };
    // return console.log(id, newData);

    setLoading(true);

    setTimeout(async () => {
      try {
        await saveApplication(id, newData);
        router.push(`/application/${data.token}`);
        // setLoading(false);
      } catch (err) {
        setLoading(false);
        message.error("Something wrong!!");
        if (err?.response.data) {
          console.log(err);
        }
      }
    }, 100);
  };

  return (
    <div>
      <Modal
        width={600}
        footer={null}
        open={true}
        closable={false}
        maskClosable={false}
      >
        <div className="text-center">
          {error ? (
            <div className="row">
              <div className="text-center text-danger">
                <h3>{error}</h3>
                <Link href="/" underline>
                  Home
                </Link>
              </div>
            </div>
          ) : verified ? (
            <div className="row">
              <div className="col-md-12 my-3">
                <GoVerified color="#17c964" size={70} />
              </div>
              <div className="col-12 my-3">
                <h3 style={{ fontSize: "20px" }}>
                  Congratulations{" "}
                  <span className="fw-bold">{data?.firstName}!</span>
                </h3>
                <h5 style={{ fontSize: "17px" }} className="my-3">
                  Your email has been verified. <br />
                  Click continue to complete your profile.
                </h5>
                <p style={{ fontSize: "16px" }}>
                  Please note you can resume your partially completed
                  application anytime
                </p>
              </div>
              <div className="col-12 d-flex justify-content-center my-3">
                <button
                  className="ms-2 btn-primary"
                  onClick={handleContinue}
                  style={{ fontSize: "19px" }}
                >
                  Continue
                </button>
                {loading && <Loading className="m-2" type="spinner" />}
              </div>
            </div>
          ) : (
            <div className="row">
              <div className="col-12 my-5">
                <h3 style={{ fontSize: "20px" }}>
                  Hey <span className="fw-bold">{data?.firstName}!</span>
                </h3>
                <h5 style={{ fontSize: "17px" }} className="mt-4">
                  Let's verify your email.
                </h5>
              </div>
              <div className="col-12 d-flex justify-content-center mb-5">
                <button
                  className="ms-2 btn-primary"
                  style={{ fontSize: "19px" }}
                  onClick={handleVerify}
                >
                  Verify
                </button>
                {loading && <Loading className="m-2" type="spinner" />}
              </div>
            </div>
          )}
        </div>
      </Modal>
    </div>
  );
};

export default VerifyCustomer;
