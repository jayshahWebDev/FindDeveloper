import { useState } from "react";

const Recruiter = () => {
  const [componentValue, setComponentValue] = useState("SignIn");

  return (
    <>
      {componentValue === "SignIn" ? (
        <div className="bg-lightWhite min-h-[100vh] flex justify-center items-center">
          <div className=" px-[13px] py-[7px] bg-white flex flex-col gap-y-[10px] shadow-lg rounded-[10px] font-Poppins">
            <div className="">
              <label className="text-[15px] text-blueText">Email*</label>
              <input
                className="py-[7px] px-[13px] border-[1px] border-gray rounded-[5px] focus:border-blueText outline-none  w-full"
                placeholder="Enter Your Register Email Address"
              />
            </div>
            <div>
              <label className="text-[15px] text-blueText">Password*</label>
              <input
                className="py-[7px] px-[13px] border-[1px] border-gray rounded-[5px] focus:border-blueText outline-none  w-full"
                placeholder="Enter Your Password"
              />
            </div>
            <h2 className="text-blueText font-Poppins">Forgot Password?</h2>
            <div className="flex flex-col gap-y-[10px] justify-center items-center">
              <button className="bg-blueText text-white px-[15px] py-[7px] rounded-[10px] font-Poppins">
                Sign In
              </button>
              <h2 className="font-Poppins">
                Don't have an account?{" "}
                <span
                  className="font-medium text-blueText cursor-pointer"
                  onClick={() => {
                    setComponentValue("SignUp");
                  }}
                >
                  Sign Up
                </span>
              </h2>
            </div>
          </div>
        </div>
      ) : (
        <div className="bg-lightWhite min-h-[100vh] flex justify-center items-center">
          <div className=" px-[13px] py-[7px] tablet:w-[80%] bg-white my-[4%] flex flex-col gap-y-[10px] shadow-lg rounded-[10px] font-Poppins">
            <div className="grid grid-cols-1 gap-y-[10px] tablet:place-items-center tablet:grid-cols-2">
              <div className="tablet:w-[80%]">
                <label className="text-[15px] text-blueText">Name*</label>
                <input
                  className="py-[7px] px-[13px] border-[1px] border-gray rounded-[5px] focus:border-blueText outline-none  w-full"
                  placeholder="Enter Name"
                />
              </div>
              <div className="tablet:w-[80%]">
                <label className="text-[15px] text-blueText">Email*</label>
                <input
                  className="py-[7px] px-[13px] border-[1px] border-gray rounded-[5px] focus:border-blueText outline-none  w-full"
                  placeholder="Enter Email Address"
                />
              </div>
              <div className="tablet:w-[80%]">
                <label className="text-[15px] text-blueText">Password*</label>
                <input
                  type={"password"}
                  className="py-[7px] px-[13px] border-[1px] border-gray rounded-[5px] focus:border-blueText outline-none  w-full"
                  placeholder="Enter Password"
                />
              </div>
              <div className="tablet:w-[80%]">
                <label className="text-[15px] text-blueText">
                  Confirm Password*
                </label>
                <input
                  type={"password"}
                  className="py-[7px] px-[13px] border-[1px] border-gray rounded-[5px] focus:border-blueText outline-none  w-full"
                  placeholder="Enter Confirm Password"
                />
              </div>
              <div className="tablet:w-[80%]">
                <label className="text-[15px] text-blueText">LinkedIn*</label>
                <input
                  className="py-[7px] px-[13px] border-[1px] border-gray rounded-[5px] focus:border-blueText outline-none  w-full"
                  placeholder="Enter LinkedIn Profile URL"
                />
              </div>
            </div>

            <div className="flex flex-col gap-y-[10px] justify-center items-center">
              <button className="bg-blueText text-white px-[15px] py-[7px] rounded-[10px] font-Poppins">
                Sign Up
              </button>
              <h2 className="font-Poppins">
                Already have an account?{" "}
                <span
                  className="font-medium text-blueText cursor-pointer"
                  onClick={() => {
                    setComponentValue("SignIn");
                  }}
                >
                  Sign In
                </span>
              </h2>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Recruiter;
