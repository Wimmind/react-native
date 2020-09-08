import {createStore, combineReducers} from 'redux';

const initialState = {
    allImages: [
        {
            id: 1,
            src: require('../assets/fire.jpg')
        },
        {
            id: 2,
            src: require('../assets/water.jpg')
        },
        {
            id: 3,
            src: require('../assets/cloud.jpg')
        }
    ]
}

export const ImageReducer = (state = initialState,action) => {
    switch (action.type) {
        case 'ADD_SERVER_IMAGE':
            return {...state, allImages: [...initialState.allImages,...action.payload]}
        default:
            return state;
    }
}

const store = createStore(ImageReducer);
export default store;



