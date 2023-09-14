import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  Dimensions,
  StatusBar,
} from "react-native";
import React, { useState } from "react";

import TopNavigation from "./TopNavigation";
import { Colors } from "../../Config";
import ButtonEmoji from "./ButtonEmoji";
import MaleEmoji from "../../assets/Images/AvatarHeadMale.png";
import FemaleEmoji from "../../assets/Images/AvatarHeadFemale.png";
import ButtonSections from "./ButtonSections2";

const SecondPage = ({ navigation }) => {
  const [selected, setSelected] = useState("");
  const [prompt, setPrompt] = useState(false);

  const handleNext = () => {
    if (selected == "") {
      setPrompt(true);
    } else {
      navigation.navigate("Third");
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <TopNavigation Info={true} navigation={navigation} />

      <View style={styles.text}>
        <Text style={styles.text1}>How do we identify you?</Text>
        <Text style={styles.text2}>
          Choosing this helps us curate better contents for you
        </Text>
      </View>

      <View style={styles.options}>
        <ButtonEmoji
          Image={MaleEmoji}
          Text="Male"
          Selected={selected}
          setSelected={(data) => {
            setSelected(data);
            setPrompt(false);
          }}
        />
        <ButtonEmoji
          Image={FemaleEmoji}
          Text="Female"
          Selected={selected}
          setSelected={(data) => {
            setSelected(data);
            setPrompt(false);
          }}
        />
      </View>

      {prompt ? (
        <View style={styles.prompt}>
          <Text style={styles.promptText}>Please select one</Text>
        </View>
      ) : (
        <Text></Text>
      )}

      <View style={styles.skip}>
        <ButtonSections
          Text1="Skip for now"
          Text2="Next"
          Text1Function={() => navigation.goBack()}
          Text2Function={() => handleNext()}
        />
      </View>
    </ScrollView>
  );
};

export default SecondPage;

const styles = StyleSheet.create({
  container: {
    width: Dimensions.get("window").width,
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingTop: StatusBar.currentHeight,
  },
  text: {
    // backgroundColor: "red",
    // width: 250,
    // flexDirection: "row"
    marginVertical: 50,
  },
  text1: {
    fontSize: 24,
    // lineHeight: 48,
    fontWeight: "700",
    textAlign: "center",
  },
  text2: {
    fontSize: 18,
    fontWeight: "400",
    color: Colors.Gray[600],
    textAlign: "center",
  },
  options: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
  },
  prompt: {
    marginVertical: 10,
  },
  promptText: {
    color: Colors.Primary,
    fontSize: 17,
  },
  skip: {
    width: "100%",
    // backgroundColor: "red",
    // alignSelf: "flex-start",
    position: "absolute",
    bottom: 20,
    // left: 0,
  },
});
