import React, {Component} from 'react'
import { Text, View, Image, Dimensions } from 'react-native'
import Swiper from 'react-native-swiper'
const { width } = Dimensions.get('window')



const dataImage = [
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
];

const styles = {
    container: {
        flex: 1
    },
    wrapper: {},
    slide: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: 'transparent'
    },
    image: {
        width,
        flex: 1
    },
}

class SliderScreen extends Component {
 
    render() {
        return ( 
        <View style={styles.container}>
            <Swiper style={styles.wrapper}
                    height={240}>
                {dataImage.map((image)=>(
                    <View
                        style={styles.slide}
                        key={`${image.id}`}>
                        <Image
                            resizeMode="stretch"
                            style={styles.image}
                            source={image.src}/>
                    </View>
                ))}
            </Swiper>
        </View>
        );
    }
}
 
export default SliderScreen;
