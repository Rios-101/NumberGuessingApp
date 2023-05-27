import { StyleSheet, Text, View } from "react-native";
import Title from "../components/Title.jsx";
import PrimaryButton from "../components/PrimaryButton.jsx";
import Cards from "../components/Cards.jsx";

const GameOverScreen = ({
  setGameOver,
  setPickedNumber,
  pickedNumber,
  numOfRounds,
}) => {
  const restart = () => {
    setGameOver(false);
    setPickedNumber(null);
  };

  return (
    <View>
      <View style={styles.gameOverView}>
        <Title>Game Over</Title>
        <Cards>
          <View style={styles.textView}>
            <Text style={styles.text}>
              Your Phone Needed <Text style={styles.bold}>{numOfRounds}</Text>{" "}
              Rounds To Guess The Number{" "}
              <Text style={styles.bold}>{pickedNumber}</Text>
            </Text>
          </View>
        </Cards>
        <View style={styles.btnContainer}>
          <View style={styles.btn}>
            <PrimaryButton onPress={restart}>Start New Game</PrimaryButton>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  gameOverView: {
    paddingVertical: 40,
  },
  textView: {
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    width: "60%",
    textAlign: "center",
    fontSize: 15,
    color: "white",
  },
  bold: {
    fontWeight: "bold",
    color: "#19A7CE",
    fontSize: 20,
  },
  btnContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 13,
  },
  btn: {
    width: "40%",
  },
});

export default GameOverScreen;
