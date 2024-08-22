import { UploadOutlined } from "@ant-design/icons";
import { Button, Image, Loading } from "@nextui-org/react";
import {
  Button as AntButton,
  Form,
  Input,
  Radio,
  Select,
  Upload,
  message,
} from "antd";
import React, { useEffect, useState } from "react";
import { MdOutlineArrowBackIos } from "react-icons/md";
import { saveApplication } from "../../service/lead.service";
import { beforeFileUpload } from "../../utils/file-permission";
import StepProgress from "../StepProgress";

const licenseTypes = ["Learners", "Red P", "Green P", "Unrestricted"];
const AUSTRALIAN_DRIVER_LICENSE = "Australian Driver License";
const OVERSEAS_DRIVER_LICENSE = "Overseas Driver License";
const NO_LICENSE = "No License";

const StepDrivingLicense = ({
  current,
  data,
  setData,
  prevStep,
  nextStep,
  setDrivingLicense,
}) => {
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);
  const [licenseOrigin, setLicenseOrigin] = useState(AUSTRALIAN_DRIVER_LICENSE);
  // console.log("licenseOrigin:", licenseOrigin);

  useEffect(() => {
    const newData = { ...data.drivingLicense };

    if (data.drivingLicense?.filePath) {
      newData.filePath = data.drivingLicense.filePath;
      newData.fileList = [
        {
          uid: "dl_1",
          name: data.drivingLicense.filePath,
          url: `${process.env.NEXT_PUBLIC_BASE_URL}/uploads/${data.drivingLicense.filePath}`,
        },
      ];
    }
    if (newData.licenseOrigin) setLicenseOrigin(newData.licenseOrigin);
    form.setFieldsValue(newData);
  }, [current, data.id]);

  const normFile = (e) => {
    if (Array.isArray(e)) return e;
    const filePath = e.file?.response?.file[0]?.filename;
    form.setFieldsValue({ filePath });
    return e && e.fileList;
  };

  const handleFinish = async (values) => {
    if (!isModified(values)) return nextStep();

    const newData = {
      drivingLicense: {
        licenseOrigin: licenseOrigin,
        type: values.type,
        filePath: values.filePath,
      },
    };

    setLoading(true);

    setTimeout(async () => {
      try {
        await saveApplication(data.id, newData);
        setLoading(false);
        setData({ ...data, ...newData });
        setDrivingLicense({
          licenseOrigin: licenseOrigin,
          type: values.type,
          filePath: values.filePath,
        });
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
    const {
      licenseOrigin: licenseOrigins,
      type,
      filePath,
    } = data.drivingLicense || {};
    if (
      licenseOrigins !== licenseOrigin ||
      type !== values.type ||
      filePath !== values.filePath
    )
      return true;

    return false;
  };

  const handleUpload = async ({ file, onSuccess, onError }) => {
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

  return (
    <div className="container">
      <div className="row" style={{ minHeight: "575px" }}>
        <div className="col-md-8">
          <Form
            form={form}
            autoComplete="off"
            onFinish={handleFinish}
            // initialValues={{ licenseOrigin: AUSTRALIAN_DRIVER_LICENSE }}
          >
            {(values) => (
              <div className="row">
                <div
                  style={{ color: "#272561" }}
                  className="col-12 mt-5 mb-4 pt-lg-5"
                >
                  <h2 style={{ color: "#272561" }}>
                    Please select your Driving License type.
                  </h2>
                </div>
                <div className="col-md-4 d-flex gap-2 mb-4">
                  <Button
                    color="pink"
                    className="custom-button"
                    onClick={() => setLicenseOrigin(AUSTRALIAN_DRIVER_LICENSE)}
                    bordered={licenseOrigin !== AUSTRALIAN_DRIVER_LICENSE}
                  >
                    Australian Driver License
                  </Button>
                  <Button
                    color="pink"
                    className="custom-button"
                    onClick={() => setLicenseOrigin(OVERSEAS_DRIVER_LICENSE)}
                    bordered={licenseOrigin !== OVERSEAS_DRIVER_LICENSE}
                  >
                    Overseas Driver License
                  </Button>
                  <Button
                    color="pink"
                    className="custom-button"
                    onClick={() => setLicenseOrigin(NO_LICENSE)}
                    bordered={licenseOrigin !== NO_LICENSE}
                  >
                    No License
                  </Button>
                  {/* <Form.Item
                    name="licenseOrigin"
                    rules={[
                      {
                        required: true,
                        message: "Origin is required",
                      },
                    ]}
                  >
                    <Radio.Group size="large">
                      <Radio value={AUSTRALIAN_DRIVER_LICENSE}>
                        Australian Driver License
                      </Radio>
                      <Radio value={OVERSEAS_DRIVER_LICENSE}>
                        Overseas Driver License
                      </Radio>
                      <Radio value={NO_LICENSE}>No License</Radio>
                    </Radio.Group>
                  </Form.Item> */}
                </div>

                <div className="col-md-12"></div>
                {licenseOrigin !== NO_LICENSE && (
                  <>
                    <div className="col-md-6">
                      <Form.Item
                        name="type"
                        rules={[
                          {
                            required:
                              licenseOrigin === AUSTRALIAN_DRIVER_LICENSE,
                            message: "Driving License Type is required",
                          },
                        ]}
                      >
                        <Select
                          size="large"
                          allowClear
                          showArrow
                          placeholder="Type of Driving license"
                          optionFilterProp="children"
                          filterOption={(input, option) =>
                            option.children
                              .toLowerCase()
                              .indexOf(input.toLowerCase()) >= 0
                          }
                        >
                          {licenseTypes.map((item, idx) => (
                            <Select.Option key={idx} value={item}>
                              {item}
                            </Select.Option>
                          ))}
                        </Select>
                      </Form.Item>

                      <Form.Item name="filePath" hidden>
                        <Input />
                      </Form.Item>
                    </div>

                    <div className="col-md-6">
                      <Form.Item
                        name="fileList"
                        valuePropName="fileList"
                        getValueFromEvent={normFile}
                        rules={[
                          {
                            required:
                              licenseOrigin === AUSTRALIAN_DRIVER_LICENSE,
                            message: "File is required",
                          },
                        ]}
                        extra={
                          <ul>
                            <li>
                              <small>Maximum file size allowed is 5mb</small>
                            </li>
                            <li>
                              <small>
                                The following formats are allowed: JPG, PNG,
                                PDF, BMP
                              </small>
                            </li>
                          </ul>
                        }
                      >
                        <Upload
                          name="file"
                          maxCount={1}
                          customRequest={handleUpload}
                          beforeFileUpload={beforeFileUpload}
                        >
                          {(values?.fileList || []).length < 1 && (
                            <AntButton icon={<UploadOutlined />}>
                              Upload
                            </AntButton>
                          )}
                        </Upload>
                      </Form.Item>
                    </div>
                  </>
                )}

                <div className="col-12 d-flex mt-5">
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
        <div className="col-md-4">
          <Image
            src="/img/driving-license.png"
            alt="Driving License"
            width={700}
            height={500}
          />
        </div>
      </div>

      {/* <div className="container position-fixed w-100 bottom-0">
        <StepProgress percent={40} />
      </div> */}
    </div>
  );
};

export default StepDrivingLicense;
