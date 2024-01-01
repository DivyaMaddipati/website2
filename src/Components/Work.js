import React from "react";
import PickMeals from "../Assets/pick-meals-image.png";
import ChooseMeals from "../Assets/choose-image.png";
import DeliveryMeals from "../Assets/delivery-image.png";

const Work = () => {
  const workInfoData = [
    {
      image: PickMeals,
      title: "Our Philosophy",
      text: "Prodify believes in delivering a smart diversified technologies value. As the technology evolving every day and now it's time to spring up different systems to yield the better results for a business.",
    },
    {
      image: ChooseMeals,
      title: "Our Mission",
      text: "Our mission is to provide the technology as affordable across all platforms much as even a small business can enable enterprise software to accelerate with long-term stability.",
    },
    {
      image: DeliveryMeals,
      title: "Our Startegy",
      text: "To construct the systems with a group of simplified and streamlined solutions by adopting diversified and cutting-edge technologies in a scheduled manner within a minimum time span.",
    },
  ];
  return (
    <div className="work-section-wrapper">
      <div className="work-section-bottom">
        {workInfoData.map((data) => (
          <div className="work-section-info" key={data.title}>
            <h2>{data.title}</h2>
            <p>{data.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Work;
