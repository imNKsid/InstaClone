import { Image, StyleSheet, View } from "react-native";
import React from "react";
import { COLORS } from "../assets";

interface ProfilePictureProps {
  uri: string;
  size: number;
}

const ProfilePicture = (props: ProfilePictureProps) => {
  const { uri, size = 80 } = props;
  return (
    <View
      style={[
        styles.container,
        { width: size + 6, height: size + 6, borderRadius: (size + 6) / 2 },
      ]}
    >
      <Image
        source={{ uri }}
        style={[
          styles.image,
          { width: size, height: size, borderRadius: size / 2 },
        ]}
      />
    </View>
  );
};

export default ProfilePicture;

const styles = StyleSheet.create({
  container: {
    margin: 5,
    borderWidth: 2.5,
    borderColor: COLORS.purple,
  },
  image: {
    borderWidth: 1,
    borderColor: COLORS.white,
  },
});
