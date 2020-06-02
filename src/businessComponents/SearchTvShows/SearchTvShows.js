// LIBRARIES
import React, {useEffect} from "react"
import { connect } from "react-redux"

// STORE ACTIONS
import { searchTvShows } from "../../store/modules/tvShows/actions"
import TvSearchInput from "../../components/TvSearchInput/TvSearchInput";


function SearchTvShows(props) {

    useEffect(() => {
        props.searchTvShows("friends")
    }, [])

    const handleSearch = async(searchValue) => {
        await props.searchTvShows(searchValue)
        if (props.history.location.pathname !== "/tv-shows") {
            props.history.push("/")
        }
    }

    return (
        <TvSearchInput placeholder="Search tv shows" onSearch={handleSearch}  />
    )
}

const mapDispatchToProps = dispatch => ({
    searchTvShows(searchValue) {
        return new Promise(async(resolve, reject) => {
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

export default connect(null, mapDispatchToProps)(SearchTvShows)
