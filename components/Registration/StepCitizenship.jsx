import React, { useEffect, useState } from "react";
import { Button, Image, Input, Loading } from "@nextui-org/react";
import { Form, Radio, message } from "antd";
import { saveApplication } from "../../service/lead.service";
import StepProgress from "../StepProgress";

const SetpCitizen = ({ current, data, setData, prevStep, nextStep }) => {
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // console.log("data", data.isAgree);
    form.setFieldsValue({
      citizenship: data.citizenship,
      residency: data.residency,
    });
  }, [current, data.id]);

  const handleFinish = async (values) => {
    const { citizenship, residency } = values;
    const newData = { citizenship, residency };
    // return console.log("data", values, data.citizenship, data.residency);

    if (!isModified(newData)) return nextStep();

    setLoading(true);
    setTimeout(async () => {
      try {
        await saveApplication(data.id, newData);
        setLoading(false);
        setData({ ...data, ...newData });
        nextStep();
      } catch (err) {
        setLoading(false);
        message.error("Something wrong!!");
        if (err.response?.data) {
          console.log(err.response.data.errors);
        }
      }
    }, 300);
  };

  const isModified = (values) => {
    if (data.citizenship !== values.citizenship) return true;
    if (data.citizenship === "Other" && data.residency !== values.residency)
      return true;
    return false;
  };

  return (
    <div className="container">
      <div className="row" style={{ minHeight: "580px" }}>
        <div className="col-md-7">
          <Form form={form} autoComplete="off" onFinish={handleFinish}>
            {(values) => (
              <div className="row mt-5">
                <div className="col-12 my-5 pt-lg-5">
                  <h2 style={{ color: "#272561" }}>
                    Please choose the country of your citizenship or permanent
                    residency.
                  </h2>
                </div>
                <div className="col-12 mb-5">
                  <Form.Item
                    name="citizenship"
                    rules={[
                      {
                        required: true,
                        message: "Please provide Citizenship or residency",
                      },
                    ]}
                  >
                    <Radio.Group size="large">
                      <Radio.Button style={{ color: "#272561" }} value="AUS">
                        AUS
                      </Radio.Button>
                      <Radio.Button style={{ color: "#272561" }} value="NZ">
                        NZ
                      </Radio.Button>
                      <Radio.Button style={{ color: "#272561" }} value="Other">
                        Other Residency
                      </Radio.Button>
                    </Radio.Group>
                  </Form.Item>
                </div>
                {values.citizenship === "Other" && (
                  <div className="col-12 mb-4">
                    <Form.Item
                      name="residency"
                      rules={[
                        {
                          required: true,
                          message: "Residency is required",
                        },
                      ]}
                    >
                      <Input
                        size="lg"
                        clearable
                        underlined
                        color="primary"
                        labelPlaceholder="Enter your Residency"
                        style={{ width: "400px" }}
                      />
                    </Form.Item>
                  </div>
                )}
                <div className="col-12 d-flex">
                  {/* <Button
                    size="lg"
                    auto
                    className="back-button"
                    onClick={() => prevStep()}
                  >
                    <MdOutlineArrowBackIos size={18} className="me-2 mb-1" />
                    Back
                  </Button> */}
                  <Button
                    color="secondary"
                    bordered
                    auto
                    onClick={nextStep}
                  >{`Skip >>`}</Button>
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
          <div className="mt-5">
            <Image
              src="/img/citizenship.png"
              alt="Driving License"
              width={700}
            />
          </div>
        </div>
      </div>

      {/* <div className="container position-fixed w-100 bottom-0">
        <StepProgress percent={10} />
      </div> */}
    </div>
  );
};

export default SetpCitizen;
