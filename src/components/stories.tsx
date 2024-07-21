import { FlatList, StyleSheet, Text, View } from "react-native";
import React from "react";
import Story from "./story";
import { UserProps } from "../utils/interfaces";

interface StoriesProps {
  usersData: UserProps[];
}

const Stories = (props: StoriesProps) => {
  const { usersData } = props;
  return (
    <FlatList
      horizontal
      showsHorizontalScrollIndicator={false}
      data={usersData}
      renderItem={renderStory}
      keyExtractor={(_item, index) => index.toString()}
    />
  );
};

export default Stories;

interface renderStoryProps {
  item: UserProps;
}

const renderStory = (props: renderStoryProps) => {
  const { picture, firstName } = props.item;
  return (
    <View>
      <Story imageUri={picture} name={firstName} />
    </View>
  );
};

const styles = StyleSheet.create({});
