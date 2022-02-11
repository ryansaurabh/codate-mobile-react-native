import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  SafeAreaView,
} from 'react-native';
import {useState} from 'react';
import Input from '../components/input';
import Button from '../components/button';
import {Auth} from 'aws-amplify';

export default function SignIn({navigation}) {
  const [loginForm, setLoginForm] = useState({
    password: '',
    verifyPassword: '',
  });
  const [passwordError, setPasswordError] = useState(false);
  const [verifyPasswordError, setVerifyPasswordError] = useState(false);

  const ValidateForm = () => {
    if (loginForm.password === '') {
      setPasswordError(true);
    } else {
      setPasswordError(false);
    }
    if (loginForm.verifyPassword != loginForm.password) {
      setVerifyPasswordError(true);
    } else {
      setVerifyPasswordError(false);
    }
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
              value={loginForm.password}
              error={passwordError}
              placeholder={'Enter Password'}
              type={'password'}
              onChang={e => {
                setLoginForm({...loginForm, password: e});
                setPasswordError(false);
              }}
            />
          </View>
          <View>
            <Input
              value={loginForm.verifyPassword}
              error={verifyPasswordError}
              placeholder={'Verify Password'}
              type={'text'}
              onChang={e => {
                setLoginForm({...loginForm, verifyPassword: e});
                setVerifyPasswordError(false);
              }}
            />
          </View>
          <View>
            <Button
              text="Login"
              handleClick={async () => {
                if (ValidateForm()) {
                  try {
                await Auth.forgotPasswordSubmit(
                    ...loginForm.password,
                    ...loginForm.verifyPassword

                )
                navigation.navigate('login');
                  } catch (e) {
                    alert('so');
                    console.log(e);
                  }
                } else alert('Password Required');
              }}
            />
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
