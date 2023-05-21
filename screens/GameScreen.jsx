import { Text, View, StyleSheet, Alert } from "react-native";
import Title from "../components/Title";
import { useEffect, useState } from "react";
import NumberContainer from "../components/NumberContainer";
import PrimaryButton from "../components/PrimaryButton";

const generateRandomBetween = (min, max, exclude) => {
  const rndNum = Math.floor(Math.random() * (max - min)) + min;

  if (rndNum === exclude) {
    return generateRandomBetween(min, max, exclude);
  } else {
    return rndNum;
  }
};

let minGuess = 1;
let maxGuess = 100;

const GameScreen = ({ pickedNumber, setGameOver }) => {
  console.log(pickedNumber);

  let initialGuess = generateRandomBetween(minGuess, maxGuess);
  const [currentGuess, setCurrentGuess] = useState(initialGuess);

  useEffect(() => {
    if (currentGuess === pickedNumber) {
      setGameOver(true);
    }
  }, [currentGuess]);

  const nextGuessHandler = (direction) => {
    if (
      (direction === "lower" && currentGuess < pickedNumber) ||
      (direction === "higher" && currentGuess > pickedNumber)
    ) {
      Alert.alert("Don't Cheat", "You know that this is wrong", [
        { title: "close", style: "default" },
      ]);
      return;
    }

    if (direction === "lower") {
      maxGuess = currentGuess - 1;
    } else {
      minGuess = currentGuess + 1;
    }

    console.log(minGuess, maxGuess);

    const newGuessNumber = generateRandomBetween(
      minGuess,
      maxGuess,
      currentGuess
    );
    setCurrentGuess(newGuessNumber);
  };

  return (
    <View style={styles.default}>
      <Title>Opponent's Guess</Title>
      <NumberContainer>{currentGuess}</NumberContainer>
      <View>
        <Text style={styles.white}>Higher or Lower</Text>
        <View style={styles.buttonContainer}>
          <PrimaryButton onPress={() => nextGuessHandler("higher")}>
            +
          </PrimaryButton>
          <PrimaryButton onPress={() => nextGuessHandler("lower")}>
            -
          </PrimaryButton>
        </View>
      </View>
      <View>
        <Text style={styles.white}>Log Rounds</Text>
      </View>
    </View>
  );
};

export default GameScreen;

const styles = StyleSheet.create({
  default: {
    flex: 1,
    padding: 17,
  },
  white: {
    color: "white",
  },
  buttonContainer: {
    flexDirection: "column",
  },
});
