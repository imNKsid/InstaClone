import { SafeAreaView, ScrollView, Text } from "react-native";
import React from "react";
import { Styles } from "./style";

const StoryScreen = () => {
  return (
    <SafeAreaView style={Styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Text>Story</Text>
      </ScrollView>
    </SafeAreaView>
  );
};

export default StoryScreen;
