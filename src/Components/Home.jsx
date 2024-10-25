import React, { useEffect, useState } from "react";
import image1 from "../Assets/MMPImages/APL Kennedy.jpg";
import image3 from "../Assets/MMPImages/Hap_Laoyd.jpeg";
import image4 from "../Assets/MMPImages/Potomac Express -.jpg";
import image5 from "../Assets/MMPImages/Seacor Green Ridge visit IMG_7154.jpg";
import image6 from "../Assets/MMPImages/USNS Yuma.jpg";
import image7 from "../Assets/MMPImages/USNSJohnLewis1.jpg";
import logo from "../Assets/HomeLogo.png";
import "../App.css";
import video1 from "../Assets/MMPImages/video.mp4";
import video2 from "../Assets/MMPImages/video2.mp4";
import { useNavigate } from "react-router-dom";
import { DateTime } from "luxon"; // Add this library if using timezone-aware date handling

const Home = () => {
  const navigate = useNavigate();
  const theme = localStorage.getItem("theme");
  const images = [
    { src: image1, title: "APL Kennedy" },
    { src: image3, title: "Hap Laoyd" },
    { src: image4, title: "Potomac Express" },
    { src: image5, title: "Seacor Green Ridge" },
    { src: image6, title: "USNS Yuma" },
    { src: image7, title: "USNS John Lewis" },
  ];

  const ROW_SIZE = 3;

  const getCurrentRowIndex = () => {
    const storedIndex = localStorage.getItem("currentRowIndex");
    return storedIndex ? parseInt(storedIndex, 10) : 0;
  };

  const splitImagesIntoRows = () => {
    const rows = [];
    for (let i = 0; i < images.length; i += ROW_SIZE) {
      rows.push(images.slice(i, i + ROW_SIZE));
    }
    return rows;
  };

  const rows = splitImagesIntoRows();
  const [currentRowIndex, setCurrentRowIndex] = useState(getCurrentRowIndex());

  useEffect(() => {
    const nextRowIndex = (currentRowIndex + 1) % rows.length;
    localStorage.setItem("currentRowIndex", nextRowIndex);
  }, [currentRowIndex, rows.length]);

  const getVideoForDay = () => {
    // Get the current date and ensure it's timezone-aware
    const today = DateTime.now().setZone("local").startOf("day").toISODate();
    // const today = "2024-10-28";

    console.log("Today Date:", today);

    // Check last played date and video from localStorage
    const lastPlayedDate = localStorage.getItem("lastPlayedDate");

    console.log("Last Played Date:", lastPlayedDate);
    const lastVideo = localStorage.getItem("lastVideo") || "video1";

    // If the date has changed, switch the video
    if (lastPlayedDate !== today) {
      const nextVideo = lastVideo === "video1" ? "video2" : "video1";
      localStorage.setItem("lastPlayedDate", today);
      localStorage.setItem("lastVideo", nextVideo);
      return nextVideo === "video1" ? video1 : video2;
    }

    // Otherwise, continue with the same video
    return lastVideo === "video1" ? video1 : video2;
  };

  return (
    <div
      className={`${
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
          src={getVideoForDay()}
          autoPlay
          loop
          muted
          className="absolute top-0 left-0 w-full h-full object-cover"
        />
        <div
          onClick={() => navigate("/")}
          className="absolute top-16 left-5 flex pt-5 items-center"
        >
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

      <div
        className={`my-10 h-60 flex justify-center ${
          theme === "dark"
            ? "bg-gray-800 text-white"
            : "bg-gray-100 text-gray-900"
        } items-center`}
      >
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-evenly items-center">
            <div className="flex">
              <div className="text-blue-600 mx-4 text-5xl flex items-center h-20 w-20 justify-center rounded-full bg-gray-300">
                <i className="fa-solid fa-envelope"></i>
              </div>
              <div>
                <h2
                  className={`text-4xl font-bold pb-2 ${
                    theme === "dark" ? "text-white" : "text-blue-900"
                  }`}
                >
                  Need help?
                </h2>
                <p
                  className={`text-xl ${
                    theme === "dark" ? "text-white" : "text-gray-700"
                  }`}
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
              <div>
                <h2
                  className={`text-4xl font-bold pb-2 ${
                    theme === "dark" ? "text-white" : "text-blue-900"
                  }`}
                >
                  Need a form?
                </h2>
                <p
                  className={`text-xl ${
                    theme === "dark" ? "text-white" : "text-gray-700"
                  }`}
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

      <div className="grid grid-cols-3 gap-4 p-8">
        {rows[currentRowIndex].map((image, index) => (
          <div key={index} className="group relative overflow-hidden">
            <img
              src={image.src}
              alt={image.title}
              className="transform transition-transform duration-500 group-hover:scale-110"
              style={{ width: "100%", height: "250px", objectFit: "cover" }}
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              <p className="text-white text-xl font-bold">{image.title}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
