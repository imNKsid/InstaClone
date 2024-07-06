import { FlatList, StyleSheet, Text, View } from "react-native";
import React from "react";
import Story from "./story";
import { StoryProps } from "../utils/interfaces";

const data = [
  {
    imageUri: "https://randomuser.me/api/portraits/women/58.jpg",
    name: "Sara",
  },
  {
    imageUri: "https://randomuser.me/api/portraits/med/men/25.jpg",
    name: "Roberto",
  },
  {
    imageUri: "https://randomuser.me/api/portraits/med/women/89.jpg",
    name: "Edita",
  },
];

const Stories = () => {
  return (
    <FlatList
      horizontal
      showsHorizontalScrollIndicator={false}
      data={data}
      renderItem={renderStory}
      keyExtractor={(_item, index) => index.toString()}
    />
  );
};

export default Stories;

interface renderStoryProps {
  item: { imageUri: string; name: string };
}

const renderStory = (props: renderStoryProps) => {
  const { imageUri, name } = props.item;
  return (
    <View>
      <Story imageUri={imageUri} name={name} />
    </View>
  );
};

const styles = StyleSheet.create({});
