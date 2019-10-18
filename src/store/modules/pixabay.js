import axios from 'axios';
import { GET_PICTURES } from './actions/action';

/* In order to receive pictures data from Pixabay API, it requires to put the paramAPIKey (From PixabayContainer) */
export const getPostAPI = (paramContent, paramAPIKey) => {
    return axios.get(`https://pixabay.com/api/?key=${paramAPIKey}&q=${paramContent}`);
};

export const getPictures = (content, APIKey) => (dispatch) => {
    return getPostAPI(content, APIKey).then((res) => {
        dispatch( { type : GET_PICTURES, payload : res.data } );
    }).catch((err) => {
        console.log(err);
    });
};

export default function pixabayReducer(state = [], action){
    switch(action.type){
        case GET_PICTURES:
            return { pixabayList : action.payload };
        
        default:
            return state;
    }
};