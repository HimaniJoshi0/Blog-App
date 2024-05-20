import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Link, useNavigate } from "react-router-dom";
import TextField from "../../components/inputField";
import { notification } from "antd";
import { services } from "../../services";
import loginImg from "assets/images/login.jpg";

const validationSchema = Yup.object().shape({
  name: Yup.string().required("Name is required"),
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  phone: Yup.string()
    .matches(/^[0-9]{10}$/, "Phone number must be exactly 10 digits")
    .required("Phone number is required"),
  password: Yup.string()
    .required("Password is required")
    .min(6, "Password must be at least 6 characters"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password"), null], "Passwords must match")
    .required("Confirm Password is required"),
});

const MyForm = () => {
  const navigate = useNavigate();

  const handleSubmit = async (values) => {
    try {
      const response = await services("post", values, "register");
      console.log("-----response-----", response);
      if (response.status) {
        notification.success({
          message: "Register Successfull",
          placement: "topRight",
        });
        navigate("/login");
      } else {
        notification.error({
          message: "Register Failed",
          description: response.message,
          placement: "topRight",
        });
      }
    } catch (error) {
      console.error("Error occurred:", error);
      notification.error({
        message: "Error",
        description: "An error occurred. Please try again later.",
        placement: "topRight",
      });
    }
  };

  return (
    <div className="flex justify-center items-center  h-screen w-full">
      <div className="w-[50%] h-full justify-center items-center hidden md:flex">
        <img src={loginImg} alt="image" className="h-full" />
      </div>

      <div className=" md:w-[50%] h-full flex justify-center items-center">
        <div className="md:p-0 p-6">
          <div className="mb-6">
            <h1 className="md:text-4xl font-bold text-2xl ">Hi, Welcome to THE BLOG</h1>
            <p className="md:font-semibold mt-1 sm:font-medium">Create your account</p>
          </div>
          <Formik
            initialValues={{
              name: "",
              email: "",
              phone: "",
              password: "",
              confirmPassword: "",
            }}
            validationSchema={validationSchema}
            onSubmit={(values) => {
              handleSubmit(values);
            }}
          >
            {() => (
              <Form>
                <div className="mt-2">
                  <TextField name="name" label="Name" type="text" />
                </div>

                <div className="mt-2">
                  <TextField name="email" label="Email Address" type="email" />
                </div>

                <div className="mt-2">
                  <TextField name="phone" label="Contact Number" type="text" />
                </div>

                <div className="mt-2">
                  <TextField name="password" label="Password" type="password" />
                </div>

                <div className="mt-2">
                  <TextField
                    name="confirmPassword"
                    label="Confirm Password"
                    type="password"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full p-3 text-white bg-black rounded-md font-semibold mt-6"
                >
                  Submit
                </button>
              </Form>
            )}
          </Formik>
          <div className="my-3">
            <p>
              Already registered?{" "}
              <Link to="/login" className="text-green-700 font-bold">
                Login
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyForm;
