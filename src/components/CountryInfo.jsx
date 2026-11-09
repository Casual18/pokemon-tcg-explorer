import React from 'react';
function CountryInfo({ country }) {
  return (
    <div>
      <h2>{country.name}</h2>
      <p>Capital: {country.capital}</p>
      <p>Population: {country.population.toLocaleString()}</p>
    </div>
  );
}

export default CountryInfo;