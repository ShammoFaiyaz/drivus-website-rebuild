import React, { useEffect, useState } from "react";
import {
  MinusCircleOutlined,
  PlusOutlined,
  UploadOutlined,
} from "@ant-design/icons";
import { Button, Image, Loading } from "@nextui-org/react";
import {
  Button as AntButton,
  Form,
  Input,
  InputNumber,
  Select,
  Upload,
  message,
} from "antd";
import { MdOutlineArrowBackIos } from "react-icons/md";
import { saveApplication } from "../../service/lead.service";
import StepProgress from "../StepProgress";
import { beforeFileUpload } from "../../utils/file-permission";

const StepIncomeSrc = ({ current, data, setData, prevStep, nextStep }) => {
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const incomeSources = (data.incomeSources || [{}]).map((item, idx) => {
      const newItem = {};
      if (item.name) {
        newItem.preName = item.name;
        newItem.name = item.name;
      }
      if (item.amount) {
        newItem.preAmount = item.amount;
        newItem.amount = item.amount;
      }
      if (item.filePath) {
        newItem.preFilePath = item.filePath;
        newItem.filePath = item.filePath;
        newItem.fileList = [
          {
            uid: `income_${idx}`,
            name: item.filePath,
            url: `${process.env.NEXT_PUBLIC_BASE_URL}/uploads/${item.filePath}`,
          },
        ];
      }
      return newItem;
    });

    form.setFieldsValue({ incomeSources });
  }, [current, data.id]);

  const handleUpload = async ({ file, onSuccess, onError }) => {
    // const isValid = beforeFileUpload(file, { allowAll: true });
    // if (!isValid) {
    //   setLoading(false);
    //   message.error("Invalid file type or size.");
    //   throw new Error("Invalid file type or size.");
    //   // onError(new Error("Invalid file type or size."));
    //   // return;
    // }

    const formData = new FormData();
    formData.append("file", file);

    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL}/api/v1/files/uploads`,
        {
          method: "POST",
          body: formData,
        }
      );

      if (!response.ok) throw new Error("Upload failed");

      const result = await response.json();
      const filePath = result.file[0].filename;
      form.setFieldsValue({ filePath });
      onSuccess(result, file);
      message.success("File uploaded successfully.");
    } catch (error) {
      console.error("Upload error:", error);
      onError(error);
      message.error("File upload failed.");
    }
  };

  const normFile = (e, arrName, key) => {
    if (Array.isArray(e)) return e;
    const filePath =
      e.file?.response?.file && e.file.response.file[0]?.filename;
    // console.log("EEEEEE", filePath, key, e.file);
    const information = [...form.getFieldValue(arrName)];
    if (information[key]) {
      information[key].filePath = filePath;
    }
    form.setFieldsValue({ [arrName]: information });
    return e && e.fileList;
  };

  const handleFinish = async (values) => {
    if (!isModified(values)) nextStep();

    const newData = {
      incomeSources: values.incomeSources.map(({ name, amount, filePath }) => ({
        name,
        amount,
        filePath,
      })),
    };

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
    // thik korte hobe
    let truth = false;
    if (data.incomeSources?.length !== values.incomeSources?.length)
      return true;
    values.incomeSources?.forEach(
      ({ name, preName, amount, preAmount, filePath, preFilePath }) => {
        if (
          name !== preName ||
          amount !== preAmount ||
          filePath !== preFilePath
        )
          return (truth = true);
      }
    );
    return truth;
  };

  return (
    <div className="container">
      <div className="row" style={{ minHeight: "650px" }}>
        <div className="col-md-7">
          <Form
            form={form}
            name="formData"
            autoComplete="off"
            onFinish={handleFinish}
          >
            {(values) => (
              <div className="row">
                <div className="col-12 mt-5 mb-4 pt-lg-5">
                  <h2>Please provide your Income Source Information</h2>
                </div>

                <div className="col-md-12">
                  <h6 className="text-primary">Source of Income</h6>
                  <Form.List name="incomeSources">
                    {(fields, { add, remove }) => (
                      <>
                        {fields.map(({ key, name }) => (
                          <div className="row" key={key}>
                            <div className="col-4">
                              <Form.Item
                                name={[name, "name"]}
                                rules={[
                                  {
                                    required: true,
                                    message: "Name is required",
                                  },
                                ]}
                              >
                                <Select
                                  allowClear
                                  placeholder="Select Income Source"
                                >
                                  <Select.Option key="1" value="Job">
                                    Job
                                  </Select.Option>
                                  <Select.Option key="2" value="Business">
                                    Business
                                  </Select.Option>
                                </Select>
                              </Form.Item>
                            </div>

                            <div className="col-3">
                              <Form.Item
                                name={[name, "amount"]}
                                rules={[
                                  {
                                    required: true,
                                    message: "Amount is required",
                                  },
                                ]}
                              >
                                <InputNumber
                                  placeholder="Enter Amount"
                                  className="w-100"
                                  min={0}
                                />
                              </Form.Item>
                            </div>

                            <>
                              <Form.Item name={[name, "preName"]} hidden>
                                <Input />
                              </Form.Item>

                              <Form.Item name={[name, "preAmount"]} hidden>
                                <Input />
                              </Form.Item>

                              <Form.Item name={[name, "preFilePath"]} hidden>
                                <Input />
                              </Form.Item>

                              <Form.Item name={[name, "filePath"]} hidden>
                                <Input />
                              </Form.Item>
                            </>

                            <div className="col-4">
                              <Form.Item
                                name={[name, "fileList"]}
                                valuePropName="fileList"
                                getValueFromEvent={(e) =>
                                  normFile(e, "incomeSources", name)
                                }
                                // rules={[{ required: true, message: "File is required" }]}
                              >
                                <Upload
                                  name="file"
                                  maxCount={1}
                                  customRequest={handleUpload}
                                  beforeUpload={(file) =>
                                    beforeFileUpload(file, {
                                      allowAll: true,
                                    })
                                  }
                                >
                                  {(values.incomeSources[name]?.fileList || [])
                                    .length < 1 && (
                                    <AntButton icon={<UploadOutlined />}>
                                      Upload Payslip Document
                                    </AntButton>
                                  )}
                                </Upload>
                              </Form.Item>
                            </div>
                            <div className="col-1">
                              {values.incomeSources.length > 1 ? (
                                <MinusCircleOutlined
                                  className="delete"
                                  onClick={() => remove(name)}
                                />
                              ) : (
                                <MinusCircleOutlined className="text-muted" />
                              )}
                            </div>
                          </div>
                        ))}
                        <div className="d-flex align-items-center">
                          <Form.Item>
                            <Button
                              color=""
                              size="sm"
                              auto
                              bordered
                              onClick={() => add({})}
                            >
                              <PlusOutlined className="me-2" /> Add
                            </Button>
                          </Form.Item>
                          <ul>
                            <li>
                              <small>Maximum file size allowed is 5mb</small>
                            </li>
                            <li>
                              <small>
                                The following formats are allowed: JPG, PNG,
                                BMP, WEBP, PDF, DOCX, XLSX
                              </small>
                            </li>
                          </ul>
                        </div>
                      </>
                    )}
                  </Form.List>
                </div>

                <div className="col-8 d-flex my-5">
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
                    {isModified(values) ? "Save & Continue" : "Continue"}
                  </Button>
                  {loading && <Loading className="m-2" type="spinner" />}
                </div>
              </div>
            )}
          </Form>
        </div>
        <div className="col-md-5">
          <div className="row mt-5 pt-lg-5">
            <div className="col-md-11 ">
              <Image
                src="/img/documents.png"
                alt="Driving License"
                width={500}
                height={300}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="container position-fixed w-100 bottom-0">
        <StepProgress percent={60} />
      </div>
    </div>
  );
};

export default StepIncomeSrc;
