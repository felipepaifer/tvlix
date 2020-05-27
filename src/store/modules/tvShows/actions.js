// LIBRARIES
import axios from "axios"
import {API_URL} from "../../../config";
import {SET_TV_SHOWS} from "./mutations";



export const searchTvShows = (searchValue) => (dispatch) => {
    return new Promise(async(resolve, reject) => {
        try {
            const response = await axios.get(`${API_URL}/search/shows?q=${searchValue}`)
            console.log(response.data)
            dispatch({ type: SET_TV_SHOWS, payload: response.data })
        }
        catch(error) {
            reject(error)
        }
    })
}
