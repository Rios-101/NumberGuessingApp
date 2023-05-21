import { Text, View, StyleSheet } from "react-native";

const NumberContainer = ({ children }) => {
  return (
    <View style={styles.default}>
      <Text style={styles.numberText}>{children}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  default: {
    justifyContent: "center",
    alignItems: "center",
  },
  numberText: {
    fontSize: 28,
    fontWeight: "bold",
    color: "white",
    textAlign: "center",
    borderWidth: 2,
    borderColor: "#146C94",
    borderRadius: 10,
    padding: 12,
    marginVertical: 10,
  },
});

export default NumberContainer;
