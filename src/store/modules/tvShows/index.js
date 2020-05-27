// MUTATIONS
import {SET_TV_SHOW_SUGGESTION, SET_TV_SHOWS} from "./mutations"

const initialState = {
    tvShows: [],
    tvShowSuggestion: null
}

const reducer = (state = initialState, action) => {
    switch(action.type){
        case SET_TV_SHOWS:
            return{ ...state, tvShows: action.payload }
            break
        case SET_TV_SHOW_SUGGESTION:
            return { ...state, tvShowSuggestion: action.payload }
        default:
            return state;
    }
}

export default reducer;
