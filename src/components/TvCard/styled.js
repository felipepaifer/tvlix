import styled from "styled-components"

export const TvCardContainer = styled.div`
  border-radius: 8px;
  width: 100%;
  height: 300px;
  background-color: #000;
  opacity: .7;
  transition: transform .4s ease-in-out, opacity .4s ease-in-out;
  cursor: pointer;
  background-image: ${props => `url(${props.backgroundImage})`};
  background-size: cover;
  background-position: center;
  
  &:hover {
    transform: scale(1.04);
    opacity: 1;
  }
`

