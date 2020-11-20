import styled from "styled-components";
import { fz_large, fz_md, fz_sm, fz_xlarge } from "../style/_variables";
import {
  up_large,
  up_medium,
  up_xlarge,
  down_large,
  down_medium,
  down_small,
} from "../style/_variables";

export const ModalStyle = styled.div`
  .modal-bg {
    position: fixed;
    overflow-y: scroll;
    width: 100%;
    height: 100%;
    left: 0;
    top: 7rem;
    background-color: ${({ theme }) => theme.modalBackground};
    //Set transition
    visibility: visible;
    opacity: 1;
    transition: visibility 0.5s, opacity 0.5s;
    z-index: 0;
  }

  .modal {
    &__container {
      padding: 5rem 3rem;
      max-width: 1440px;
      background-color: ${({ theme }) => theme.elementColor};
    }
    &__content {
      padding: 7rem 0;
      display: flex;
      flex-direction: column;
      @media only screen and (min-width: ${up_medium}) {
        top: 80px;
        flex-direction: row;
      }
      > img {
        display: block;
        width: 100%;
        height: 20rem;
        @include breakpoint-up("medium") {
        }
        @media only screen and (min-width: ${up_medium}) {
          width: 40%;
          height: 25rem;
        }
        @media only screen and (min-width: ${up_large}) {
          width: 40%;
          height: 35rem;
        }
        object-fit: cover;
      }
    }
    &__text {
      @media only screen and (min-width: ${up_medium}) {
        margin-left: calc(100% / 6);
      }
    }
    &__detail {
      margin-bottom: 5rem;
      @media only screen and (min-width: ${up_medium}) {
        display: flex;
        flex-wrap: wrap;
        > :nth-child(2) {
          margin-left: 2rem;
        }
      }
      > div {
        margin-bottom: 5rem;
      }
    }
    &__borderCountries {
      @include breakpoint-up("medium") {
      }
      @media only screen and (min-width: ${up_medium}) {
        display: flex;
        flex-wrap: wrap;
      }
      > h4 {
        margin-left: 0;
        font-size: ${fz_md};
        margin-right: 2rem;
      }
      > div {
        display: flex;
        flex-wrap: wrap;
        > span {
          padding: 2rem;
          margin-right: 1rem;
          margin-bottom: 2rem;
          display: flex;
          justify-content: space-around;
          align-items: center;
        }
      }
    }
  }

  .bg-active {
    visibility: visible;
    opacity: 1;
  }
`;
