import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  SafeAreaView,
  TouchableOpacity,
  Pressable,
} from "react-native";

export default function Page2({navigation}) {
  const windowWidth = Dimensions.get("window").width;
  const windowHeight = Dimensions.get("window").height;
  return (
    <SafeAreaView style={styles.container}>
      <View style={{ height: windowHeight*0.1 }}>
        <Text style={{ color: "#fff", alignContent: "flex-start" }}>--</Text>
        <Text
          style={{
            alignItems: "flex-end",
            color: "#fff",
            fontSize: 45,
            padding: 60,
          }}
        >
          Your Sex ?
        </Text>
      </View>
      <View style={{ flexDirection: "column", alignItems: "center" }}>
        <View style={{ flexDirection: "row" }}>
          <TouchableOpacity>
            <View
              style={{
                height: 130,
                width: windowWidth * 0.3,
                backgroundColor: "gray",
                justifyContent: "center",
                alignItems: "center",
                margin: 20,
                borderRadius: 7,
                backgroundColor: "#A9A9A9",
              }}
            >
              <View
                style={{
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <Text>Icon</Text>
                <Text style={{ color: "#fff", fontSize: 30 }}>Female</Text>
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View
              style={{
                height: 130,
                width: windowWidth * 0.3,
                backgroundColor: "#A9A9A9",
                justifyContent: "center",
                alignItems: "center",
                margin: 20,
                borderRadius: 7,
              }}
            >
              <View style={{ alignItems: "center" }}>
                <Text>Icon</Text>
                <Text style={{ color: "#fff", fontSize: 20 }}>Male</Text>
              </View>
            </View>
          </TouchableOpacity>
        </View>
        <TouchableOpacity>
          <View
            style={{
              height: 55,
              width: windowWidth * 0.7,
              backgroundColor: "#A9A9A9",
              justifyContent: "center",
              alignItems: "center",
              borderRadius: 7,
            }}
          >
            <Text style={{ color: "#000", fontSize: 20, textAlign: "center" }}>
              Others
            </Text>
          </View>
        </TouchableOpacity>
      </View>
      <TouchableOpacity>
        <Pressable  onPress={() => navigation.navigate('pagethree')}
          style={{
            width: "100%",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "#243A63",
            height: 50,
          }}
        >
          <Text style={{ color: "#fff", fontSize: 20 }}>Next</Text>
        </Pressable>
      </TouchableOpacity>
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
});
