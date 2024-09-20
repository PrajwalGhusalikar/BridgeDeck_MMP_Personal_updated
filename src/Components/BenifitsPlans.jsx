import React from "react";

const BenifitsPlans = () => {
  const plans = [
    {
      title: "MM&P Health & Benefit Plan",
    },
    {
      title: "MM&P Pension Plan",
    },
    {
      title: "MM&P Individual Retirement Account Plan (IRAP)",
    },
    {
      title: "MM&P Joint Employment Committee (JEC)",
    },
    {
      title: "MM&P Adjustable Pension Plan",
    },
    {
      title:
        "MM&P MATES (Maritime Advancement, Training, Education & Safety) Program",
    },
    {
      title: "MM&P Vacation Plan",
    },
  ];

  // const [theme, setTheme] = useState("dark");
  const theme = localStorage.getItem("theme");

  return (
    <div
      name="plan-office"
      className={`${theme === "dark" ? "bg-[#313131]" : "bg-gray-200"}  text-${
        theme === "dark" ? "white" : "black"
      } p-8`}
    >
      <h1 className="text-4xl pt-16 text-center font-semibold mb-8">
        MM&P Benefit Plans: Your Guide to Coverage and Support
      </h1>

      <p className="mb-1 text-lg sm:mx-20">
        The Masters, Mates & Pilots Benefit Plans are Employer funded, trust
        administered benefit Funds located at Linthicum Heights, Maryland.
      </p>
      <p className="mb-6 text-lg sm:mx-20">
        The following Plans were established pursuant to Collective Bargaining
        Agreements between signatory companies and the International
        Organization of Masters, Mates & Pilots (IOMM&P):
      </p>
      <div className="grid grid-cols-3 gap-4 mb-12 sm:mx-20">
        {plans.map((plan, index) => (
          <div
            key={index}
            className={`${
              theme === "dark" ? "bg-[#282727]" : "bg-gray-300"
            } border border-white rounded-md p-4`}
          >
            <h2 className="text-xl font-semibold mb-2">{plan.title}</h2>
          </div>
        ))}
      </div>

      <div
        className={` ${
          theme === "dark" ? "bg-[#282727]" : "bg-gray-300"
        } rounded-md p-4 border border-white sm:mx-20`}
      >
        <ul className="list-disc pl-8 mb-12">
          <li className="mb-4">
            Benefits are provided from the Plan's assets, which are accumulated
            under the provisions of the written agreements and the trust
            agreements and held in a trust fund for the purpose of providing
            benefits to covered participants and defraying reasonable
            administrative expenses.
          </li>
          <li className="mb-4">
            Eligible Members/Applicants of the IOMM&P working in Covered
            Employment may be eligible to benefits under one or more of the
            above Plans. The Plan Office is responsible for the administration
            of the Plans.
          </li>
          <li className="mb-4">
            A Board of Trustees, consisting of Union representatives and
            Employer representatives who have equal voting strength, is the Plan
            Administrator.
          </li>
          <li className="mb-4">
            If you are a MM&P member and have any questions about the Plan, or
            your benefits and rights under the Plan, please contact the Plan
            Office.
          </li>
          <li className="mb-4">
            For more information, check out our{" "}
            <a
              className="text-teal-500"
              href="https://api.cyberbriefs.org/media/doc/Health-and-Benefit-Provider-List.pdf"
              target="_blank"
              rel="noreferrer"
            >
              H&B Provider
            </a>{" "}
            List.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default BenifitsPlans;
