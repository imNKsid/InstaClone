import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import ProfilePicture from "./profile-picture";
import { StoryProps } from "../utils/interfaces";
import { StackActions, useNavigation } from "@react-navigation/native";
import { dispatch } from "../redux/store/store";
import PostsThunk from "../redux/ducks/posts/posts-thunk";

const Story = (props: StoryProps) => {
  const { imageUri, name, userId } = props;
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      style={styles.storyStyle}
      onPress={() => {
        navigation.dispatch(
          StackActions.push("WithoutBottom", {
            screen: "StoryScreen",
            params: { userId },
          })
        );
        dispatch<any>(PostsThunk.getPostsByUserId(userId));
      }}
    >
      <ProfilePicture uri={imageUri} />
      <Text style={styles.userName}>{name}</Text>
    </TouchableOpacity>
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
