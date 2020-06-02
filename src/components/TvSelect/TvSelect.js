// LIBRARIES
import React, {useEffect, useState} from "react"
import { ReactSVG } from "react-svg"

// STYLES
import {
    TvSelectAnchor,
    TvSelectDropdown,
    TvSelectAnchorIconContainer,
    TvSelectAnchorPlaceholder,
    TvSelectDropdownItemContainer,
    TvSelectDropdownItemLabel,
    TvSelectContainer
} from "./styled"

// ICONS
import arrowIcon from "../../assets/icons/arrow.svg"


export default function TvSelect(props) {
    const [active, setActive] = useState(false)
    const [placeholder, setPlaceholder] = useState("Season 1")

    const detectClick = () => {
        window.addEventListener("click", e => {
            const element = document.getElementById(props.id);
            let target = e.target;

            do {
                if (target == element) {
                    return;
                }

                target = target.parentNode;
            } while (target);

            setActive(false)
        });
    };

    useEffect(() => {
        if (active) {
            detectClick()
        }
    }, [active])

    // METHODS
    const handleClick = () => {
        setActive(!active)
    }

    const handleSelectItem = item => {
        setPlaceholder(item)
        setActive(false)
        props.onSelect(item)
    }

    return (
        <TvSelectContainer id={props.id}>
            <TvSelectAnchor onClick={handleClick}>
                <TvSelectAnchorPlaceholder white>{placeholder}</TvSelectAnchorPlaceholder>
                <TvSelectAnchorIconContainer active={active}>
                    <ReactSVG
                        className="tv-select--select-anchor__icon"
                        src={arrowIcon}
                        beforeInjection={svg => {
                            svg.setAttribute('style', 'fill: white; width: 12px; height: 12px')
                        }}/>
                </TvSelectAnchorIconContainer>
            </TvSelectAnchor>

            <TvSelectDropdown active={active}>
                {props.items.map(item => (
                    <TvSelectDropdownItemContainer onClick={() => handleSelectItem(item)}>
                        <TvSelectDropdownItemLabel>Season {item}</TvSelectDropdownItemLabel>
                    </TvSelectDropdownItemContainer>
                ))}
            </TvSelectDropdown>
        </TvSelectContainer>
    )
}
