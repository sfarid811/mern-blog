import axios from 'axios';
import {POST_LIST_REQUEST} from '../constantes/types';
import {POST_LIST_SUCCESS} from '../constantes/types';
import {POST_LIST_FAIL} from '../constantes/types';



export const getAllPosts = () => async (dispatch) => { 

    try {
        dispatch({type: POST_LIST_REQUEST})

        const {data} = await axios.get('http://localhost:8000/posts');
        dispatch({
            type: POST_LIST_SUCCESS,
            payload: data
        })


    }
    catch (error) {
        dispatch({
            type: POST_LIST_FAIL, 
            payload: error.data && error.data.message
            ? error.response.data.message
            : error.message,
        })
    }

}