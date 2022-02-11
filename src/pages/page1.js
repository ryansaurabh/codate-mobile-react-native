import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  SafeAreaView,
  Pressable,
  Image,
} from 'react-native';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default function Page1({navigation}) {
  const windowWidth = Dimensions.get('window').width;
  const windowHeight = Dimensions.get('window').height;
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <View style={styles.jcac}>
          <View style={{marginHorizontal: 10, paddingTop: 16}}>
            <Image
              style={styles.logoImage}
              source={require('../assets/codatelogo.png')}
            />
          </View>
          <Text style={styles.codateText}>codate</Text>
        </View>
        <View>
          <Text style={styles.headerText}>Find and meet new people</Text>
        </View>
      </View>

      <View style={styles.jcac2}>
        <View style={{flexDirection: 'row', justifyContent: 'center'}}>
          <Pressable
            onPress={() => navigation.navigate('signin')}
            style={styles.subscribeButton}>
            <Text style={styles.SubscribeText}>Subscribe with Us</Text>
          </Pressable>
        </View>
        <View>
          <Text style={styles.termsText}>
            By signing in, you agree to Terms of Service and Privacy policy
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#181228',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  header: {
    height: windowHeight * 0.33,
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  codateText: {
    color: '#D01E80',
    fontWeight: 'normal',
    fontSize: 30,
    paddingTop: 13,
    textAlign: 'center',
    fontFamily: 'Lobster',
  },
  logoImage: {
    height: 32,
    width: 32,
    resizeMode: 'cover',
  },

  jcac: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 10,
  },
  jcac2: {
    height: windowHeight * 0.3,
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  headerText: {
    color: '#fff',
    fontWeight: '100',
    fontSize: 45,
    textAlign: 'center',
    paddingHorizontal: '13%',
    fontFamily: 'DavidLibre',
  },
  termsText: {
    color: 'gray',
    fontSize: 12,
    textAlign: 'center',
    paddingHorizontal: 50,
    paddingBottom: 15,
    fontFamily: 'DavidLibre',
  },
  SubscribeText: {
    textAlign: 'center',
    color: '#fff',
    fontSize: 20,
    fontFamily: 'DavidLibre',
  },
  subscribeButton: {
    backgroundColor: '#243A63',
    width: windowWidth * 0.7,
    height: windowHeight * 0.065,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
