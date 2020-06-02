import styled from "styled-components"

export const TvShowSuggestion = styled.div`
  width: 100%;
  height: 400px;
  background-color: #000;    
  background-image: ${props => `linear-gradient(180deg, #00000000, black), url(${props.coverImage})`};
  background-size: cover;
  background-position: center;
  opacity: .8;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: ${props => props.onlyName ? "flex-end" : "space-between"};
  padding: 40px;
  box-sizing: border-box;
`
