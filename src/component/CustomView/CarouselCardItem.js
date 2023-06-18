import React from 'react'
import { View, Text, StyleSheet, Dimensions, Image,TouchableOpacity } from "react-native"
import { FONT_SIZE, COLOR, FONT_WEIGHT } from '../../theme/typography'
import LinearGradient from "react-native-linear-gradient";

export const SLIDER_WIDTH = Dimensions.get('window').width
export const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.85)

const CarouselCardItem = ({ index }) => {

  return (
    <View style={styles.container} key={index}>
      <LinearGradient
        end={{ x: 1, y: 0 }}
        start={{ x: 0, y: 0 }}
        colors={['#14BC66', '#192D51']}
        style={[
          styles.gradientBox, { padding: 15, borderRadius:5 }]}
      >
        <View style={{ backgroundColor: COLOR.bGray, height: '65%', width: '100%', borderRadius: 10, }}></View>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginVertical: 10 }}>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Image source={require('../../assets/images/send.png')} />
            <Text style={styles.address}>San Francisco ,CA</Text>
          </View>
          <TouchableOpacity style={styles.connectBox}>
            <Text style={styles.connect}>Connect</Text>
          </TouchableOpacity>
        </View>
        <View style={{ marginVertical: 10 }}>
          <Text style={styles.news}>Wonderful building near London Big Ben with Amazing News</Text>
        </View>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginVertical: 10 }}>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <View style={{ height: 60, width: 60, borderRadius: 100, backgroundColor: COLOR.bGray }}></View>
            <View style={{ marginHorizontal: 5, justifyContent: 'space-between' }}>
              <Text style={styles.news}>Olivia Redman</Text>
              <Text style={styles.address}>2 minutes ago</Text>
            </View>
          </View>
          <View style={{ justifyContent: 'space-between', alignItems: "center" }}>
            <View style={{ alignItems: "center", marginTop: -15 }}>
              <Image source={require('../../assets/images/like.png')} style={{ marginTop: -15 }} />
              <Text style={styles.address}>325</Text>
            </View>
            <Image source={require('../../assets/images/send.png')} style={{ marginTop: 10 }} />
            <Image source={require('../../assets/images/speech.png')} style={{ marginTop: 10 }} />
          </View>
        </View>
      </LinearGradient>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    borderRadius: 8,
    width: ITEM_WIDTH,
    paddingBottom: 40,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,
    elevation: 7,
  },
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

export default CarouselCardItem