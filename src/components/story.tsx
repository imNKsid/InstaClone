import { StyleSheet, Text, View } from "react-native";
import React from "react";
import ProfilePicture from "./profile-picture";
import { StoryProps } from "../utils/interfaces";

const Story = (props: StoryProps) => {
  const { imageUri, name } = props;
  return (
    <View style={styles.storyStyle}>
      <ProfilePicture uri={imageUri} />
      <Text style={styles.userName}>{name}</Text>
    </View>
  );
};

export default Story;

const styles = StyleSheet.create({
  storyStyle: {
    alignItems: "center",
  },
  userName: {
    // backgroundColor: "blue",
  },
});
