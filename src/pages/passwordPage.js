import React from "react";
import { View, StyleSheet, TextInput, SafeAreaView } from "react-native";
import Input from "../components/input";
import { useState } from "react";
import Button from "../components/button";

export default function PasswordPage({navigation}) {
  const [forgotForm, setForgotForm] = useState({ email: "" });
  const [formError, setFormError]= useState(false);

  const ValidateForm=()=>{
    if(forgotForm.email===""){
      setFormError(true);
      return false;

    }

  }
  return (
    <SafeAreaView style={styles.container}>
      <View style={{ paddingHorizontal: 40 }}>
        <View>
          <Input
            value={forgotForm.email}
            error={formError}
            placeholder={"Your Email"}
            type={"email"}
            onChange={(e) => {
              setForgotForm({ email: e.target.value });
              setFormError(false)
            }}
          />
        </View>
        <View>
          <Button text="Get OTP" handleClick={()=>{
            if (ValidateForm()){
              navigation.navigate("otp")
            }

          }} />
        </View>
      </View>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#181228",
    flexDirection: "column",
    justifyContent: "space-evenly",
  },
});
