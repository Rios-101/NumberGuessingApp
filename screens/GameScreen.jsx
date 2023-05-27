import { Text, View, StyleSheet, Alert, FlatList } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import Title from "../components/Title.jsx";
import { useEffect, useState } from "react";
import NumberContainer from "../components/NumberContainer.jsx";
import PrimaryButton from "../components/PrimaryButton.jsx";
import Cards from "../components/Cards.jsx";

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
let round = 0;

const GameScreen = ({ pickedNumber, setGameOver, setNumOfRounds }) => {
  let initialGuess = generateRandomBetween(1, 100);
  const [currentGuess, setCurrentGuess] = useState(initialGuess);
  const [numGuessed, setNumGuessed] = useState([initialGuess]);

  useEffect(() => {
    minGuess = 1;
    maxGuess = 100;
    round = 0;
  }, []);

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
    setNumGuessed((prev) => [newGuessNumber, ...prev]);
    setNumOfRounds(numGuessed.length);
  };

  return (
    <View style={styles.default}>
      <Title>Opponent's Guess</Title>
      <NumberContainer>{currentGuess}</NumberContainer>
      <Cards>
        <Text style={styles.white}>Higher or Lower?</Text>
        <View style={styles.buttonContainer}>
          <PrimaryButton onPress={() => nextGuessHandler("higher")}>
            <Ionicons name="md-add" size={24} color="black" />
          </PrimaryButton>
          <PrimaryButton onPress={() => nextGuessHandler("lower")}>
            <Ionicons name="md-remove" size={24} color="black" />
          </PrimaryButton>
        </View>
      </Cards>
      <View style={styles.logView}>
        <Text style={styles.logTitle}>Log Rounds</Text>
        <View style={styles.logContainer}>
          {/* {numGuessed.map((num) => (
            <Text style={styles.logText} key={num}>
              {num}
            </Text>
          ))} */}
          <FlatList
            data={numGuessed}
            renderItem={(data) => (
              <Text style={styles.logText}>{data.item}</Text>
            )}
            keyExtractor={(key) => key}
          />
        </View>
      </View>
    </View>
  );
};

export default GameScreen;

const styles = StyleSheet.create({
  flex: {
    flex: 1,
  },
  default: {
    flex: 1,
    padding: 17,
  },
  white: {
    color: "white",
    paddingVertical: 4,
  },
  buttonContainer: {
    flexDirection: "column",
  },
  logView: {
    flex: 1,
    padding: 26,
  },
  logTitle: {
    color: "white",
    textAlign: "center",
    paddingVertical: 10,
    fontSize: 18,
  },
  logContainer: {
    marginTop: 25,
    padding: 15,
    borderRadius: 20,
    backgroundColor: "rgba(0, 0, 0, 0.3)", // Background color with opacity
    overflow: "hidden",
    marginVertical: 7,
    overflow: "hidden",
  },
  logText: {
    fontSize: 24,
    color: "white",
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderColor: "#146C94",
    borderWidth: 2,
    borderRadius: 20,
    textAlign: "center",
    marginVertical: 4,
  },
});
