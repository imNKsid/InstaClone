import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";

interface BodyProps {
  imageUri: string;
}

const Body = (props: BodyProps) => {
  const { imageUri } = props;
  return (
    <View>
      <Image source={{ uri: imageUri }} style={styles.image} />
    </View>
  );
};

export default Body;

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: 600,
  },
});
