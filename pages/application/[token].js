import React, { useEffect, useState } from "react";
import Image from "next/image";
import { Button } from "@nextui-org/react";
import jwtDecode from "jwt-decode";
import { useRouter } from "next/router";
import dlogo from "../../public/drivus-03.png";

// Steps
import StepCitizenship from "../../components/Registration/StepCitizenship";
import StepAgree from "../../components/Registration/StepAgree";
import StepDob from "../../components/Registration/StepDob";
import StepDrivingLicense from "../../components/Registration/StepDrivingLicense";
import Step100PointDoc from "../../components/Registration/Step100PointDoc";
import StepIncomeSrc from "../../components/Registration/StepIncomeSrc";
import StepCarCategory from "../../components/Registration/StepCarCategory";
import StepPostalAddress from "../../components/Registration/StepPostalAddress";
import StepResidentialAddress from "../../components/Registration/StepResidentialAddress";
import { MdOutlineArrowBackIos } from "react-icons/md";
import { getLead, saveLead } from "../../service/lead.service";
import StepSubmission from "../../components/Registration/StepSubmission";
import StepPhoneNumber from "../../components/Registration/StepPhoneNumber";
import Link from "next/link";
import StepEmargencyContact from "../../components/Registration/StepEmargencyContact";

function isUUID(str) {
  const regexExp =
    /^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/gi;
  return regexExp.test(str);
}

function isJwtToken(str) {
  const regexExp =
    /^([a-zA-Z0-9_=]+)\.([a-zA-Z0-9_=]+)\.([a-zA-Z0-9_\-\+\/=]*)/gi;
  return regexExp.test(str);
}

