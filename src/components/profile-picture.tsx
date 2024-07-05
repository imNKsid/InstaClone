import { Image, ImageProps, StyleSheet, Text, View } from "react-native";
import React from "react";
import { COLORS } from "../assets";

const ProfilePicture = ({ uri }: { uri: string }) => {
  return (
    <View style={styles.container}>
      <Image source={{ uri }} style={styles.image} />
    </View>
  );
};

export default ProfilePicture;

const styles = StyleSheet.create({
  container: {
    margin: 10,
    height: 86,
    width: 86,
    borderWidth: 2.5,
    borderRadius: 86 / 2,
    borderColor: COLORS.purple,
  },
  image: {
    height: 80,
    width: 80,
    borderRadius: 80 / 2,
    borderWidth: 1,
    borderColor: COLORS.white,
  },
});
