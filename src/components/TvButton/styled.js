import styled from "styled-components"
import {textDefault} from "../../assets/colorPallet";


export const TvButtonStyled = styled.button`
  outline: none;
  background-color: ${props => {
    if (props.bgColor) {
        return props.bgColor
    } else if (props.transparent) {
        return "transparent"
    }
    
    return "white"
  }};
  border-radius: 4px;
  height: 40px;
  padding: 0 20px;
  font-size: 16px;
  border: none;
  cursor: pointer;
  color: ${props => props.color ? props.color : textDefault};
  
  
  &:hover {
    opacity: .9;
  }
`