const Registration = () => {
  const [current, setCurrent] = useState(0);
  const [formData, setFormData] = useState({});
  const [data, setData] = useState({});
  const [drivingLicense, setDrivingLicense] = useState({});

  const [error, setError] = useState({});
  const [loading, setLoading] = useState({});

  const [point, setPoint] = useState(0);

  const router = useRouter();
  const {
    query: { token },
  } = router;

  useEffect(() => {
    (async () => {
      try {
        if (isJwtToken(token)) {
          const decoded = jwtDecode(token);
          // console.log("Decoded", decoded);
          if (isUUID(decoded.id)) {
            const {
              data: { data: customer },
            } = await getLead(decoded.id);
            if (customer.status !== "Draft") {
              setCurrent(11);
            }
            setData(customer);
          }
        }
      } catch (err) {
        setLoading({});
        console.log("Can not get data fron server", err);
      }
    })();
  }, [token]);

  const nextStep = () => {
    setFormData({});
    current < 11 ? setCurrent(current + 1) : current;
  };

  const prevStep = () => {
    setFormData({});
    current > 0 ? setCurrent(current - 1) : current;
  };

  const handleChange = ({ target: input }) => {
    const newData = { ...formData };

    if ((!data[input.id] && !input.value) || data[input.id] == input.value) {
      delete newData[input.id];
    } else {
      newData[input.id] = input.value || null;
    }

    setFormData(newData);
  };

  const handleObjChange = ({ target: input }, objName) => {
    const newData = { ...formData };

    if (!newData[objName]) {
      newData[objName] = {};
    }

    if (
      (!(data[objName] && data[objName][input.id]) && !input.value) ||
      (data[objName] && data[objName][input.id] === input.value)
    ) {
      delete newData[objName][input.id];
      if (newData[objName] && Object.keys(newData[objName]).length === 0)
        delete newData[objName];
    } else {
      newData[objName][input.id] = input.value || null;
    }
    setFormData(newData);
  };

  const handleUpload = async ({ file, fileList }, fieldName) => {
    const newData = { ...formData };

    if (
      (!data[fieldName] && fileList.length < 1) ||
      data[fieldName] == fileList
    ) {
      delete newData[fieldName];
    } else {
      newData[fieldName] = fileList || [];
    }

    setFormData(newData);
    // const newData = { ...formData };

    // console.log(fieldName, fileList);

    // newData[fieldName] = fileList;

    // setFormData(newData);
  };

  const handleObjUpload = async ({ file, fileList }, fieldName, objName) => {
    const newData = { ...formData };

    if (!newData[objName]) {
      newData[objName] = {};
    }

    // console.log("fileList", fileList);

    if (
      (!(data[objName] && data[objName].fileList) && fileList.length < 1) ||
      (data[objName] && data[objName].fileList === fileList)
    ) {
      console.log("xxx");
      delete newData[objName].fileList;
      if (newData[objName] && Object.keys(newData[objName]).length === 0)
        delete newData[objName];
    } else {
      console.log("fileList", fileList);
      newData[objName].fileList = fileList;
    }
    setFormData(newData);
  };

  // const handleObjChange = ({ target: input }, objName) => {
  //   const newObj = {...formData[objName]};
  //   newObj[input.id] = input.value || null;
  //   setFormData({ ...formData, [objName]: newObj});
  // };

  const handleArrChange = ({ target: input }, arrName, idx) => {
    const newData = { ...formData };

    if (!newData[arrName]) {
      newData[arrName] = [];
    }

    if (
      (!(data[arrName][idx] && data[arrName][idx][input.id]) && !input.value) ||
      (data[arrName][idx] && data[arrName][idx][input.id] === input.value)
    ) {
      delete newData[arrName][idx][input.id];
      if (
        newData[arrName][idx] &&
        Object.keys(newData[arrName][idx]).length === 0
      )
        delete newData[arrName][idx];
    } else {
      newData[arrName][idx][input.id] = input.value || null;
    }
    setFormData(newData);
  };

  const handleSave = async () => {
    const newData = { ...formData };

    setData({ ...data, ...formData });

    return console.log(newData);
    // console.log(newData);

    try {
      if (Object.keys(newData).length !== 0) {
        await saveLead({ id: data.id, ...newData });

        setError({});
        setLoading({});
        setFormData({});
        setData({ ...data, ...formData });
      }
    } catch (err) {
      setLoading({});
      if (err.response?.data) {
        setError(err.response.data.errors);
      }
    }
  };

  const handleSubmit = async () => {
    const newData = { ...formData };

    return console.log(newData);

    try {
      setLoading({ ...loading, submit: true });
      await saveLead(newData);

      setTimeout(() => {
        setError({});
        setLoading({});
        setFormData({});
        setData({ ...data, ...formData });
      }, 300);
    } catch (err) {
      setLoading({});
      if (err.response?.data) {
        setError(err.response.data.errors);
        errorMsg(err.response.data.message);
      }
    }
  };

  const currentStep = (current) => {
    switch (current) {
      case 0:
        return (
          <StepCitizenship
            current={current}
            data={data}
            setData={setData}
            prevStep={prevStep}
            nextStep={nextStep}
          />
        );
      case 1:
        return (
          <StepAgree
            data={data}
            setData={setData}
            current={current}
            prevStep={prevStep}
            nextStep={nextStep}
          />
        );
      case 2:
        return (
          <StepDob
            current={current}
            data={data}
            setData={setData}
            prevStep={prevStep}
            nextStep={nextStep}
          />
        );
      case 3:
        return (
          <StepDrivingLicense
            current={current}
            data={data}
            setData={setData}
            drivingLicense={drivingLicense}
            setDrivingLicense={setDrivingLicense}
            prevStep={prevStep}
            nextStep={nextStep}
          />
        );
      case 4:
        return (
          <Step100PointDoc
            current={current}
            data={data}
            setData={setData}
            drivingLicense={drivingLicense}
            setDrivingLicense={setDrivingLicense}
            prevStep={prevStep}
            nextStep={nextStep}
          />
        );
      case 5:
        return (
          <StepIncomeSrc
            current={current}
            data={data}
            setData={setData}
            prevStep={prevStep}
            nextStep={nextStep}
          />
        );
      case 6:
        return (
          <StepCarCategory
            data={data}
            setData={setData}
            current={current}
            prevStep={prevStep}
            nextStep={nextStep}
          />
        );
      case 7:
        return (
          <StepPostalAddress
            current={current}
            data={data}
            setData={setData}
            prevStep={prevStep}
            nextStep={nextStep}
          />
        );
      case 8:
        return (
          <StepResidentialAddress
            current={current}
            data={data}
            setData={setData}
            prevStep={prevStep}
            nextStep={nextStep}
          />
        );
      case 9:
        return (
          <StepPhoneNumber
            current={current}
            data={data}
            setData={setData}
            prevStep={prevStep}
            nextStep={nextStep}
          />
        );
      case 10:
        return (
          <StepEmargencyContact
            current={current}
            data={data}
            setData={setData}
            prevStep={prevStep}
            nextStep={nextStep}
          />
        );
      case 11:
        return (
          <StepSubmission
            current={current}
            data={data}
            setData={setData}
            prevStep={prevStep}
            loading={loading}
            handleSubmit={handleSubmit}
          />
        );
      default:
        return null;
    }
  };

  // const initialValues = {
  //   citizenship: null,
  //   residency: null,
  //   isRideSharingDriver: null,
  //   day: null,
  //   month: null,
  //   year: null,
  //   drivingLicenseType: null,
  //   drivingLicenseFile: null,
  //   // documents: [{
  //   //   type: null,
  //   //   documentNo: null,
  //   //   fileName: null
  //   // }],
  //   primaryDocuments: [{
  //     type: null,
  //     filePath: null
  //   }],
  //   secondaryDocuments: [{
  //     type: null,
  //     filePath: null
  //   }],
  //   incomeSources: [{
  //     sourceOfIncome: null,
  //     incomeAmount: null,
  //     incomeSourceFile: null
  //   }],
  //   desiredCar: null,
  //   residentialAddress: {
  //     street: null,
  //     suburb: null,
  //     state: null,
  //     postcode: null,
  //     documentType: null,
  //     proofFile: null
  //   },
  //   isSameAddress: false,
  //   postalAddress: {
  //     street: null,
  //     suburb: null,
  //     state: null,
  //     postcode: null,
  //     documentType: null,
  //     proofFile: null
  //   }
  // }

  const handleAddressCheck = ({ target }, values, setValues) => {
    let residentialsAddress = { ...values.residentialAddress };
    let postalAddress = { ...values.postalAddress };

    postalAddress = target.checked
      ? residentialsAddress
      : {
          street: null,
          suburb: null,
          state: null,
          postcode: null,
          documentType: null,
          addressProofFile: null,
        };

    setValues({ ...values, postalAddress, [target.name]: target.checked });
  };

  return (
    <div className="container-fluid">
      {/* <Progress
        strokeColor={{
          from: '#108ee9',
          to: '#87d068',
        }}
        percent={(current/10)*100}
        status="active"
      /> */}
      <div className="p-3">
        <Link href="/">
          <a className="navbar-brand customsss">
            <Image src={dlogo} height={80} width={190} alt="logo" />
          </a>
        </Link>
      </div>
      <div className="px-4">
        {current > 0 &&
          (data.status === "Draft" ? (
            <>
              {current === 11 && (
                <h3 className="container text-secondary my-3">
                  Please review your Application and Submit
                </h3>
              )}
            </>
          ) : data.status === "Pending" ? (
            <div className="alert alert-success text-center fw-bold">
              Your application has been Submitted.
            </div>
          ) : data.status === "Rejected" ? (
            <div className="alert alert-danger text-center">
              <strong>Your application is Rejected.</strong> <br /> Please
              contact drivus for your query.
            </div>
          ) : (
            <div className="container my-3">
              Application Status:{" "}
              <strong className="text-success">Approved</strong>
            </div>
          ))}
      </div>
      <div>{currentStep(current)}</div>
    </div>
  );
};

export default Registration;
