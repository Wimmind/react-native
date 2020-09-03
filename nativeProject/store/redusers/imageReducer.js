const initialState = {
    allImages: []
}

export const ImageReducer = (state = initialState,action) => {
    switch (action.type) {
        case 'LOAD_IMAGE':
            return {...state, allImages: action.payload}
        default:
            return state;
    }
}