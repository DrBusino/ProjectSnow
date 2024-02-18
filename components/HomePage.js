import { StyleSheet, Text, View, ImageBackground, Image } from "react-native";
import React from "react";

const gameMenuBackgroundImg = "../assets/images/gameMenuBackground.png";
const economyBackgroundImg = "../assets/images/economyBtnBackground.png";
const politicsBackgroundImg = "../assets/images/politicsBtnBackground.png";
const regionsBackgroundImg = "../assets/images/regionsBtnBackground.png";

export default function HomePage() {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={gameMenuBackgroundImg}
        resizeMode="cover"
        style={styles.gameMenuBackgroundImg}
      >
        <View style={styles.btnContainer}>
          <ImageBackground
            source={regionsBackgroundImg}
            style={styles.btnImageBackgroundRegions}
          >
            <Text>REGIÕES</Text>
          </ImageBackground>
        </View>
        <View style={styles.btnContainer}>
          <ImageBackground
            source={politicsBackgroundImg}
            style={styles.btnImageBackgroundPolitics}
          >
            <Text>POLÍTICA</Text>
          </ImageBackground>
        </View>
        <View style={styles.btnContainer}>
          <ImageBackground
            source={economyBackgroundImg}
            style={styles.btnImageBackgroundEconomy}
          >
            <Text>ECONOMIA</Text>
          </ImageBackground>
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(208, 192, 106, 1)",
  },
  gameMenuBackgroundImg: {
    flex: 1,
    justifyContent: "center",
  },

  btnContainer: {
    flex: 1,
    justifyContent: "center",
  },
  btnImageBackgroundEconomy: {
    flex: 1,
    width: null,
    height: null,
    resizeMode: "contain",
    margin: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  btnImageBackgroundPolitics: {
    flex: 1,
    width: null,
    height: null,
    resizeMode: "contain",
    justifyContent: "center",
    alignItems: "center",
  },
  btnImageBackgroundRegions: {
    flex: 1,
    width: null,
    height: null,
    resizeMode: "contain",
    justifyContent: "center",
    alignItems: "center",
    margin: 20,
  },
});
