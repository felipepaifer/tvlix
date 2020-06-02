import React from "react"
import { TvCardContainer } from "./styled"

export default function TvCard(props) {
    return (
        <TvCardContainer backgroundImage={props.tvShow.image ? props.tvShow.image.medium : ""} />
    )
}
