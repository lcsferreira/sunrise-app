import { useState } from "react";
import axios from "axios";
import "./App.css";
import ResultCard from "./components/ResultCard";
import { Country, State, City } from "country-state-city";

function App() {
  const dateToday = new Date().toISOString().split("T")[0];
  const [results, setResults] = useState(null);
  const [showResult, setShowResult] = useState(false);

  const [date, setDate] = useState(dateToday);

  const [countrySelected, setCountrySelected] = useState("");
  const [stateSelected, setStateSelected] = useState("");
  const [citySelected, setCitySelected] = useState(null);

  const [states, setStates] = useState([]);
  const [cities, setCities] = useState([]);

  const countries = Country.getAllCountries();

  const handleCountryChange = (event) => {
    setCountrySelected(event.target.value);

    setStates(State.getStatesOfCountry(event.target.value));
  };

  const handleStateChange = (event) => {
    setStateSelected(event.target.value);
    // console.log("State: ", event.target.value);
    // console.log("Country: ", countrySelected);
    setCities(City.getCitiesOfState(countrySelected, event.target.value));
  };

  const handleCityChange = (event) => {
    // console.log("City: ", event.target.value);
    const [latitude, longitude] = event.target.value.split(",");
    setCitySelected({ lat: latitude, lng: longitude });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!citySelected) {
      console.log("No city selected");
      return;
    }
    getSunriseSunset(citySelected);
    setShowResult(true);
    //clear form
    clearForm();
  };

  const clearForm = () => {
    setCountrySelected("");
    setStateSelected("");
    setCitySelected(null);
    setStates([]);
    setCities([]);
    setDate(null);
    //select the first option
    document.getElementById("country").selectedIndex = 0;
  };

  const getSunriseSunset = (city) => {
    console.log("City: ", city);
    console.log("Date: ", date);

    axios
      .get(
        "https://api.sunrisesunset.io/json?lat=" +
          city.lat +
          "&lng=" +
          city.lng +
          "&date=" +
          date
      )
      .then((response) => {
        // console.log(response.data.results);
        setResults(response.data.results);
      });
  };

  const handleDateChange = (event) => {
    setDate(event.target.value);
  };

  return (
    <div className="container">
      <h1>SunSync App</h1>
      <div className={`content ${showResult ? "show-result" : ""}`}>
        <div
          className={`form-container ${
            showResult ? "form-container-hidden" : ""
          }`}
        >
          <h2>Select your location and date</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-control">
              <label htmlFor="date">Date</label>
              <input
                type="date"
                id="date"
                onChange={handleDateChange}
                defaultValue={dateToday}
              />
            </div>
            <div className="form-control">
              <label htmlFor="country">Country</label>
              <select id="country" onChange={handleCountryChange}>
                <option value="">Select a country</option>
                {countries?.map((country) => (
                  <option key={country.isoCode} value={country.isoCode}>
                    {country.name}
                  </option>
                ))}
              </select>
            </div>
            {countrySelected && (
              <div className="form-control">
                <label htmlFor="state">State</label>
                <select id="state" onChange={handleStateChange}>
                  <option value="">Select a state</option>
                  {states?.map((state) => (
                    <option key={state.isoCode} value={state.isoCode}>
                      {state.name}
                    </option>
                  ))}
                </select>
              </div>
            )}
            {stateSelected && (
              <div className="form-control">
                <label htmlFor="city">City</label>
                <select id="city" onChange={handleCityChange}>
                  <option value="">Select a city</option>
                  {cities?.map((city) => (
                    <option
                      key={city.name}
                      value={`${city.latitude},${city.longitude}`}
                    >
                      {city.name}
                    </option>
                  ))}
                </select>
              </div>
            )}
            <button
              type="submit"
              className="btn-submit"
              disabled={!citySelected}
            >
              Submit
            </button>
          </form>
        </div>
        {showResult ? (
          <ResultCard results={results} />
        ) : (
          <div className="no-city">No city selected</div>
        )}
      </div>
      <footer>
        <p>
          Made with React by{" "}
          <span>
            <a href="" target="_blank">
              Lucas Ferreira
            </a>
          </span>
        </p>
        <p>
          API by{" "}
          <span>
            <a href="https://sunrisesunset.io/api/">SunireseSunset</a>
          </span>
        </p>
      </footer>
    </div>
  );
}

export default App;
