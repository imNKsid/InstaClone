import { SafeAreaView, ScrollView } from "react-native";
import React from "react";
import { Styles } from "./style";

const Search = () => {
  return (
    <SafeAreaView style={Styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}></ScrollView>
    </SafeAreaView>
  );
};

export default Search;
