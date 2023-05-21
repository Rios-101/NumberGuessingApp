import { ImageBackground, StyleSheet, View, SafeAreaView } from "react-native";
import StartGameScreen from "./screens/StartGameScreen";
import { StatusBar } from "expo-status-bar";
import stich from "./assets/img/second.jpg";
import stich2 from "./assets/img/first.jpg";
import stich3 from "./assets/img/third.jpg";
import { useState } from "react";
import GameScreen from "./screens/GameScreen";
import GameOverScreen from "./screens/GameOverScreen";

export default function App() {
  const [pickedNumber, setPickedNumber] = useState();
  const [gameOver, setGameOver] = useState(false);

  let screen = (
    <ImageBackground source={stich} style={styles.body} resizeMode="cover">
      <StatusBar style="light" />
      <SafeAreaView style={styles.body}>
        <StartGameScreen setPickedNumber={setPickedNumber} />
      </SafeAreaView>
    </ImageBackground>
  );

  if (pickedNumber) {
    screen = (
      <ImageBackground source={stich2} style={styles.body} resizeMode="cover">
        <StatusBar style="light" />
        <SafeAreaView style={styles.body}>
          <GameScreen pickedNumber={pickedNumber} setGameOver={setGameOver} />
        </SafeAreaView>
      </ImageBackground>
    );
  }

  if (gameOver) {
    screen = (
      <ImageBackground source={stich3} style={styles.body} resizeMode="cover">
        <StatusBar style="light" />
        <SafeAreaView style={styles.body}>
          <GameOverScreen />
        </SafeAreaView>
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
