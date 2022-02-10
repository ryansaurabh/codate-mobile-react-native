import React from 'react';
import { StyleSheet, TextInput } from "react-native";

export default function Input({ value, type, placeholder, onChange }) {
  return (
    <>
      <TextInput
        value={value}
        onChange={(e) => {
          onChange(e);
        }}
        style={styles.textInput}
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
    alignSelf: "stretch",
    justifyContent: "center",
    color: "#fff",
    borderBottomColor: "#fff",
    borderBottomWidth: 1,
    marginBottom: 44,
    padding: 4,
    fontSize: 14,
  },
});
