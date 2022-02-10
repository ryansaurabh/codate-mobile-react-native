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
export default function SignUp({navigation}) {
  //states
  const [loginForm, setLoginForm] = useState({
    email: '',
    pass: '',
    name: '',
    verifyPassword: '',
  });
  const [userNameError, setUserNameError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [nameError, setNameError] = useState(false);
  const [verifyPasswordError, setVerifyPasswordError] = useState(false);

  //memberFunctions (email validation)
  const ValidateEmail = email => {
    console.log(loginForm.email)
    if (regEx.test(loginForm.email)) {
      return true;
    }
    return false;
  };

    
  const ValidateForm = () => {
    console.log('here',loginForm);
    if (loginForm.name === '') {
      setNameError(true);
    }
    else{
      setNameError(false);
    }
    if (!ValidateEmail(loginForm.email)) {
      setUserNameError(true);
    }
    else{
      setUserNameError(false);
    }
    if (loginForm.pass === '') {
      setPasswordError(true);
    }
    else{
      setPasswordError(false);
    }
    if (loginForm.verifyPassword != loginForm.pass) {
      setVerifyPasswordError(true);
    }
    else{
      setVerifyPasswordError(false);
    }
    if (
      loginForm.name === '' ||
      !ValidateEmail(loginForm.email) ||
      loginForm.pass === '' ||
      loginForm.verifyPassword != loginForm.pass
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
              value={loginForm.name}
              error={nameError}
              placeholder={'Your Name'}
              type={'text'}
              onChang={e => {
              
                setLoginForm({...loginForm, name: e});
                setNameError(false);
              }}
            />
          </View>
          <View>
            <Input
              value={loginForm.email}
              error={userNameError}
              placeholder={'Your Email'}
              type={'email'}
              onChang={e => {
                setLoginForm({...loginForm, email: e});
                setUserNameError(false);
              }}
            />
          </View>
          <View>
            <Input
              value={loginForm.pass}
              error={passwordError}
              placeholder={'Your Password'}
              type={'text'}
              onChang={e => {
                setLoginForm({...loginForm, pass: e});
                setPasswordError(false);
              }}
            />
            <View>
              <Input
                value={loginForm.verifyPassword}
                error={verifyPasswordError}
                placeholder={'Verify password'}
                type={'text'}
                onChang={e => {
                  setLoginForm({...loginForm, verifyPassword: e});
                  setVerifyPasswordError(false);
                }}
              />
            </View>
          </View>
          <Pressable>
            <Button
              text="Signup"
              handleClick={async() => {
                if (ValidateForm()) {
                 try{
                   const res=await Auth.signUp({username:loginForm.email, password:loginForm.pass, attributes:{name:loginForm.name,  email :loginForm.email} });
                   console.log(res);
                   navigation.navigate('otp',{email:loginForm.email})
                 }catch(e){
                   console.log(e);
                   alert("Oops Something Went Wrong");
                 }
                }
                else alert('Not all fields are filled');
              }}
            />
          </Pressable>
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
