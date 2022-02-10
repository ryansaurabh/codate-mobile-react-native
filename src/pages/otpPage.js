import {
  View,
  StyleSheet,
  SafeAreaView,
  TextInput,
  Pressable,
} from 'react-native';
import React from 'react';
import {useState} from 'react';
import {useRef} from 'react';
import Button from '../components/button';
import {Auth} from 'aws-amplify';

export default function OtpPage({route, navigation}) {
  const pin1Ref = useRef(null);
  const pin2Ref = useRef(null);
  const pin3Ref = useRef(null);
  const pin4Ref = useRef(null);
  const pin5Ref = useRef(null);
  const pin6Ref = useRef(null);

  const {email} = route.params;
  const [pin, setPin] = useState({
    pin1: '',
    pin2: '',
    pin3: '',
    pin4: '',
    pin5: '',
    pin6: '',
  });
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#181228'}}>
      <View style={styles.container}>
        <View style={styles.otpInput}>
          <TextInput
            style={{fontSize: 20, fontWeight: '700'}}
            ref={pin1Ref}
            keyboardType="numeric"
            maxLength={1}
            onChangeText={e => {
              setPin({...pin, pin1: e});
              pin2Ref.current.focus();
            }}></TextInput>
        </View>
        <View style={styles.otpInput}>
          <TextInput
            style={{fontSize: 20, fontWeight: '700'}}
            ref={pin2Ref}
            keyboardType="numeric"
            maxLength={1}
            onChangeText={e => {
              setPin({...pin, pin2: e});
              pin3Ref.current.focus();
            }}></TextInput>
        </View>
        <View style={styles.otpInput}>
          <TextInput
            style={{fontSize: 20, fontWeight: '700'}}
            ref={pin3Ref}
            keyboardType="numeric"
            maxLength={1}
            onChangeText={e => {
              setPin({...pin, pin3: e});
              pin4Ref.current.focus();
            }}></TextInput>
        </View>
        <View style={styles.otpInput}>
          <TextInput
            style={{fontSize: 20, fontWeight: '700'}}
            ref={pin4Ref}
            keyboardType="numeric"
            maxLength={1}
            onChangeText={e => {
              setPin({...pin, pin4: e});
              pin5Ref.current.focus();
            }}></TextInput>
        </View>
      </View>
      <View style={styles.otpInput}>
        <TextInput
          style={{fontSize: 20, fontWeight: '700'}}
          ref={pin5Ref}
          keyboardType="numeric"
          maxLength={1}
          onChangeText={e => {
            setPin({...pin, pin5: e});
            pin6Ref.current.focus();
          }}></TextInput>
      </View>
      <View style={styles.otpInput}>
        <TextInput
          style={{fontSize: 20, fontWeight: '700'}}
          ref={pin6Ref}
          keyboardType="numeric"
          maxLength={1}
          onChangeText={e => setPin({...pin, pin6: e})}></TextInput>
      </View>
      <View style={{paddingHorizontal: 20}}>
        <Pressable>
          <Button
            text="Submit"
            handleClick={async () => {
              try {
                await Auth.confirmSignUp(
                  email,
                  pin.pin1 + pin.pin2 + pin.pin3 + pin.pin4 + pin.pin5 + pin.pin6,
                );
                navigation.navigate('signin');
              } catch (error) {
                alert('Something went wrong');
                console.log('error confirming sign up', error);
              }
            }}
          />
        </Pressable>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: '#181228',
    flex: 0.7,
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },

  otpInput: {
    backgroundColor: '#fff',
    height: 70,
    width: 50,
    justifyContent: 'center',
    alignItems: 'center',
    color: '#000',
    borderRadius: 13,
  },
});
