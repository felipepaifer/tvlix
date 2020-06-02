// LIBRARIES
import React, {useEffect, useState} from "react"
import { connect } from "react-redux"

// STRUCTURE COMPONENTS
import { TvContainer, TvLabel, TvTitle, TvText } from "../../structureComponents"

// COMPONENTS
import TvInlineLoading from "../../components/TVInlineLoading/TvInlineLoading"
import TvBackButton from "../../components/TvBackButton/TvBackButton"

// STORE ACTIONS
import { fetchEpisode } from "../../store/modules/tvShows/actions"

// STYLES
import {TvShowSuggestion} from "../TvShows/styled"


function TvShowEpisode(props) {
    const { tvShowId, seasonNumber, episodeNumber } = props.match.params

    const [loading, setLoading] = useState(true)

    useEffect(() => {
        setLoading(true)
        getEpisodeInfo()
    }, [])

    useEffect(() => {
        setTimeout(() => {
            setLoading(false)
        }, 1000)
    }, [props.currentEpisode])

    const getEpisodeInfo = () => {
        props.fetchEpisode(tvShowId, seasonNumber, episodeNumber)
    }

    let episodeCoverImage = null
    if (props.currentEpisode) {
        episodeCoverImage = props.currentEpisode.image ? props.currentEpisode.image.original : props.currentEpisode.tvShowCoverImage
    }

    if (loading) {
        return  (
            <TvContainer flex alignCenter justifyCenter height="calc(100vh - 70px)">
                <TvInlineLoading color="white" />
            </TvContainer>
        )
    }

    return (
        <>
        <TvShowSuggestion coverImage={episodeCoverImage}>
            <TvBackButton {...props} />
            <TvTitle white superTitle bold>{props.currentEpisode && props.currentEpisode.tvShow}</TvTitle>
        </TvShowSuggestion>
        <TvContainer p="40px">
            <TvContainer mt="20px">
                <TvLabel white bold large>Season {seasonNumber}</TvLabel>
                <TvContainer mt="10px">
                    <TvLabel medium white>Episode {episodeNumber} - {props.currentEpisode && props.currentEpisode.name}</TvLabel>
                </TvContainer>
            </TvContainer>
            <TvContainer mt="40px">
                <TvLabel white bold large>Summary</TvLabel>
                <TvContainer mt="20px">
                    <TvText medium white>{props.currentEpisode && props.currentEpisode.summary}</TvText>
                </TvContainer>
            </TvContainer>
        </TvContainer>
        </>
    )
}

const mapDispatchToProps = dispatch => ({
    fetchEpisode(tvShowId, seasonNumber, episodeNumber) {
        dispatch(fetchEpisode(tvShowId, seasonNumber, episodeNumber))
    }
})

const mapStateToProps = state => ({
    currentEpisode: state.tvShows.currentEpisode
})


export default connect(mapStateToProps, mapDispatchToProps)(TvShowEpisode)
