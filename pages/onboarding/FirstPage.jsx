import { ScrollView, StatusBar, StyleSheet, Text, View } from "react-native";
import React from "react";
import TopNavigation from "./TopNavigation";
import ButtonSections from "./ButtonSections1";
import { Colors } from "../../Config";

const FirstPage = ({ navigation }) => {
  return (
    <ScrollView style={styles.container}>
      <TopNavigation Info={true} navigation={navigation} />

      <View style={styles.text}>
        <Text>
          <Text style={styles.text1}>
            The fastest social media platform to help you
          </Text>
          <Text style={styles.text2}> Go viral!</Text>
        </Text>
      </View>

      <ButtonSections
        CreateAccount={() => navigation.navigate("SignUpFirst")}
      />

      <View>
        <Text style={styles.tos}>
          <Text style={styles.light}>By signing up, you agree to our</Text>
          <Text style={styles.dark}> Terms, Privacy Policy </Text>
          <Text style={styles.light}>and</Text>
          <Text style={styles.dark}> Data collection policy </Text>
        </Text>
      </View>

      <View>
        <Text
          style={styles.login}
          onPress={() => navigation.navigate("Second")}
        >
          <Text style={styles.light}>Have an account already?</Text>
          <Text style={styles.dark}> Log in </Text>
        </Text>
      </View>
    </ScrollView>
  );
};

export default FirstPage;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    paddingHorizontal: 20,
    flex: 1,
    paddingTop: StatusBar.currentHeight,
  },
  text: {
    // backgroundColor: "red",
    width: 250,
    flexDirection: "row",
    marginVertical: 50,
  },
  text1: {
    fontSize: 32,
    lineHeight: 48,
  },
  text2: {
    fontSize: 32,
    fontWeight: "bold",
    color: Colors.Primary,
  },
  tos: {},
  light: {
    color: "#4E505A",
    fontSize: 15,
    lineHeight: 22,
  },
  dark: {
    color: "black",
    fontWeight: "bold",
    fontSize: 15,
    lineHeight: 22,
  },
  login: {
    marginVertical: 40,
    textAlign: "center",
  },
});
