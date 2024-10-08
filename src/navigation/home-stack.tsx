import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import { Home } from "../screens";

const Stack = createStackNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={() => ({
        headerShown: false,
        gestureEnabled: false,
      })}
    >
      <Stack.Screen name="HomeScreen" component={Home} />
      {/* <Stack.Screen name="ProductDetails" component={ProductDetails} />
      <Stack.Screen name="Cart" component={Cart} />
      <Stack.Screen name="BuyNow" component={BuyNow} /> */}
    </Stack.Navigator>
  );
};

export default HomeStack;
