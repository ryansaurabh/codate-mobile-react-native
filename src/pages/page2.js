import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  SafeAreaView,
  TouchableOpacity,
  Pressable,
} from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default function Page2({navigation}) {
  return (
    <SafeAreaView style={styles.container}>
      <View style={{height: windowHeight * 0.1}}>
        <Text style={{color: '#fff', alignContent: 'flex-start'}}>--</Text>
        <Text style={styles.txt1}>Your Sex ?</Text>
      </View>
      <View style={styles.flex1}>
        <View style={{flexDirection: 'row'}}>
          <TouchableOpacity>
            <View style={styles.box}>
              <View style={styles.jcac}>
                <Text>Icon</Text>
                <Text style={styles.text}>Female</Text>
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View style={styles.box}>
              <View style={{alignItems: 'center'}}>
                <Text>Icon</Text>
                <Text style={styles.text}>Male</Text>
              </View>
            </View>
          </TouchableOpacity>
        </View>
        <TouchableOpacity>
          <View style={styles.v1}>
            <Text style={styles.others}>Others</Text>
          </View>
        </TouchableOpacity>
      </View>
      <TouchableOpacity>
        <Pressable
          onPress={() => navigation.navigate('pagethree')}
          style={styles.v2}>
          <Text style={styles.nextText}>Next</Text>
        </Pressable>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#181228',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  txt1: {
    alignItems: 'flex-end',
    color: '#fff',
    fontSize: 45,
    padding: 60,
    fontFamily: 'DavidLibre',
  },

  box: {
    height: 130,
    width: windowWidth * 0.3,
    backgroundColor: 'gray',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 20,
    borderRadius: 7,
    backgroundColor: '#A9A9A9',
  },
  jcac: {
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  v1: {
    height: 55,
    width: windowWidth * 0.7,
    backgroundColor: '#A9A9A9',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 7,
  },
  v2: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#243A63',
    height: 50,
  },
  nextText: {
    color: '#fff',
    fontSize: 20,
    fontFamily: 'DavidLibre',
  },
  flex1: {
    flexDirection: 'column',
    alignItems: 'center',
  },
  text: {
    color: '#fff',
    fontSize: 30,
    fontFamily: 'DavidLibre',
  },
  others: {
    color: '#000',
    fontSize: 20,
    textAlign: 'center',
    fontFamily: 'DavidLibre',
  },
});
