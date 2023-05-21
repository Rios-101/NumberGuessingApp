import { Text, TextInput, View, StyleSheet, Alert } from "react-native";
import PrimaryButton from "../components/PrimaryButton";
import { useState } from "react";
import Title from "../components/Title";

const StartGameScreen = ({ setPickedNumber }) => {
  const [numberInput, setNumberInput] = useState("");

  const numberInputHandler = (value) => {
    setNumberInput(value);
  };

  const resetInputHandler = () => {
    setNumberInput("");
  };

  const confirmInputHandler = () => {
    let confirmNum = +numberInput;

    if (isNaN(confirmNum) || confirmNum <= 0 || confirmNum >= 99) {
      Alert.alert(
        "Invalid number",
        "Number has to a be a number from 1 to 99",
        [{ title: "Close", style: "default", onPress: resetInputHandler }]
      );
      return;
    }

    setPickedNumber(confirmNum);
    setNumberInput("");
  };

  return (
    <View style={styles.defaultContainer}>
      <View style={styles.title}>
        <Title>Guess My Number</Title>
      </View>
      <View style={styles.default}>
        <View style={styles.inputView}>
          <TextInput
            style={styles.input}
            maxLength={2}
            keyboardType="number-pad"
            value={numberInput}
            onChangeText={numberInputHandler}
          />
        </View>
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <PrimaryButton style={styles.button} onPress={confirmInputHandler}>
              Confirm
            </PrimaryButton>
          </View>
          <View style={styles.button}>
            <PrimaryButton style={styles.button} onPress={resetInputHandler}>
              Reset
            </PrimaryButton>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  defaultContainer: {
    flex: 1,
  },
  default: {
    padding: 10,
    marginTop: 30,
    backgroundColor: "#146C94",
    marginHorizontal: 16,
    borderRadius: 20,
    elevation: 5,
  },
  title: {
    marginTop: 50,
  },
  inputView: {
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
  },
  input: {
    padding: 10,
    backgroundColor: "#fff",
    borderRadius: 5,
    fontSize: 30,
    fontWeight: "bold",
    marginVertical: 10,
    textAlign: "center",
    width: 70,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 10,
  },
  button: {
    flex: 1,
    marginHorizontal: 4,
  },
});

export default StartGameScreen;
