import {
  Image,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import React from "react";

import { Colors } from "../../Config";
import Back from "../../assets/Images/BackArrow.png";
import Info from "../../assets/Images/InfoIcon.png";

const TopNavigation = (props) => {
  return (
    <View style={styles.container}>
      <TouchableWithoutFeedback
        style={styles.backParent}
        onPress={() => props.navigation.goBack()}
      >
        <Image style={styles.back} source={Back} />
      </TouchableWithoutFeedback>

      <View style={styles.infoParent}>
        {props.Info ? (
          <Image style={styles.info} source={Info} />
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
    // backgroundColor: "red",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    // paddingHorizontal: 20,
    paddingVertical: 15,
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
