import React from 'react';
import {
  View,
  StyleSheet,
  TextInput,
  SafeAreaView,
  Pressable,
} from 'react-native';
import Input from '../components/input';
import {useState} from 'react';
import Button from '../components/button';
import {Auth} from 'aws-amplify';

//Global variables(email validation)
const regEx =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

export default function PasswordPage({navigation}) {
  const [forgotForm, setForgotForm] = useState({email: ''});
  const [formError, setFormError] = useState(false);

  const ValidateEmail = email => {
    console.log(forgotForm.email);
    if (regEx.test(forgotForm.email)) {
      return true;
    }
    return false;
  };
  const ValidateForm = () => {
    if (!ValidateEmail(forgotForm.email)) {
      setFormError(true);
    } else {
      setFormError(false);
    }
    if (!ValidateEmail(forgotForm.email)) return false;
    return true;
  };
  return (
    <SafeAreaView style={styles.container}>
      <View style={{paddingHorizontal: 40}}>
        <View>
          <Input
            value={forgotForm.email}
            error={formError}
            placeholder={'Your Email'}
            type={'email'}
            onChang={e => {
              setForgotForm({email: e});
              setFormError(false);
            }}
          />
        </View>
        <Pressable>
          <Button
            text="Get OTP"
            handleClick={() => {
              if (ValidateForm()) {
                // Send confirmation code to user's email
                Auth.forgotPassword(forgotForm.email)
                  .then(data => {
                    console.log(data)
                    navigation.navigate('otp',{email:forgotForm.email});
                  })
                  .catch(err => console.log(err));
              } else alert('Email required');
            }}
          />
        </Pressable>
      </View>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#181228',
    flexDirection: 'column',
    justifyContent: 'space-evenly',
  },
});
