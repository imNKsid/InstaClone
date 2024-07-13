import { Image, SafeAreaView } from "react-native";
import React from "react";
import { Post, Stories } from "../../components";
import { IMAGES } from "../../assets";
import { Styles } from "./style";

const Home = () => {
  return (
    <SafeAreaView>
      <Image source={IMAGES.logo} style={Styles.mainLogo} />
      <Stories />
      <Post />
    </SafeAreaView>
  );
};

export default Home;
