import styled from "styled-components"

export const TvShowSuggestion = styled.div`
  width: 100%;
  height: 400px;
  background-color: #000;
  background-image: ${props => `url(${props.coverImage})`};
  background-size: cover;
  background-position: center;
  opacity: .8;
  display: flex;
  justify-content: flex-start;
  align-items: flex-end;
  padding: 40px;
  box-sizing: border-box;
`
