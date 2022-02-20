import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  Pressable,
  ScrollView,
} from 'react-native';
import {SafeAreaView} from 'react-native';
import {TouchableOpacity} from 'react-native';
import {useState} from 'react';
import MsgBox from '../components/msgBox';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const userData = [
  {Name: 'Ankit', uri: require('../assets/pic3.png'), lastMessage: 'jhdcjhwf'},
  {Name: 'Rounak', uri: require('../assets/leo.jpg'), lastMessage: 'jhdcjhwf'},
  {
    Name: 'Purush',
    uri: require('../assets/pic2.jpg'),
    lastMessage: 'jhdcjhwf',
  },
  {Name: 'Mihir', uri: require('../assets/sk.jpg'), lastMessage: 'jhdcjhwf'},
  {Name: 'Nitin', uri: require('../assets/rr.png'), lastMessage: 'jhdcjhwf'},
  {Name: 'Puneet', uri: require('../assets/sk.jpg'), lastMessage: 'jhdcjhwf'},
  {
    Name: 'Ronk Sharma',
    uri: require('../assets/rr.png'),
    lastMessage: 'jhdcjhwf',
  },
];

export default function Matches({navigation}) {
  const [pageState, setpageState] = useState(1);
  return (
    <SafeAreaView
      style={{height: windowHeight * 1, backgroundColor: '#181228'}}>
      <View style={styles.header}>
        <View>
          <View style={styles.box}>
            
              <TouchableOpacity onPress={() => {setpageState('MATCHES');
           }}>
                <Text style={styles.txt}> Matches</Text>
              </TouchableOpacity>
           
              <TouchableOpacity onPress={() => setpageState('MESSAGES')}>
                <Text style={styles.txt}> Messages</Text>
              </TouchableOpacity>
            
          </View>
        </View>
      </View>
      <ScrollView>
        {pageState === 'MESSAGES' &&
          userData.map((i, index) => (
            <Pressable
            key={index}
              onPress={() => {
                navigation.navigate('Chat Room');
                //add code to redirect to specific chat page
              }}>
              <MsgBox
                title={i.Name}
                subtitle={i.lastMessage}
                image={i.uri}
              />
            </Pressable>
          ))}
        {pageState === 'MATCHES' && (
          <View>
            <Text>2</Text>
          </View>
        )}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  txt: {
    fontWeight: "600",
    fontSize: 20,
    letterSpacing:2,
    color: '#FFFF33',
    textAlign: 'center',
    fontFamily: 'DavidLibre',
  },
  box: {
    width: windowWidth*1,
    height: windowHeight*0.1,
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: '#181228',
    justifyContent: 'space-evenly',
    alignContent: 'space-between',
    paddingTop: 17
  },
  box2: {
    height: windowHeight * 0.1,
    backgroundColor: '#181228',
    justifyContent: 'space-evenly',
    alignContent: 'flex-start',
    textAlign: 'center',
  },
  header: {
    height: windowHeight * 0.1,
    justifyContent: 'space-evenly',
    flexDirection: 'row',
    backgroundColor: '#181228',
  },

  header2: {
    height: windowHeight * 0.001,
    width: windowWidth * 0.4,
    backgroundColor: 'red',
    marginTop: 16,
  },
});
