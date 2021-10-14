import {POST_LIST_REQUEST} from '../constantes/types';
import {POST_LIST_SUCCESS} from '../constantes/types';
import {POST_LIST_FAIL} from '../constantes/types';



const inititalState = {
    loading: false,
    posts : [],
    error : ''
}

const postsReducers = (state = inititalState, action) => {

    switch(action.type) {
        case POST_LIST_REQUEST: 
        return {
            ...state,
            loading: true,
        }
        case POST_LIST_SUCCESS : 
        return {
            ...state,
            loading: false,
            posts : [...action.payload]
        }
        case POST_LIST_FAIL : 
        return {
            ...state,
            error: action.payload.error
        }
        default: // need this for default case
      return state 
    }
}

export default postsReducers;