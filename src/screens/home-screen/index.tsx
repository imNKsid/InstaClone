import { Image, SafeAreaView, ScrollView } from "react-native";
import React, { useEffect } from "react";
import { Feed, Stories } from "../../components";
import { IMAGES } from "../../assets";
import { Styles } from "./style";
import UsersThunk from "../../redux/ducks/users/users-thunk";
import PostsThunk from "../../redux/ducks/posts/posts-thunk";
import { dispatch } from "../../redux/store/store";
import PostsSelector from "../../redux/ducks/posts/posts-selector";
import UserSelector from "../../redux/ducks/users/users-selector";

const Home = () => {
  const usersData = UserSelector.usersData();
  const postsData = PostsSelector.postsData();

  useEffect(() => {
    dispatch<any>(UsersThunk.getAllUsers());
    dispatch<any>(PostsThunk.getAllPosts());
  }, []);

  return (
    <SafeAreaView style={Styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Image source={IMAGES.logo} style={Styles.mainLogo} />
        <Stories usersData={usersData} />
        <Feed postsData={postsData} />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
