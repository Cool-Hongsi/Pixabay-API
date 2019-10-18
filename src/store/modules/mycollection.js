import { SELECTED_PICTURES } from './actions/action';

export const selectedPictures = (selectedPic, selectedId) => {
    return { type : SELECTED_PICTURES, url : selectedPic, id : selectedId };
};

const initialMyCollection = {
    data : [
        {
            url : '',
            id : ''
        }
    ]
}

export default function pixabayMyCollectionReducer(state = initialMyCollection, action){
    switch(action.type){
        case SELECTED_PICTURES:

            let repeatedFlag = false;
            // To check whether added data is already exist or not
            // If I use the 'map' method, it will create array

            for(let i=0; i<state.data.length; i++){
                if(state.data[i].id === action.id){
                    repeatedFlag = true;
                    break; // Once it finds the repeated value, then stop for looping
                }
                else{
                    repeatedFlag = false;
                }
            }

            if(repeatedFlag === true){
                return { ...state };
            }
            
            else{
                return { ...state, data : state.data.concat({
                    url : action.url,
                    id : action.id
                }) };
            }

        default:
            return state;
    }
}