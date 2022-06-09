import React, {useEffect,useState} from 'react';
import { Text, View, FlatList, Image, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import axios from 'axios';



const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'Aviation',
    image: require('./assets/a.jpg')
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Banking',
    image: require('./assets/aaaaaaaaa.jpg')
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Education',
    image: require('./assets/aaaaaaaa.jpg')
  },
  {
    id: 'ad7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'Employer',
    image: require('./assets/aaaaaa.jpg')
  },
  {
    id: '3bc68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Travel',
    image: require('./assets/aaaaa.jpg')
  },
  {
    id: '58694b0f-3da1-471f-bd96-145571e29d72',
    title: 'Vehicle',
    image: require('./assets/aaaaaaa.jpg')
  },
];

function HomeScreen() {
  return (
    <View style={{ flex: 1, backgroundColor:"#057afa"}}>
      <View style={{flex:0.4, backgroundColor:"#057afasssssss"}}>
        <View style={{flexDirection:"row",width:"100%",marginTop:10}}>
        <TouchableOpacity><Image source={require('./assets/aaa.jpg')} style={{height:50, width:50,marginLeft:10,marginRight:10}}></Image></TouchableOpacity>
          <View style={{flexDirection:"column",width:"47%"}}>
          <Text style={{color:"white"}}>Frontend User</Text>
          <Text style={{color:"white"}}>383233</Text>
          </View>
          <Text style={{color:"white",width:"25%"}}>Face Compare</Text>
          <TouchableOpacity><Image source={require('./assets/aa.jpg')} style={{height:50, width:50}}></Image></TouchableOpacity>
        </View>
        <Image source={require('./assets/aaaa.jpg')} style={{height:100, width:"100%",justifyContent:"center",alignSelf:"center",marginTop:20}}></Image>
        <TouchableOpacity><View style={{flexDirection:"row",justifyContent:"center",alignSelf:"center",marginTop:40,width:"35%",borderRadius:10,borderColor:"#dcdcdc",borderWidth:0.5,padding:5}}>
          <Icon name="plus-circle" color={'white'} size={20}></Icon>
          <Text style={{color:"white",marginLeft:10}}>My Profile</Text>
        </View></TouchableOpacity>
      </View>
      <View style={{flex:0.6, backgroundColor:"white",borderTopLeftRadius:30,borderTopRightRadius:30}}>
        <Text style={{color:"black",fontSize:20,marginLeft:30,marginTop:20}}>My Favorites</Text>
        <FlatList
        data={DATA}
        renderItem={({ item, id }) => (
            <View style={{flex:1}}>
              <TouchableOpacity><View style={{flexDirection:"column",marginTop:40,justifyContent:"center",alignSelf:"center"}}>
                <Image source={item.image} style={{height:50, width:50,justifyContent:"center",alignSelf:"center"}}></Image>
                <Text style={{color:"black",marginTop:5}}>{item.title}</Text>
              </View></TouchableOpacity>
            </View>
        )}
        keyExtractor={item => item.id}
        numColumns={3}
        />
      </View>  
    </View>
  );
}

function WorkoutTabScreen() {

  const [datas, setDatas] = useState([])  
  const [display, setDisplay] = useState(false)

  const one = () => {
    axios
    .get("https://reqres.in/api/users")
    .then(function (response) {
      console.log(response.data.data);
      setDatas(response.data.data);
    });
  }
  
    useEffect(() => {
      one();
    },[]);

  return (
    <View style={{ flex: 1}}>
      
      {display ? <FlatList
        data={datas}
        renderItem={({ item, id }) => (
            <View style={{flex:1}}>
              <View style={{flexDirection:"row",marginTop:40}}>
                <Image source={{uri : item.avatar}} style={{height:50, width:50, borderRadius:100, marginLeft:20, marginRight:20}}></Image>
                <View style={{flexDirection:"column"}}>
                <Text style={{color:"black",marginTop:5}}>{item.first_name} {item.last_name}</Text>
                <Text style={{color:"black",marginTop:5}}>{item.email}</Text>
                </View>
              </View>
            </View>
        )}
        keyExtractor={item => item.id}
        /> : <TouchableOpacity style={{justifyContent:"center",alignSelf:"center"}} onPress={() => setDisplay(!display)}>
        <View>
          <Text style={{fontSize:20,color:"blue",textDecorationLine:"underline"}}>https://reqres.in/api/users</Text>
        </View>
      </TouchableOpacity> }
    </View>
  );
}

function PayScreenComponent() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Send Screen</Text>
    </View>
  );
}

function StoreLandingScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>History Screen</Text>
    </View>
  );
}

function ProfileScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>More Screen</Text>
    </View>
  );
}


const Tab = createBottomTabNavigator();

// function MyTabs() {
//   return (
//     <Tab.Navigator>
//       <Tab.Screen name="Home" component={HomeScreen} />
//       <Tab.Screen name="Settings" component={SettingsScreen} />
//     </Tab.Navigator>
//   );
// }

// export default function App() {
//   return (
//     <NavigationContainer>
//       <MyTabs />
//     </NavigationContainer>
//   );
// }

export default function App() {

const [datas, setDatas] = useState([])  

const one = () => {
  axios
  .get("https://reqres.in/api/users")
  .then(function (response) {
    console.log(response.data.data);
    setDatas(response.data.data);
  });
}

  useEffect(() => {
    one();
  },[]);

const customTabBarStyle = {
  activeTintColor: '#0091EA',
  inactiveTintColor: 'gray',
  style: {backgroundColor: 'white' },
}
return (
  <NavigationContainer>
  <Tab.Navigator
  initialRouteName="Home"
  activeColor="#fff"
  tabBarOptions={customTabBarStyle}
  shifting="false">
  <Tab.Screen
  name="Home"
  options={{
      tabBarLabel: 'Home',
      headerShown: false,
      tabBarIcon: ({ color }) => (
          <Icon name="home" color={color} size={26} />
      )
  }}
  component={HomeScreen} />
  <Tab.Screen
  name="API"
  options={{
      tabBarLabel: 'Documents',
      tabBarIcon: ({ color }) => (
          <Icon name="file-document-outline" color={color} size={26} />
      )
  }}
  component={WorkoutTabScreen} />
  <Tab.Screen
  name="Send"
  options={{
      tabBarLabel: 'Send',
      tabBarIcon: ({ color }) => (
          <View
          style={{
              position: 'absolute',
              bottom: 0, // space from bottombar
              height: 68,
              width: 68,
              borderRadius: 100,
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor:"white",
              shadowColor:"grey",
              elevation:30,
          }}
          >
          <Icon name="infinity" color={'#dcdcdc'} size={50}/>
          </View>
      )
  }}
  component={PayScreenComponent}/>
  <Tab.Screen
  name="History"
  options={{
      tabBarLabel: 'History',
      tabBarIcon: ({ color }) => (
          <Icon name="history" color={color} size={26} />
      )
  }}
  component={StoreLandingScreen} />
  <Tab.Screen
  name="More"
  options={{
      tabBarLabel: 'More',
      tabBarIcon: ({ color }) => (
          <Icon name="dots-horizontal-circle-outline" color={color} size={26} />
      )
  }}
  component={ProfileScreen} />
  </Tab.Navigator>
  </NavigationContainer>
);
}