import React from "react";

import { FaSun, FaMoon } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const NavBar = ({ handleTheme }) => {
  const theme = localStorage.getItem("theme");
  const navigate = useNavigate();

  return (
    <div className="relative z-50">
      <nav
        className={`fixed flex p-4 items-center justify-evenly w-screen ${
          theme === "dark"
            ? "bg-[#313131] text-white"
            : "bg-white text-gray-900"
        } shadow-lg transition-colors duration-300`}
      >
        {" "}
        <div
          onClick={() => {
            navigate("/");
          }}
          className="p-2 text-base hover:text-teal-400 font-semibold cursor-pointer"
        >
          HOME
        </div>{" "}
        |
        <div
          onClick={() => {
            navigate("/benifitsplans");
          }}
          className="p-2 text-base hover:text-teal-400 font-semibold cursor-pointer"
        >
          BENEFIT PLANS
        </div>{" "}
        |
        <a
          href="https://bridgedeck.org/wp-content/uploads/2023/03/Health-and-Benefit-Provider-List.pdf"
          target="_blank"
          rel="noreferrer"
          className="p-2 text-base hover:text-teal-400 font-semibold"
        >
          H & B PROVIDER LIST
        </a>
        |
        <div
          onClick={() => {
            navigate("/handbforms");
          }}
          className="p-2 text-base hover:text-teal-400 font-semibold cursor-pointer"
        >
          H & B FORMS
        </div>
        |
        <div
          onClick={() => {
            navigate("/irapforms");
          }}
          className="p-2 text-base hover:text-teal-400 font-semibold cursor-pointer"
        >
          IRAP FORMS
        </div>
        |
        <div
          onClick={() => {
            navigate("/reinauerunionmemberhealthinfo");
          }}
          className="p-2 text-base hover:text-teal-400 font-semibold cursor-pointer"
        >
          REINAUER UNION MEMBER HEALTH INFO
        </div>
        |
        <a
          href="https://mycostestimates.com/"
          target="_blank"
          rel="noreferrer"
          className="p-2 text-base hover:text-teal-400 font-semibold cursor-pointer"
        >
          H & B PRICE COMPARISON TOOL
        </a>
        |
        <a
          href="https://www.convergepay.com/hosted-payments/?ssl_txn_auth_token=kfy78mzTR5mcc6i1x85NNQAAAY5TAAnm#!/payment-method"
          target="_blank"
          rel="noreferrer"
          className="p-2 text-base hover:text-teal-400 font-semibold cursor-pointer"
        >
          H & B PREMIUM PAYMENTS
        </a>
        <div className="w-20">
          <button
            onClick={handleTheme}
            className="flex items-center justify-center w-10 h-10 rounded-full bg-teal-500 text-white hover:bg-teal-600 focus:outline-none focus:ring-2 focus:ring-teal-300 transition duration-300"
          >
            {theme === "dark" ? <FaSun /> : <FaMoon />}
          </button>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
