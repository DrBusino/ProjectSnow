import React from "react";
import { StyleSheet, View, Button, Text } from "react-native";
import { useFonts } from "expo-font";


export default function MainMenu({ navigation }) {
  return (
    <View style={styles.backgroundContainer}>
      <View style={styles.innerContainer}>
        <Text style={styles.titleStyles}>PROJECT SNOW</Text>

        <Button
          title="Novo Jogo"
          color="rgba(208, 192, 106, 1)"
          onPress={() => navigation.navigate("HomePage")}
        />
        <Button title="Carregar Jogo" disabled color="rgba(208, 192, 106, 1)" />
        <Button title="Opções" color="rgba(208, 192, 106, 1)" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  backgroundContainer: {
    flex: 1,
    backgroundColor: "rgba(208, 192, 106, 1)",
    alignItems: "center",
    justifyContent: "center",
  },
  innerContainer: {
    flex: 1,
    backgroundColor: "rgba(139, 137, 105, 1)",
    margin: 50,
    width: "90%",
    padding: 30,
    justifyContent: "center",
    gap: 50,
  },
  titleStyles: {
    textAlign: "center",
    marginBottom: 50,
  },
});
