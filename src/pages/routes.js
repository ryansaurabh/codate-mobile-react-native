import React, { useEffect, useState } from 'react';
import FaIcon from 'react-native-vector-icons/FontAwesome5';
import {createStackNavigator} from '@react-navigation/stack';
import Page1 from './page1';
import Page2 from './page2';
import Page3 from './page3';
import {NavigationContainer} from '@react-navigation/native';
import SignIn from './signin';
import SignUp from './signup';
import OtpPage from './otpPage';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Swiper from './swiper';
import Matches from './matches';
import ProfileList from './profileList';
import PasswordPage from './passwordPage';
import {ChatRoom} from './chatRoom';
import {Text} from 'react-native';
import { Auth } from 'aws-amplify';

export default function Routes({text}) {
  //state Variables
  const [loading, setLoading]=useState(true);
  const [user, setUser]= useState(null);

  //Navigators
  const Stack = createStackNavigator();
  const Tab = createBottomTabNavigator();

  //useEffects
  useEffect(()=>{
    verifyUser();
    setTimeout(()=>{setLoading(false)}, 2000);
  },[]);

  //member Functions
  const verifyUser =async() =>{
    try{
    const res= await Auth.currentAuthenticatedUser();
    setUser(res);
    }catch(e){
      setUser(null);
      console.log(res);
    }
  }

  const signOut =async() =>{
    try{
      await Auth.signOut();
      setUser(null);
    }catch(e){
      console.log(e);
    }
  }

  const AuthStack = () => (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="pageone" component={Page1} />
      <Stack.Screen name="signin" component={SignIn} />
      <Stack.Screen name="signup" component={SignUp} />
      <Stack.Screen name="otp" component={OtpPage} />
      <Stack.Screen name="chooseImages" component={Page2} />
      <Stack.Screen name="forgotpassword" component={PasswordPage} />
      <Stack.Screen name="login" component={SignIn} />
    </Stack.Navigator>
  );

  const TabStack = () => (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Tab.Screen
        name="swiper"
        component={Swiper}
        options={{
          title: 'Find',
          tabBarLabel: ({focused}) => (
            <Text
              style={{
                fontSize: 10,
                color: focused ? 'red' : 'gray',
              }}>
              Find
            </Text>
          ),
          tabBarIcon: ({size, focused, color}) => {
            return (
              <FaIcon
                name="searchengin"
                size={23}
                color={focused ? 'red' : 'gray'}
              />
            );
          },
        }}
      />
      <Tab.Screen
        name="matches"
        component={Matches}
        options={{
          title: 'Match',
          tabBarLabel: ({focused}) => (
            <Text
              style={{
                fontSize: 10,
                color: focused ? 'red' : 'gray',
              }}>
              Match
            </Text>
          ),
          tabBarIcon: ({size, focused, color}) => {
            return (
              <FaIcon
                name="gratipay"
                size={23}
                color={focused ? 'red' : 'gray'}
              />
            );
          },
        }}
      />
      <Tab.Screen
        name="profileList"
        component={ProfileList}
        initialParams={{
         signOut:signOut
        }}
        options={{
          title: 'Profile',
          tabBarLabel: ({focused}) => (
            <Text
              style={{
                fontSize: 10,
                color: focused ? 'red' : 'gray',
              }}>
              Profile
            </Text>
          ),
          tabBarIcon: ({size, focused, color}) => {
            return (
              <FaIcon
                name="user-circle"
                size={23}
                color={focused ? 'red' : 'gray'}
              />
            );
          },
        }}
      />
    </Tab.Navigator>
  );

  const MainStack = () => (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="home" component={TabStack} />
      <Stack.Screen name="Chat Room" component={ChatRoom} />
    </Stack.Navigator>
  );
  return (
    <>
    {loading && <Text>Loading...</Text>}
    {!loading && !user &&   <NavigationContainer><AuthStack/></NavigationContainer>}
    {!loading && user &&
    <NavigationContainer>
      <MainStack />
    </NavigationContainer>
}
    </>
  );
}
