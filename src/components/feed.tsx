import { FlatList, StyleSheet, Text, View } from "react-native";
import React from "react";
import Post from "./insta-post";

const Feed = ({ postsData }: any) => {
  // console.log("postData =>", JSON.stringify(postsData));
  return (
    <View>
      <FlatList
        data={postsData}
        renderItem={renderPost}
        scrollEnabled={false}
      />
    </View>
  );
};

export default Feed;

const renderPost = ({ item }: any) => {
  return <Post postData={item} />;
};
const styles = StyleSheet.create({});
