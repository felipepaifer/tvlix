import styled from "styled-components"

const TvText = styled.p`
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
  line-height: 1.4em;
  color: ${props => props.white ? "white" : "#333" };
  letter-spacing: .05em;
`

export default TvText

