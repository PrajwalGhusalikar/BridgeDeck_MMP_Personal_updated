import React, { useState } from "react";
import pdfImg from "../Assets/pdfImg.png";

const documents = [
  {
    title:
      "Plan and Investment-Related Information for the IRAP (Vanguard and Managed Funds)",
    data: [
      {
        link: "https://bridgedeck.org/wp-content/uploads/2022/01/Reinauer-UnionMem-CoverLtr.pdf",
        subTitle: "Cover letter",
      },
      {
        link: "https://bridgedeck.org/wp-content/uploads/2022/01/PermanentDataForm-New-2018.pdf",
        subTitle:
          "Permanent Data Form – Every Pilot needs to complete even if single.",
      },
      {
        link: "https://bridgedeck.org/wp-content/uploads/2022/01/Coordination-of-Benefits-Spouse.pdf",
        subTitle:
          "Coordination of Benefits Information Form- For spouses ( working or not working)",
      },
      {
        link: "https://bridgedeck.org/wp-content/uploads/2022/01/EnrollmentChildAge19-26-April2018.pdf",
        subTitle:
          "Coordination of Benefits form – For eligible Adult Children Age 19-26 – if applicable",
      },
    ],
  },
];

const ReinauerUnionMemberHealthInfo = () => {
  const theme = localStorage.getItem("theme");
  const [selectedTitle, setSelectedTitle] = useState("");

  const handleSelectChange = (event) => {
    setSelectedTitle(event.target.value);
  };

  return (
    <div
      name="reinauer-union"
      className={`mx-auto pt-14 px-28 p-4 border-t-2 border-teal-300 ${
        theme === "dark" ? "bg-[#313131]" : "bg-gray-200"
      } text-${theme === "dark" ? "white" : "black"}`}
    >
      <h2
        className={`text-4xl pt-14 font-semibold mb-6 ${
          theme === "dark" ? "text-white" : "text-gray-600"
        }`}
      >
        Reinauer Union Member Health Info
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
                              theme === "dark" ? "text-gray-200" : "text-black"
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

export default ReinauerUnionMemberHealthInfo;
