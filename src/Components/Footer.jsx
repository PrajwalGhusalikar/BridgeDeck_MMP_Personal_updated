import React, { useEffect } from "react";
import { FaPhone, FaFax, FaClock, FaEnvelope } from "react-icons/fa";
import { useNavigate, useLocation } from "react-router-dom";

const Footer = () => {
  const theme = localStorage.getItem("theme");
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <footer
      name="footer"
      className={` ${
        theme === "dark"
          ? "bg-[#313131] text-white"
          : "bg-gray-300 text-gray-900"
      } text-white p-8 pt-0`}
    >
      <div className="max-w-screen-xl mx-auto pb-10">
        <div
          className={` p-4 rounded-md h-40 grid grid-cols-4 gap-2 ${
            theme === "dark" ? " text-white" : " text-gray-900"
          } `}
        >
          <div
            onClick={() => {
              navigate("/benifitsplans");
            }}
            className="p-2 text-base hover:text-teal-400 font-semibold cursor-pointer"
          >
            BENEFIT PLANS
          </div>
          <a
            href="https://bridgedeck.org/wp-content/uploads/2023/03/Health-and-Benefit-Provider-List.pdf"
            target="_blank"
            rel="noreferrer"
            className="p-2 text-base hover:text-teal-400 font-semibold"
          >
            H & B PROVIDER LIST
          </a>
          <div
            onClick={() => {
              navigate("/handbforms");
            }}
            className="p-2 text-base hover:text-teal-400 font-semibold cursor-pointer"
          >
            H & B FORMS
          </div>
          <div
            onClick={() => {
              navigate("/irapforms");
            }}
            className="p-2 text-base hover:text-teal-400 font-semibold cursor-pointer"
          >
            IRAP FORMS
          </div>
          <div
            onClick={() => {
              navigate("/reinauerunionmemberhealthinfo");
            }}
            className="p-2 text-base hover:text-teal-400 font-semibold cursor-pointer"
          >
            REINAUER UNION MEMBER HEALTH INFO
          </div>
          <a
            href="https://mycostestimates.com/"
            target="_blank"
            rel="noreferrer"
            className="p-2 text-base hover:text-teal-400 font-semibold cursor-pointer"
          >
            H & B PRICE COMPARISON TOOL
          </a>
          <a
            href="https://www.convergepay.com/hosted-payments/?ssl_txn_auth_token=kfy78mzTR5mcc6i1x85NNQAAAY5TAAnm#!/payment-method"
            target="_blank"
            rel="noreferrer"
            className="p-2 text-base hover:text-teal-400 font-semibold cursor-pointer"
          >
            H & B PREMIUM PAYMENTS
          </a>
        </div>
        <h2
          className={`${
            theme === "dark" ? "  text-white" : " text-gray-900"
          } text-2xl font-normal mt-4 mb-4`}
        >
          PATRICK McCULLOUGH, Administrator
        </h2>
        <div
          className={`grid grid-cols-1 md:grid-cols-2 items-center gap-8  ${
            theme === "dark"
              ? " bg-[#282727] text-white"
              : "bg-white text-gray-900"
          } p-8 rounded-lg`}
        >
          <div>
            <p className="mb-4 text-lg">MM&P Plans</p>
            <p className="mb-4">700 Maritime Boulevard</p>
            <p>Suite A, Linthicum Heights, MD 21090-1996</p>
          </div>
          <div className="border-l-2 border-gray-700 pl-6">
            <div className="flex items-center mt-4">
              <FaPhone className="w-5 h-5 mr-3" />
              <span>410-850-8500 Fax: 410-850-8655</span>
            </div>
            <div className="flex items-center mt-4">
              <FaFax className="w-5 h-5 mr-3" />
              <span>1-877-667-5522</span>
            </div>
            <div className="flex items-center mt-4">
              <FaClock className="w-5 h-5 mr-3" />
              <span>Monday-Friday, 8:30 A.M. - 4:30 P.M.</span>
            </div>
            <div className="flex items-center mt-4">
              <FaEnvelope className="w-5 h-5 mr-3" />
              <span>PlanOffice@mmpplans.com</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
