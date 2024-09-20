import React, { useState } from "react";
import pdfImg from "../Assets/pdfImg.png";

const documents = [
  {
    title: "OTC COVID-19 Test Reimbursement Claim Form",
    data: [
      {
        link: "https://bridgedeck.org/wp-content/uploads/2022/02/106-56792C_COVID-19_Test_Reimbursement_Claim_Form_12pt-2-7-2022.pdf",
        subTitle: "OTC COVID-19 Test Reimbursement Claim Form",
      },
    ],
  },
  {
    title: "Notice of Nondiscrimination",
    data: [
      {
        link: "https://bridgedeck.org/wp-content/uploads/2022/01/MMP-HB-NoticeOfNondiscrimination-Oct2017.pdf",
        subTitle: "Notice of Nondiscrimination",
      },
    ],
  },
  {
    title: "Your Rights and Protections Against Surprise Medical Bills",
    data: [
      {
        link: "https://bridgedeck.org/wp-content/uploads/2022/12/MMP-Health-Plan-Balance-Billing-Notice-2023.pdf",
        subTitle: "Effective Date of January 1, 2023.",
      },
      // {
      //   link: "https://bridgedeck.org/wp-content/uploads/2022/01/4300.01_-MMP-Health-Plan-Balance-Billing-Notice_Full-Format.pdf",
      //   subTitle: "",
      // },
    ],
  },
  {
    title:
      "Important CIGNA Network Change – effective July 1, 2021 from PPO to Cigna’s Open Access Plus (OAP) network:",
    data: [
      {
        link: "https://bridgedeck.org/wp-content/uploads/2022/01/MMP-HB-OAP-July-1-2021-Revised-1.pdf",
        subTitle:
          "Detailing the change to the Network to OAP – effective July 1, 2021",
      },
      {
        link: "https://bridgedeck.org/wp-content/uploads/2022/01/MMP-Temporary-ID-Card-Memo-OAP-July-1-2021.pdf",
        subTitle:
          "A temporary ID card memo to present to your providers on and after July 1, 2021",
      },
    ],
  },
  {
    title: "Plan Rules & Regulations",
    data: [
      {
        link: "https://bridgedeck.org/wp-content/uploads/2022/08/MMP-HB-Regulations-June2022-Amend-156-1.pdf",
        subTitle: "Health & Benefit Plan Rules and Regulations form",
      },
      {
        link: "https://bridgedeck.org/wp-content/uploads/2022/08/MMP-Pen-Regulations-JUne2022-Amend-10-1.pdf",
        subTitle: "Pension Plan Rules and Regulations form",
      },
      {
        link: "https://bridgedeck.org/wp-content/uploads/2022/01/MMP-Vac-Rules-Feb2018.pdf",
        subTitle: "Vacation Plan Rules and Regulations form",
      },
      {
        link: "https://bridgedeck.org/wp-content/uploads/2022/08/MMP-APP-Regulations-June2021-Amend-6.pdf",
        subTitle: "Adjustable Pension Plan Regulations form",
      },
    ],
  },
  {
    title: "Summary Plan Descriptions",
    data: [
      {
        link: "https://bridgedeck.org/wp-content/uploads/2022/01/MMP-HB-SPD-Dec2018.pdf",
        subTitle: "Health & Benefit Summary Plan Description form",
      },
      {
        link: "https://bridgedeck.org/wp-content/uploads/2022/01/PensionSPD.pdf",
        subTitle: "Pension Summary Plan Description form",
      },
      {
        link: "https://bridgedeck.org/wp-content/uploads/2022/01/VacSPD.pdf",
        subTitle: "Vacation Summary Plan Description form",
      },
      {
        link: "https://bridgedeck.org/wp-content/uploads/2022/01/MMPAdujustablePensionPlanSPD.pdf",
        subTitle: "MM&P Adjustable Pension Plan Summary Plan Description",
      },
    ],
  },
  {
    title: "Summary of Benefits and Coverage Forms (“SBC’s”)",
    data: [
      {
        link: "https://bridgedeck.org/wp-content/uploads/2022/12/2023-SBC_-MMP-HB-Plan_-Actives_Non-Medicare-Retirees-2.pdf",
        subTitle: "SBC for Actives/Non-Medicare Retirees form for 2023",
      },
      {
        link: "https://bridgedeck.org/wp-content/uploads/2022/12/2023-SBC_-MMP-HB-Plan_-Medicare-Eligible-Retirees.pdf",
        subTitle: "SBC for Medicare-Eligible Retirees form for 2023",
      },
      {
        link: "https://bridgedeck.org/wp-content/uploads/2023/11/MMP-HB-SBC-2024-Actives-Non-Medicare-Retirees9766805.3-1.pdf",
        subTitle: "SBC for Actives/Non-Medicare Retirees form for 2024",
      },
      {
        link: "https://bridgedeck.org/wp-content/uploads/2023/11/MMP-HB-SBC-2024-Medicare-Eligible-Retirees9766810.3-1.pdf",
        subTitle: "SBC for Medicare-Eligible Retirees form for 2024",
      },
    ],
  },
  {
    title:
      "Prescription Benefits – Important Update – Step Therapy effective January 1, 2019",
    data: [
      {
        link: "https://bridgedeck.org/wp-content/uploads/2022/01/MMP-StepMemo-posting-Jan2019.pdf",
        subTitle: "Information on Step Therapy effective January 1, 2019",
      },
    ],
  },
  {
    title: "CVS Caremark – Formulary Exclusions – January 1, 2023",
    data: [
      {
        link: "https://bridgedeck.org/wp-content/uploads/2022/12/01-2023-PDL-SC-ACSF.pdf",
        subTitle: "CVS Caremark Formulary Exclusions effective 1/1/2023",
      },
      {
        link: "https://bridgedeck.org/wp-content/uploads/2022/12/01-2023-Advanced-Control-Specialty-Formulary.pdf",
        subTitle: "Control Specialty Formulary Exclusions effective 1/1/2023",
      },
    ],
  },
  {
    title: "CVS Caremark – Formulary Exclusions – January 1, 2022",
    data: [
      {
        link: "https://bridgedeck.org/wp-content/uploads/2022/01/01-2022-PDL-SC-ACSF-CVS-Formulary-Jan-1-2022.pdf",
        subTitle: "CVS Caremark Formulary Exclusions effective 1/1/2022",
      },
      {
        link: "https://bridgedeck.org/wp-content/uploads/2022/01/01-2022-Advanced-Control-Specialty-Formulary-MMP-CVS-Jan-1-2022.pdf",
        subTitle: "Control Specialty Formulary Exclusions effective 1/1/2022",
      },
    ],
  },
  {
    title:
      "New Cigna website information – myCigna.com – operational – October 1, 2017",
    data: [
      {
        link: "https://bridgedeck.org/wp-content/uploads/2022/01/MMP-myCigna-website-effective-10-1-17.pdf",
        subTitle: "MyCigna.com – Flyer – October 1, 2017",
      },
    ],
  },
  {
    title: "Other forms",
    data: [
      {
        link: "https://bridgedeck.org/wp-content/uploads/2022/01/Affidavit-for-Dependent-Child.pdf",
        subTitle: "Affidavit for Dependent Child form",
      },
      {
        link: "https://bridgedeck.org/wp-content/uploads/2022/01/Affidavit-for-disabled-dependent.pdf",
        subTitle: "Affidavit for Disabled Dependent form",
      },
      {
        link: "https://bridgedeck.org/wp-content/uploads/2022/01/affidavitofdependency.pdf",
        subTitle: "Affidavit for Dependency form",
      },
      {
        link: "https://bridgedeck.org/wp-content/uploads/2022/01/Agreement-of-Repayment-Assignment-and-Subrogation.pdf",
        subTitle: "Agreement of Re-Payment, Assignment and Subrogation form",
      },
      {
        link: "https://bridgedeck.org/wp-content/uploads/2022/01/Annual-Physical-Form.pdf",
        subTitle: "Annual Health Examination and Immunization form",
      },
      {
        link: "https://bridgedeck.org/wp-content/uploads/2022/01/Coordination-of-Benefits-Form.pdf",
        subTitle: "Coordination of Benefits Information form",
      },
      {
        link: "https://bridgedeck.org/wp-content/uploads/2022/01/deltadentalform.pdf",
        subTitle: "Delta Dental form",
      },
      {
        link: "https://bridgedeck.org/wp-content/uploads/2022/01/employeestatement.pdf",
        subTitle:
          "Statement of Claim for Weekly Disability Benefits (Employee Statement) form",
      },
      {
        link: "https://bridgedeck.org/wp-content/uploads/2022/01/Accident-description-form.pdf",
        subTitle:
          "Injury Accident Form Agreement of Re-Payment, Assignment and Subrogation form",
      },
      {
        link: "https://bridgedeck.org/wp-content/uploads/2022/01/directmbrclaimform.pdf",
        subTitle: "Direct Member Reimbursement form (Prescription Drugs)",
      },
      {
        link: "https://bridgedeck.org/wp-content/uploads/2023/12/MMP-Scholarship-Brochure-2024-2025.pdf",
        subTitle:
          "Scholarship Program Brochure 2024-2025 – Filing deadline November 30, 2023",
      },
      {
        link: "https://bridgedeck.org/wp-content/uploads/2022/01/PermanentData.pdf",
        subTitle: "Permanent Data Form",
      },
      {
        link: "https://bridgedeck.org/wp-content/uploads/2022/01/MMP_Provider_Nomination_Form.pdf",
        subTitle: "CIGNA Provider Nomination Form",
      },
      {
        link: "https://bridgedeck.org/wp-content/uploads/2022/01/EnrollmentChildAge19-26.pdf",
        subTitle: "Enrollment Form for Eligible Adult Children 19-26",
      },
    ],
  },
];

const HealthAndBenifitsForms = () => {
  const theme = localStorage.getItem("theme");
  const [selectedTitle, setSelectedTitle] = useState("");

  const handleSelectChange = (event) => {
    setSelectedTitle(event.target.value);
  };

  return (
    <div
      name="hb-forms"
      className={`mx-auto pt-14 px-28 border-t-2 border-teal-300 p-4 ${
        theme === "dark" ? "bg-[#313131]" : "bg-gray-200"
      } text-${theme === "dark" ? "white" : "black"}`}
    >
      <h2
        className={`text-4xl pt-14 font-semibold mb-6 ${
          theme === "dark" ? "text-white" : "text-gray-600"
        }`}
      >
        Health and Benifits Forms
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

export default HealthAndBenifitsForms;
