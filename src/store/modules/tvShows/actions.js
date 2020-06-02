// LIBRARIES
import axios from "axios"
import {API_URL} from "../../../config"
import {SET_TV_SHOWS, SET_TV_SHOW_SUGGESTION, SET_SELECTED_TV_SHOW, SET_CURRENT_EPISODE} from "./mutations"

// STORE MODEL
import {TvShow} from "./model"


export const searchTvShows = (searchValue) => (dispatch) => {
    return new Promise(async(resolve, reject) => {
        try {
            const response = await axios.get(`${API_URL}/search/shows?q=${searchValue}`)
            dispatch({ type: SET_TV_SHOWS, payload: response.data })
            resolve()
        }
        catch(error) {
            reject(error)
        }
    })
}

export const fetchTvShowSuggestion = (tvShowId) => dispatch => {
    return new Promise(async(resolve, reject) => {
        try {
            const response = await axios.get(`${API_URL}/shows/${tvShowId}`)
            dispatch({ type: SET_TV_SHOW_SUGGESTION, payload: response.data })
        }
        catch(error) {
            reject(error)
        }
    })
}

export const fetchTvShowById = tvShowId => dispatch => {
    return new Promise(async(resolve, reject) => {
        try {
            const tvShowDetailsResponse = await axios.get(`${API_URL}/shows/${tvShowId}`)
            const tvShowEpisodesResponse = await axios.get(`${API_URL}/shows/${tvShowId}/episodes`)

            const summary = tvShowDetailsResponse.data.summary ? tvShowDetailsResponse.data.summary.replace(/<\/?[^>]+(>|$)/g, "") : ""


            let selectedTvShow = new TvShow({
                id: tvShowDetailsResponse.data.id,
                name: tvShowDetailsResponse.data.name,
                summary,
                coverImage: tvShowDetailsResponse.data.image.original,
                episodes: tvShowEpisodesResponse.data
            })

            selectedTvShow = {
                ...selectedTvShow,
                episodes: selectedTvShow.episodesGroupedBySeason
            }

            dispatch({ type: SET_SELECTED_TV_SHOW, payload: selectedTvShow })
            resolve()
        }
        catch(error) {
            reject(error)
        }
    })
}


export const fetchEpisode = (tvShowId, seasonNumber, episodeNumber) => dispatch => {
    return new Promise(async(resolve, reject) => {
        try {
            const tvShowResponse = await axios.get(`${API_URL}/shows/${tvShowId}`)
            const tvShowName = tvShowResponse.data.name

            const response = await axios.get(`${API_URL}/shows/${tvShowId}/episodebynumber?season=${seasonNumber}&number=${episodeNumber}`)
            const summary = response.data.summary ? response.data.summary.replace(/<\/?[^>]+(>|$)/g, "") : ""

            const currentEpisode = {
                tvShow: tvShowName,
                tvShowCoverImage: tvShowResponse.data.image.original,
                ...response.data,
                summary
            }

            dispatch({ type: SET_CURRENT_EPISODE, payload: currentEpisode })
            resolve()
        }
        catch(error) {
            reject(error)
        }
    })
}
