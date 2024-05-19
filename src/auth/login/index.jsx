import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Link, useNavigate } from "react-router-dom";
import TextField from "../../components/inputField";
import { services } from "../../services";
import { notification } from "antd";
import loginImg from "assets/images/login.jpg";

const validationSchema = Yup.object().shape({
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  password: Yup.string()
    .min(8, "Password must be at least 8 characters")
    .required("Password is required"),
});

const MyForm = () => {
  const navigate = useNavigate();

  const handleSubmit = async (values) => {
    try {
      const response = await services("post", values, "login");
      console.log("-----response-----", response);
      if (response.status) {
        notification.success({
          message: "Login Successful",
          placement: "topRight",
        });
        localStorage.setItem("user", JSON.stringify(response.data));
        navigate("/");
      } else {
        notification.error({
          message: "Login Failed",
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
        <div>
          <div className="mb-6">
            <h1 className="text-4xl font-bold ">Hi, Welcome to THE BLOG</h1>
            <p className="font-semibold mt-1">
              Enter your credentials to access in your account
            </p>
          </div>
          <Formik
            initialValues={{ email: "", password: "" }}
            validationSchema={validationSchema}
            onSubmit={(values) => {
              handleSubmit(values);
            }}
          >
            {() => (
              <Form>
                <div className="my-4">
                  <TextField name="email" label="Email Address" type="email" />
                </div>

                <div className="my-4">
                  <TextField name="password" label="Password" type="password" />
                </div>
                <button
                  type="submit"
                  className="w-full p-3 text-white bg-black rounded-md font-semibold mt-6"
                >
                  Login
                </button>
              </Form>
            )}
          </Formik>
          <div className="my-3">
            <p>
              Don't have account?{" "}
              <Link to="/register" className="text-green-700 font-bold">
                Register
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyForm;
