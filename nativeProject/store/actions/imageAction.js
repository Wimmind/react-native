 const loadImages = (data) => {
    return {
        type: 'LOAD_IMAGE',
        payload: data
    }
}

const addImages = (data) => {
    return {
        type: 'ADD_SERVER_IMAGE',
        payload: data
    }
}

export {loadImages,addImages}
