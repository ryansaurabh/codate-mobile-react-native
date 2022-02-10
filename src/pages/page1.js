import React from 'react';
import { StyleSheet, Text, View, Dimensions, SafeAreaView, Pressable } from "react-native";

export default function Page1({navigation}) {
  const windowWidth = Dimensions.get("window").width;
  const windowHeight = Dimensions.get("window").height;
  return (
    <SafeAreaView style={styles.container}>
      <View
        style={{
          height: windowHeight * 0.3,
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <View>
          <Text
            style={{
              color: "#fff",
              fontWeight: "normal",
              fontSize: 35,
              textAlign: "center",
            }}
          >
            Codate
          </Text>
        </View>
        <View>
          <Text
            style={{
              color: "#fff",
              fontWeight: "bold",
              fontSize: 40,
              textAlign: "center",
              paddingHorizontal: "10%",
            }}
          >
            Find and meet new people
          </Text>
        </View>
      </View>

      <View
        style={{
          height: windowHeight * 0.3,
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <View style={{ flexDirection: "row", justifyContent: "center" }}>
          <Pressable  onPress={() => navigation.navigate('signin')}
            style={{
              backgroundColor: "#243A63",
              width: windowWidth * 0.7,
              height: windowHeight * 0.065,
              borderRadius: 20,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            
            <Text style={{ textAlign: "center", color: "#fff", fontSize: 20 }}>
              Subscribe with Us
            </Text>
          </Pressable >
        </View>
        <View>
          <Text
            style={{
              color: "#fff",
              fontSize: 12,
              textAlign: "center",
              paddingHorizontal: 50,
              paddingBottom: 15,
            }}
          >
            By signing in, you agree to Terms of Service and Privacy policy
          </Text>
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
    justifyContent: "space-between",
    alignItems: "center",
  },
});
