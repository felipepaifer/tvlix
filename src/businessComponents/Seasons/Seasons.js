// LIBRARIES
import React, {useEffect, useState} from "react"
import { connect } from "react-redux"
import { Link  } from "react-router-dom"

// STRUCTURE COMPONENTS
import { TvContainer } from "../../structureComponents"

// STYLE
import { SeasonItemContainer } from "./styled"

// COMPONENTS
import TvSelect from "../../components/TvSelect/TvSelect"
import TvLabel from "../../structureComponents/modules/TvLabel";


function Seasons(props) {
    const [selectedSeason, setSelectedSeason] = useState({
        number: 1,
        episodes: []
    })
    const [seasons, setSeasons] = useState([])

    const handleSelectSeason = selectedSeason => {
        setSelectedSeason({
            number: selectedSeason,
            episodes: props.episodes[selectedSeason]
        })
    }

    useEffect(() => {
        const allSeasons = Object.keys(props.episodes).map((key) => key)
        setSeasons(allSeasons)

        {Object.keys(props.episodes).map((key, index) => {
            if (index === 0) {
                setSelectedSeason({
                    number: key,
                    episodes: props.episodes[key]
                })
            }
        })}
    }, [props.episodes])

    return (
        <>
        <TvSelect id="tv-select" items={seasons} onSelect={handleSelectSeason} />
        <TvContainer mt="40px" flex wrap>
            {selectedSeason.episodes.map(episode => (
                <SeasonItemContainer>
                    <Link to={`/tv-shows/${props.selectedTVShow.id}/seasons/${selectedSeason.number}/episodes/${episode.number}`}>
                        <TvContainer fluid maxWidth="1em">
                            <TvLabel pointer white>{episode.number} </TvLabel>
                        </TvContainer>
                        <TvContainer color="white" ml="10px" ellipsis overflowHidden>
                            <TvLabel pointer white>{episode.name}</TvLabel>
                        </TvContainer>
                    </Link>
                </SeasonItemContainer>
            ))}
        </TvContainer>
        </>
    )
}

export default connect(null, null)(Seasons)
