import { StyleSheet, View } from "react-native";

const Cards = ({ children }) => {
  return <View style={styles.default}>{children}</View>;
};

const styles = StyleSheet.create({
  default: {
    padding: 10,
    marginTop: 30,
    backgroundColor: "#146C94",
    marginHorizontal: 16,
    borderRadius: 20,
    elevation: 5,
  },
});

export default Cards;
