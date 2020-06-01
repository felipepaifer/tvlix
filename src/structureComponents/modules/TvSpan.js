import styled from 'styled-components'

const TvSpan = styled.span`
    font-size: 14px;
    font-weight: ${props => {
        if (props.bold) return "600"
        else return null
    }};
    cursor: ${props => {
        if (props.clickable) return "pointer"
        else return null
    }};
`

export default TvSpan
