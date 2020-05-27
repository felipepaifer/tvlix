// LIBRARIES
import React, {useEffect} from "react"
import { connect } from "react-redux"

// STRUCTURE COMPONENTS
import TvContainer from "../../structureComponents/modules/TvContainer"
import TvTitle from "../../structureComponents/modules/TvTitle"

// COMPONENTS
import TvCard from "../../components/TvCard/TvCard"
import {searchTvShows} from "../../store/modules/tvShows/actions";


function TvShows(props) {

    useEffect(() => {
        props.searchTvShows("kids")
    }, [])

    return (
        <TvContainer p="40px">
            <TvContainer ml="5px">
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
    }
})

const mapStateToProps = state => ({
    tvShows: state.tvShows.tvShows
})


export default connect(mapStateToProps, mapDispatchToProps)(TvShows)
