import React from "react"
import {BackButtonContainer} from "./styled";
import {ReactSVG} from "react-svg";

import backIcon from "../../assets/icons/back.svg"


export default function TvBackButton(props) {

    const handleBack = () => {
        props.history.goBack()
    }

    return (
        <BackButtonContainer onClick={handleBack}>
            <ReactSVG
                src={backIcon}
                beforeInjection={svg => {
                    svg.setAttribute('style', 'fill: white; width: 14px; height: 14px')
                }}/>
        </BackButtonContainer>
    )
}
