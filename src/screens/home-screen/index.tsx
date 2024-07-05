import { View, Text } from "react-native";
import React from "react";
import { ProfilePicture } from "../../components";

const Home = () => {
  return (
    <View>
      <Text>Home</Text>
      <ProfilePicture
        uri={"https://randomuser.me/api/portraits/women/58.jpg"}
      />
      <ProfilePicture
        uri={"https://randomuser.me/api/portraits/med/men/25.jpg"}
      />
      <ProfilePicture
        uri={"https://randomuser.me/api/portraits/med/women/89.jpg"}
      />
    </View>
  );
};

export default Home;
