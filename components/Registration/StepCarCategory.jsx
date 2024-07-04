import React, { useEffect, useState } from "react";
import { Button, Image, Loading } from "@nextui-org/react";
import { Form, Radio, Space, message } from "antd";
import { MdOutlineArrowBackIos } from "react-icons/md";
import { saveApplication } from "../../service/lead.service";
import StepProgress from "../StepProgress";

const StepCarCategory = ({ current, data, setData, prevStep, nextStep }) => {
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    form.setFieldsValue({ desiredCar: data.desiredCar });
  }, [current, data.id, data.desiredCar]);

  const handleFinish = async (values) => {
    const newData = { desiredCar: values.desiredCar };

    // return console.log("data", values);
    if (data.desiredCar === newData.desiredCar) return nextStep();

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

  const carImages = {
    "Base model Sedan": "sedan1.png",
    "Mid range Sedan": "sedan2.jpg",
    "Top range Sedan": "top-range-sedan.jpg",
    Suv: "suv1.png",
    "Premium car": "premium-car.jpg",
    "7-8 Seater": "seater7.jpg",
    UTE: "audi.png",
  };

  return (
    <div className="container">
      <div className="row" style={{ minHeight: "650px" }}>
        <div className="col-md-7">
          <Form form={form} autoComplete="off" onFinish={handleFinish}>
            {(values) => (
              <div className="row mt-5">
                <div className="col-12 pt-lg-5">
                  <h2>Please choose which category of car you desire</h2>
                </div>
                <div className="col-12 my-4">
                  <Form.Item
                    name="desiredCar"
                    rules={[
                      {
                        required: true,
                        message: "Please choose your desired car",
                      },
                    ]}
                  >
                    <Radio.Group>
                      <Space direction="vertical">
                        <Radio value="Top range Sedan">
                          Sedans: $300 - $350
                        </Radio>
                        <Radio value="Suv">5 seater SUVs: $350 - $400</Radio>
                        <Radio value="UTE">UTEs: $400 - $450</Radio>
                        <Radio value="7-8 Seater">
                          7- 8 seaters: $400 - $450
                        </Radio>
                      </Space>
                    </Radio.Group>
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
                    {(!data.desiredCar && !values.desiredCar) ||
                    values.desiredCar === data.desiredCar
                      ? "Continue"
                      : "Save & Continue"}
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
              src={`/img/car/${
                carImages[form.getFieldValue("desiredCar")] || "cars.jpg"
              }`}
              alt="Driving License"
              width={700}
            />
          </div>
        </div>
      </div>

      <div className="container position-fixed w-100 bottom-0">
        <StepProgress percent={70} />
      </div>
    </div>
  );
};

export default StepCarCategory;
