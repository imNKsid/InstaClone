import { Dimensions, StyleSheet } from "react-native";

const { width, height } = Dimensions.get("window");

export const Styles = StyleSheet.create({
  container: {
    flex: 1,
    marginBottom: 80,
  },
  mainLogo: {
    height: height * 0.06,
    width: width * 0.5,
    resizeMode: "contain",
  },
});
