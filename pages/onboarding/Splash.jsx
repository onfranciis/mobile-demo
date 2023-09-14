import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Colors } from "../../Config";

const Splash = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text} onPress={() => navigation.navigate("First")}>
        Go Viral!
      </Text>
    </View>
  );
};

export default Splash;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 50,
    fontStyle: "italic",
    color: Colors.Primary,
    fontWeight: "bold",
  },
});
