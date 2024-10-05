import { StyleSheet } from "react-native";
import { scaler, WindowDimensions } from "../../utils";
import { COLORS } from "../../assets";

export const Styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  loader: {
    flex: 1,
    marginTop: WindowDimensions.HEIGHT / 2,
  },
  storyImage: {
    width: WindowDimensions.WIDTH,
    height: WindowDimensions.HEIGHT * 0.85,
    resizeMode: "cover",
  },
  progressBarsContainer: {
    position: "absolute",
    top: 10,
    left: 0,
    right: 0,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 5,
  },
  progressBarContainer: {
    flex: 1, // Take up equal space for each bar
    height: 3,
    backgroundColor: COLORS.lightBlack,
    marginHorizontal: 2,
  },
  progressBar: {
    height: "100%",
    backgroundColor: COLORS.white,
  },
  userInfo: {
    flexDirection: "row",
    alignItems: "center",
    margin: 10,
  },
  userName: {
    color: COLORS.white,
    fontWeight: "bold",
    fontSize: scaler(13),
  },
  postedTime: {
    color: COLORS.lightWhite,
    fontSize: scaler(13),
    fontWeight: "800",
    marginLeft: 10,
  },
  cross: {
    width: 35,
    height: 35,
    position: "absolute",
    right: 2,
  },
  crossImg: {
    width: 30,
    height: 30,
  },
  footerActions: {
    flexDirection: "row",
    alignItems: "center",
    marginHorizontal: 10,
    marginTop: 10,
  },
  msgField: {
    borderWidth: 1,
    borderColor: COLORS.black,
    borderRadius: 30,
    width: WindowDimensions.WIDTH * 0.75,
    paddingVertical: 10,
    paddingHorizontal: 15,
    fontSize: 16,
  },
  heartImg: {
    width: 30,
    height: 30,
    marginLeft: 10,
  },
});
