import React from "react";
import "./CountryCard.scss";
import {formatNumber} from "../helper/helper";

export default function CountryCard(props) {
  const handleClick = () => {
    props.clickCountry(props.name);
    props.setModalOpened(true);
  }
  return (
    <div className="card" onClick={handleClick} name={props.name}>
      <img src={props.flag} alt="boCongAnh" />
      <div className="card__content">
        <div className="card__name"> {props.name}</div>
        <div className="card__details">
          <p>
            <strong>Population: </strong>
            {formatNumber(props.population)}
          </p>
          <p>
            <strong>Region: </strong>
            {props.region}
          </p>
          <p>
            <strong>Capital: </strong>
            {props.capital}
          </p>
        </div>
      </div>
    </div>
  );
}
