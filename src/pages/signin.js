import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  SafeAreaView,
  Pressable,
} from 'react-native';
import {useState} from 'react';
import Input from '../components/input';
import Button from '../components/button';
import { Auth } from 'aws-amplify';

//Global variables(email validation)
const regEx =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

export default function SignIn({navigation}) {
  const [loginForm, setLoginForm] = useState({
    email: '',
    pass: '',
  });
  const [emailError, setEmailError] = useState(false);
  const [passError, setPassError] = useState(false);

   //memberFunctions (email validation)
   const ValidateEmail = email => {
    console.log(loginForm.email)
    if (regEx.test(loginForm.email)) {
      return true;
    }
    return false;
  };

  const ValidateForm = () => {
    if (!ValidateEmail(loginForm.email)) {
      setEmailError(true);
    }
    else{
      setEmailErrorgit (false);
    }
    if (loginForm.pass === '') {
      setPassError(true);
    }
    else{
      setPassError(false)
    }
    if (
     
      !ValidateEmail(loginForm.email) ||
      loginForm.pass === ''
    )
      return false;
    return true;
  };

  const windowWidth = Dimensions.get('window').width;
  const windowHeight = Dimensions.get('window').height;
  return (
    <SafeAreaView style={styles.container}>
      <View style={{height: windowHeight * 0.1}}>
        <Text style={styles.backArrow}>--</Text>
      </View>
      <View
        style={{
          flexDirection: 'column',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginTop: -60,
        }}>
        <View style={{width: '80%'}}>
          <View>
            <Input
              value={loginForm.email}
              error={emailError}
              placeholder={'Your Email'}
              type={'email'}
              onChang={e => {
                setLoginForm({...loginForm, email: e});
                setEmailError(false);
              }}
            />
          </View>
          <View>
            <Input
              value={loginForm.password}
              error={passError}
              placeholder={'Your Password'}
              type={'text'}
              onChang={e => {
                setLoginForm({...loginForm, pass: e});
                setPassError(false);
              }}
            />
            <Pressable
              style={{
                flexDirection: 'row',
                justifyContent: 'flex-end',
                marginTop: -10,
              }}>
              <Text style={{color: '#71819F'}}>Forgot Password?</Text>
            </Pressable>
          </View>
          <View>
            <Button
              text="Login"
              handleClick={async() => {
                if (ValidateForm()) {
                  try{
                  await Auth.signIn({username:loginForm.email, password:loginForm.pass})
                  navigation.navigate('chooseImages');
                  }catch(e){
                    alert('so');
                    console.log(e);
                  }
                }
                else alert('Not all fields are filled');
              }}
            />
            <Pressable
              style={{marginTop: 10}}
              onPress={() => navigation.navigate('signup')}>
              <Text style={{textAlign: 'center', color: '#71819F'}}>
                New user? Signup
              </Text>
            </Pressable>
          </View>
        </View>
      </View>

      <View style={styles.combined}>
        {/* Vacan View for justify content space between */}
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
  },
  backArrow: {
    color: '#fff',
    alignContent: 'flex-start',
  },
  combined: {
    justifyContent: 'space-evenly',
    alignItems: 'center',
    backgroundColor: 'blue',
  },
  loginTxt: {
    color: '#fff',
    fontSize: 20,
  },
  login: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#243A63',
    height: 50,
  },

  done: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#243A63',
    height: 50,
    borderRadius: 25,
    marginTop: 80,
  },
  doneTxt: {
    color: '#fff',
    fontSize: 16,
  },
});
