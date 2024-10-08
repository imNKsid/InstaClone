import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import { StoryScreen } from "../screens";

const Stack = createStackNavigator();

const WithoutBottomStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="StoryScreen"
      screenOptions={() => ({
        headerShown: false,
        gestureEnabled: false,
      })}
    >
      <Stack.Screen name="StoryScreen" component={StoryScreen} />
    </Stack.Navigator>
  );
};

export default WithoutBottomStack;
