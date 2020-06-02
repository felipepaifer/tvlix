// LIBRARIES
import React, {useEffect, useState} from "react"
import { Link } from "react-router-dom"
import { connect } from "react-redux"

// STRUCTURE COMPONENTS
import TvContainer from "../../structureComponents/modules/TvContainer"
import TvTitle from "../../structureComponents/modules/TvTitle"

// COMPONENTS
import TvCard from "../../components/TvCard/TvCard"
import TvInlineLoading from "../../components/TVInlineLoading/TvInlineLoading";

// STORE ACTIONS
import {searchTvShows, fetchTvShowSuggestion} from "../../store/modules/tvShows/actions";

// BUSINESS COMPONENTS
import Footer from "../../businessComponents/Footer/Footer";

// ASSETS
import { TvShowSuggestion } from "./styled"


function TvShows(props) {
    const [loading, setLoading] = useState(true)

    const powerPuffGirlsTvShowId = 6771

    useEffect(() => {
        setLoading(true)
        props.fetchTvShowSuggestion(powerPuffGirlsTvShowId)
    }, [])

    useEffect(() => {
        if (props.tvShowSuggestion) {
            setTimeout(() => {
                setLoading(false)
            }, 1000)
        }
    }, [props.tvShowSuggestion])


    if (loading) {
        return  (
            <TvContainer flex alignCenter justifyCenter height="calc(100vh - 70px)">
                <TvInlineLoading color="white" />
            </TvContainer>
        )
    }

    return (
        <>
            <TvContainer>
                <Link style={{ textDecoration: "none" }} to={`/tv-shows/${powerPuffGirlsTvShowId}`}>
                    <TvShowSuggestion coverImage={props.tvShowSuggestion.image.original} onlyName>
                        <TvTitle white superTitle bold>{props.tvShowSuggestion.name}</TvTitle>
                    </TvShowSuggestion>
                </Link>
            </TvContainer>
        <TvContainer p="40px">
            <TvContainer mt="40px" ml="5px">
                <TvTitle white xXLarge>Tv Shows</TvTitle>
            </TvContainer>
            <TvContainer mt="40px" flex wrap end>
                {props.tvShows.map(tvShow => (
                <TvContainer  fluid style={{ flex: "0 0 14em" }}  flex m="10px">
                    <Link style={{ flex: 1 }} to={`/tv-shows/${tvShow.show.id}`}>
                        <TvCard tvShow={tvShow.show} />
                    </Link>
                </TvContainer>
                ))}
            </TvContainer>
        </TvContainer>
            <TvContainer mt="40px">
                <Footer />
            </TvContainer>
            </>
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
