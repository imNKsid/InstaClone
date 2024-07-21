import { View, Text } from "react-native";
import React from "react";
import { Body, Footer, Header } from "./elements";

const Post = ({ postData }: any) => {
  return (
    <View>
      <Header
        imageUri={postData[0]?.owner?.picture}
        name={postData[0]?.owner?.firstName}
      />
      <Body imageUri={postData[0]?.image} />
      <Footer postData={postData[0]} />
    </View>
  );
};

export default Post;
