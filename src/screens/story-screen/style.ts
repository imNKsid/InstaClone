import { StyleSheet } from "react-native";
import { WindowDimensions } from "../../utils";

export const Styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  storyImage: {
    width: WindowDimensions.WIDTH,
    height: WindowDimensions.HEIGHT * 0.95,
    resizeMode: "cover",
  },
  loader: {
    flex: 1,
    marginTop: WindowDimensions.HEIGHT / 2.5,
  },
});
