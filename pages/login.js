import React from "react";
import Image from "next/image";
import logo from "../public/vercel.svg";

function Login() {
  return (
    <div className="h-screen bg-gradient-to-r from-blue-400 via-green-400 to-green-300  sm:w-full mx-auto items-center flex justify-center sm:mx-auto">
      <div className="bg-white mt-10 shadow rounded-lg px-8 py-8">
        <div className="flex flex-col justify-center items-center mb-5">
          <div>
            <Image src={logo} alt="Logo" />
          </div>
          <h2 className="text-blue-500 uppercase font-semibold">
            Đăng nhập để bắt đầu sử dụng
          </h2>
        </div>

        <form action="#" method="POST">
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email
            </label>
            <div className="mt-1">
              <input
                className="w-full px-1 border rounded-md py-1 shadow-md focus:outline-none focus:border-indigo-600"
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
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
                autoComplete="password"
                required
              ></input>
            </div>
          </div>
          <div className="mt-8">
            <button
              type="submit"
              className="w-full px-2 py-2 rounded-lg border border-transparent bg-indigo-600 text-white hover:bg-indigo-800"
            >
              Đăng nhập
            </button>
          </div>
          <div className="mt-5 text-gray-500 text-center">
            <p className="text-sm">&#169;production team 2021</p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
