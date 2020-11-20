import styled from "styled-components";
import { fz_large, fz_md, fz_sm, fz_xlarge } from "../style/_variables"
import {up_large, up_medium, up_xlarge, down_large, down_medium, down_small} from "../style/_variables"

export const CardStyle = styled.div`
.card{
    cursor: pointer;
    width: 30rem;
    background-color: ${({ theme }) => theme.elementColor};
    margin: 3rem;
    border-radius: 5px;
    overflow: hidden;
    box-shadow: 0 0 7px ${({ theme }) => theme.cardBoxShadow} ;
    transform: visibility 0.1s;
    >img{
        display: block;
        width: 100%;
        object-fit: cover;
        height: 200px;
    }
    &__content{
        margin: 1rem 3rem;
        padding: 1rem 0;
    }
    &__name{
        font-size: ${fz_large};
        font-weight: 600;
        margin-bottom: 2rem;
        // @include breakpoint-up("medium"){
        //    
        // }
        @media only screen and (min-width: ${up_medium}) {
            font-size: ${fz_xlarge};
          }
    }
    &__details{
        >p{
            margin: 0.8rem 0;
        }
    }
}
`;
