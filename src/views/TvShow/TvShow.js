// LIBRARIES
import React, { useEffect, useState } from "react"
import { connect } from "react-redux"

// STORE ACTIONS
import {fetchTvShowById} from "../../store/modules/tvShows/actions"

// BUSINESS COMPONENTS
import Seasons from "../../businessComponents/Seasons/Seasons";
import Footer from "../../businessComponents/Footer/Footer";

// COMPONENTS
import TvInlineLoading from "../../components/TVInlineLoading/TvInlineLoading";
import TvBackButton from "../../components/TvBackButton/TvBackButton";

// STRUCTURE COMPONENTS
import { TvTitle, TvText, TvContainer } from "../../structureComponents"

// STYLES
import {TvShowSuggestion} from "../TvShows/styled"


function TVShow(props) {
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        getSelectedTvShow()
    }, [])

    useEffect(() => {
        setTimeout(() => {
            setLoading(false)
        }, 1000)
    }, [props.selectedTvShow])

    const getSelectedTvShow = () => {
        const { tvShowId } = props.match.params
        props.fetchTvShowById(tvShowId)
    }

    if (!props.selectedTvShow) {
        return "loading..."
    }

    let tvShowSummary = ""
    if (props.selectedTvShow.summary) {
        tvShowSummary = props.selectedTvShow.summary
    }


    if (loading) {
        return  (
            <TvContainer flex alignCenter justifyCenter height="calc(100vh - 70px)">
                <TvInlineLoading color="white" />
            </TvContainer>
        )
    }


    return (
        <TvContainer>
            <TvShowSuggestion coverImage={props.selectedTvShow.coverImage}>
                <TvBackButton {...props} />
                <TvTitle white superTitle bold>{props.selectedTvShow.name}</TvTitle>
            </TvShowSuggestion>
            <TvContainer p="0 40px">
                {tvShowSummary && <TvContainer>
                    <TvTitle white bold>Summary</TvTitle>
                    <TvContainer mt="20px">
                        <TvText medium white>
                            {tvShowSummary}
                        </TvText>
                    </TvContainer>
                </TvContainer>}
                <TvContainer mt="40px">
                    <TvTitle white bold>Seasons</TvTitle>
                    <TvContainer mt="20px">
                        <Seasons selectedTVShow={props.selectedTvShow} episodes={props.selectedTvShow.episodes} />
                    </TvContainer>
                </TvContainer>
            </TvContainer>
            <TvContainer mt="40px">
                <Footer />
            </TvContainer>
        </TvContainer>
    )
}

const mapStateToProps = state => ({
    selectedTvShow: state.tvShows.selectedTvShow
})

const mapDispatchToProps = dispatch => ({
    fetchTvShowById(tvShowId) {
        dispatch(fetchTvShowById(tvShowId))
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(TVShow)
