import React from "react";
import { assets } from "../assets/assets";
import { useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="flex flex-col justify-between gap-14 bg-[#2e2f34] px-28 py-10">
        <div className="flex justify-between">
          <div className="w-[20%] pr-6 flex flex-col gap-10">
            <img src={assets.ecoLabel} alt="" className="w-28" />
            <span className="text-sm text-[#F3F0E3]">
              Our paper is sourced from FSC-certified mills. We plant enough
              trees to offset our paper usage.
            </span>
          </div>
          <div className="w-[25%]  flex flex-col gap-6">
            <h2 className="text-[#DFFDA7] -tracking-tighter font-medium text-base">
              COMPANY
            </h2>
            <div className="flex flex-col gap-4 text-[#F3F0E3] font-medium text-base">
              <a
                href="/company/aboutus"
                className="transition-[0.7s] hover:text-[#9b9b9a]"
              >
                About us
              </a>
              <a
                href="/company/partner"
                className="transition-[0.7s] hover:text-[#9b9b9a]"
              >
                Partner Program
              </a>
              <a
                href="https://www.linkedin.com/company/postpilot/jobs/"
                className="transition-[0.7s] hover:text-[#9b9b9a]"
              >
                Careers
              </a>
              <a
                href="/company/contact"
                className="transition-[0.7s] hover:text-[#9b9b9a]"
              >
                Contact us
              </a>
              <a
                href="/privacy-policy"
                className="transition-[0.7s] hover:text-[#9b9b9a]"
              >
                Privacy Notice <span className="text-[#DFFDA7]">NEW!</span>
              </a>
              <a
                href="/right-request-form"
                className="transition-[0.7s] hover:text-[#9b9b9a]"
              >
                Do Not Sell or Share My Personal Information
              </a>
              <a
                href="/opt-out-of-mailers"
                className="transition-[0.7s] hover:text-[#9b9b9a]"
              >
                Opt Out or Direct Mailers
              </a>
            </div>
          </div>

          <div className="w-[25%]  flex flex-col gap-6">
            <h2 className="text-[#DFFDA7] -tracking-tighter font-medium text-base invisible">
              COMPANY
            </h2>
            <div className="flex flex-col gap-4 text-[#F3F0E3] font-medium text-base ">
              <a
                href="/pricing"
                className="transition-[0.7s] hover:text-[#9b9b9a]"
              >
                Pricing
              </a>
              <a
                href="/reviews"
                className="transition-[0.7s] hover:text-[#9b9b9a]"
              >
                Reviews
              </a>
              <a
                href="/direct-mail-marketing"
                className="transition-[0.7s] hover:text-[#9b9b9a]"
              >
                Direct Mail Academy
              </a>
              <a href="" className="transition-[0.7s] hover:text-[#9b9b9a]">
                Success stories
              </a>
              <a href="" className="transition-[0.7s] hover:text-[#9b9b9a]">
                Term of Services
              </a>
            </div>
          </div>
          <div className="w-[20%]  flex flex-col gap-6">
            <h2 className="text-[#DFFDA7] -tracking-tighter font-medium text-base">
              CONTACT
            </h2>
            <div className="flex flex-col gap-4 text-[#F3F0E3] font-medium text-base">
              <h3 className="transition-[0.7s] hover:text-[#9b9b9a] text-2xl cursor-pointer">
                Support@postpilot.com
              </h3>
              <p className="text-[#F3F0E3] font-medium text-base">
                Printed with <span className="text-[#DFFDA7] ">❤</span> at our
                own state-of-the-art facilities in South Carolina, Arizona and
                London.
              </p>
            </div>
          </div>
        </div>
        <hr className="" />
        <div className="flex justify-between gap-32 items-center">
          <div className="flex flex-col gap-4 w-[30%]">
            <img
              onClick={() => navigate("/")}
              src={assets.postWhiteLogo}
              alt=""
              className="w-[175px] cursor-pointer"
            />
            <span className="text-base text-[#F3F0E3]">
              © 2024 PostPilot, Inc. All rights reserved.
            </span>
          </div>
          <div className="w-[56%]">
            <p className="font-normal text-xs text-[#F3F0E3] text-center">
              PostPilot is a data broker under Texas law. To conduct business in
              Texas, a data broker must register with the Texas Secretary of
              State (Texas SOS). Information about data broker registrants is
              available on the Texas SOS website at{" "}
              <a
                href="https://www.sos.state.tx.us/index.shtml"
                className="hover:line text-[#DFFDA7]"
              >
                www.sos.state.tx.us
              </a>
            </p>
          </div>
          <div className="flex w-[35%] gap-5">
            <button
              onClick={() => navigate("/login")}
              className="px-4 h-10 border-[#F3F0E3] border-[2px] -tracking-tighter text-sm font-bold hover:bg-[#F3F0E3] hover:text-[#000] text-[#F3F0E3] transition-[3000]"
            >
              LOGIN
            </button>
            <button className="bg-[#6AB1F3] h-10 hover:bg-[#3076a8] transition-[0.9s] px-4 text-[#fff] font-semibold text-sm -tracking-tighter">
              <a href="https://app.postpilot.com/signup?_ga=2.113853575.1003334468.1737346525-938792572.1737346525">
                TRY IT FOR FREE
              </a>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
