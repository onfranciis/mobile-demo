import {
  Image,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import React from "react";

import { Colors } from "../../Config";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

const TopNavigation = (props) => {
  return (
    <View style={styles.container}>
      <TouchableWithoutFeedback
        style={styles.backParent}
        onPress={() => props.navigation.goBack()}
      >
        <MaterialIcons name="arrow-back-ios" color={Colors.Black} size={24} />
      </TouchableWithoutFeedback>

      <View style={styles.infoParent}>
        {props.Info ? (
          <MaterialIcons name="info-outline" color={Colors.Black} size={24} />
        ) : (
          <Text style={styles.skip}>Skip</Text>
        )}
      </View>
    </View>
  );
};

export default TopNavigation;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    // paddingVertical: 15,
  },
  backParent: {
    paddingVertical: 10,
  },
  back: {
    height: 25,
    width: 25,
  },
  infoParent: {},
  info: {
    height: 25,
    width: 25,
  },
  skip: {
    color: Colors.Primary,
    fontSize: 16,
    fontWeight: "bold",
  },
});
