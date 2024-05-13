import React, { useState } from "react";
import TextField from "../inputField";
import { ErrorMessage, Field, Form, Formik, useFormikContext } from "formik";
import * as Yup from "yup";
import { Select, Space } from "antd";
import { services } from "../../services";
import { Option } from "antd/es/mentions";

const validationSchema = Yup.object().shape({
  title: Yup.string().required("Title is required"),
  description: Yup.string().required("Description is required"),
  file: Yup.mixed().required("Please select a file"),
  category: Yup.array()
    .required("Category is required")
    .min(1, "Please select at least one category"),
});

const CreateBlogForm = () => {
  const [fieldValue, setFieldValue] = useState();

  const handleSubmit = async (values) => {
    const user = JSON.parse(localStorage.getItem("user"));
    const payload = {
      user_id: user?.id || 1,
      title: values.title,
      summary: values.description,
      categories: values.category,
      created_on: new Date().toISOString(),
      file: fieldValue,
    };
    try {
      // console.log("-------category-------",payload.categories)
      const response = await services("post", payload, "add-blog");
      console.log(response);
    } catch (err) {
      console.log(err);
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
  ];

  const handleChange = (event) => {
    const file = event.currentTarget.files[0];
    const reader = new FileReader();

    reader.onload = () => {
      const base64String = reader.result;
      console.log("base64String", base64String);
      setFieldValue(base64String);
    };

    reader.readAsDataURL(file);
  };

  return (
    <div className="w-[30rem] border-2">
      <h2>Create Blog</h2>
      <Formik
        initialValues={{ title: "", description: "", file: null, category: [] }}
        validationSchema={validationSchema}
        onSubmit={(values) => {
          handleSubmit(values);
        }}
      >
        {() => (
          <Form>
            <TextField name="title" label="Title" type="text" />
            <TextField name="description" label="Description" type="text" />
            <Field name="category">
              {({ field, form }) => (
                <Select
                  {...field}
                  mode="multiple"
                  allowClear
                  style={{ width: "100%" }}
                  placeholder="Please select"
                  onChange={(value) => form.setFieldValue("category", value)}
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
                    form.setFieldValue("file", value);
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
            <button type="submit">Add</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default CreateBlogForm;