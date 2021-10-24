import React, { useState,useContext,useEffect } from "react";
import Image from "next/image";
import logo from "../public/vercel.svg";
import Notify from "../components/Notify";
import { UserContext } from "../store/GlobalState";
import { postData } from '../utils/fetchData';
import Cookie from 'js-cookie';
import { useRouter } from 'next/router';

function Login() {
  const route = useRouter();
  const [state,dispatch] = useContext(UserContext);
  const { auth } = state;
  const initState = { username: "", password: "" };
  const [userData, setUserData] = useState(initState);

  const { username, password } = userData;


  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch({ type: "NOTIFY", payload: { loading: true } });

    const res = await postData("auth/login", userData);

    if(res.err) return dispatch({type:"NOTIFY",payload:{error:res.err}})


    dispatch({type:"NOTIFY",payload:{success:res.success}})

    dispatch({type:"AUTH",payload:{
      token:res.access_token,
      user:res.user
    }})

    Cookie.set('refreshToken',res.refresh_token,{
      path:'api/auth/accessToken',
      expires:7,
    });

    localStorage.setItem('firstLogin',true);

  };

  useEffect(()=>{
    if(Object.keys(auth).length !== 0) route.push("/data")
  },[auth])

  return (
    <div className="h-screen bg-gradient-to-r from-blue-400 via-green-400 to-green-300  sm:w-full mx-auto items-center flex justify-center sm:mx-auto">
      <Notify />
      <div className="bg-white mt-10 shadow rounded-lg px-8 py-8">
        <div className="flex flex-col justify-center items-center mb-5">
          <div>
            <Image src={logo} alt="Logo" />
          </div>
          <h2 className="text-blue-500 uppercase font-semibold">
            Đăng nhập để bắt đầu sử dụng
          </h2>
        </div>

        <form action="#" onSubmit={handleSubmit}>
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Tài khoản
            </label>
            <div className="mt-1">
              <input
                className="w-full px-1 border rounded-md py-1 shadow-md focus:outline-none focus:border-indigo-600"
                id="email"
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
          <div className="mt-8">
            <button
              type="submit"
              className="w-full px-2 py-2 rounded-lg border border-transparent bg-indigo-600 text-white hover:bg-indigo-800"
            >
              Đăng nhập
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

export default Login;
