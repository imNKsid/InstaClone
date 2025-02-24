import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import ProfilePicture from "../../profile-picture";
import { scaler } from "../../../utils";
import { COLORS, IMAGES } from "../../../assets";

interface HeaderProps {
  imageUri: string;
  name: string;
}

const Header = (props: HeaderProps) => {
  const { imageUri, name } = props;
  return (
    <View style={styles.container}>
      <View style={styles.nameNpic}>
        <ProfilePicture uri={imageUri} size={40} />
        <Text style={styles.username}>{name}</Text>
      </View>
      <Image source={IMAGES.menu} style={styles.menuIcon} />
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  nameNpic: {
    flexDirection: "row",
    alignItems: "center",
  },
  username: {
    fontSize: scaler(13),
    fontWeight: "500",
    color: COLORS.lightBlack,
  },
  menuIcon: {
    width: 20,
    height: 20,
    marginRight: 10,
  },
});
