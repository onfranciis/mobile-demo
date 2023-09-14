import { StyleSheet, Text, View } from "react-native";
import React, { useLayoutEffect } from "react";
// import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import Feather from "react-native-vector-icons/Feather";

import Splash from "../pages/onboarding/Splash";
import Home from "../pages/home/Home";
import { Colors } from "../Config";
import Contests from "../pages/contests/Contests";
import NewContest from "../pages/contests/NewContest";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import NewContest2 from "../pages/contests/NewContest2";
import Ratings from "../pages/ratings/Ratings";
import Messages from "../pages/messages/Messages";
import ContestCover from "../pages/contests/ContestCover";
import MessagesChat from "../pages/messages/MessagesChat";
import Profile from "../pages/home/Profile";

const Tab = createMaterialBottomTabNavigator();
const HomeStack = createNativeStackNavigator();
const NewContestStack = createNativeStackNavigator();
const ContestStack = createNativeStackNavigator();
const MessageStack = createNativeStackNavigator();

const HomeStackScreen = () => {
  return (
    <HomeStack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <HomeStack.Screen name="HomePage" component={Home} />
    </HomeStack.Navigator>
  );
};

const ContestStackScreen = ({ navigation }) => {
  return (
    <ContestStack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName="ContestList"
    >
      <ContestStack.Screen name="ContestList" component={Contests} />
      {/* <ContestStack.Screen
        name="ContestCover"
        component={ContestCover}
        options={{ animation: "slide_from_right" }}
      /> */}
    </ContestStack.Navigator>
  );
};

const NewContestStackScreen = () => {
  return (
    <NewContestStack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <NewContestStack.Screen name="NewContest1" component={NewContest} />
      <NewContestStack.Screen
        name="NewContest2"
        component={NewContest2}
        options={{ animation: "slide_from_right" }}
      />
    </NewContestStack.Navigator>
  );
};

const MessageStackScreen = ({ navigation }) => {
  return (
    <MessageStack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <MessageStack.Screen name="MessagesList" component={Messages} />
      {/* <MessageStack.Screen
        name="MessagesChat"
        component={MessagesChat}
        options={{ animation: "slide_from_right" }}
      /> */}
    </MessageStack.Navigator>
  );
};

const BottomTab = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: styles.container,
      }}
      labeled={true}
      barStyle={styles.barStyle}
      activeColor={Colors.Primary}
      inactiveColor="#09121F"
      backBehavior="history"
      shifting={false}
      children
    >
      <Tab.Screen
        name="Home"
        component={HomeStackScreen}
        options={{
          tabBarLabel: "Home",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Contest"
        component={ContestStackScreen}
        options={{
          tabBarLabel: "Contest",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons
              name="sword-cross"
              color={color}
              size={26}
            />
          ),
        }}
      />
      <Tab.Screen
        name="New"
        component={NewContestStackScreen}
        options={{
          tabBarLabel: null,
          tabBarIcon: ({ color }) => (
            <MaterialIcons
              name="add-circle"
              color={Colors.Primary}
              size={50}
              style={{ height: 50, width: 50, marginTop: -10 }}
            />
          ),

          // tabBarColor: Colors.Primary,
        }}
      />
      <Tab.Screen
        name="Ratings"
        component={Ratings}
        options={{
          tabBarLabel: "Ratings",
          tabBarIcon: ({ color }) => (
            <Feather name="bar-chart" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Messages"
        component={MessageStackScreen}
        options={{
          tabBarLabel: "Messages",
          tabBarBadge: "20+",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="email" color={color} size={26} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTab;

const styles = StyleSheet.create({
  container: {},
  barStyle: {
    backgroundColor: "white",
    paddingVertical: 5,
    height: 60,
    shadowColor: "transparent",
  },
});
