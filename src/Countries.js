import React, { useEffect, useState, useRef } from "react";
import CountryCard from "./components/CountryCard";
import CountryModal from "./components/CountryModal";
import {
  faChevronDown,
  faMoon,
  faSearch,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { CountriesWrapper } from "./style/Countries.style";

export default function Countries(props) {
  const filter = useRef();

  const [region, setRegion] = useState("Filter by Region");
  const [searchValue, setSearchValue] = useState("");
  const [clickedCountry, setClickedCountry] = useState("");
  const [countries, setCountries] = useState([]);
  const [isFilter, setFilter] = useState(false);
  const [isModalOpened, setModalOpened] = useState(false);

  useEffect(() => {
    async function fetchData() {
      const res = await fetch("https://restcountries.eu/rest/v2/all");
      res
        .json()
        .then((res) => setCountries(res))
        .catch((err) => console.log(err));
    }
    fetchData();
  });

  const filterAndSearch = () => {
    if (
      searchValue !== "" ||
      (region !== "Filter by Region" && region !== "All")
    ) {
      if (
        searchValue !== "" &&
        region !== "Filter by Region" &&
        region !== "All"
      ) {
        searchedCountries = countries.filter(
          (country) =>
            country.name.toLowerCase().includes(searchValue.toLowerCase()) &&
            country["region"] === region
        );
      } else if (
        (region !== "Filter by Region" || region !== "All") &&
        searchValue !== ""
      ) {
        searchedCountries = countries.filter((country) =>
          country.name.toLowerCase().includes(searchValue.toLowerCase())
        );
      } else if (
        region !== "Filter by Region" &&
        region !== "All" &&
        searchValue === ""
      ) {
        searchedCountries = countries.filter(
          (country) => country["region"] === region
        );
      }
    }
    return searchedCountries;
  };

  const handleClickCountry = (name) => {
    setClickedCountry(name);
  };

  //Data cua cac nuoc shown len man hinh
  let countriesInfo;
  let searchedCountries;
  if (countries === []) {
    countriesInfo = <h2>Loading...</h2>;
  } else {
    if (
      (searchValue === "" && region === "All") ||
      (searchValue === "" && region === "Filter by Region")
    ) {
      countriesInfo = countries.map((country, i) => (
        <CountryCard
          key={i}
          name={country.name}
          flag={country.flag}
          population={country.population}
          region={country.region}
          capital={country.capital}
          clickCountry={handleClickCountry}
          setModalOpened={setModalOpened}
          isModalOpened={isModalOpened}
        />
      ));
    } else {
      searchedCountries = filterAndSearch();
      countriesInfo = searchedCountries.map((country, i) => (
        <CountryCard
          key={i}
          name={country.name}
          flag={country.flag}
          population={country.population}
          region={country.region}
          capital={country.capital}
          clickCountry={handleClickCountry}
          setModalOpened={setModalOpened}
          isModalOpened={isModalOpened}
        />
      ));
    }
  }

  const handleToggleFilter = () => {
    if (isFilter) {
      console.log(isFilter);
      document.addEventListener("click", handleOutsideClick, false);
      console.log("add");
    } else {
      document.removeEventListener("click", handleOutsideClick, false);
      console.log("remove");
    }
    setFilter(!isFilter);
  };

  //Modal
  let chosenCountry;
  let modalCountry;
  if (clickedCountry) {
    modalCountry = countries.find((country) =>
      country.name.toLowerCase().includes(clickedCountry.toLowerCase())
    );
    chosenCountry = (
      <CountryModal
        name={modalCountry.name}
        flag={modalCountry.flag}
        population={modalCountry.population}
        region={modalCountry.region}
        capital={modalCountry.capital}
        subregion={modalCountry.subregion}
        topLevelDomain={modalCountry.topLevelDomain}
        currencies={modalCountry.currencies}
        languages={modalCountry.languages}
        borders={modalCountry.borders}
        nativeName={modalCountry.nativeName}
        isModalOpened={isModalOpened}
        setModalOpened={setModalOpened}
        // clickCountry={handleClickCountry}
      />
    );
  }

  const handleOutsideClick = (e) => {
    // ignore clicks on the component itself
    if (filter.current.contains(e.target)) {
      return;
    }
    console.log("outside");
    setFilter(!isFilter);
    handleToggleFilter();
  };

  const handleFilterRegion = (e) => {
    setRegion(e.target.getAttribute("value"));
    console.log(region);
  };

  const handleInputOnChange = (e) => {
    setSearchValue(e.target.value);
  };

  const handleToggleTheme = () => {
    props.toggleTheme();
  };

  return (
    <CountriesWrapper>
      <header className="header">
        <div className="top-bar container">
          <div className="top-bar__left">Where in the world?</div>
          <div className="top-bar__right" onClick={handleToggleTheme}>
            <FontAwesomeIcon icon={faMoon} className="icon" />
            <span>Dark Mode</span>
          </div>
        </div>
      </header>

      <section className="container content">
        <div className="search">
          <div className="search__input">
            <FontAwesomeIcon icon={faSearch} className="icon" />
            <input
              type="text"
              placeholder="Search for a country..."
              onChange={handleInputOnChange}
            />
          </div>
          <div className="search__dropdown" ref={filter} value="Toggle">
            <div
              className="search__dropdown--toggle"
              onClick={handleToggleFilter}
            >
              <span>{region}</span>
              <FontAwesomeIcon icon={faChevronDown} className="icon" />
            </div>

            <ul className={isFilter ? "filter" : "noFilter"}>
              <li onClick={handleFilterRegion} value="All">
                All
              </li>
              <li onClick={handleFilterRegion} value="Africa">
                Africa
              </li>
              <li onClick={handleFilterRegion} value="Americas">
                Americas
              </li>
              <li onClick={handleFilterRegion} value="Asia">
                Asia
              </li>
              <li onClick={handleFilterRegion} value="Europe">
                Europe
              </li>
              <li onClick={handleFilterRegion} value="Oceania">
                Oceania
              </li>
            </ul>
          </div>
        </div>
        <div className="countries">{countriesInfo}</div>
      </section>
      {chosenCountry}
    </CountriesWrapper>
  );
}
