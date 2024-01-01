import React from "react";
// import BannerBackground from "../Assets/home-banner-background.png";
// import BannerImage from "../Assets/home-banner-image.png";
import Navbar from "./Navbar";
import { FiArrowRight } from "react-icons/fi";

const Home = () => {
  return (
    <div className="home-container">
      <Navbar />
      <div className="home-banner-container">
        <div className="text-container">
          <h1 className="primary-heading-1">
            Build Enterprise Systems
          </h1>
          <h1 className="primary-heading-2">
          Cutting Edge Technologies
          </h1>
          <p className="primary-text">
          We as a Technology Partner build enterprise systems and Prototyping with cutting-edge technologies at high speed.
          </p> 
           <button className="secondary-button">
            Explore us <FiArrowRight />{" "}
          </button>  
          </div>
        </div>
    </div>
  );
};

export default Home;
