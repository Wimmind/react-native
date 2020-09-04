import {createStore, combineReducers} from 'redux';

const initialState = {
    allImages: []
}

export const ImageReducer = (state = initialState,action) => {
    switch (action.type) {
        case 'LOAD_IMAGE':
            return {...state, allImages: action.payload}
        case 'ADD_SERVER_IMAGE':
            return {...state, allImages: [...state.allImages,...action.payload]}
        default:
            return state;
    }
}

const store = createStore(ImageReducer);
export default store;
