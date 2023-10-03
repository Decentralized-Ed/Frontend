import React from "react";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import useAuth from "../../hooks/auth";
import viewicon from "../../assets/eye.png";
import hideicon from "../../assets/hide.png";
import { useDispatch, useSelector } from "react-redux";
import { useLoginMutation } from "../../slices/usersApiSlice";
import { setCredentials } from "../../slices/authSlice";
import { toast } from "react-toastify";
import Loader from "../SignupCard/Loader";

const LoginCard = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [passwordVisible, setPasswordVisible] = useState(false);

    const togglePasswordVisibility = () => {
      setPasswordVisible(!passwordVisible);
    };

  const [login, { isLoading }] = useLoginMutation();
  const { userInfo } = useSelector((state) => state.auth);
  useEffect(() => {
    if (userInfo) {
      navigate("/dashboard");
    }
  }, [navigate, userInfo]);

  const loginWithEmail = async (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    try {
      const res = await login({ email, password }).unwrap();
      dispatch(setCredentials({ ...res }));
      navigate("/dashboard");
    } catch (err) {
      toast.error(err?.data?.message || err.error);
    }
  };

  return (
    <div className="h-screen flex justify-center items-center">
      <section className="w-full sm:w-[80%] md:w-[60%] lg:w-[50%] xl:w-[40%] p-4 md:p-10">
        <div className="rounded-lg shadow bg-gray-800 border-gray-700 text-white">
          <div className="p-6 space-y-4 md:space-y-6">
            <h1 className="text-xl md:text-2xl font-bold leading-tight">
              Welcome Back!!
            </h1>
            <form
              className="space-y-4 md:space-y-6"
              action="#"
              onSubmit={loginWithEmail}
            >
              <div>
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium"
                >
                  Enter email
                </label>
                <div className="flex-col gap-2">
                  <input
                    type="email"
                    name="email"
                    id="email"
                    className="w-full bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="example@email.com"
                    required
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="password"
                  className="block mb-2 text-sm font-medium"
                >
                  Enter Password
                </label>
                <div className="relative">
                  <input
                    type={passwordVisible ? "text" : "password"}
                    name="password"
                    id="password"
                    placeholder="Password"
                    className="w-full bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 pr-10" // Add pr-10 for padding-right
                    required
                  />
                  <button
                    type="button"
                    className="absolute top-1/2 right-3 transform -translate-y-1/2"
                    onClick={togglePasswordVisibility}
                  >
                    {passwordVisible ? (
                      <img className="h-4 w-4" src={hideicon}></img>
                    ) : (
                      <img className="h-4 w-4" src={viewicon}></img>
                    )}
                  </button>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <a
                  href="#"
                  className="text-sm font-medium text-primary-600 hover:underline"
                  onClick={() => {
                    navigate("/signup");
                  }}
                >
                  Don&apos;t have an account?
                  <br /> Sign Up
                </a>
              </div>
              {isLoading ? (
                <Loader></Loader>
              ) : (
                <button
                  type="submit"
                  className="w-full text-white bg-pink-600 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                >
                  Sign in
                </button>
              )}
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LoginCard;
