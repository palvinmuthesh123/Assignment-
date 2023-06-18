import React, { useState } from "react";
import { View, Text, FlatList, StyleSheet, StatusBar, SafeAreaView, TouchableOpacity } from 'react-native';
import { COLOR, FONT_SIZE, FONT_WEIGHT, HEIGHT, WIDTH } from "../../theme/typography";
import CustomHeader from "../../component/header/CustomHeader";
import Carousel from 'react-native-snap-carousel'
import CarouselCardItem, { SLIDER_WIDTH, ITEM_WIDTH } from "../../component/CustomView/CarouselCardItem";
import { onboardList } from "../../row/data";


export default HomeScreen = () => {
    const [ind, setInd] = useState(0)
    const [index, setIndex] = React.useState(0)
    const isCarousel = React.useRef(null)
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
            <StatusBar backgroundColor={COLOR.white} />
            <CustomHeader title={'Activity'} />
            <View >
                <FlatList
                    style={{ height: HEIGHT / 100 * 5, marginBottom:25}}
                    data={[
                        { key: 'Popular' }, { key: 'Latest' }, { key: 'Following' }
                    ]}
                    renderItem={({ item, index }) =>
                        <TouchableOpacity onPress={() => setInd(index)} style={{ width: WIDTH / 3, justifyContent: 'center', alignItems: 'center', }}>
                            <Text style={[{ fontSize: 20, fontWeight: FONT_WEIGHT.regular }, ind == index ? { color: COLOR.blue } : { color: COLOR.gray }]}>{item.key}</Text>
                        </TouchableOpacity>}
                    horizontal={true}
                />
                <Carousel
                    layout="default"
                    style={{ elevation: 0 }}
                    layoutCardOffset={9}
                    ref={isCarousel}
                    data={onboardList}
                    renderItem={CarouselCardItem}
                    sliderWidth={SLIDER_WIDTH}
                    itemWidth={ITEM_WIDTH}
                    onSnapToItem={(index) => setIndex(index)}
                    useScrollView={true}
                />
            </View>
        </SafeAreaView>
    )
}
const styler = StyleSheet.create({
    connectBox: {
        paddingHorizontal: 10,
        paddingVertical: 5,
        backgroundColor: 'grey',
        borderColor: 'white',
        borderWidth: 1,
        borderRadius: 5,
        justifyContent: 'center'
    },
    connect: {
        color: COLOR.white,
        fontWeight: FONT_WEIGHT.semibold
    },
    news: {
        color: COLOR.white,
        fontWeight: FONT_WEIGHT.semibold,
        fontSize: FONT_SIZE.xl
    },
    address: {
        color: '#f5f5f5',
        fontSize: FONT_SIZE.small,
        marginHorizontal: 5
    },
})