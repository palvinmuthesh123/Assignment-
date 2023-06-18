import React, { useEffect } from "react";
import { SafeAreaView, StatusBar, Image } from 'react-native';
import styles from "./styles";
import { COLOR } from "../../theme/typography";



export default SplashScreen = (props) => {

    useEffect(() => {
        setTimeout(() => {
            props.navigation.reset({
                index: 0,
                routes: [{ name: 'OnboardScreen' }],
            });
        }, 1400);
    }, [])

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar backgroundColor={COLOR.primary} />
            <Image source={require('../../assets/images/logo.png')} />
        </SafeAreaView>
    )
}
