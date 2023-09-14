import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  Dimensions,
  TextInput,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
  Alert,
  BackHandler,
  FlatList,
  SafeAreaView,
} from "react-native";
import React, { useEffect, useState } from "react";
import PostComponent from "../../components/PostComponent";
import HomeNavBar from "../../components/HomeNavBar";

const Home = (props) => {
  const [text, setText] = React.useState("");
  const hasUnsavedChanges = Boolean("");
  const [wait, setWait] = useState(true);
  const navigation = props.navigation;

  useEffect(
    () =>
      navigation.addListener("beforeRemove", (e) => {
        e.preventDefault();

        Alert.alert("You are leaving GoViral?", "", [
          { text: "No", style: "cancel", onPress: () => {} },
          {
            text: "Yes",
            style: "destructive",
            onPress: () => BackHandler.exitApp(),
          },
        ]);
      }),
    [navigation, hasUnsavedChanges]
  );

  const DATA = [
    {
      id: "1",
      link: require("../../assets/Images/unsplash.png"),
      details: {
        Pic: require("../../assets/Images/portrait/PortraitSquare1.jpg"),
        Name: "John Doe",
        Status: false,
        Like: 500,
        Comment: 94700,
        Save: 52400,
        Caption:
          "This is what love is like, i am so stuck of what to say here not to worry just kidding",
      },
    },
    { id: "2", link: require("../../assets/Images/BackgroundImage1.jpg") },
    { id: "3", link: require("../../assets/Images/BackgroundImage2.jpg") },
  ];

  const renderItem = ({ item }) => (
    <PostComponent
      ImageBg={item.link}
      Details={item.details}
      setWait={(data) => setWait(data)}
    />
  );

  return (
    <View style={styles.container}>
      <HomeNavBar navigation={navigation} />
      <View style={styles.scrollview}>
        <FlatList
          data={DATA}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          horizontal={false}
          snapToAlignment={"start"}
          decelerationRate={"fast"}
          pagingEnabled
          scrollEnabled={wait ? false : true}
        />
        {/* <PostComponent /> */}
      </View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    // flex: 1,
    backgroundColor: "#4663b9",
    // borderWidth: 5,
    // borderColor: "red",
    // borderStyle: "solid",
    flex: 1,
    display: "flex",
    flexDirection: "column",
    // alignItems: "center",
    // justifyContent: "center",
    position: "relative",
  },
  view: {
    width: "100%",
    height: "100%",
    // flex: 1,
    backgroundColor: "green",
  },
  scrollview: {
    // width: "100%",
    // height: 500,
    flex: 1,
    // flexDirection: "column",
    // paddingTop: 100,
  },
});
