import React from 'react';
import { Text, View, Pressable, StyleSheet, TouchableOpacity, } from "react-native";

export default function Button({text, handleClick}) {
  return (
     <TouchableOpacity onPress={()=>{handleClick()}}>
         <View style={styles.done}>
             <Text style={styles.doneTxt}> {text}</Text>

         </View>

     </TouchableOpacity>

  )
};


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

});