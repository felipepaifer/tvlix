// MUTATIONS
import {SET_TV_SHOW_SUGGESTION, SET_TV_SHOWS, SET_SELECTED_TV_SHOW, SET_CURRENT_EPISODE} from "./mutations"

const initialState = {
    tvShows: [],
    tvShowSuggestion: null,
    selectedTvShow: null,
    currentEpisode: null
}

const reducer = (state = initialState, action) => {
    switch(action.type){
        case SET_TV_SHOWS:
            return{ ...state, tvShows: action.payload }
            break
        case SET_TV_SHOW_SUGGESTION:
            return { ...state, tvShowSuggestion: action.payload }
        case SET_SELECTED_TV_SHOW:
            return { ...state, selectedTvShow: action.payload }
        case SET_CURRENT_EPISODE:
            return { ...state, currentEpisode: action.payload }
        default:
            return state;
    }
}

export default reducer;
