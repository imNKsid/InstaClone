import { View, StyleSheet, Image } from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { COLORS, IMAGES } from "../assets";
import HomeStack from "./home-stack";
import { AddPost, Favourite, Search, User } from "../screens";

const Tab = createBottomTabNavigator();

const BottomTab = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: styles.tabBar,
        tabBarInactiveBackgroundColor: COLORS.white,
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeStack}
        options={tabOptions(IMAGES.homeSelected, IMAGES.homeUnselected)}
      />
      <Tab.Screen
        name="Search"
        component={Search}
        options={tabOptions(IMAGES.searchSelected, IMAGES.searchUnselected)}
      />
      <Tab.Screen
        name="Add"
        component={AddPost}
        options={tabOptions(IMAGES.addSelected, IMAGES.addUnselected)}
      />
      <Tab.Screen
        name="Favourite"
        component={Favourite}
        options={tabOptions(IMAGES.heartSelected, IMAGES.heartUnselected)}
      />
      <Tab.Screen
        name="User"
        component={User}
        options={tabOptions(IMAGES.userSelected, IMAGES.userUnselected)}
      />
    </Tab.Navigator>
  );
};

export default BottomTab;

const tabOptions = (iconActive: any, iconInactive: any) => ({
  tabBarLabel: () => <View />,
  tabBarIcon: ({ focused }: { focused: boolean }) => (
    <>
      {focused ? (
        <Image source={iconActive} style={styles.icon} />
      ) : (
        <Image source={iconInactive} style={styles.icon} />
      )}
    </>
  ),
});

const styles = StyleSheet.create({
  tabBar: {
    // height: 60,
    position: "absolute",
    bottom: 5,
    backgroundColor: COLORS.white,
  },
  icon: {
    height: 25,
    width: 25,
  },
});
