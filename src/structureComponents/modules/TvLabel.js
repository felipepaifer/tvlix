import styled from 'styled-components'
import {mediumLightGrey} from "../../assets/colorPallet";

const TvLabel = styled.label`
    color: ${props => {
            if(props.color) {
                return props.color
            } else if(props.lightGrey) {
                return mediumLightGrey
            } else if(props.white) {
                return "white"
            } 
            
            return "#333"
    }};
    font-size: ${props => {
        if (props.small) {
            return "12px"
        } else if(props.medium) {
            return "16px"
        } else if(props.large) {
            return "18px"
        } else if(props.xlarge) {
            return "20px"
        } else if(props.xXLarge) {
            return "24px"
        }
        
        return "14px"
    }};
    font-weight: ${props => props.bold ? "600" : null};
    cursor: ${props => props.pointer ? "pointer" : null};
    white-space: ${props => props.nowrap ? "nowrap" : null};
`

export default TvLabel
