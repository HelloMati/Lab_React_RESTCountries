import { useState, useEffect } from "react";
import CountriesList from "../components/CountriesList";

function CountriesContainer() {
    const [countries, setCountries] = useState([]);
    const [visitedCountries, setVisitedCountries] = useState([]);

useEffect(() => {
fetch("https://restcountries.com/v3.1/all")
    .then((response) => response.json())
    .then((jsonData) => setCountries(jsonData));
}, []);

const handleVisitedCountry = (name) => {
    const index = visitedCountries.indexOf(name);
    const newVisitedCountries = [...visitedCountries];
  
    if (index !== -1) {
      newVisitedCountries.splice(index, 1);
    } else {
      newVisitedCountries.push(name);
    }
  
    setVisitedCountries(newVisitedCountries);
  };
  

return (
<div>
    <h2>Countries</h2>
    <CountriesList
    countries={countries}
    updateVisitedClick={handleVisitedCountry}
    />
    <h2>Visited Countries</h2>
    {visitedCountries.map((countryName) => (
    <p key={countryName}>{countryName}</p>
    ))}
</div>
);
}

export default CountriesContainer;