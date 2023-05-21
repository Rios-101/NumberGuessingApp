import { ImageBackground, StyleSheet, View } from "react-native";
import StartGameScreen from "./screens/StartGameScreen";
import { StatusBar } from "expo-status-bar";
import stich from "./assets/img/second.jpg";
import stich2 from "./assets/img/first.jpg";
import { useState } from "react";
import GameScreen from "./screens/GameScreen";

export default function App() {
  const [pickedNumber, setPickedNumber] = useState();

  let screen = (
    <ImageBackground source={stich} style={styles.body} resizeMode="cover">
      <StatusBar style="light" />
      <StartGameScreen setPickedNumber={setPickedNumber} />
    </ImageBackground>
  );

  if (pickedNumber) {
    screen = (
      <ImageBackground source={stich2} style={styles.body} resizeMode="cover">
        <StatusBar style="light" />
        <GameScreen />
      </ImageBackground>
    );
  }

  return <View style={styles.body}>{screen}</View>;
}

const styles = StyleSheet.create({
  body: {
    flex: 1,
  },
});
