import { Dimensions, StyleSheet } from "react-native";

const { width, height } = Dimensions.get("window");

export const Styles = StyleSheet.create({
  mainLogo: {
    height: height * 0.06,
    width: width * 0.5,
    resizeMode: "contain",
  },
});
