import React, { useState } from "react";
import { Link } from "react-router";
import { FaGoogle } from "react-icons/fa";
import { useForm } from "react-hook-form";
import { useAuth } from "../context/AuthContext";

const Register = () => {
  const [message, setMessage] = useState("");
  const { registerUser,signInWithGoogle } = useAuth();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = async(data) => {
    console.log(data);
    try {
      await registerUser(data.email,  data.password)
      alert("User Registration Successful")
    } catch (error) {
      setMessage("Invalid Credentials")
         console.error(error);
    }
  };
  const handleGoogleSignIn = async () => {
    try {
      await signInWithGoogle();
      alert("Login successful!");
      console.log("navigating to home");
      navigate("/")
    } catch (error) {
      alert("Google sign in failed!");
      console.error(error);
    }
  };
  return (
    <div className="h-[calc(100vh-120px)]  flex justify-center items-center">
      <div className="w-full max-w-sm mx-auto bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <h2 className="test-xl font-semibold mb-4">Please Login</h2>
        <form onSubmit={handleSubmit(onSubmit)} action="">
          <div>
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="email"
            >
              Email
            </label>
            <input
              {...register("email", { required: true })}
              type="email"
              name="email"
              id="email"
              placeholder="Email Address"
              className="shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow"
            />
          </div>
          <div>
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="password"
            >
              Password
            </label>
            <input
              {...register("password", { required: true })}
              type="password"
              name="password"
              id="password"
              placeholder="Password"
              className="shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow"
            />
          </div>
          {message && (
            <p className="text-red-500 text-xs italic mb-3">{message}</p>
          )}
          <div>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded focus:outline-none mt-3">
              Register
            </button>
          </div>
        </form>
        <p className="align-baseline font-medium mt-4 text-sm mb-2">
          Haven't an account? Please{" "}
          <Link to="/login" className="text-blue-500 hover:text-blue-700 ">
            Login
          </Link>
        </p>
        <div>
          <button
            onClick={handleGoogleSignIn}
            className="w-full flex flex-wrap gap-1 items-center justify-center bg-blue-900 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none"
          >
            <FaGoogle /> Sign in eith Google
          </button>
        </div>
        <p className="mt-5 text-center text-gray-500 text-sm">
          2025 Book Store. All rights reserved
        </p>
      </div>
    </div>
  );
};

export default Register;
