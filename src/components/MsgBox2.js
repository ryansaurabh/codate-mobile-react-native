import { View, StyleSheet, Text, Pressable, Image } from "react-native";
import React from "react";

export default function MsgBox({ title, image, subtitle }) {
  return (
    <View style={styles.container}>
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <View>
          <Image style={styles.img} source={image} />
        </View>
        <View style={{ marginLeft: 20 }}>
          <Text style={{fontWeight:'500', fontSize:14}}> {title} </Text>
          <Text style={{fontSize:13, color:"#555"}}>{subtitle}</Text>
        </View>
      </View>
      <View>
        <Text style={{fontSize:12, colot:'#555'}}>3:30pm</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    height: 80,
    backgroundColor: "#FFFFCC",
    borderBottomWidth: 0.2,
    borderBottomColor: "#181228",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 10,
  },

  img: {
    height: 50,
    width: 50,
    resizeMode: "cover",
    borderRadius: 25,
  },
});

