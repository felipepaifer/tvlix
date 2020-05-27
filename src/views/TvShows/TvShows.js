// LIBRARIES
import React, {useEffect, useState} from "react"
import { connect } from "react-redux"

// STRUCTURE COMPONENTS
import TvContainer from "../../structureComponents/modules/TvContainer"
import TvTitle from "../../structureComponents/modules/TvTitle"

// COMPONENTS
import TvCard from "../../components/TvCard/TvCard"
import {searchTvShows, fetchTvShowSuggestion} from "../../store/modules/tvShows/actions";

// ASSETS
import { TvShowSuggestion } from "./styled"
import TvLabel from "../../structureComponents/modules/TvLabel";


function TvShows(props) {
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        setLoading(true)
        props.searchTvShows("kids")

        const tvShowId = 6771
        props.fetchTvShowSuggestion(tvShowId)
    }, [])

    useEffect(() => {
        if (props.tvShowSuggestion) {
            setLoading(false)
        }
    }, [props.tvShowSuggestion])


    if (loading) {
        return (
            <TvLabel>Loading...</TvLabel>
        )
    }

    return (
        <TvContainer p="40px">
            <TvContainer>
                <TvShowSuggestion coverImage={props.tvShowSuggestion.image.original}>
                    <TvTitle superTitle bold>Powerpuff girls</TvTitle>
                </TvShowSuggestion>
            </TvContainer>
            <TvContainer mt="40px" ml="5px">
                <TvTitle white xXLarge>Tv Shows</TvTitle>
            </TvContainer>
            <TvContainer mt="40px" flex wrap end>
                {props.tvShows.map(tvShow => (
                    <TvContainer fluid style={{ flex: "0 0 14em" }}  flex m="10px">
                        <TvCard tvShow={tvShow.show} />
                    </TvContainer>
                ))}
            </TvContainer>
        </TvContainer>
    )
}

const mapDispatchToProps = dispatch => ({
    searchTvShows(searchValue) {
        return new Promise(async (resolve, reject) => {
           try {
               await dispatch(searchTvShows(searchValue))
               resolve()
           }
           catch(error) {
               reject(error)
           }
        })
    },

    fetchTvShowSuggestion(tvShowId) {
        return new Promise(async(resolve, reject) => {
            try {
                await dispatch(fetchTvShowSuggestion(tvShowId))
                resolve()
            }
            catch(error) {
                reject(error)
            }
        })
    }
})

const mapStateToProps = state => ({
    tvShows: state.tvShows.tvShows,
    tvShowSuggestion: state.tvShows.tvShowSuggestion
})


export default connect(mapStateToProps, mapDispatchToProps)(TvShows)
