import React from "react";
import "./index.css";

const ResultCard = ({ results }) => {
  return (
    <div className="result-card">
      <h2>Information about the Sun</h2>
      <div>
        <h3>{results?.date}</h3>
        <p>Sunrise: {results?.sunrise}</p>
        <p>Sunset: {results?.sunset}</p>
        <p>First Light: {results?.first_light}</p>
        <p>Last Light: {results?.last_light}</p>
        <p>Dawn: {results?.dawn}</p>
        <p>Dusk: {results?.dusk}</p>
        <p>Solar Noon: {results?.solar_noon}</p>
        <p>Golden Hour: {results?.golden_hour}</p>
        <p>Day Length: {results?.day_length}</p>
        <p>Timezone: {results?.timezone}</p>
        <p>UTC Offset: {results?.utc_offset}</p>
      </div>
    </div>
  );
};

export default ResultCard;
