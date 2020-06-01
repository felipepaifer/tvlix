import styled from 'styled-components'


const TvTitle = styled.h2`
    margin: 0;
    font-size: ${props => {
        if (props.small) return "16px"
        else if (props.medium) {
            return "18px"
        } else if (props.large) {
            return "20px"
        } else if (props.xLarge) {
            return "22px"
        } else if (props.xXLarge) {
            return "24px"
        } else if (props.superTitle) {
            return "42px"
        }
        
        return "18px"
    }};
    font-weight: ${props => props.bold ? "600" : "500"};
    color: ${props => {
        if (props.color) {
            return props.color
        } else if (props.white) {
            return "white"
        }
        
        return "#333"
    }};
    cursor: ${props => props.pointer ? "pointer" : null};
`

export default TvTitle
