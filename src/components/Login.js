import React, { Component } from "react";

export class Login extends Component {
  render() {
    return (
      <div className="relative">
        <div className="">
          <img
            className="h-screen w-screen blur-sm "
            src="https://images.unsplash.com/photo-1500534623283-312aade485b7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
            alt=""
          />
        </div>
        <div className=" h-screen w-screen grid place-items-center z-1 absolute top-0">
          <div className="drop-shadow-2xl w-1/3 h-2/3 bg-black bg-opacity-40">
            <h1 className="font-bold text-4xl m-4 grid place-items-center my-6 text-white">
              Login Here
            </h1>
            <div className="block flex flex-col space-y-6 m-10">
              <input
                className="p-1 rounded-[7px] px-3 py-3 font-sans text-base"
                type="text"
                placeholder="Your Email Address"
              />
              <input
                className="p-1 rounded-[7px] px-3 py-3 font-sans text-base"
                type="password"
                name=""
                id=""
                placeholder="Password"
              />
            </div>
            <div className="flex ml-10 max-w-fit space-x-2 text-white">
              <input
                className=" rounded-[7px]"
                type="checkbox"
                class="default:ring-2 ..."
              />
              <p>
                Agree with
                <span className="underline px-1">Terms and Conditions</span>
              </p>
            </div>
            <div className="flex justify-center items-center mt-4">
              <button className=" rounded-[6px] h-10 w-5/6 bg-orange-600 ">
                login
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
