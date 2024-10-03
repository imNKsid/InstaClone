import {
  ActivityIndicator,
  Image,
  SafeAreaView,
  TouchableWithoutFeedback,
} from "react-native";
import React, { useEffect, useState } from "react";
import {
  StackActions,
  useNavigation,
  useRoute,
} from "@react-navigation/native";
import { Styles } from "./style";
import PostsSelector from "../../redux/ducks/posts/posts-selector";
import UserSelector from "../../redux/ducks/users/users-selector";
import { WindowDimensions } from "../../utils";
import PostsThunk from "../../redux/ducks/posts/posts-thunk";
import { dispatch } from "../../redux/store/store";

const StoryScreen = () => {
  const navigation = useNavigation();
  const routes: any = useRoute();
  // console.log("routes =>", JSON.stringify(routes?.params?.userId));

  const storiesData = PostsSelector.storiesData();
  const usersData = UserSelector.usersData();

  const currentIndex = usersData.findIndex(
    (user: any) => user.id === routes?.params?.userId
  );
  // console.log("currentIndex =>", currentIndex);

  // console.log("storiesData =>", JSON.stringify(storiesData));

  const [loading, setLoading] = useState(true);
  const [activeStoryIndex, setActiveStoryIndex] = useState(0);
  const [activeStory, setActiveStory] = useState<any>(null);

  useEffect(() => {
    if (loading || !activeStory?.image) {
      setLoading(false);
    }
  }, [loading, activeStory?.image]);

  useEffect(() => {
    if (!storiesData || storiesData.length === 0) {
      return;
    }

    if (activeStoryIndex < 0) {
      setActiveStoryIndex(0);
      return;
    }

    if (activeStoryIndex >= storiesData.length) {
      setActiveStoryIndex(storiesData.length - 1);
      return;
    }

    setActiveStory(storiesData[activeStoryIndex]);
  }, [activeStoryIndex, storiesData]);

  const showNextUserStories = () => {
    const newUserId = usersData[currentIndex + 1].id;
    dispatch<any>(PostsThunk.getPostsByUserId(newUserId));
    navigation.dispatch(
      StackActions.push("StoryScreen", { userId: newUserId })
    );
  };

  const showPrevUserStories = () => {
    if (currentIndex <= 0) {
      navigation.dispatch(StackActions.push("Bottom", { screen: "Home" }));
      return;
    }
    const newUserId = usersData[currentIndex - 1].id;
    dispatch<any>(PostsThunk.getPostsByUserId(newUserId));
    navigation.dispatch(
      StackActions.push("StoryScreen", { userId: newUserId })
    );
  };

  const handleNext = () => {
    if (activeStoryIndex >= storiesData.length - 1) {
      showNextUserStories();
      return;
    }
    setActiveStoryIndex(activeStoryIndex + 1);
  };

  const handlePrev = () => {
    if (activeStoryIndex <= 0) {
      showPrevUserStories();
      return;
    }
    setActiveStoryIndex(activeStoryIndex - 1);
  };

  const handlePress = (e: any) => {
    const x = e.nativeEvent.locationX;

    if (x < WindowDimensions.WIDTH / 2) {
      handlePrev();
    } else {
      handleNext();
    }
  };

  return (
    <SafeAreaView style={Styles.container}>
      {!activeStory?.image || loading ? (
        <ActivityIndicator style={Styles.loader} />
      ) : null}
      <TouchableWithoutFeedback onPress={handlePress}>
        <Image source={{ uri: activeStory?.image }} style={Styles.storyImage} />
      </TouchableWithoutFeedback>
    </SafeAreaView>
  );
};

export default StoryScreen;
