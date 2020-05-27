// MUTATIONS
import { SET_TV_SHOWS } from "./mutations"

const initialState = {
    tvShows: []
}

const reducer = (state = initialState, action) => {
    switch(action.type){
        case SET_TV_SHOWS:
            return{ ...state, tvShows: action.payload }
            break

        default:
            return state;
    }
}

export default reducer;
