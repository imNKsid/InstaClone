import { View, Text } from "react-native";
import React from "react";
import { Body, Footer, Header } from "./elements";

const Post = ({ postData }: any) => {
  return (
    <View>
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
