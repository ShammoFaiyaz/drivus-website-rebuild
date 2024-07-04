import React, { useEffect, useState } from "react";
import { Button, Image, Loading } from "@nextui-org/react";
import { Form, message, Select, Input } from "antd";
import { MdOutlineArrowBackIos } from "react-icons/md";
import { saveApplication } from "../../service/lead.service";
import StepProgress from "../StepProgress";
import { countries, getValidationPattern } from "../../utils/countries";

const StepPhoneNumber = ({ current, data, setData, prevStep, nextStep }) => {
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (data.phoneNo) {
      const [countryCode, phoneNumber] = data.phoneNo.split(" ");
      form.setFieldsValue({ countryCode, phoneNumber });
    }
  }, [current, data.id]);

  const handleFinish = async (values) => {
    const newData = {
      phoneNo: values.countryCode + " " + values.phoneNumber,
    };

    if (!isModified(values)) return nextStep();

    setLoading(true);
    setTimeout(async () => {
      try {
        await saveApplication(data.id, newData);
        setLoading(false);
        setData({ ...data, ...newData });
        nextStep();
      } catch (err) {
        setLoading(false);
        message.error("Something went wrong!!");
        if (err.response?.data) {
          console.log(err.response.data.errors);
        }
      }
    }, 300);
  };

  const isModified = (values) => {
    const newPhoneNo = values.countryCode + " " + values.phoneNumber;
    return data.phoneNo !== newPhoneNo;
  };

  return (
    <div className="container">
      <div className="row" style={{ minHeight: "650px" }}>
        <div className="col-md-7">
          <Form
            form={form}
            autoComplete="off"
            onFinish={handleFinish}
            initialValues={{ countryCode: "61" }}
          >
            {(values) => (
              <div className="row">
                <div className="col-12 my-5 pt-lg-5">
                  <h2>Please provide your Phone Number</h2>
                </div>
                <div className="col-md-5">
                  <Form.Item
                    name="phoneNumber"
                    rules={[
                      {
                        required: true,
                        message: "Phone number is required",
                      },
                      {
                        validator: (_, value) => {
                          if (value && !/^[0-9]+$/.test(value))
                            return Promise.reject("Enter number!");
                          const country = countries.find(
                            (c) => c.phone_code === values.countryCode
                          );
                          const pattern = getValidationPattern(country.id);
                          if (value && !pattern.test(value))
                            return Promise.reject("Wrong format!");
                          return Promise.resolve();
                        },
                      },
                    ]}
                  >
                    <Input
                      size="large"
                      addonBefore={
                        <Form.Item name="countryCode" className="mb-0" noStyle>
                          <Select
                            style={{ width: "110px" }}
                            showSearch
                            filterOption={(input, option) =>
                              option.children
                                .toString()
                                .toLowerCase()
                                .includes(input.toLowerCase())
                            }
                          >
                            {countries.map((country) => (
                              <Select.Option
                                key={country.id}
                                value={country.phone_code}
                              >
                                {country.iso2} (+{country.phone_code})
                              </Select.Option>
                            ))}
                          </Select>
                        </Form.Item>
                      }
                      placeholder="Enter phone number"
                      color="primary"
                      style={{ width: "400px" }}
                    />
                  </Form.Item>
                </div>

                <div className="col-12 d-flex mt-5">
                  <Button
                    size="lg"
                    auto
                    className="back-button"
                    onClick={prevStep}
                  >
                    <MdOutlineArrowBackIos size={18} className="me-2 mb-1" />
                    Back
                  </Button>
                  <Button color="secondary" bordered auto onClick={nextStep}>
                    {`Skip >>`}
                  </Button>
                  <Button auto className="ms-2" color="secondary" type="submit">
                    {isModified(values) ? "Save & Continue" : "Continue"}
                  </Button>
                  {loading && <Loading className="m-2" type="spinner" />}
                </div>
              </div>
            )}
          </Form>
        </div>
        <div className="col-md-5">
          <Image
            src="/img/phone-number.svg"
            alt="Phone Number"
            width={700}
            height={500}
          />
        </div>
      </div>

      <div className="container position-fixed w-100 bottom-0">
        <StepProgress percent={95} />
      </div>
    </div>
  );
};

export default StepPhoneNumber;
