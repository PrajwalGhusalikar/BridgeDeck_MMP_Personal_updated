import React from "react";
import image1 from "../Assets/MMPImages/APL Kennedy.jpg";
import image2 from "../Assets/MMPImages/APL Pres Cleveland in Naha.jpg";
import image3 from "../Assets/MMPImages/Hap_Laoyd.jpeg";
import image4 from "../Assets/MMPImages/Potomac Express -.jpg";
import image5 from "../Assets/MMPImages/Seacor Green Ridge visit IMG_7154.jpg";
import image6 from "../Assets/MMPImages/USNS Yuma.jpg";
import image7 from "../Assets/MMPImages/USNSJohnLewis1.jpg";
import logo from "../Assets/HomeLogo.png";
import "../App.css";
// import video from "../Assets/MMPImages/video.mp4";
import video2 from "../Assets/MMPImages/video2.mp4";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const Home = () => {
  return (
    <div name="home">
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

      {/* Carousel */}
      <div className="mt-0">
        <Carousel
          autoPlay
          infiniteLoop
          interval={2000} // Increase interval to make it more comfortable
          showArrows={true}
          stopOnHover={false} // Ensure infinite loop continues on hover
          swipeable={true}
          showThumbs={false} // Hide clickable images at the bottom
          dynamicHeight={false} // Set static height for images
          centerMode={true}
          centerSlidePercentage={80}
        >
          <div>
            <img
              src={image1}
              alt="APL Kennedy"
              style={{ height: "500px", objectFit: "cover" }}
            />
          </div>
          <div>
            <img
              src={image2}
              alt="APL Pres Cleveland in Naha"
              style={{ height: "500px", objectFit: "cover" }}
            />
          </div>
          <div>
            <img
              src={image3}
              alt="Hap Laoyd"
              style={{ height: "500px", objectFit: "cover" }}
            />
          </div>
          <div>
            <img
              src={image4}
              alt="Potomac Express"
              style={{ height: "500px", objectFit: "cover" }}
            />
          </div>
          <div>
            <img
              src={image5}
              alt="Seacor Green Ridge visit"
              style={{ height: "500px", objectFit: "cover" }}
            />
          </div>
          <div>
            <img
              src={image6}
              alt="USNS Yuma"
              style={{ height: "500px", objectFit: "cover" }}
            />
          </div>
          <div>
            <img
              src={image7}
              alt="USNS John Lewis"
              style={{ height: "500px", objectFit: "cover" }}
            />
          </div>
        </Carousel>
      </div>
    </div>
  );
};

export default Home;
