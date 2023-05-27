import { Pressable, Text, View, StyleSheet } from "react-native";

const PrimaryButton = ({ children, onPress }) => {
  return (
    <View style={styles.buttonOuterContainer}>
      <Pressable
        onPress={() => onPress()}
        android_ripple={{ color: "#19A7CE" }}
        style={styles.buttonInnerContainer}
      >
        <Text style={styles.buttonText}>{children}</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonOuterContainer: {
    borderRadius: 28,
    marginVertical: 7,
    overflow: "hidden",
  },
  buttonInnerContainer: {
    backgroundColor: "#F6F1F1",
    paddingHorizontal: 16,
    paddingVertical: 8,
    elevation: 4,
  },
  buttonText: {
    textAlign: "center",
  },
});

export default PrimaryButton;
