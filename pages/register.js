import React, { useState, useContext } from "react";
import Image from "next/image";
import logo from "../public/vercel.svg";
import valid from "../utils/valid";
import Notify from "../components/Notify";
import { UserContext } from "../store/GlobalState";
import { postData } from "../utils/fetchData";
function Register() {
  const initState = {
    firstName: "",
    lastName: "",
    username: "",
    password: "",
    cf_password: "",
  };
  const [userData, setUserData] = useState(initState);
  const [state, dispatch] = useContext(UserContext);

  const { firstName, lastName, username, password, cf_password } = userData;

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  const handleSubmit = async (e) => {
    console.log(firstName, lastName, username, password, cf_password);
    e.preventDefault();
    const errMsg = valid(firstName, lastName, username, password, cf_password);
    if (errMsg) return dispatch({ type: "NOTIFY", payload: { error: errMsg } });

    dispatch({ type: "NOTIFY", payload: { loading: true } });

    const res = await postData("auth/register", userData);

    // dispatch({ type: "NOTIFY", payload: { success: "OKKKK" } });
  };

  return (
    <div className="h-screen bg-gradient-to-r from-blue-400 via-green-400 to-green-300  sm:w-full mx-auto items-center flex justify-center sm:mx-auto">
      <Notify />
      <div className="bg-white mt-10 shadow rounded-lg px-8 py-8">
        <div className="flex flex-col justify-center items-center mb-5">
          <div>
            <Image src={logo} alt="Logo" />
          </div>
          <h2 className="text-blue-500 uppercase font-semibold">
            Đăng kí để bắt đầu sử dụng
          </h2>
        </div>

        {/* <Toast message={message} /> */}

        <form action="" onSubmit={handleSubmit}>
          <div className="flex justify-between mb-2">
            <div className="mr-3">
              <label
                htmlFor="firstName"
                className="block text-sm font-medium text-gray-700"
              >
                Họ
              </label>
              <div className="mt-1">
                <input
                  className="w-full px-1 border rounded-md py-1 shadow-md focus:outline-none focus:border-indigo-600"
                  id="firstName"
                  name="firstName"
                  type="text"
                  required
                  onChange={handleInputChange}
                ></input>
              </div>
            </div>

            <div>
              <label
                htmlFor="username"
                className="block text-sm font-medium text-gray-700"
              >
                Tên
              </label>
              <div className="mt-1">
                <input
                  className="w-full px-1 border rounded-md py-1 shadow-md focus:outline-none focus:border-indigo-600"
                  id="lastName"
                  name="lastName"
                  type="text"
                  required
                  onChange={handleInputChange}
                ></input>
              </div>
            </div>
          </div>
          <div>
            <label
              htmlFor="username"
              className="block text-sm font-medium text-gray-700"
            >
              Tài khoản
            </label>
            <div className="mt-1">
              <input
                className="w-full px-1 border rounded-md py-1 shadow-md focus:outline-none focus:border-indigo-600"
                id="username"
                name="username"
                type="text"
                autoComplete="email"
                required
                onChange={handleInputChange}
              ></input>
            </div>
          </div>
          <div className="mt-2">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              Mật khẩu
            </label>
            <div className="mt-1">
              <input
                className="w-full px-1 border rounded-md py-1 shadow-md focus:outline-none focus:border-indigo-600"
                id="password"
                name="password"
                type="password"
                required
                onChange={handleInputChange}
              ></input>
            </div>
          </div>
          <div className="mt-2">
            <label
              htmlFor="cf_password"
              className="block text-sm font-medium text-gray-700"
            >
              Xác nhận mật khẩu
            </label>
            <div className="mt-1">
              <input
                className="w-full px-1 border rounded-md py-1 shadow-md focus:outline-none focus:border-indigo-600"
                id="cf_password"
                name="cf_password"
                type="password"
                required
                onChange={handleInputChange}
              ></input>
            </div>
          </div>
          <div className="mt-8">
            <button
              type="submit"
              className="w-full px-2 py-2 rounded-lg border border-transparent bg-indigo-600 text-white hover:bg-indigo-800"
            >
              Đăng kí
            </button>
          </div>
        </form>
        <div className="mt-5 text-gray-500 text-center">
          <p className="text-sm">&#169;production team 2021</p>
        </div>
      </div>
    </div>
  );
}

export default Register;
