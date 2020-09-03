import React, {useEffect, Component} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Text, View, Image, Dimensions, StyleSheet } from 'react-native';
import Swiper from 'react-native-swiper';
import { loadImages } from '../store/actions/imageAction';


const unsplashKey = '66cdc9fb009c679c50ff977af14839b182123dfc079b502372b9017866fc1621';

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

const styles = StyleSheet.create({
        container: {
            flex: 1,
        },
        wrapper: {},
        slide: {
            flex: 1,
            justifyContent: 'center',
            alignItems: "center",
            backgroundColor: '#fff'
        },
        image: {
            width: 300,
            height: 350
        },
    })

const SliderScreen = () => {
  /* state = {
        images: []
    }

    async componentDidMount() {
        const serverImages = await this.getImage();
        const newArr = [...dataImage,...serverImages];

        this.setState({images: newArr});
    }

   getImage = async () => {
        let arr = [];
        try {
            const url = `https://api.unsplash.com/photos/random?orientation=landscape&per_page=1&query=izhevsk&client_id=${unsplashKey}&count=3`;
            const res = await fetch(url);
            const data = await res.json();
            data.forEach(element => {
                const src = element.urls.regular;
                arr.push({
                    id: Date.now(),
                    src: {src}
                })
            });
        } catch (err) {
           console.log(err)
        }
        return arr;
    }
 
    render() {
        const {images} = this.state;*/

    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(loadImages())
    },[dispatch])

    const allImages = useSelector((state)=>{
        console.log(state)
        return state.allImages
    })

    return ( 
        <View style={styles.container}>
            <Swiper style={styles.wrapper}>
                {allImages.map((image)=>(
                    <View
                        style={styles.slide}
                        key={`${image.id}`}>
                        <Image
                            
                            style={styles.image}
                            source={image.src}/>
                    </View>
                ))}
            </Swiper>
        </View>
    );
  // }
}
 
export default SliderScreen;
