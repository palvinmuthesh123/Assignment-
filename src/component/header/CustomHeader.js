import { Dimensions, View, SafeAreaView, StyleSheet, Text, Image, TouchableOpacity, } from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import { COLOR, FONT_SIZE, FONT_WEIGHT, HEIGHT, WIDTH } from '../../theme/typography';

const CustomHeader = props => {
    return (
        <SafeAreaView style={styles.appbar}>
            <TouchableOpacity
                style={styles.mains}
                onPress={() => {
                    try {
                        props.onPress();
                    } catch (e) {
                        console.log(e);
                    }
                }}>
                <LinearGradient
                    end={{ x: 1, y: 0 }}
                    start={{ x: 0, y: 0 }}
                    colors={['#14BC66', '#192D51']}
                    style={[
                        styles.gradientContainer]}>
                    <View style={styles.grad}>
                        <Image source={require('../../assets/images/Menu.png')} />
                    </View>
                </LinearGradient>
            </TouchableOpacity>

            <Text
                style={styles.title}>
                {props.title}
            </Text>

            <TouchableOpacity
                style={styles.touch}>
                <Image source={require('../../assets/images/search.png')} />
                <Image source={require('../../assets/images/note.png')} />
            </TouchableOpacity>
        </SafeAreaView>
    );
};

export default CustomHeader;

const styles = StyleSheet.create({
    appbar: {
        width: Dimensions.get('window').width,
        height: HEIGHT / 100 * 8,
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 20,
        flexDirection: 'row',
        paddingVertical: 20,

    },
    mains: {
        width: WIDTH / 100 * 10,
        alignItems: 'center',
    },
    title: {
        color: COLOR.black,
        fontSize: FONT_SIZE.large,
        fontWeight: FONT_WEIGHT.medium,
        paddingHorizontal: 20,
        left: 10,

    },
    touch: {
        width: WIDTH / 100 * 18,
        alignItems: 'center',
        flexDirection: 'row'
    },
    highlitetext: {
        color: '#066FF9',
        alignSelf: 'center',
    },
    gradientContainer: {
        height: 50,
        width: 50,
        borderRadius: 100,
        alignItems: 'center',
        justifyContent: 'center',
    },
    grad: {
        backgroundColor: '#ffffff',
        height: 44,
        width: 44,
        borderRadius: 100,
        alignItems: 'center',
        justifyContent: 'center',
    }

});
