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

export const CountriesWrapper = styled.header`
  .header {
    position: fixed;
    background-color: ${({ theme }) => theme.elementColor};
    box-shadow: 0 4px 6px -4px ${({ theme }) => theme.cardBoxShadow};
    z-index: 1;
    height: 7rem;
    width: 100%;
  }

  .top-bar {
    display: flex;
    justify-content: space-between;
    padding: 2.2rem 1rem;
    &__left {
      font-size: ${fz_md};
      font-weight: 600;
      @media only screen and (min-width: ${up_medium}) {
        font-size: ${fz_large};
      }
    }
    &__right {
      cursor: pointer;
      > span {
        margin-left: 0.5rem;
      }
    }
  }

  .content {
    padding-top: 10rem;
    @media only screen and (min-width: ${up_medium}) {
      padding-top: 7rem;
    }
  }

  .search {
    width: 100%;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    align-items: center;
    @media only screen and (min-width: ${up_medium}) {
      flex-direction: row;
      padding: 2rem 2rem;
    }
    &__input {
      width: 90%;
      height: 6rem;
      padding: 1.8rem;
      background-color: ${({ theme }) => theme.elementColor};
      border-radius: 5px;
      box-shadow: 0 1px 3px ${({ theme }) => theme.inputBoxShadow1},
        0 1px 2px ${({ theme }) => theme.inputBoxShadow2};
      @media only screen and (min-width: ${up_medium}) {
        width: 50%;
      }
      @media only screen and (min-width: ${up_large}) {
        width: 40%;
      }
      > input {
        margin-left: 2rem;
        border: none;
        border-collapse: collapse;
        outline: none;
        font-size: ${fz_sm} @media only screen and (min-width: ${up_medium}) {
          font-size: ${fz_md};
        }
        background-color: ${({ theme }) => theme.input};
      }
      > .icon {
        color: $lightModeInput;
      }
    }
    &__dropdown {
      border-radius: 5px;
      margin-top: 2rem;
      margin-left: -30%;
      padding: 0 1rem;
      cursor: pointer;
      height: 6rem;
      background-color: ${({ theme }) => theme.elementColor};
      width: 60%;
      position: relative;
      box-shadow: 0 1px 3px ${({ theme }) => theme.inputBoxShadow1}, 0 1px 2px ${({ theme }) => theme.inputBoxShadow2};
      @media only screen and (min-width: ${up_medium}) {
        margin-left: 0;
        width: 30%;
        margin-left: -50%;
        padding: 0 1.5rem;
      }
      @media only screen and (min-width: ${up_large}) {
        margin-left: 0;
        width: 20%;
      }
      &--toggle {
        margin: 0 auto;
        padding: 2rem;
        display: flex;
        justify-content: space-between;
        align-items: center;
      }
      > ul {
        margin-top: 1rem;
        margin-left: -5%;
        width: 110%;
        border-radius: 5px;
        background-color: ${({ theme }) => theme.elementColor};
        box-shadow: 0 1px 3px rgba(0, 0, 0, 0.06), 0 1px 2px rgba(0, 0, 0, 0.12);
        padding: 1rem 3rem;
        > li {
          list-style: none;
          margin-top: 2rem;
        }
        @media only screen and (min-width: ${up_medium}) {
          margin-top: 1rem;
        }
        @media only screen and (min-width: ${up_large}) {
          margin-top: 0;
        }
      }
    }
  }

  .countries {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: center;
  }
`;
