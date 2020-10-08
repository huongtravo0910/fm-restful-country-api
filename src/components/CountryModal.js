import React, { useState } from "react";
import "./CountryModal.scss";
import { formatNumber } from "../helper/helper";

import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function CountryModal(props) {
  const handleClick = () => {
    props.setModalOpened(false);
  }

  let borderCountries;
  if (props.borders && props.borders.length !== 0) {
    borderCountries = props.borders.map((borderCountry, i) => (
      <span className="button" key={i}>
        {borderCountry}{" "}
      </span>
    ));
  } else if (props.borders.length === 0) {
    borderCountries = <span>No border countries</span>;
  }
  return (
    props.isModalOpened && (
      <div className="modal-bg">
        <div className="modal__container container">
          <button className="button" onClick={handleClick}>
            <FontAwesomeIcon icon={faArrowLeft} className="icon" />
            Back
          </button>
          <div className="modal__content">
            <img src={props.flag} alt="flag" />
            <div className="modal__text">
              <h1>{props.name}</h1>
              <div className="modal__detail">
                <div>
                  <p>
                    <strong>Native Name: </strong> {props.nativeName}
                  </p>
                  <p>
                    <strong>Population: </strong>{" "}
                    {formatNumber(props.population)}
                  </p>
                  <p>
                    <strong>Region: </strong> {props.region}
                  </p>
                  <p>
                    <strong>Sub Region: </strong> {props.subregion}
                  </p>
                  <p>
                    <strong>Capital: </strong> {props.capital}
                  </p>
                </div>
                <div>
                  <p>
                    <strong>Top Level Domain: </strong> {props.topLevelDomain}
                  </p>
                  <p>
                    <strong>Currencies: </strong> {props.currencies[0]["name"]}
                  </p>
                  <p>
                    <strong>Languages: </strong> {props.languages[0]["name"]}
                  </p>
                </div>
              </div>
              <div className="modal__borderCountries">
                <h4>Border Countries: </h4>
                <div>{borderCountries}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  );
}
