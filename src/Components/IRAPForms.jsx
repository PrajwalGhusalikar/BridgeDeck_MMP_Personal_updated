import React, { useState } from "react";
import pdfImg from "../Assets/pdfImg.png";

const documents = [
  {
    title: "Plan Changes Effective January 2020",
    data: [
      {
        link: "https://bridgedeck.org/wp-content/uploads/2022/01/MMP-January-2019-Fee-and-Fund-Changes-Letter-FINAL-11-25-19.pdf",
        subTitle: "Member letter dated November 2019",
      },
    ],
  },
  {
    title: "Plan Changes Effective January 2017",
    data: [
      {
        link: "https://bridgedeck.org/wp-content/uploads/2022/01/MMP-Announcement-Letter-FINAL-9-6-16.pdf",
        subTitle: "Member letter dated September 2016",
      },
    ],
  },
  {
    title: "IRAP Rules & Regulations",
    data: [
      {
        link: "https://bridgedeck.org/wp-content/uploads/2022/09/MMP-IRAP-Regulations-Mar2022-Amend-16.pdf",
        subTitle: "IRAP Rules and Regulations Form",
      },
    ],
  },
  {
    title: "IRAP Summary Plan Descriptions",
    data: [
      {
        link: "https://bridgedeck.org/wp-content/uploads/2022/01/IRAPSPD.pdf",
        subTitle: "IRAP Summary Plan Description",
      },
    ],
  },
  {
    title:
      "Plan and Investment-Related Information for the IRAP (Vanguard and Managed Funds)",
    data: [
      {
        link: "https://bridgedeck.org/wp-content/uploads/2022/01/Vanguard-Fee-Notice-2016.pdf",
        subTitle: "Participant-Directed Vanguard Program Disclosure",
      },
      {
        link: "https://bridgedeck.org/wp-content/uploads/2022/01/Plan-inv-supp-Feb2014.pdf",
        subTitle: "Supplemental Plan Fee and Managed Fund Disclosure",
      },
      {
        link: "https://bridgedeck.org/wp-content/uploads/2022/01/IRAP-Managed-Fund-Fee-2016.pdf",
        subTitle: "Managed Fund Fact Sheet",
      },
      {
        link: "https://bridgedeck.org/wp-content/uploads/2022/01/IRAPGlossaryofManFundFactsheet.pdf",
        subTitle: "Glossary of Investment Terms of Managed Fund Fact Sheet",
      },
    ],
  },
  {
    title: "Plan and Investment-Related Information for the IRAP – 401(k) Plan",
    data: [
      {
        link: "https://bridgedeck.org/wp-content/uploads/2022/01/Fidelity-Fee-Notice-2016.pdf",
        subTitle: "Participant Directed Fidelity Program",
      },
    ],
  },
  {
    title: "Other Forms",
    data: [
      {
        link: "https://bridgedeck.org/wp-content/uploads/2022/02/IRAP.pdf",
        subTitle:
          "Individual Retirement Account Plan Beneficiary Designation Form",
      },
      {
        link: "https://bridgedeck.org/wp-content/uploads/2022/02/401k.pdf",
        subTitle: "IRAP/401(k) Beneficiary Designation Form",
      },
    ],
  },
];

const IRAPForms = () => {
  const theme = localStorage.getItem("theme");
  const [selectedTitle, setSelectedTitle] = useState("");

  const handleSelectChange = (event) => {
    setSelectedTitle(event.target.value);
  };

  return (
    <div
      name="irap-forms"
      className={`mx-auto pt-14 px-28 border-t-2 border-teal-300 p-4 ${
        theme === "dark" ? "bg-[#313131]" : "bg-gray-200"
      } text-${theme === "dark" ? "white" : "black"}`}
    >
      <h2
        className={`text-4xl pt-14 font-semibold mb-6 ${
          theme === "dark" ? "text-white" : "text-gray-600"
        }`}
      >
        IRAP Forms
      </h2>

      <div className="h-16 mb-6">
        <select
          name="document-select"
          id="document-select"
          onChange={handleSelectChange}
          className="p-2 border rounded text-black"
          value={selectedTitle}
        >
          <option value="">All Documents- You Can Filter Documents</option>
          {documents?.map((document, index) => (
            <option key={index} value={document.title}>
              {document.title}
            </option>
          ))}
        </select>
      </div>

      <ul className="list-none mb-0">
        {documents
          .filter(
            (document) =>
              selectedTitle === "" || document.title === selectedTitle
          )
          .map((document, index) => (
            <li key={index} className="mb-6">
              <div className="mb-4">
                <h2
                  className={`text-xl ${
                    theme === "dark" ? "text-white" : "text-teal-700"
                  } font-semibold mb-2`}
                >
                  {document.title}
                </h2>

                <div className="formdata grid grid-cols-2">
                  {document?.data?.map((data, dataIndex) => (
                    <a
                      href={data.link}
                      className=""
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <div
                        key={dataIndex}
                        className={`mb-2 ${
                          theme === "dark" ? "bg-gray-800" : "bg-gray-300"
                        }    p-4 rounded-lg text-teal-500 ${
                          theme === "dark"
                            ? " hover:bg-blue-gray-800"
                            : "hover:bg-blue-gray-200"
                        } transition duration-300 ease-in-out flex w-[500px] h-28 `}
                      >
                        <div className="w-96">
                          <span
                            className={`${
                              theme === "dark"
                                ? "text-gray-200"
                                : "text-black"
                            } font-medium mb-2 text-xl`}
                          >
                            {data?.subTitle}
                          </span>
                          <p> Click here to download PDF </p>
                        </div>{" "}
                        <div className="w-20">
                          <img src={pdfImg} className="w-16 h-16" alt="" />
                        </div>
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default IRAPForms;
