import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  SafeAreaView,
  Pressable,
} from "react-native";
import { useState } from "react";
import Input from "../components/input";
import Button from "../components/button";

export default function SignIn({navigation}) {
  const [loginForm, setLoginForm] = useState({
    email: "",
    pass: "",
  });

  const windowWidth = Dimensions.get("window").width;
  const windowHeight = Dimensions.get("window").height;
  return (
    <SafeAreaView style={styles.container}>
      <View style={{ height: windowHeight * 0.1 }}>
        <Text style={styles.backArrow}>--</Text>
      </View>
      <View
        style={{
          flexDirection: "column",
          justifyContent: "space-between",
          alignItems: "center",
          marginTop: -60,
        }}
      >
        <View style={{ width: "80%" }}>
          <View>
            <Input
              value={loginForm.email}
              placeholder={"Your Email"}
              type={"email"}
              onChange={(e) => {
                setLoginForm({ ...loginForm, email: e.target.value });
              }}
            />
          </View>
          <View>
            <Input
              value={loginForm.password}
              placeholder={"Your Password"}
              type={"email"}
              onChange={(e) => {
                setLoginForm({ ...loginForm, password: e.target.value });
              }}
            />
            <Pressable
              style={{
                flexDirection: "row",
                justifyContent: "flex-end",
                marginTop: -10,
              }}
            >
              <Text style={{ color: "#71819F" }}>Forgot Password?</Text>
            </Pressable>
          </View>
          <View>
            <Button text ='Login'/>
            <Pressable style={{ marginTop: 10 }}  onPress={() => navigation.navigate('signup')}>
              <Text style={{ textAlign: "center", color: "#71819F" }}>
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
    backgroundColor: "#181228",
    flexDirection: "column",
    justifyContent: "space-between",
  },
  backArrow: {
    color: "#fff",
    alignContent: "flex-start",
  },
  combined: {
    justifyContent: "space-evenly",
    alignItems: "center",
    backgroundColor: "blue",
  },
  loginTxt: {
    color: "#fff",
    fontSize: 20,
  },
  login: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#243A63",
    height: 50,
  },
 
  done: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#243A63",
    height: 50,
    borderRadius: 25,
    marginTop: 80,
  },
  doneTxt: {
    color: "#fff",
    fontSize: 16,
  },
});
