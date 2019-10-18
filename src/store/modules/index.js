import { combineReducers } from 'redux';
import pixabayReducer from './pixabay';
import pixabayMyCollectionReducer from './mycollection';

export default combineReducers({
    pixabayReducer,
    pixabayMyCollectionReducer
    // Other Reducers ...
});