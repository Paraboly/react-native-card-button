import React, { Component } from "react";
import FastImage from "react-native-fast-image";
import { StyleSheet, View } from "react-native";
import CardButton from "./lib/src/components/CardButton";
import LinearGradient from "react-native-linear-gradient";

export default class App extends Component {
  render() {
    return (
      <LinearGradient colors={["#fbfbfb", "#edf4ff"]} style={styles.container}>
        <View style={styles.containerGlue}>
          <View>
            <FastImage
              resizeMode="contain"
              source={require("./assets/parabol_logo.png")}
              style={styles.logoStyle}
            />
          </View>
          <View style={styles.buttonContainer}>
            <View style={styles.rowStyle}>
              <CardButton
                text="Air"
                iconSize={34}
                iconName="air"
                iconColor="white"
                textColor="white"
                iconType="Entypo"
                rippleColor="white"
                end={{ x: 1, y: 1 }}
                start={{ x: 0, y: 0 }}
                gradientColors={["#BA5370", "#F4E2D8"]}
              />
              <CardButton
                text="Lights"
                iconColor="white"
                textColor="white"
                iconType="Entypo"
                rippleColor="white"
                iconName="light-up"
                end={{ x: 1, y: 0 }}
                start={{ x: 0, y: 1 }}
                gradientColors={["#a8c0ff", "#3f2b96"]}
              />
            </View>
            <View style={styles.rowStyle}>
              <CardButton
                text="Locks"
                iconSize={48}
                iconColor="white"
                textColor="white"
                rippleColor="white"
                iconName="lock-smart"
                end={{ x: 0, y: 1 }}
                start={{ x: 1, y: 0 }}
                iconType="MaterialCommunityIcons"
                gradientColors={["#C6426E", "#642B73"]}
              />
              <CardButton
                text="Cloud"
                iconName="cloud"
                iconColor="white"
                textColor="white"
                iconType="Feather"
                rippleColor="white"
                end={{ x: 1, y: 1 }}
                start={{ x: 0, y: 0 }}
                gradientColors={["#c94b4b", "#4b134f"]}
              />
            </View>
          </View>
        </View>
      </LinearGradient>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  },
  containerGlue: {
    flex: 1,
    marginTop: "35%",
    flexDirection: "column"
  },
  buttonContainer: {
    height: 350,
    flexDirection: "column",
    justifyContent: "space-evenly"
  },
  logoStyle: {
    height: 150,
    width: 350
  },
  rowStyle: {
    width: 350,
    alignSelf: "center",
    flexDirection: "row",
    alignContent: "center",
    justifyContent: "space-around"
  }
});
