import { StyleSheet } from "react-native";
import { COLORS } from "../../assets";

export const Styles = StyleSheet.create({
  container: {
    flex: 1,
    marginBottom: 80,
    backgroundColor: COLORS.white,
  },
  searchBox: {
    marginHorizontal: 10,
    borderRadius: 10,
    marginVertical: 20,
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 10,
    backgroundColor: COLORS.gray,
  },
  searchImg: {
    width: 20,
    height: 20,
    marginLeft: 10,
    tintColor: COLORS.darkGray,
  },
  searchInput: {
    paddingHorizontal: 5,
    width: "90%",
  },
});
