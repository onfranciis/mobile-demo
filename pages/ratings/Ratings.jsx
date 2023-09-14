import {
  FlatList,
  StatusBar,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import React, { useState } from "react";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import RatingViewPost from "./RatingViewPost";
import RatingsTab from "./RatingsTab";
import RatingFollowPost from "./RatingFollowPost";
// import ContestPost from "./ContestPost";

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

const Ratings = () => {
  const [tab, setTab] = useState(false);

  const renderItem = ({ item }) =>
    tab ? (
      <RatingFollowPost Number={item.id} />
    ) : (
      <RatingViewPost Number={item.id} />
    );

  return (
    <View style={styles.container}>
      <View style={styles.heading}>
        <View style={styles.title}>
          <Text style={styles.trending}>Ratings</Text>
          <Text style={styles.happening}>
            Stats for Go Viral are updated every seconds
          </Text>
        </View>

        {/* <TouchableWithoutFeedback>
          <View style={styles.searchParent}>
            <MaterialIcons name="" color="white" size={36} />
          </View>
        </TouchableWithoutFeedback> */}
      </View>
      <RatingsTab tab={tab} setTab={(data) => setTab(data)} />
      <View style={styles.body}>
        <FlatList
          data={DATA}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          horizontal={false}
          decelerationRate={"fast"}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </View>
  );
};

export default Ratings;

const styles = StyleSheet.create({
  container: {
    height: "100%",
    width: "100%",
    backgroundColor: "white",
    display: "flex",
    flexDirection: "column",
  },
  heading: {
    height: 180,
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
    fontWeight: "600",
    fontSize: 14,
    marginTop: 8,
  },
  searchParent: {},
  body: {
    flex: 1,
    paddingHorizontal: 15,
    paddingTop: 0,
  },
  bodyText: {},
});
