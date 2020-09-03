export const loadImages = () => {
    return {
        type: 'LOAD_IMAGE',
        payload: dataImage
    }
}

const dataImage = [
    {
        id: 1,
        src: require('../../assets/fire.jpg')
    },
    {
        id: 2,
        src: require('../../assets/water.jpg')
    },
    {
        id: 3,
        src: require('../../assets/cloud.jpg')
    }
];