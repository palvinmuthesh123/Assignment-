import React, { useState } from "react";
import { SafeAreaView, StyleSheet, StatusBar, View, Image, Text, TextInput, TouchableOpacity } from 'react-native';
import styles from "./styles";
import LinearGradient from 'react-native-linear-gradient';
import CheckBox from '@react-native-community/checkbox';
import { COLOR, FONT_SIZE, FONT_WEIGHT, HEIGHT, WIDTH } from "../../theme/typography";


export default LoginScreen = (props) => {

    const [change, setChange] = useState(false)

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar backgroundColor={COLOR.white} />
            <View style={styler.containBox}>
                <View style={{ marginVertical: '5%' }}>
                    <Image source={require('../../assets/images/logo.png')} />
                </View>
                <Text style={styler.title}>Log In</Text>
                <View style={styles.inputBox}>
                    <TextInput
                        style={styles.input}
                        placeholderTextColor={'grey'}
                        placeholder="Email / Phone number" />
                </View>
                <View style={[styles.inputBox, {}]}>
                    <TextInput
                        secureTextEntry={true}
                        style={styles.input}
                        placeholderTextColor={'grey'}
                        placeholder="Password" />
                    <Image source={require('../../assets/images/eye.png')} />
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: '90%', marginTop: 5, alignItems: 'center' }}>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <CheckBox
                            value={change}
                            disabled={false}
                            onChange={() => setChange(!change)}
                        />
                        <Text style={{ color: 'grey' }}>Remember Me</Text>
                    </View>
                    <Text style={{ color: 'grey' }}>Forgot Password?</Text>
                </View>

                <TouchableOpacity onPress={() => props.navigation.push('DashBoardScreen')}><LinearGradient
                    end={{ x: 1, y: 0 }}
                    start={{ x: 0, y: 0 }}
                    colors={['#14BC66', '#192D51']}
                    style={[
                        styles.gradientContainer, { marginVertical: '8%' }]}>
                    <Text style={styles.btnText}>Log In</Text>
                </LinearGradient></TouchableOpacity>
                <View style={{ flexDirection: 'row' }}>
                    <Text style={{ color: COLOR.black, fontSize: FONT_SIZE.compact, marginHorizontal: 3 }}>Don't have an account?</Text>
                    <Text style={{ color: '#14BC66', fontSize: FONT_SIZE.compact, }}>Register now!</Text>
                </View>
            </View>
            <View style={{ height: HEIGHT / 100 * 20 }}></View>


        </SafeAreaView>
    )
}

const styler = StyleSheet.create({
    containBox: {
        height: HEIGHT / 100 * 80,
        width: WIDTH,
        alignItems: 'center',
        justifyContent: 'center',
        marginHorizontal: '5%'
    },
    title: {
        fontSize: FONT_SIZE.huge,
        color: COLOR.blue,
        fontWeight: FONT_WEIGHT.semibold,
        marginVertical: '10%',
        marginTop: '20%'
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
})
