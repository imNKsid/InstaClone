import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import BottomTab from "./bottom-tab";
import WithoutBottomStack from "./without-bottom-stack";

const RootStack = createStackNavigator();

const AppNavigator = () => {
  return (
    <RootStack.Navigator
      initialRouteName="Bottom"
      screenOptions={() => ({
        headerShown: false,
        gestureEnabled: false,
      })}
    >
      <RootStack.Screen name="Bottom" component={BottomTab} />
      <RootStack.Screen name="WithoutBottom" component={WithoutBottomStack} />
    </RootStack.Navigator>
  );
};

export default AppNavigator;
