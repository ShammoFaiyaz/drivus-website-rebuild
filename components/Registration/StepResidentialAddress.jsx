import React, { useEffect, useState } from "react";
import { Button, Checkbox, Image, Input, Loading } from "@nextui-org/react";
import { Form, message } from "antd";
import { saveApplication } from "../../service/lead.service";
import StepProgress from "../StepProgress";
import { MdOutlineArrowBackIos } from "react-icons/md";

const StepResidentialAddress = ({
  current,
  data,
  setData,
  prevStep,
  nextStep,
}) => {
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const newData = { ...data.residentialAddress };
    if (data.residentialAddress?.filePath) {
      newData.fileList = [
        {
          uid: 1,
          name: data.residentialAddress.filePath,
          url: `${process.env.NEXT_PUBLIC_BASE_URL}/uploads/${data.residentialAddress.filePath}`,
        },
      ];
    }
    form.setFieldsValue(newData);
  }, [current, data.id]);

  const handleFinish = async (values) => {
    const { street, suburb, state, postcode, documentType, filePath } = values;
    const newData = {
      residentialAddress: {
        street,
        suburb,
        state,
        postcode,
        documentType,
        filePath,
      },
    };

    // return console.log(values);
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
        message.error("Something wrong!!");
        if (err.response?.data) {
          console.log(err.response.data.errors);
        }
      }
    }, 300);
  };

  const isModified = (values) => {
    // console.log("Fomvalues", values);
    const { street, suburb, state, postcode, documentType, filePath } =
      data.residentialAddress || {};
    if (
      street !== values.street ||
      suburb !== values.suburb ||
      state !== values.state ||
      postcode !== values.postcode ||
      documentType !== values.documentType ||
      filePath !== values.filePath
    )
      return true;
    return false;
  };

  const isSameAsPostalAddress = (values) => {
    // console.log("Fomvalues", values);
    const { street, suburb, state, postcode, documentType, filePath } =
      data.postalAddress || {};
    if (
      street !== values.street ||
      suburb !== values.suburb ||
      state !== values.state ||
      postcode !== values.postcode ||
      documentType !== values.documentType ||
      filePath !== values.filePath
    )
      return false;
    return true;
  };

  const normFile = (e) => {
    if (Array.isArray(e)) return e;
    const filePath = e.file?.response?.file[0]?.filename;
    form.setFieldsValue({ filePath });
    return e && e.fileList;
  };

  return (
    <div className="container">
      <div className="row" style={{ minHeight: "570px" }}>
        <div className="col-md-7">
          <Form form={form} autoComplete="off" onFinish={handleFinish}>
            <div className="row">
              <div className="col-12 mt-2 pt-lg-5">
                <h2 style={{ color: "#272561" }}>
                  Please provide your Residential Address
                </h2>
              </div>

              <div className="col-md-12">
                <Form.Item
                  name="street"
                  rules={[
                    {
                      required: true,
                      message: "Street name is required",
                    },
                  ]}
                >
                  <Input
                    aria-label="street"
                    placeholder="Street Name"
                    underlined
                    clearable
                    color="primary"
                    style={{ width: "400px" }}
                  />
                </Form.Item>

                <Form.Item
                  name="suburb"
                  rules={[
                    {
                      required: true,
                      message: "Suburb is required",
                    },
                  ]}
                >
                  <Input
                    aria-label="suburb"
                    placeholder="Suburb"
                    underlined
                    clearable
                    color="primary"
                    style={{ width: "400px" }}
                  />
                </Form.Item>

                <Form.Item
                  name="state"
                  rules={[
                    {
                      required: true,
                      message: "State is required",
                    },
                  ]}
                >
                  <Input
                    aria-label="state"
                    placeholder="State"
                    underlined
                    clearable
                    color="primary"
                    style={{ width: "400px" }}
                  />
                </Form.Item>

                <Form.Item
                  name="postcode"
                  rules={[
                    {
                      required: true,
                      message: "Postal Code is required",
                    },
                  ]}
                >
                  <Input
                    placeholder="postcode"
                    aria-label="Postal Code"
                    underlined
                    clearable
                    color="primary"
                    style={{ width: "400px" }}
                  />
                </Form.Item>

                {/* <div className="row">
                  <div className="col-4">
                    <Form.Item
                      name="documentType"
                      rules={[
                        {
                          required: true,
                          message: "Document Type is required",
                        },
                      ]}
                    >
                      <Select
                        size="large"
                        allowClear
                        placeholder="Upload Document"
                      >
                        <Select.Option value="Electricity Bill">
                          Electricity Bill
                        </Select.Option>
                        <Select.Option value="Gas Bill">Gas Bill</Select.Option>
                      </Select>
                    </Form.Item>
                  </div>

                  <div className="col-8">
                    <Form.Item noStyle shouldUpdate>
                      {() => (
                        <Form.Item
                          name="fileList"
                          valuePropName="fileList"
                          getValueFromEvent={normFile}
                          rules={[
                            {
                              required: true,
                              message: "File is required",
                            },
                          ]}
                        >
                          <Upload
                            name="file"
                            // listType='picture'
                            maxCount={1}
                            beforeUpload={() => true}
                            action={`${process.env.NEXT_PUBLIC_BASE_URL}/api/v1/files/uploads`}
                          >
                            {(!form.getFieldValue("fileList") ||
                              form.getFieldValue("fileList").length < 1) && (
                              <Button
                                bordered
                                auto
                                color="secondary"
                                size="sm"
                                icon={<UploadOutlined />}
                              >
                                Upload
                              </Button>
                            )}
                          </Upload>
                        </Form.Item>
                      )}
                    </Form.Item>

                    <Form.Item name="filePath" hidden>
                      <InputNumber />
                    </Form.Item>
                  </div>
                </div> */}
              </div>

              <div className="col-12 my-3">
                <Form.Item noStyle shouldUpdate>
                  {() => (
                    <Form.Item
                      name="isSameAddress"
                      // valuePropName="checked"
                    >
                      <Checkbox
                        checked={isSameAsPostalAddress(form.getFieldsValue())}
                        onChange={({ target }) => {
                          if (target.checked) {
                            const newData = { ...data.postalAddress };
                            if (newData.filePath) {
                              newData.fileList = [
                                {
                                  uid: 1,
                                  name: newData.filePath,
                                  url: `${process.env.NEXT_PUBLIC_BASE_URL}/uploads/${newData.filePath}`,
                                },
                              ];
                            }
                            form.setFieldsValue(newData);
                          } else {
                            form.resetFields();
                          }
                        }}
                        style={{ color: "#272561" }}
                      >
                        Same as postal address ?
                      </Checkbox>
                    </Form.Item>
                  )}
                </Form.Item>
              </div>

              <div className="col-12">
                <Form.Item noStyle shouldUpdate>
                  {() => (
                    <Form.Item>
                      <div className="d-flex">
                        <Button
                          size="lg"
                          auto
                          className="back-button"
                          onClick={() => prevStep()}
                        >
                          <MdOutlineArrowBackIos
                            size={18}
                            className="me-2 mb-1"
                          />
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
                          {isModified(form.getFieldsValue())
                            ? "Save & Continue"
                            : "Continue"}
                        </Button>
                        {loading && <Loading className="m-2" type="spinner" />}
                      </div>
                    </Form.Item>
                  )}
                </Form.Item>
              </div>
            </div>
          </Form>
        </div>
        <div className="col-md-5">
          <Image
            src="/img/maps.png"
            alt="Driving License"
            width={700}
            height={500}
          />
        </div>
      </div>

      {/* <div className="container position-fixed w-100 bottom-0">
        <StepProgress percent={90} />
      </div> */}
    </div>
  );
};

export default StepResidentialAddress;
