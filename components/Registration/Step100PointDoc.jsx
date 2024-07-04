import React, { useEffect, useState } from "react";
import {
  MinusCircleOutlined,
  PlusOutlined,
  UploadOutlined,
} from "@ant-design/icons";
import { Button, Checkbox, Image, Loading } from "@nextui-org/react";
import {
  Alert,
  Button as AntButton,
  Form,
  Input,
  Progress,
  Select,
  Upload,
  message,
} from "antd";
import { MdOutlineArrowBackIos } from "react-icons/md";
import { saveApplication } from "../../service/lead.service";
import {
  primaryDocumentTypes,
  secondaryDocumentTypes,
} from "../../utils/array";
import StepProgress from "../StepProgress";
import { beforeFileUpload } from "../../utils/file-permission";

const AUSTRALIAN_DRIVER_LICENSE = "Australian Driver License";

const Step100PointDoc = ({
  current,
  data,
  setData,
  prevStep,
  nextStep,
  setDrivingLicense,
  drivingLicense,
}) => {
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);
  const [drivingLc, setDrivingLc] = useState(false);

  useEffect(() => {
    let newPrimaryDocuments = [...(data.primaryDocuments || [{}])];

    const find = newPrimaryDocuments.find(
      (primaryDocument) =>
        primaryDocument.type === "Australian Driver Licence/Learner’s Permit"
    );
    setDrivingLc(find);
    if (drivingLicense?.licenseOrigin === AUSTRALIAN_DRIVER_LICENSE && !find) {
      newPrimaryDocuments.unshift({
        type: "Australian Driver Licence/Learner’s Permit",
        filePath: drivingLicense.filePath,
      });
    }
    const primaryDocuments = createDocumentList(newPrimaryDocuments, "primary");
    const secondaryDocuments = createDocumentList(
      data.secondaryDocuments,
      "secondary"
    );

    form.setFieldsValue({ primaryDocuments, secondaryDocuments });
  }, [
    current,
    data.id,
    data.primaryDocuments,
    data.secondaryDocuments,
    data.drivingLicense,
  ]);

  const createDocumentList = (documents, typePrefix) =>
    (documents || [{}]).map((item, idx) => {
      const newItem = {};
      if (item.type) {
        newItem.preType = item.type;
        newItem.type = item.type;
      }
      if (item.filePath) {
        newItem.preFilePath = item.filePath;
        newItem.filePath = item.filePath;
        newItem.fileList = [
          {
            uid: `${typePrefix}_${idx}`,
            name: item.filePath,
            url: `${process.env.NEXT_PUBLIC_BASE_URL}/uploads/${item.filePath}`,
          },
        ];
      }
      return newItem;
    });

  const normFile = (e, arrName, key) => {
    if (Array.isArray(e)) return e;
    const filePath = e.file?.response?.file[0]?.filename;
    const documents = [...form.getFieldValue(arrName)];
    if (documents[key]) {
      documents[key].filePath = filePath;
    }
    form.setFieldsValue({ [arrName]: documents });
    return e && e.fileList;
  };

  const handleFinish = async (values) => {
    const newData = {};

    const modified = isModified(values);
    if (!modified) return nextStep();

    if (modified.primary) {
      newData.primaryDocuments = values.primaryDocuments.map(
        ({ type, filePath }) => ({ type, filePath })
      );
    }
    if (modified.secondary) {
      newData.secondaryDocuments = values.secondaryDocuments.map(
        ({ type, filePath }) => ({ type, filePath })
      );
    }
    if (values.primaryDocuments.length === 0) {
      return message.error("Primary Documents must be Selected");
    }
    if (values.secondaryDocuments.length === 0) {
      return message.error("Secondary Documents must be Selected");
    }

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
    let primary = false,
      secondary = false;
    if (data.primaryDocuments?.length !== values.primaryDocuments?.length)
      primary = true;
    if (data.secondaryDocuments?.length !== values.secondaryDocuments?.length)
      secondary = true;

    if (!primary && !secondary) {
      values.primaryDocuments?.forEach(
        ({ type, preType, filePath, preFilePath }) => {
          if (type !== preType || filePath !== preFilePath)
            return (primary = true);
        }
      );
      values.secondaryDocuments?.forEach(
        ({ type, preType, filePath, preFilePath }) => {
          if (type !== preType || filePath !== preFilePath)
            return (secondary = true);
        }
      );
    }

    return primary || secondary ? { primary, secondary } : null;
  };

  const getTotalPoint = (values) => {
    let documents = [];
    if (values.primaryDocuments) documents = [...values.primaryDocuments];
    if (values.secondaryDocuments)
      documents = [...documents, ...values.secondaryDocuments];
    return documents.reduce(
      (acc, curr) => acc + (documentType[curr.type] || 0),
      0
    );
  };

  const documentType = [
    ...primaryDocumentTypes,
    ...secondaryDocumentTypes,
  ].reduce((acc, cur) => ({ ...acc, [cur.name]: cur.point }), {});

  const handleUpload = async ({ file, onSuccess, onError }) => {
    setLoading(true);
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
      setLoading(false);
      message.success("File uploaded successfully.");
    } catch (error) {
      console.error("Upload error:", error);
      onError(error);
      setLoading(false);
      message.error("File upload failed.");
    }
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
                <div className="col-12 my-3">
                  <h2>
                    Please provide documents to complete your 100 points ID
                    check.
                  </h2>
                </div>
                <div className="col-md-12">
                  <h6 className="text-primary">Primary Documents</h6>
                  <Form.List name="primaryDocuments">
                    {(fields, { add, remove }) => (
                      <>
                        {fields.map(({ key, name }) => (
                          <div className="row" key={key}>
                            <div className="col-6">
                              <Form.Item
                                name={[name, "type"]}
                                rules={[
                                  {
                                    required: true,
                                    message: "Type is required",
                                  },
                                ]}
                              >
                                <Select
                                  allowClear
                                  showSearch
                                  style={{ width: "100%" }}
                                  placeholder="Select Document Type"
                                  optionFilterProp="children"
                                  filterOption={(input, option) =>
                                    option.children
                                      .toLowerCase()
                                      .indexOf(input.toLowerCase()) >= 0
                                  }
                                >
                                  {primaryDocumentTypes.map((item) => (
                                    <Select.Option
                                      key={item.id}
                                      value={item.name}
                                    >
                                      {item.name}
                                    </Select.Option>
                                  ))}
                                </Select>
                              </Form.Item>
                            </div>

                            <div className="col-1">
                              <div>
                                {
                                  documentType[
                                    values.primaryDocuments[name]?.type
                                  ]
                                }
                              </div>

                              <Form.Item name={[name, "preType"]} hidden>
                                <Input />
                              </Form.Item>

                              <Form.Item name={[name, "filePath"]} hidden>
                                <Input />
                              </Form.Item>

                              <Form.Item name={[name, "preFilePath"]} hidden>
                                <Input />
                              </Form.Item>
                            </div>

                            <div className="col-4">
                              <Form.Item
                                name={[name, "fileList"]}
                                valuePropName="fileList"
                                getValueFromEvent={(e) =>
                                  normFile(e, "primaryDocuments", name)
                                }
                                rules={[
                                  {
                                    required: true,
                                    message: "File is required",
                                  },
                                ]}
                              >
                                <Upload
                                  name="file"
                                  maxCount={1}
                                  customRequest={handleUpload}
                                  beforeFileUpload={beforeFileUpload}
                                >
                                  {(
                                    values.primaryDocuments[name]?.fileList ||
                                    []
                                  ).length < 1 && (
                                    <AntButton icon={<UploadOutlined />}>
                                      Upload
                                    </AntButton>
                                  )}
                                </Upload>
                              </Form.Item>
                            </div>
                            <div className="col-1">
                              <MinusCircleOutlined
                                className="delete"
                                onClick={() => {
                                  const documentType = form.getFieldValue([
                                    "primaryDocuments",
                                    name,
                                    "type",
                                  ]);
                                  if (
                                    documentType ===
                                    "Australian Driver Licence/Learner’s Permit"
                                  ) {
                                    setDrivingLicense({});
                                  }
                                  remove(name);
                                }}
                              />
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
                                PDF, BMP
                              </small>
                            </li>
                          </ul>
                        </div>
                      </>
                    )}
                  </Form.List>
                </div>

                <div className="col-md-12">
                  <h6 className="text-primary">Secondary Documents</h6>
                  <Form.List name="secondaryDocuments">
                    {(fields, { add, remove }) => (
                      <>
                        {fields.map(({ key, name }) => (
                          <div className="row" key={key}>
                            <div className="col-6">
                              <Form.Item
                                name={[name, "type"]}
                                rules={[
                                  {
                                    required: true,
                                    message: "Type is required",
                                  },
                                ]}
                              >
                                <Select
                                  allowClear
                                  showSearch
                                  style={{ width: "100%" }}
                                  placeholder="Select Document Type"
                                  optionFilterProp="children"
                                  filterOption={(input, option) =>
                                    option.children
                                      .toLowerCase()
                                      .indexOf(input.toLowerCase()) >= 0
                                  }
                                >
                                  {secondaryDocumentTypes.map((item) => (
                                    <Select.Option
                                      key={item.id}
                                      value={item.name}
                                    >
                                      {item.name}
                                    </Select.Option>
                                  ))}
                                </Select>
                              </Form.Item>
                            </div>

                            <div className="col-1">
                              {
                                documentType[
                                  values.secondaryDocuments[name]?.type
                                ]
                              }

                              <Form.Item name={[name, "preType"]} hidden>
                                <Input />
                              </Form.Item>

                              <Form.Item name={[name, "filePath"]} hidden>
                                <Input />
                              </Form.Item>

                              <Form.Item name={[name, "preFilePath"]} hidden>
                                <Input />
                              </Form.Item>
                            </div>

                            <div className="col-4">
                              <Form.Item
                                name={[name, "fileList"]}
                                valuePropName="fileList"
                                getValueFromEvent={(e) =>
                                  normFile(e, "secondaryDocuments", name)
                                }
                                rules={[
                                  {
                                    required: true,
                                    message: "File is required",
                                  },
                                ]}
                              >
                                <Upload
                                  name="file"
                                  maxCount={1}
                                  customRequest={handleUpload}
                                >
                                  {(
                                    values.secondaryDocuments[name]?.fileList ||
                                    []
                                  ).length < 1 && (
                                    <AntButton icon={<UploadOutlined />}>
                                      Upload
                                    </AntButton>
                                  )}
                                </Upload>
                              </Form.Item>
                            </div>
                            <div className="col-1">
                              <MinusCircleOutlined
                                className="delete"
                                onClick={() => remove(name)}
                              />
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
                                PDF, BMP
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
                {getTotalPoint(form.getFieldsValue()) < 100 && (
                  <div className="col-md-12">
                    <Alert
                      type="error"
                      message="Application will not be approved without 100 points ID.
                          Do you still wish to continue?  OR Upload more ID documents"
                    />
                  </div>
                )}
              </div>
            )}
          </Form>
        </div>
        <div className="col-md-5">
          <div className="row mt-lg-5 pt-lg-5">
            <div className="col-md-7 mt-lg-5 pt-lg-5 text-center">
              <Progress
                size="small"
                type="circle"
                strokeColor={{
                  "0%": "#108ee9",
                  "100%": "#87d068",
                }}
                percent={getTotalPoint(form.getFieldsValue())}
                format={() => getTotalPoint(form.getFieldsValue())}
              />
              <h6 className="mt-3">Total Point of Documents</h6>
            </div>
            <div className="col-md-5 ">
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
        <StepProgress percent={50} />
      </div>
    </div>
  );
};

export default Step100PointDoc;
