import React, { useEffect, useMemo, useState } from "react";
import image1 from "../Assets/MMPImages/APL Kennedy.jpg";
import image2 from "../Assets/MMPImages/APL Pres Cleveland in Naha.jpg";
import image3 from "../Assets/MMPImages/Hap_Laoyd.jpeg";
import image4 from "../Assets/MMPImages/Potomac Express -.jpg";
import image5 from "../Assets/MMPImages/Seacor Green Ridge visit IMG_7154.jpg";
import image6 from "../Assets/MMPImages/USNS Yuma.jpg";
import image7 from "../Assets/MMPImages/USNSJohnLewis1.jpg";
import logo from "../Assets/HomeLogo.png";
import "../App.css";
import video2 from "../Assets/MMPImages/video2.mp4";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  const theme = localStorage.getItem("theme");
  const images = useMemo(
    () => [image1, image2, image3, image4, image5, image6, image7],
    []
  );
  // Randomize and select 6 images on page refresh
  const [currentImages, setCurrentImages] = useState([]);

  useEffect(() => {
    const shuffledImages = images.sort(() => 0.5 - Math.random());
    setCurrentImages(shuffledImages.slice(0, 6)); // Select 6 random images
  }, [images]);

  // Duplicate the array of current images for infinite scrolling effect
  const duplicatedImages = [...currentImages, ...currentImages];

  return (
    <div
      className={` ${
        theme === "dark"
          ? "bg-[#313131] text-white"
          : "bg-gray-300 text-gray-900"
      } text-white p-8`}
      name="home"
    >
      <div
        style={{ backgroundSize: "cover", backgroundColor: "black" }}
        className="relative flex justify-center items-center h-screen"
      >
        <video
          src={video2}
          autoPlay
          loop
          muted
          className="absolute top-0 left-0 w-full h-full object-cover"
        />
        <div className="absolute top-16 left-5 flex pt-5 items-center">
          <img src={logo} alt="Logo" className="h-32 p-1 mx-4" />
          <div className="w-48 font-semibold text-white text-center text-lg drop-shadow-lg text-shadow-floating">
            The Masters, Mates & Pilots Benefit Plans
          </div>
        </div>
        <div className="absolute top-16 right-5 flex flex-col items-end">
          <button
            className="bg-gray-700 hover:bg-teal-700 text-white font-bold py-2 px-4 border-lx rounded-md shadow-lg mt-10 drop-shadow-lg"
            onClick={() => {
              alert("Coming Soon...");
            }}
          >
            Member Portal
          </button>
        </div>
      </div>

      {/* Need help and get info section */}
      <div
        className={` my-10 h-60 flex justify-center ${
          theme === "dark"
            ? " bg-gray-800  text-white"
            : "bg-gray-100 text-gray-900"
        } items-center`}
      >
        <div className={`container mx-auto px-4  `}>
          <div className="flex flex-col md:flex-row justify-evenly items-center">
            <div className="flex">
              <div className="text-blue-600 mx-4 text-5xl flex items-center h-20 w-20 justify-center rounded-full bg-gray-300">
                <i className="fa-solid fa-envelope"></i>
              </div>
              <div className="mb-4 md:mb-0">
                <h2
                  className={`text-4xl font-bold  pb-2 ${
                    theme === "dark" ? "text-white" : "text-blue-900"
                  } `}
                >
                  Need help?
                </h2>
                <p
                  className={`text-xl font-normal  ${
                    theme === "dark" ? "text-white" : "text-gray-700"
                  } `}
                >
                  View Health and Benefit Provider List
                </p>
                <button className="bg-blue-500 hover:bg-blue-900 text-white font-bold py-2 px-6 rounded-lg mt-4">
                  <a
                    href="https://api.cyberbriefs.org/media/doc/Health-and-Benefit-Provider-List.pdf"
                    target="_blank"
                    rel="noreferrer"
                  >
                    GET INFO
                  </a>
                </button>
              </div>
            </div>
            <div className="flex">
              <div className="text-blue-600 mx-4 text-5xl flex items-center h-20 w-20 justify-center rounded-full bg-gray-300">
                <i className="fa-regular fa-file-lines"></i>
              </div>
              <div className="mb-4 md:mb-0">
                <h2
                  className={`text-4xl font-bold  pb-2 ${
                    theme === "dark" ? "text-white" : "text-blue-900"
                  } `}
                >
                  Need a form?
                </h2>
                <p
                  className={`text-xl font-normal  ${
                    theme === "dark" ? "text-white" : "text-gray-700"
                  } `}
                >
                  Access forms on the Forms page
                </p>
                <button
                  onClick={() => {
                    navigate("/benifitsplans");
                  }}
                  className="bg-blue-500 hover:bg-blue-900 text-white font-bold py-2 px-6 rounded-lg mt-4"
                >
                  GET INFO
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* images */}
      <div
        className={`${
          theme === "dark"
            ? "bg-[#313131] text-white"
            : "bg-gray-300 text-gray-900"
        }`}
      >
        {/* Film Roll Image Section */}
        <div
          className={`${
            theme === "dark"
              ? "bg-[#313131] text-white"
              : "bg-gray-300 text-gray-900"
          } `}
        >
          <div className="my-10 flex justify-center items-center">
            <div className="container mx-auto px-4">
              {/* Film Roll Animation */}
              <div className="overflow-hidden relative">
                <div className="flex justify-center items-center space-x-4 animate-scrollFilmRoll">
                  {duplicatedImages.map((image, index) => (
                    <div
                      key={index}
                      className="w-80 h-60 flex-shrink-0 transition-all duration-500 hover:scale-105"
                    >
                      <img
                        src={image}
                        alt={` ${image + index}`}
                        className="w-full h-full object-cover rounded-lg shadow-lg"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>{" "}
        </div>
      </div>
    </div>
  );
};

export default Home;
