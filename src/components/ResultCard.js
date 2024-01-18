import React, { useEffect } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

import "./index.css";
import Day from "../assets/day.svg";
import Sunrise from "../assets/sunrise.svg";
import Sunset from "../assets/sunset.svg";

const ResultCard = ({ results }) => {
  //create an array with the sunrise time, sunset time, solar noon time, day length, golden hour, dusk, dawn and last light
  const times = [
    {
      id: 1,
      name: "Begin",
      // info: [results?.sunrise, results?.dawn],
      info: [
        { title: "Sunrise", time: results?.sunrise },
        { title: "Dawn", time: results?.dawn },
      ],
      icon: Sunrise,
    },
    {
      id: 2,
      name: "Mid",
      // info: [results?.day_length, results?.golden_hour, results?.solar_noon],
      info: [
        { title: "Day Length", time: results?.day_length },
        { title: "Golden Hour", time: results?.golden_hour },
        { title: "Solar Noon", time: results?.solar_noon },
      ],
      icon: Day,
    },
    {
      id: 3,
      name: "End",
      info: [
        { title: "Sunset", time: results?.sunset },
        { title: "Dusk", time: results?.dusk },
        { title: "Last Light", time: results?.last_light },
      ],
      icon: Sunset,
    },
  ];

  const formattedDate = (date) => {
    const d = new Date(date);
    return d.toLocaleDateString();
  };

  const formattedTime = (time) => {
    let hour = time?.split(":")[0];
    //make the hour double digit
    if (hour?.length === 1) {
      hour = "0" + hour;
    }
    const minutes = time?.split(":")[1];
    return `${hour}:${minutes}`;
  };

  return (
    <div className="result-card">
      <h2>{formattedDate(results?.date)}</h2>
      <Carousel
        // autoPlay
        infiniteLoop
        centerMode
        interval={4000}
        showArrows={true}
        showStatus={false}
        showIndicators={false}
        showThumbs={false}
        axis="horizontal"
        centerSlidePercentage={100}
      >
        {times.map((time) => (
          <div key={time.id} className="carousel-div">
            <h3>{time.name}</h3>
            <img key={time.id} src={time.icon} alt={time.name} />
            <ul>
              {time.info.map((info) => (
                <li key={info.title}>
                  <h3>{info.title}</h3>
                  <p>{formattedTime(info.time)}</p>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default ResultCard;
