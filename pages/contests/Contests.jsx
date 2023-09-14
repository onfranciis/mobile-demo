import {
  FlatList,
  StatusBar,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import React from "react";
import Feather from "react-native-vector-icons/Feather";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import ContestPost from "./ContestPost";

const DATA = [
  {
    id: "1",
    link: require("../../assets/Images/unsplash.png"),
  },
  { id: "2", link: require("../../assets/Images/BackgroundImage1.jpg") },
  { id: "3", link: require("../../assets/Images/BackgroundImage2.jpg") },
  { id: "4", link: require("../../assets/Images/BackgroundImage2.jpg") },
  { id: "5", link: require("../../assets/Images/BackgroundImage2.jpg") },
  { id: "6", link: require("../../assets/Images/BackgroundImage2.jpg") },
  { id: "7", link: require("../../assets/Images/BackgroundImage2.jpg") },
  { id: "8", link: require("../../assets/Images/BackgroundImage2.jpg") },
  { id: "9", link: require("../../assets/Images/BackgroundImage2.jpg") },
];

const Contests = ({ navigation }) => {
  const renderItem = ({ item }) => <ContestPost navigation={navigation} />;

  return (
    <View style={styles.container}>
      <View style={styles.heading}>
        <View style={styles.title}>
          <Text style={styles.trending}>Trending Contests</Text>
          <Text style={styles.happening}>Happening now</Text>
        </View>

        <TouchableWithoutFeedback>
          <View style={styles.searchParent}>
            <Feather name="search" color="white" size={36} />
          </View>
        </TouchableWithoutFeedback>
      </View>
      <View style={styles.body}>
        <FlatList
          data={DATA}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          horizontal={false}
          //   snapToAlignment={"start"}
          decelerationRate={"fast"}
          //   pagingEnabled
          showsVerticalScrollIndicator={false}
        />
      </View>
    </View>
  );
};

export default Contests;

const styles = StyleSheet.create({
  container: {
    height: "100%",
    width: "100%",
    backgroundColor: "white",
    display: "flex",
    flexDirection: "column",
  },
  heading: {
    height: 200,
    backgroundColor: "#CFD1D8",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingTop: StatusBar.currentHeight,
    paddingHorizontal: 25,
  },
  title: {
    display: "flex",
    flexDirection: "column",
  },
  trending: {
    color: "black",
    fontWeight: "700",
    fontSize: 24,
  },
  happening: {
    color: "#4e505a",
    fontWeight: "400",
    fontSize: 18,
    marginTop: 8,
  },
  searchParent: {},
  body: {
    paddingHorizontal: 15,
    paddingTop: 0,
    paddingBottom: 200,
  },
  bodyText: {},
});
