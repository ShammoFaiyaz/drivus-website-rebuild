import React, { useEffect, useState } from "react";
import { Button, Checkbox, Image, Loading } from "@nextui-org/react";
import { Form, message } from "antd";
import { saveApplication } from "../../service/lead.service";
import StepProgress from "../StepProgress";
import { MdOutlineArrowBackIos } from "react-icons/md";

const StepAgree = ({ current, data, setData, prevStep, nextStep }) => {
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // console.log("data", data.isAgreed);
    if (data.isAgreed) {
      form.setFieldsValue({ isAgreed: data.isAgreed });
    }
  }, [current, data.id, data.isAgreed]);

  const handleFinish = async (values) => {
    const newData = { isAgreed: values.isAgreed };

    if (data.isAgreed === newData.isAgreed) return nextStep();
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

  return (
    <div className="container">
      <div className="row" style={{ minHeight: "650px" }}>
        <div className="col-md-8">
          <Form form={form} autoComplete="off" onFinish={handleFinish}>
            {(values) => (
              <div className="row">
                <div className="col-12 mt-5 pt-lg-5">
                  <h3>
                    By checking the box below, you are making a legally
                    enforceable declaration that you do not intend to use any
                    Drivus vehicles for Ridesharing purposes (e.g. Uber / Didi /
                    Ola etc.). Doing so will have legally penalizing
                    consequences.
                  </h3>
                </div>
                <div className="col-12 my-5">
                  <Form.Item
                    name="isAgreed"
                    valuePropName="checked"
                    rules={[
                      {
                        validator: (_, value) =>
                          value
                            ? Promise.resolve()
                            : Promise.reject(
                                new Error("Should accept agreement")
                              ),
                      },
                    ]}
                  >
                    <Checkbox
                      className={`w-75 p-3 rounded border ${
                        values.isAgreed && "border-primary"
                      } ride`}
                    >
                      Agree
                    </Checkbox>
                  </Form.Item>
                </div>
                <div className="col-12 d-flex">
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
                    color="secondary"
                    bordered
                    auto
                    onClick={nextStep}
                  >{`Skip >>`}</Button>
                  <Button auto className="ms-2" color="secondary" type="submit">
                    {!!data.isAgreed === !!values.isAgreed
                      ? "Continue"
                      : "Save & Continue"}
                  </Button>
                  {loading && <Loading className="m-2" type="spinner" />}
                </div>
              </div>
            )}
          </Form>
        </div>

        <div className="col-4">
          <Image src="/img/agree.png" alt="Driving License" width={700} />
        </div>
      </div>

      <div className="container position-fixed w-100 bottom-0">
        <StepProgress percent={20} />
      </div>
    </div>
  );
};

export default StepAgree;
