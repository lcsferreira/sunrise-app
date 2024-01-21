import React, { useEffect } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

import "./index.css";
import Day from "../assets/day.svg";
import Sunrise from "../assets/sunrise.svg";
import Sunset from "../assets/sunset.svg";

import DayBg from "../assets/day-bg.jpg";
import SunriseBg from "../assets/sunrise-bg.jpg";
import SunsetBg from "../assets/sunset-bg.jpg";

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
    //sum 1 day to the date because the API returns the date of the day before
    const tomorrow = new Date(date);
    tomorrow.setDate(tomorrow.getDate() + 1);
    const tomorrowDate = tomorrow.toLocaleDateString();
    return tomorrowDate;
  };

  const formattedTime = (time) => {
    const hour = time?.split(":")[0];
    const minutes = time?.split(":")[1];
    const pmOrAm = hour >= 12 ? "PM" : "AM";

    if (hour?.length === 1) {
      return `0${hour}:${minutes} ${pmOrAm}`;
    }

    return `${hour}:${minutes} ${pmOrAm}`;
  };

  const onClickChangeBgImage = (index) => {
    const body = document.querySelector("body");
    if (index === 0) {
      body.style.backgroundImage = `url(${SunriseBg})`;
    } else if (index === 2) {
      body.style.backgroundImage = `url(${SunsetBg})`;
    } else {
      body.style.backgroundImage = `url(${DayBg})`;
    }
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
        onChange={onClickChangeBgImage}
      >
        {times?.map((time) => (
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
