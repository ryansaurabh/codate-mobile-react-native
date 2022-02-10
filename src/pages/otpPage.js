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

export default function OtpPage({navigation}) {
  const pin1Ref = useRef(null);
  const pin2Ref = useRef(null);
  const pin3Ref = useRef(null);
  const pin4Ref = useRef(null);

  const [pin, setPin] = useState({pin1: '', pin2: '', pin3: '', pin4: ''});
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#181228'}}>
      <View style={styles.container}>
        <View style={styles.otpInput}>
          <TextInput
            style={{fontSize: 20, fontWeight: '700'}}
            ref={pin1Ref}
            keyboardType="numeric"
            maxLength={1}
            onChange={e => {
              setPin({...pin, pin1: e.target.value});
              pin2Ref.current.focus();
            }}></TextInput>
        </View>
        <View style={styles.otpInput}>
          <TextInput
            style={{fontSize: 20, fontWeight: '700'}}
            ref={pin2Ref}
            keyboardType="numeric"
            maxLength={1}
            onChange={e => {
              setPin({...pin, pin2: e.target.value});
              pin3Ref.current.focus();
            }}></TextInput>
        </View>
        <View style={styles.otpInput}>
          <TextInput
            style={{fontSize: 20, fontWeight: '700'}}
            ref={pin3Ref}
            keyboardType="numeric"
            maxLength={1}
            onChange={e => {
              setPin({...pin, pin3: e.target.value});
              pin4Ref.current.focus();
            }}></TextInput>
        </View>
        <View style={styles.otpInput}>
          <TextInput
            style={{fontSize: 20, fontWeight: '700'}}
            ref={pin4Ref}
            keyboardType="numeric"
            maxLength={1}
            onChange={e => setPin({...pin, pin4: e.target.value})}></TextInput>
        </View>
      </View>
      <View style={{paddingHorizontal: 20}}>
        <Pressable>
          <Button
            text="Submit"
            handleClick={() => {
              navigation.navigate('signin');
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
