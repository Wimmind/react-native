import React, {Component} from 'react';
import { connect } from 'react-redux';
import { Text, View, Image, StyleSheet } from 'react-native';
import Swiper from 'react-native-swiper';
import {addImages } from '../../store/actions/imageAction';


const unsplashKey = '66cdc9fb009c679c50ff977af14839b182123dfc079b502372b9017866fc1621';


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
        }
});

const getImage = async () => {
    let arr = [];
    try {
        const url = `https://api.unsplash.com/photos/random?orientation=landscape&per_page=1&query=izhevsk&client_id=${unsplashKey}&count=3`;
        const res = await fetch(url);
        const data = await res.json();
        data.forEach(element => {
            const src = element.urls.regular;
            arr.push({
                id: Date.now(),
                src: {uri: src}
            })
        });
    } catch (err) {
        console.log(err)
    }
    return arr;
}

class SliderScreen extends Component {

    async componentDidMount() {
        this.props.addImages(await getImage())
    }
  
    render() {
        const {dataImages} = this.props;

        return ( 
            <View style={styles.container}>
                <Swiper style={styles.wrapper}>
                    {dataImages.map((image)=>(
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
    }
}

const mapStateToProps = (state) => {
    return {
        dataImages: state.allImages
    }
}

const mapDispatchToProps =  {
    addImages
}
 
export default connect(mapStateToProps,mapDispatchToProps)(SliderScreen);
