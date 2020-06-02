import styled from "styled-components"
import {red} from "../../assets/colorPallet";

export const BackButtonContainer = styled.div`
  display: flex;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: ${red};
  opacity: .8;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: opacity .2s ease;
  
  &:hover {
    opacity: .5;
  }
`

