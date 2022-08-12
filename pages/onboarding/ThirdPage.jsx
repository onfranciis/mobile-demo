import { ScrollView, StyleSheet, Text, View, Dimensions } from "react-native";
import React, { useState } from "react";

import TopNavigation from "./TopNavigation";
import { Colors } from "../../Config";
import ButtonEmoji from "./ButtonEmoji";
import Laugh from "../../assets/Images/Laugh.png";
import Dog from "../../assets/Images/Dog.png";
import MindBlowing from "../../assets/Images/MindBlowing.png";
import Brain from "../../assets/Images/Brain.png";
import BasketBall from "../../assets/Images/BasketBall.png";
import HourGlass from "../../assets/Images/HourGlass.png";
import ButtonSections from "./ButtonSections2";

const ThirdPage = ({ navigation }) => {
  const [selected, setSelected] = useState("");

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <TopNavigation Info={true} navigation={navigation} />

      <View style={styles.text}>
        <Text style={styles.text1}>How do we identify you?</Text>
        <Text style={styles.text2}>
          Choosing this helps us curate better contents for you{" "}
        </Text>
      </View>

      <ScrollView
        contentContainerStyle={styles.options}
        showsVerticalScrollIndicator={false}
      >
        <ButtonEmoji
          Image={Laugh}
          Text="Funny"
          Selected={selected}
          setSelected={(data) => setSelected(data)}
        />

        <ButtonEmoji
          Image={Dog}
          Text="Animals"
          Selected={selected}
          setSelected={(data) => setSelected(data)}
        />

        <ButtonEmoji
          Image={MindBlowing}
          Text="Mindblowing"
          Selected={selected}
          setSelected={(data) => setSelected(data)}
        />

        <ButtonEmoji
          Image={Brain}
          Text="Learn"
          Selected={selected}
          setSelected={(data) => setSelected(data)}
        />

        <ButtonEmoji
          Image={BasketBall}
          Text="Sports"
          Selected={selected}
          setSelected={(data) => setSelected(data)}
        />

        <ButtonEmoji
          Image={HourGlass}
          Text="Timekillers"
          Selected={selected}
          setSelected={(data) => setSelected(data)}
        />
      </ScrollView>

      <View style={styles.skip}>
        <ButtonSections
          Text1="Skip for now"
          Text2="Next"
          Text1Function={() => navigation.goBack()}
          Text2Function={() => navigation.navigate("Third")}
        />
      </View>
    </ScrollView>
  );
};

export default ThirdPage;

const styles = StyleSheet.create({
  container: {
    width: Dimensions.get("window").width,
    backgroundColor: "white",
    // height: "100vh",
    flex: 1,
    flexDirection: "column",
    // justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  text: {
    // backgroundColor: "red",
    // width: 250,
    // flexDirection: "row"
    marginVertical: 30,
    marginBottom: 20,
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
    paddingBottom: 200,
    paddingTop: 10,
  },
  skip: {
    width: "100%",
    backgroundColor: Colors.White,
    // alignSelf: "flex-start",
    position: "absolute",
    bottom: 0,
    paddingBottom: 20,
    // left: 0,
  },
});
