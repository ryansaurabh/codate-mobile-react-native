import {Text, StyleSheet, View, ScrollView, Pressable} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native';
import ProfileComp from '../components/ProfileComp';
import FaIcon from 'react-native-vector-icons/FontAwesome5';
import { Auth } from 'aws-amplify';



export default function ProfileList({route, navigation}) {
  const componentData = [
    {
      icon: <FaIcon name="user" size={23} color={"#FFFF33"}/>,
      content: 'My Profile',
    },
    {
      icon: <FaIcon name="tasks" size={23}  color={"#FFFF33"}/>,
      content: 'My Account',
    },
    {
      icon: <FaIcon name="bell" size={23}  color={"#FFFF33"} />,
      content: 'Notifications',
    },
    {
      icon: <FaIcon name="unlock-alt" size={23}  color={"#FFFF33"} />,
      content: 'Password',
    },
    {
      icon: <FaIcon name="cog" size={23}  color={"#FFFF33"}/>,
      content: 'Settings',
    },
    {
      icon: <FaIcon name="cog" size={23}  color={"#FFFF33"}/>,
      content: 'Logout',
      func:()=>{route.params.signOut()}
    },
    
  ];
  return (
    <SafeAreaView>
      <View style={styles.topPortion}>
        <Pressable onPress={() => {}}>
          <View style={styles.dp}>
            <Text style={styles.add}>+</Text>
          </View>
        </Pressable>
      </View>

      <ScrollView style={styles.icon}>
        {componentData.map(e => (
          <ProfileComp onPress={()=>{e.func()}} icon={e.icon} content={e.content}  />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  icon: {
    height: '100%',
    backgroundColor: '#181228',
  },
  dp: {
    height: 100,
    width: 100,
    borderRadius: 50,
    backgroundColor: '#A9A9A9',
    alignContent: 'center',
    justifyContent: 'center',
  },
  topPortion: {
    height: 200,
    paddingLeft:10,
    backgroundColor: '#000',
    alignContent: 'center',
    justifyContent: 'center',
    textAlign: 'center',
  },
  add: {
    fontSize: 26,
    fontWeight: '500',
    textAlign: 'center',
  },
});
