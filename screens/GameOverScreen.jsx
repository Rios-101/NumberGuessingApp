import { StyleSheet, Text, View } from "react-native";
import Title from "../components/Title";

const GameOverScreen = () => {
  return (
    <View>
      <View style={styles.gameOverView}>
        <Title>Game Over</Title>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  gameOverView: {
    paddingVertical: 40,
  },
});

export default GameOverScreen;
