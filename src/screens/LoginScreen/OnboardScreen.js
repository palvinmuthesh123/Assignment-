import React from "react";
import { SafeAreaView, StyleSheet, StatusBar, View, Image, Text, TouchableOpacity } from 'react-native';
import styles from "./styles";
import LinearGradient from 'react-native-linear-gradient';
import { COLOR, FONT_SIZE, FONT_WEIGHT, HEIGHT, WIDTH } from "../../theme/typography";
import Carousel, { Pagination } from 'react-native-snap-carousel'
import CarouselCardItem1, { SLIDER_WIDTH, ITEM_WIDTH } from "../../component/CustomView/CarouselCardItem1";
import { onboardList } from "../../row/data";

export default OnboardScreen = (props) => {
    const [index, setIndex] = React.useState(0)
    const isCarousel = React.useRef(null)
    return (
        <SafeAreaView style={styles.container}>
            <StatusBar backgroundColor={COLOR.white} />
            <View style={{ height: HEIGHT / 100 * 40 }}></View>

            <View style={{ height: HEIGHT / 100 * 10, width: WIDTH, alignItems: 'center', }}>
                <Image source={require('../../assets/images/logo.png')} />
            </View>

            <Pagination
                dotsLength={onboardList.length}
                activeDotIndex={index}
                carouselRef={isCarousel}
                dotStyle={{
                    width: 20,
                    height: 10,
                    borderRadius: 5,
                    marginHorizontal: 0,
                    backgroundColor: '#00a962'
                }}
                inactiveDotOpacity={0.4}
                inactiveDotScale={0.6}
                tappableDots={true}
            />

            <Carousel
                layout="default"
                style={{ elevation: 0 }}
                elevation={0}
                ref={isCarousel}
                data={onboardList}
                renderItem={CarouselCardItem1}
                sliderWidth={SLIDER_WIDTH}
                itemWidth={ITEM_WIDTH}
                onSnapToItem={(index) => setIndex(index)}
                useScrollView={true}
            />
            <View style={[styler.btnPart, index == 1 ? { alignItems: 'center', justifyContent: 'center' } : {}]}>
                {index == 0 ? <TouchableOpacity onPress={() => props.navigation.push('LoginScreen')}><Text style={styler.skip}>Skip</Text></TouchableOpacity> :
                    <TouchableOpacity onPress={() => props.navigation.push('LoginScreen')}><LinearGradient
                        end={{ x: 1, y: 0 }}
                        start={{ x: 0, y: 0 }}
                        colors={['#14BC66', '#192D51']}
                        style={[
                            styles.gradientContainer,
                            {}]}>
                        <Text style={styles.btnText}>Get Started</Text>
                    </LinearGradient></TouchableOpacity>}
            </View>
        </SafeAreaView>
    )
}

const styler = StyleSheet.create({
    title: {
        fontSize: FONT_SIZE.higantic,
        color: COLOR.blue,
        fontWeight: FONT_WEIGHT.bold,
    },
    title1: {
        fontSize: FONT_SIZE.huge,
        color: COLOR.blue,
        fontWeight: FONT_WEIGHT.semi_light,
        textAlign: 'center',
        lineHeight: 40,
    },
    content: {
        textAlign: 'center',
        color: 'grey',
        fontSize: FONT_SIZE.medium,
        marginTop: 20,
    },
    btnPart: {
        height: HEIGHT / 100 * 15,
        width: WIDTH,
        alignItems: 'flex-end',
        justifyContent: 'flex-end',
        paddingHorizontal: '10%',
        paddingVertical: '5%'
    },
    skip: {
        color: COLOR.lightBlue,
        fontSize: FONT_SIZE.compact
    },
})
