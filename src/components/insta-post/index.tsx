import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { Body, Footer, Header } from "./elements";

const Post = ({ postData }: any) => {
  return (
    <View style={styles.postContainer}>
      <Header
        imageUri={postData?.owner?.picture}
        name={postData?.owner?.firstName}
      />
      <Body imageUri={postData?.image} />
      <Footer postData={postData} />
    </View>
  );
};

export default Post;

const styles = StyleSheet.create({
  postContainer: {
    marginTop: 10,
  },
});
