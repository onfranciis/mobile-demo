import { StyleSheet, Text, TouchableWithoutFeedback, View } from "react-native";
import React, { useState } from "react";
import { Colors } from "../../Config";

const SponsorContestButton = () => {
  const [click, setClick] = useState(false);

  return (
    <TouchableWithoutFeedback onPress={() => setClick(!click)}>
      <View
        style={[
          styles.container,
          { backgroundColor: click ? Colors.Primary : "transparent" },
        ]}
      >
        <Text style={[styles.text, { color: click ? "white" : "#191A1F" }]}>
          {click ? "Sponsored" : "Sponsor Contest"}
        </Text>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default SponsorContestButton;

const styles = StyleSheet.create({
  container: {
    width: 164,
    borderColor: "#7e8191",
    borderWidth: 1,
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    borderRadius: 8,
    paddingVertical: 12,
  },
  text: {
    color: "#191A1F",
    fontWeight: "600",
    fontSize: 16,
  },
});
