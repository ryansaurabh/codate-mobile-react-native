import React from 'react';
import { StyleSheet, TextInput } from "react-native";

export default function Input({ value, type, error, placeholder, onChang }) {
  return (
    <>
      <TextInput
        value={value}
        onChangeText={(e)=>{onChang(e)}}
        style={{borderBottomColor:error?'red':'#fff',
        alignSelf: "stretch",
        justifyContent: "center",
        color: "#fff",
        borderBottomWidth: 1,
        marginBottom: 44,
        padding: 4,
        fontSize: 14,
      }}
        placeholder={placeholder}
        type={type}
        placeholderTextColor={"#666"}

      />
    </>
  );
}

const styles = StyleSheet.create({
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
  textInput: {
    
  },
});
