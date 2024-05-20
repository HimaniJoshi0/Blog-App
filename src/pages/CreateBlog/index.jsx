import React, { useEffect, useState } from "react";
import { ErrorMessage, Field, Form, Formik, useFormikContext } from "formik";
import * as Yup from "yup";
import { Button, Select, Space } from "antd";
import { Option } from "antd/es/mentions";
import { Spin } from "antd";
import { notification } from "antd";
import { services } from "services";
import TextField from "components/inputField";
import { useNavigate } from "react-router";
import HeroSection from "components/hero-section";

const validationSchema = Yup.object().shape({
  title: Yup.string().required("Title is required"),
  description: Yup.string()
    .required("Description is required"),
    // .test(
    //   'min-words',
    //   'Description must be at least 100 words',
    //   function (value) {
    //     const words = value ? value.trim().split(/\s+/) : [];
    //     return words.length >= 50;
    //   }
    // )
    // .test(
    //   'max-words',
    //   'Description cannot exceed 200 words',
    //   function (value) {
    //     const words = value ? value.trim().split(/\s+/) : [];
    //     return words.length <= 200;
    //   }
    // ),
  file: Yup.mixed().required("Please select a file"),
  category: Yup.array()
    .required("Category is required")
    .min(1, "Please select at least one category"),
});

const CreateBlogForm = ({ setOpen }) => {
  const navigate = useNavigate();
  const [fieldValue, setFieldValue] = useState();
  const [loader, setLoader] = useState(false);
  const [fileUrl, setFileUrl] = useState(null);
  const [userId, setUserId] = useState();

  const handleSubmit = async (values) => {
    setLoader(true);
    const formData = new FormData();
    formData.append("user_id", userId);
    formData.append("summary", values.description);
    formData.append("title", values.title);
    formData.append("categories", JSON.stringify(values.category));
    formData.append("created_on", new Date().toISOString());
    formData.append("file", fieldValue);

    try {
      const response = await fetch(
        `${process.env.REACT_APP_BASE_URL}add-blog`,
        {
          method: "post",
          mode: "cors",
          body: formData,
        }
      );
      const resp = await response.json();
      console.log("");
      console.log(resp);
      if (resp.status) {
        notification.success({
          message: "Blog created successful",
          placement: "topRight",
        });
        setTimeout(() => {
          navigate("/");
        }, 500);
      } else {
        notification.error({
          message: "Something went wrong",
          placement: "topRight",
        });
      }
    } catch (err) {
      console.log("Err: post blog", err);
    } finally {
      setLoader(false);
    }
  };

  const options = [
    {
      label: "Tech",
      value: "Tech",
    },
    {
      label: "Sports",
      value: "Sports",
    },
    {
      label: "Medical",
      value: "Medical",
    },
    {
      label: "IT",
      value: "IT",
    },
    {
      label: "Travel",
      value: "Travel",
    },
    {
      label: "Creativity",
      value: "Creativity",
    },
    {
      label: "Social",
      value: "Social",
    },
  ];

  const handleChange = (event) => {
    const file = event.currentTarget.files[0];
    console.log("file", file);
    if (file) {
      setFileUrl(URL.createObjectURL(file));
      setFieldValue(file);
    } else {
      setFileUrl(null);
    }
  };

  useEffect(() => {
    const userDetails = JSON.parse(localStorage.getItem("user"));
    console.log("user id", userDetails.id);
    setUserId(userDetails.id)
  }, []);

  return (
    <>
      <HeroSection title="COMPOSE" />
      <div className="w-full p-6  flex justify-center">
        <div className="w-full md:w-2/3">
          <Formik
            initialValues={{
              title: "",
              description: "",
              file: null,
              category: [],
            }}
            validationSchema={validationSchema}
            onSubmit={(values) => {
              handleSubmit(values);
            }}
          >
            {() => (
              <Form className="flex flex-col gap-4 mt-4">
                <TextField name="title" label="Title" type="text" />
                <TextField name="description" label="Description" type="text" />
                <Field name="category">
                  {({ field, form }) => (
                    <Select
                      className="h-[2.75rem] border rounded-md text-xs"
                      {...field}
                      mode="multiple"
                      allowClear
                      style={{ width: "100%" }}
                      placeholder="Please select"
                      onChange={(value) =>
                        form.setFieldValue("category", value)
                      }
                      onBlur={() => form.setFieldTouched("category", true)}
                    >
                      {options.map((option) => (
                        <Option key={option.value} value={option.value}>
                          {option.label}
                        </Option>
                      ))}
                    </Select>
                  )}
                </Field>
                <ErrorMessage
                  name="category"
                  component="div"
                  className="text-red-600"
                />

                <Field name="file">
                  {({ field, form }) => (
                    <input
                      type="file"
                      // {...field}
                      onChange={(value) => {
                        if (value.currentTarget.files[0]) {
                          form.setFieldValue("file", value);
                        } else {
                          form.setFieldValue("file", null);
                        }
                        handleChange(value);
                      }}
                    />
                  )}
                </Field>
                <ErrorMessage
                  name="file"
                  component="div"
                  className="text-red-600"
                />
                {fileUrl && (
                  <img
                    src={fileUrl}
                    className="h-[20rem] w-[20rem] rounded-lg"
                    alt="preview"
                  />
                )}
                {false ? (
                  <div className="example">
                    <Spin />
                  </div>
                ) : (
                  <Button
                    className="border border-black font-semibold w-[4rem]"
                    htmlType="submit"
                  >
                    {false ? <Spin /> : "Add"}
                  </Button>
                )}
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </>
  );
};

export default CreateBlogForm;
