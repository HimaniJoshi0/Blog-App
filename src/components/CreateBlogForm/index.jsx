import React, { useState } from "react";
import TextField from "../inputField";
import { ErrorMessage, Form, Formik } from "formik";
import * as Yup from "yup";
import { Select, Space } from "antd";
import { services } from "../../services";

const validationSchema = Yup.object().shape({
  title: Yup.string().required("Title is required"),
  description: Yup.string().required("Description is required"),
  file: Yup.mixed().required("File is required"),
  // category: Yup.array()
  //   .required("Category is required")
  //   .min(1, "Please select at least one category"),
});

const CreateBlogForm = () => {
  const [fieldValue, setFieldValue] = useState();
  const [category, setCategory] = useState([]);

  const handleSubmit = async (values) => {
    const user = JSON.parse(localStorage.getItem("user"));
    const payload = {
      user_id: user.id,
      title: values.title,
      summary: values.description,
      categories: category,
      created_on: new Date().toISOString(),
      file: fieldValue,
    };
    try {
      // console.log("-------category-------",payload.categories)
      const response = await services("post", payload, "add-blog");
      console.log( response);
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

  const handleChange = (values) => {
    console.log("values", values);
    setCategory(values);
  };


  // const handleFileChange = (event) => {
  //   const selectedFile = event.currentTarget.files[0];
  //   setFile(selectedFile);
  // };

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
            <Select
              name="category"
              mode="multiple"
              allowClear
              style={{
                width: "100%",
              }}
              placeholder="Please select"
              // defaultValue={["a10", "c12"]}
              onChange={handleChange}
              options={options}
            />
            <ErrorMessage
              name="category"
              component="div"
              className="text-red-600"
            />

            <input
              id="file"
              name="file"
              type="file"
              onChange={(event) => {
                const file = event.currentTarget.files[0];
                const reader = new FileReader();

                reader.onload = () => {
                  const base64String = reader.result.split(",")[1];

                  setFieldValue(base64String);
                  // handleFileChange(event);
                };

                reader.readAsDataURL(file);
              }}
            />
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
