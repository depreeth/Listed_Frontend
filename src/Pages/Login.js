import React from "react";
import { useNavigate } from "react-router-dom";
import { GoogleOAuthProvider, GoogleLogin } from "@react-oauth/google";
import github from "../assets/github.png";
import skype from "../assets/skype.png";
import linkdin from "../assets/linkedin.png";
import twitter from "../assets/twitter.png";
import google from "../assets/google-icon.png";
import apple from "../assets/apple 1.png";

const Login = () => {
  const navigate = useNavigate ();
  return (
    <div>
      <div className=" w-full h-screen flex bg-[#F8FAFF]">
        <div className="  w-[45%] h-screen bg-[url('./assets/left_side.png')] bg-cover bg-center  px-12 py-8">
          <div className=" w-[80%] h-full flex flex-col justify-between">
            <div className=" w-full text-white font-semibold text-lg">LOGO</div>
            <div className=" w-full text-center text-5xl text-white font-semibold">
              Board.
            </div>
            <div className=" w-full flex items-center justify-center">
              <div className=" mx-4 ">
                <img className=" w-full h-full" src={github} alt="" />
              </div>
              <div className=" mx-4 ">
                <img className=" w-full h-full" src={skype} alt="" />
              </div>
              <div className=" mx-4 ">
                <img className=" w-full h-full" src={linkdin} alt="" />
              </div>
              <div className=" mx-4 ">
                <img className=" w-full h-full" src={twitter} alt="" />
              </div>
            </div>
          </div>
        </div>
        <div className="  w-[55%]  h-full flex flex-col justify-center">
          <div className=" w-[400px] mx-auto flex flex-col justify-center">
            <div className=" text-4xl font-semibold ">Sign In</div>
            <div className=" my-2">Sign in to your account</div>
            <div className=" w-full flex justify-between my-2">
              {/* <div className=" px-3 py-2 bg-white  flex  items-center  rounded-md">
                <div>
                  <img src={google} alt="" />
                </div>
                <div className=" mx-2 text-sm">Sign in with Google</div>
              </div> */}
              <GoogleOAuthProvider clientId="301748439252-asah2gou1ii33hoc57pfqk7qb867qkls.apps.googleusercontent.com">
                <GoogleLogin
                  onSuccess={(credentialResponse) => {
                    navigate('/home')
                    console.log(credentialResponse);
                  }}
                  onError={() => {
                    console.log("Login Failed");
                  }}
                />
              </GoogleOAuthProvider>
              
              <div className=" px-3 py-2 border  bg-white flex  items-center  rounded-md">
                <div>
                  <img src={apple} alt="" />
                </div>
                <div className=" mx-2 text-sm">Sign in with Google</div>
              </div>
            </div>
            <form onSubmit={()=>navigate('/home')} className=" w-full h-full my-2 bg-white rounded-[10px] px-8 py-6 flex flex-col">
              <label className="">Email Address</label>
              <div className=" w-full p-2 mt-2 mb-4 bg-[#EAEAEA] rounded-[10px]">
                <input
                  className=" focus:outline-none bg-[#EAEAEA]"
                  type="email"
                />
              </div>
              <label className="">Password</label>
              <div className=" w-full p-2 mt-2 mb-4 bg-[#EAEAEA] rounded-[10px]">
                <input
                  className=" focus:outline-none bg-[#EAEAEA]"
                  type="password"
                />
              </div>
              <p className="text-[#346BD4] text-sm">Forgot password?</p>
              <div  className=" w-full mt-4  text-center bg-[#4185F4] text-white rounded-[10px] py-2">
                <button>Sign In</button>
              </div>
            </form>
            <div className=" w-full text-center text-sm my-2 ">
              Don’t have an account?{" "}
              <span className="text-[#346BD4]">Register here</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
