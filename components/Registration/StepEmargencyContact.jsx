import { MinusCircleOutlined, PlusOutlined } from "@ant-design/icons";
import { Button, Image, Loading } from "@nextui-org/react";
import { Form, Input, Select, message } from "antd";
import React, { useEffect, useState } from "react";
import { MdOutlineArrowBackIos } from "react-icons/md";
import { saveApplication } from "../../service/lead.service";
import { customerDocumentTypes, relationships } from "../../utils/array";
import StepProgress from "../StepProgress";

const StepEmergencyContact = ({
  current,
  data,
  setData,
  prevStep,
  nextStep,
}) => {
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const contacts = data.contacts.map((item) => {
      const newItem = {};
      if (item.name) newItem.preName = item.name;
      if (item.email) newItem.preEmail = item.email;
      if (item.phone) newItem.prePhone = item.phone;
      if (item.relation) newItem.preRelation = item.relation;
      if (item.address) newItem.preAddress = item.address;
      if (item.identification) {
        newItem.preIdType = item.identification.split("~")[0];
        newItem.idType = item.identification.split("~")[0];
      }
      if (item.identification) {
        newItem.preIdNumber = item.identification.split("~")[1];
        newItem.idNumber = item.identification.split("~")[1];
      }
      return { ...item, ...newItem };
    });
    form.setFieldsValue({
      contacts: contacts.length > 0 ? contacts : [{}, {}, {}],
    });
  }, [current, data.id]);

  const handleFinish = async (values) => {
    if (!isModified(values)) return nextStep();

    const newData = {
      contacts: values.contacts.map(
        ({ name, email, phone, relation, address, idType, idNumber }) => ({
          type: "Contact",
          name,
          email,
          phone,
          relation,
          address,
          identification: idType + "~" + idNumber,
        })
      ),
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
        message.error("Something went wrong!!");
        if (err.response?.data) {
          console.log(err.response.data.errors);
        }
      }
    }, 300);
  };

  const isModified = (values) => {
    if (data.contacts?.length !== values.contacts?.length) return true;
    return values.contacts.some(
      ({
        name,
        preName,
        email,
        preEmail,
        phone,
        prePhone,
        relation,
        preRelation,
        address,
        preAddress,
        identification,
        preIdentification,
      }) =>
        name !== preName ||
        email !== preEmail ||
        phone !== prePhone ||
        relation !== preRelation ||
        address !== preAddress ||
        identification !== preIdentification
    );
  };

  return (
    <div className="container">
      <div
        className="row justify-content-between align-items-start"
        style={{ minHeight: "650px" }}
      >
        <div className="col-md-7">
          <Form
            form={form}
            name="formData"
            autoComplete="off"
            onFinish={handleFinish}
          >
            {(values) => (
              <div className="row">
                <div className="col-12 pt-lg-5">
                  <h2>Please provide your Emergency Contact Details</h2>
                </div>
                <div className="col-md-12">
                  <Form.List name="contacts">
                    {(fields, { add, remove }) => (
                      <>
                        {fields.map(({ key, name }, idx) => (
                          <div
                            className="border rounded-3 shadow-sm d-flex flex-row p-3 mb-3"
                            key={key}
                          >
                            <div className="row">
                              <p>Contact Person #{idx + 1}</p>
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
                                  <Input placeholder="Enter Name" />
                                </Form.Item>
                              </div>
                              <div className="col-4">
                                <Form.Item
                                  name={[name, "relation"]}
                                  rules={[
                                    {
                                      required: true,
                                      message: "Relation is required",
                                    },
                                  ]}
                                >
                                  <Select
                                    showSearch
                                    allowClear
                                    optionFilterProp="children"
                                    filterOption={(input, option) =>
                                      option.children
                                        .toLowerCase()
                                        .indexOf(input.toLowerCase()) >= 0
                                    }
                                    placeholder="Select Relation"
                                    className="w-100"
                                  >
                                    {relationships.map((item, idx) => (
                                      <Select.Option key={idx} value={item}>
                                        {item}
                                      </Select.Option>
                                    ))}
                                  </Select>
                                </Form.Item>
                              </div>
                              <div className="col-4">
                                <Form.Item
                                  name={[name, "email"]}
                                  rules={[
                                    {
                                      type: "email",
                                      message: "Not a valid email!",
                                    },
                                  ]}
                                >
                                  <Input placeholder="Enter Email" />
                                </Form.Item>
                              </div>
                              <div className="col-4">
                                <Form.Item
                                  name={[name, "phone"]}
                                  className="mb-0"
                                  rules={[
                                    {
                                      required: true,
                                      message: "Phone is required",
                                    },
                                  ]}
                                >
                                  <Input placeholder="Enter Phone No." />
                                </Form.Item>
                              </div>
                              <div className="col-4">
                                <Form.Item
                                  name={[name, "idType"]}
                                  className="mb-3"
                                >
                                  <Select
                                    showSearch
                                    allowClear
                                    optionFilterProp="children"
                                    filterOption={(input, option) =>
                                      option.children
                                        .toLowerCase()
                                        .indexOf(input.toLowerCase()) >= 0
                                    }
                                    placeholder="Select identification type"
                                  >
                                    {customerDocumentTypes.map((item, idx) => (
                                      <Select.Option key={idx} value={item}>
                                        {item}
                                      </Select.Option>
                                    ))}
                                  </Select>
                                </Form.Item>
                              </div>
                              <div className="col-4">
                                <Form.Item
                                  name={[name, "idNumber"]}
                                  className="mb-0"
                                >
                                  <Input placeholder="Enter identification number" />
                                </Form.Item>
                              </div>
                              <div className="col-8">
                                <Form.Item
                                  name={[name, "address"]}
                                  className="mb-0"
                                  rules={[
                                    {
                                      required: true,
                                      message: "Address is required",
                                    },
                                  ]}
                                >
                                  <Input.TextArea
                                    rows={2}
                                    placeholder="Enter Address "
                                  />
                                </Form.Item>
                              </div>
                              <Form.Item name={[name, "preName"]} hidden>
                                <Input />
                              </Form.Item>
                              <Form.Item name={[name, "preEmail"]} hidden>
                                <Input />
                              </Form.Item>
                              <Form.Item name={[name, "prePhone"]} hidden>
                                <Input />
                              </Form.Item>
                              <Form.Item name={[name, "preRelation"]} hidden>
                                <Input />
                              </Form.Item>
                              <Form.Item name={[name, "preAddress"]} hidden>
                                <Input />
                              </Form.Item>
                              <Form.Item
                                name={[name, "preIdentification"]}
                                hidden
                              >
                                <Input />
                              </Form.Item>
                            </div>
                            <div className="mx-2">
                              {values.contacts.length > 3 ? (
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
        <div className="col-md-4">
          <Image
            src="/img/emargency.svg"
            alt="Emergency Contact"
            width={700}
            height={500}
          />
        </div>
      </div>
      <div className="container position-fixed w-100 bottom-0">
        <StepProgress percent={100} />
      </div>
    </div>
  );
};

export default StepEmergencyContact;
