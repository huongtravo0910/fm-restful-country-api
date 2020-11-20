import React from "react";
import { formatNumber } from "../helper/helper";

import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { Button } from "../style/Button.style";
import { ModalStyle } from "../components/CountryModal.style";

export default function CountryModal(props) {
  const handleBackClick = () => {
    props.setModalOpened(false);
  };
  // const handleCountryClick = () => {
  //   props.clickCountry(props.name);
  //   props.setModalOpened(true);
  // };
  let borderCountries;
  if (props.borders && props.borders.length !== 0) {
    borderCountries = props.borders.map((borderCountry, i) => (
      <Button style={{ cursor: "auto" }} key={i}>
        {borderCountry}
      </Button>
    ));
  } else if (props.borders.length === 0) {
    borderCountries = <span>No border countries</span>;
  }
  return (
    props.isModalOpened && (
      <ModalStyle>
        <div className="modal-bg">
          <div className="modal__container container">
            <Button style={{ padding: "10px 15px" }} onClick={handleBackClick}>
              <FontAwesomeIcon icon={faArrowLeft} className="icon" />
              Back
            </Button>
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
                      <strong>Currencies: </strong>{" "}
                      {props.currencies[0]["name"]}
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
      </ModalStyle>
    )
  );
}
