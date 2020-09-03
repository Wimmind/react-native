import {createStore, combineReducers} from 'redux';
//import imageReducer from './redusers/imageReducer'

/*const rootReducer = combineReducers({
    image: imageReducer
});*/

const initialState = {
    allImages: []
}

export const ImageReducer = (state = initialState,action) => {
    console.log('ff')
    switch (action.type) {
        case 'LOAD_IMAGE':
            return {...state, allImages: action.payload}
        default:
            return state;
    }
}

const store = createStore(ImageReducer);
export default store;
