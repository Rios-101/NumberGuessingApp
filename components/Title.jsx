import { StyleSheet, Text, View } from "react-native";

const Title = ({ children }) => {
  return (
    <View style={styles.default}>
      <Text style={styles.title}>{children}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "white",
    textAlign: "center",
    borderWidth: 2,
    borderBottomColor: "#146C94",
    padding: 7,
    marginVertical: 10,
  },
  default: {
    justifyContent: "center",
    alignItems: "center",
  },
});

export default Title;
