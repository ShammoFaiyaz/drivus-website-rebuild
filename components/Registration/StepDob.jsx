import React, { useEffect, useState } from "react";
import { Button, Image, Loading } from "@nextui-org/react";
import { Form, Select, message } from "antd";
import { MdOutlineArrowBackIos } from "react-icons/md";
import { saveApplication } from "../../service/lead.service";
import { days, months } from "../../utils/array";
import StepProgress from "../StepProgress";

const StepDob = ({ current, data, setData, prevStep, nextStep }) => {
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (data.dob) {
      const [year, month, day] = data.dob.split("-");
      form.setFieldsValue({ year, month, day });
    }
  }, [current, data.id, data.dob]);

  const handleFinish = async (values) => {
    const newData = { dob: `${values.year}-${values.month}-${values.day}` };
    // return console.log(data?.id, values, dob);

    if (data.dob === newData.dob) return nextStep();

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
      <div className="row" style={{ minHeight: "575px" }}>
        <div className="col-md-7">
          <Form form={form} autoComplete="off" onFinish={handleFinish}>
            {(values) => (
              <div className="row">
                <div className="col-12 mt-5 mb-4 pt-lg-5">
                  <h2 style={{ color: "#272561" }}>
                    Please provide your date of birth.
                  </h2>
                </div>
                <div className="col-4">
                  <Form.Item
                    name="day"
                    rules={[
                      {
                        required: true,
                        message: "Day is required",
                      },
                    ]}
                  >
                    <Select
                      size="large"
                      showSearch
                      allowClear
                      placeholder="Select Day"
                      optionFilterProp="children"
                      filterOption={(input, option) =>
                        option.children
                          .toLowerCase()
                          .indexOf(input.toLowerCase()) >= 0
                      }
                    >
                      {days.map((day) => (
                        <Select.Option key={day.value} value={`${day.value}`}>
                          {day.name}
                        </Select.Option>
                      ))}
                    </Select>
                  </Form.Item>
                </div>
                <div className="col-4">
                  <Form.Item
                    name="month"
                    rules={[
                      {
                        required: true,
                        message: "Month is required",
                      },
                    ]}
                  >
                    <Select
                      size="large"
                      showSearch
                      allowClear
                      placeholder="Select Month"
                      optionFilterProp="children"
                      filterOption={(input, option) =>
                        option.children
                          .toLowerCase()
                          .indexOf(input.toLowerCase()) >= 0
                      }
                    >
                      {months.map((month) => (
                        <Select.Option key={month.value} value={month.value}>
                          {month.name}
                        </Select.Option>
                      ))}
                    </Select>
                  </Form.Item>
                </div>
                <div className="col-4">
                  <Form.Item
                    name="year"
                    rules={[
                      {
                        required: true,
                        message: "Year is required",
                      },
                    ]}
                  >
                    <Select
                      size="large"
                      showSearch
                      allowClear
                      placeholder="Select Year"
                      optionFilterProp="children"
                      filterOption={(input, option) =>
                        option.children
                          .toLowerCase()
                          .indexOf(input.toLowerCase()) >= 0
                      }
                    >
                      {Array.from({ length: 103 }, (_, i) => 1920 + i).map(
                        (year) => (
                          <Select.Option key={year + ""} value={year + ""}>
                            {year + ""}
                          </Select.Option>
                        )
                      )}
                    </Select>
                  </Form.Item>
                </div>

                <div className="col-12">
                  <div className="d-flex mt-5">
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
                    <Button
                      auto
                      className="ms-2"
                      color="secondary"
                      type="submit"
                    >
                      {data.dob ===
                      `${values.year}-${values.month}-${values.day}`
                        ? "Continue"
                        : "Save & Continue"}
                    </Button>
                    {loading && <Loading className="m-2" type="spinner" />}
                  </div>
                </div>
              </div>
            )}
          </Form>
        </div>
        <div className="col-md-5">
          <Image
            src="/img/date-of-birth.png"
            alt="Driving License"
            width={700}
            // height={500}
          />
        </div>
      </div>

      {/* <div className="container position-fixed w-100 bottom-0">
        <StepProgress percent={30} />
      </div> */}
    </div>
  );
};

export default StepDob;
