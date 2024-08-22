import React, { useState } from "react";
import { Button, Image, Link, Modal } from "@nextui-org/react";
import { Checkbox, message } from "antd";
import { saveApplication } from "../../service/lead.service";
import StepProgress from "../StepProgress";
import { MdOutlineArrowBackIos } from "react-icons/md";
import {
  primaryDocumentTypes,
  secondaryDocumentTypes,
} from "../../utils/array";

const StepSubmission = ({ current, data, setData, prevStep }) => {
  const [totalIncome, setIncome] = useState(470);
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [checked, setChecked] = useState(false);

  const handleSubmit = async () => {
    const newData = { status: "Pending" };
    // return console.log(newData);

    setLoading(true);
    setTimeout(async () => {
      try {
        await saveApplication(data.id, newData);
        setLoading(false);
        setSubmitted(true);
        setData({ ...data, ...newData });
      } catch (err) {
        setLoading(false);
        message.error("Something wrong!!");
        if (err.response?.data) {
          console.log(err.response.data.errors);
        }
      }
    }, 300);
  };

  const getTotalPoint = () => {
    let documents = [];
    if (data.primaryDocuments) documents = [...data.primaryDocuments];
    if (data.secondaryDocuments)
      documents = [...documents, ...data.secondaryDocuments];
    return documents.reduce(
      (acc, curr) => acc + (documentType[curr.type] || 0),
      0
    );
  };

  const documentType = [
    ...primaryDocumentTypes,
    ...secondaryDocumentTypes,
  ].reduce((acc, cur) => ({ ...acc, [cur.name]: cur.point }), {});

  console.log("getTotalPoint:", getTotalPoint());

  return (
    <div className="container">
      <div className="row" style={{ minHeight: "650px" }}>
        <div className="col-md-8">
          <h4 style={{ color: "#272561" }}>Personal Information</h4>
          <div className="row">
            <div className="col-md-12 mb-3">
              <table>
                <tbody>
                  <tr>
                    <td style={{ width: "110px" }}>First name</td>
                    <td>
                      : <span className="fw-bold">{data.firstName}</span>
                    </td>
                  </tr>
                  <tr>
                    <td>Last name</td>
                    <td>
                      : <span className="fw-bold">{data.lastName}</span>
                    </td>
                  </tr>
                  <tr>
                    <td>Email</td>
                    <td>
                      : <span className="fw-bold">{data.email}</span>
                    </td>
                  </tr>
                  <tr>
                    <td>Phone</td>
                    <td>
                      : <span className="fw-bold">{data.phoneNo}</span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="col-md-12 my-3">
              <h4 style={{ color: "#272561" }}>Citizenship</h4>
              {data.citizenship}
              {data.residency && (
                <p>
                  Residency: <span className="fw-bold">{data.residency}</span>
                </p>
              )}
            </div>

            <div className="col-md-12 my-3 text-dark">
              <Checkbox checked disabled className="me-2" />I confirm that I
              will never use Drivus vehicle for ride sharing (e.g. Uber, Didi,
              Ola etc.). Doing so will have legally enforceable penalties.
            </div>

            <div className="col-md-12 my-3">
              <h4 style={{ color: "#272561" }}>Driving License</h4>
              {data.drivingLicense ? (
                <table>
                  <tbody>
                    <tr>
                      <td style={{ width: "110px" }}>License Type</td>
                      <td>
                        :{" "}
                        <span className="fw-bold">
                          {data.drivingLicense.type}
                        </span>
                      </td>
                    </tr>
                    <tr>
                      <td>Document Status</td>
                      <td>
                        :{" "}
                        <span className="fw-bold">
                          {data.drivingLicense.filePath
                            ? "Uploaded"
                            : "No Uploaded"}
                        </span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              ) : (
                <p className="text-danger">
                  Please provide your driving license data
                </p>
              )}
            </div>

            <div className="col-md-12 my-3">
              <h4 style={{ color: "#272561" }}>100 point Id Documents</h4>

              <p>
                Total Point:{" "}
                {getTotalPoint() < 100 ? (
                  <span className="text-danger h5">{getTotalPoint() || 0}</span>
                ) : (
                  <span className="text-success h5">
                    {getTotalPoint() || 0}
                  </span>
                )}
              </p>

              <h6>Primary Documents</h6>
              {data.primaryDocuments ? (
                <table>
                  <tbody>
                    {data.primaryDocuments.map((doc, idx) => (
                      <tr key={idx}>
                        <td style={{ width: "30px" }}>
                          <Checkbox checked={doc.filePath} disabled />
                        </td>
                        <td>{doc.type}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              ) : (
                <p className="text-danger">
                  Please provide at least 1 primary document
                </p>
              )}

              <h6 className="mt-3">Secondary Documents</h6>
              {data.secondaryDocuments ? (
                <table>
                  <tbody>
                    {data.secondaryDocuments.map((doc, idx) => (
                      <tr key={idx}>
                        <td style={{ width: "30px" }}>
                          <Checkbox checked={doc.filePath} disabled />
                        </td>
                        <td>{doc.type}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              ) : (
                <p className="text-danger">
                  Please provide at least 1 secondary document
                </p>
              )}
            </div>

            <div className="col-md-12 my-3">
              <h4 className="mt-3">Income Sources</h4>
              {totalIncome < 700 && (
                <p className="text-danger">
                  Your total income must be at least $ 700 per week
                </p>
              )}
              {data.incomeSources ? (
                <table>
                  <tbody>
                    {data.incomeSources.map((doc, idx) => (
                      <tr key={idx}>
                        <td style={{ width: "30px" }}>
                          <Checkbox checked={doc.filePath} disabled />
                        </td>
                        <td style={{ width: "110px" }}>{doc.name}</td>
                        <td>$ {doc.amount} /week</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              ) : (
                <p className="text-danger">
                  Please provide your sources of income
                </p>
              )}
            </div>

            <div className="col-md-12 my-3">
              <h4 style={{ color: "#272561" }}>My Desired car</h4>
              {data.desiredCar}
            </div>

            <div className="col-md-6 my-3">
              <h4 style={{ color: "#272561" }}>Postal Address</h4>
              {data.postalAddress ? (
                <table>
                  <tbody>
                    <tr>
                      <td style={{ width: "110px" }}>Street</td>
                      <td>
                        :{" "}
                        <span className="fw-bold">
                          {data.postalAddress.street}
                        </span>
                      </td>
                    </tr>
                    <tr>
                      <td>Street</td>
                      <td>
                        :{" "}
                        <span className="fw-bold">
                          {data.postalAddress.suburb}
                        </span>
                      </td>
                    </tr>
                    <tr>
                      <td>State</td>
                      <td>
                        :{" "}
                        <span className="fw-bold">
                          {data.postalAddress.state}
                        </span>
                      </td>
                    </tr>
                    <tr>
                      <td>Post Code</td>
                      <td>
                        :{" "}
                        <span className="fw-bold">
                          {data.postalAddress.postcode}
                        </span>
                      </td>
                    </tr>
                    <tr>
                      <td>Document Type</td>
                      <td>
                        :{" "}
                        <span className="fw-bold">
                          {data.postalAddress.documentType}
                        </span>
                      </td>
                    </tr>
                    <tr>
                      <td>Document Status</td>
                      <td>
                        :{" "}
                        <span className="fw-bold">
                          {data.postalAddress.filePath
                            ? "Uploaded"
                            : "No Uploaded"}
                        </span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              ) : (
                <p className="text-danger">
                  Please provide your postal address
                </p>
              )}
            </div>

            <div className="col-md-6 my-3">
              <h4 style={{ color: "#272561" }}>Residential Address</h4>
              {data.residentialAddress ? (
                <table>
                  <tbody>
                    <tr>
                      <td style={{ width: "110px" }}>Street</td>
                      <td>
                        :{" "}
                        <span className="fw-bold">
                          {data.residentialAddress.street}
                        </span>
                      </td>
                    </tr>
                    <tr>
                      <td>Street</td>
                      <td>
                        :{" "}
                        <span className="fw-bold">
                          {data.residentialAddress.suburb}
                        </span>
                      </td>
                    </tr>
                    <tr>
                      <td>State</td>
                      <td>
                        :{" "}
                        <span className="fw-bold">
                          {data.residentialAddress.state}
                        </span>
                      </td>
                    </tr>
                    <tr>
                      <td>Post Code</td>
                      <td>
                        :{" "}
                        <span className="fw-bold">
                          {data.residentialAddress.postcode}
                        </span>
                      </td>
                    </tr>
                    <tr>
                      <td>Document Type</td>
                      <td>
                        :{" "}
                        <span className="fw-bold">
                          {data.residentialAddress.documentType}
                        </span>
                      </td>
                    </tr>
                    <tr>
                      <td>Document Status</td>
                      <td>
                        :{" "}
                        <span className="fw-bold">
                          {data.residentialAddress.filePath
                            ? "Uploaded"
                            : "No Uploaded"}
                        </span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              ) : (
                <p className="text-danger">
                  Please provide your residential address
                </p>
              )}
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <Image
            src="/img/submission.jpg"
            alt="Driving License"
            width={500}
            height={350}
          />
        </div>

        {data.status === "Draft" && (
          <>
            <div className="col-md-12">
              <hr />
            </div>
            <div className="col-md-3"></div>
            <div className="col-5">
              <Checkbox
                checked={checked || data.status !== "Draft"}
                className="me-2"
                onClick={() => setChecked(!checked)}
              >
                I confirm that I have read Drivus’{" "}
                <Link
                  href={process.env.NEXT_PUBLIC_TOS_URL || "#"}
                  underline="hover"
                  target="_blank"
                >
                  terms and conditions
                </Link>
                , and I agree to it.
              </Checkbox>
              <p className="my-2">
                Please double check your submissions! Once submitted, no further
                changes can be made.
              </p>
              <div className="d-flex align-items-center justify-content-center mb-5">
                <Button
                  size="lg"
                  auto
                  className="back-button"
                  onClick={() => prevStep()}
                >
                  <MdOutlineArrowBackIos size={18} className="me-2 mb-1" />
                  Back
                </Button>
                <Button
                  size="sm"
                  color="secondary"
                  onClick={handleSubmit}
                  disabled={!checked}
                  loading={loading}
                >
                  Submit
                </Button>
              </div>
            </div>
          </>
        )}

        {/* <div className="col-md-12">
          {data.isLocked ? (
            <div className="alert alert-success text-center">
              Your application is under review and locked by admin.
            </div>
          ) : (
            <div className="alert alert-warning text-center">
              You can still update your data and resubmit
            </div>
          )}
        </div> */}
      </div>

      {/* <div className="container position-fixed w-100 bottom-0">
        <StepProgress percent={100} />
      </div> */}

      <Modal
        aria-labelledby="modal-title"
        noPadding
        open={submitted}
        onClose={() => setSubmitted(false)}
        // closeButton={false}
        preventClose
      >
        <Modal.Header>
          <h4 style={{ color: "#272561" }}>Application Submitted</h4>
        </Modal.Header>
        <Modal.Body>
          <Image
            showSkeleton
            src="/img/submitted.png"
            width={200}
            height={100}
            alt="submitted"
          />
          <div className="text-center px-3">
            <p>
              Your application is under review. Drivus will call you regarding
              your interest.
            </p>
            <p>Thank you for submitting your interest.</p>
            <Link href="/">Back to Home</Link>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default StepSubmission;
