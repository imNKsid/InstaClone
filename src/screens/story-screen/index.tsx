import {
  ActivityIndicator,
  Animated,
  Image,
  ImageBackground,
  SafeAreaView,
  Text,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import React, { useEffect, useRef, useState } from "react";

import {
  StackActions,
  useNavigation,
  useRoute,
} from "@react-navigation/native";

import { Styles } from "./style";
import PostsSelector from "../../redux/ducks/posts/posts-selector";
import UserSelector from "../../redux/ducks/users/users-selector";
import { timeDifferenceFromNow, WindowDimensions } from "../../utils";
import PostsThunk from "../../redux/ducks/posts/posts-thunk";
import { dispatch } from "../../redux/store/store";
import { ProfilePicture } from "../../components";
import { COLORS, IMAGES } from "../../assets";

const StoryScreen = () => {
  const navigation = useNavigation();
  const routes: any = useRoute();

  const storiesData = PostsSelector.storiesData();
  const usersData = UserSelector.usersData();

  const currentIndex = usersData.findIndex(
    (user: any) => user.id === routes?.params?.userId
  );

  const progressAnims = useRef<Animated.Value[]>([]).current;

  const [loading, setLoading] = useState(true);
  const [activeStoryIndex, setActiveStoryIndex] = useState(0);
  const [activeStory, setActiveStory] = useState<any>(null);
  const [msg, setMsg] = useState("");
  const [isLiked, setIsLiked] = useState(false);

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
    startProgressBar(activeStoryIndex);
  }, [activeStoryIndex, storiesData]);

  useEffect(() => {
    if (storiesData.length > 0) {
      // Reset the progressAnims array every time storiesData changes
      progressAnims.length = 0; // Clear the existing array
      storiesData.forEach(() => {
        progressAnims.push(new Animated.Value(0)); // Add one Animated.Value per story
      });
      startProgressBar(0);
    }
  }, [storiesData]);

  useEffect(() => {
    const timer = setTimeout(() => {
      handleNext();
    }, 5000);

    return () => clearTimeout(timer);
  }, [activeStoryIndex]);

  // Start the animation for the progress bar
  const startProgressBar = (index: number) => {
    if (progressAnims[index] !== undefined) {
      progressAnims[index].setValue(0); // Reset the animation
      Animated.timing(progressAnims[index], {
        toValue: 1, // Animate the progress bar to full width (1 means full width)
        duration: 5000,
        useNativeDriver: false, // We're animating the width
      }).start(() => {
        // When the 1st animation completes, go to the next story
        if (index === 0) {
          setActiveStoryIndex(index + 1); // Move to next story
        }
      });
    }
  };

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
    progressAnims[activeStoryIndex].setValue(0);
  };

  const handlePress = (e: any) => {
    const x = e.nativeEvent.locationX;

    if (x < WindowDimensions.WIDTH / 2) {
      handlePrev();
    } else {
      if (activeStoryIndex >= storiesData.length - 1) {
        showNextUserStories();
        return;
      }
      handleNext();
    }
  };
  // console.log("activeStory =>", JSON.stringify(activeStory));

  return (
    <SafeAreaView style={Styles.container}>
      {!activeStory?.image || loading ? (
        <ActivityIndicator style={Styles.loader} />
      ) : (
        <>
          <TouchableWithoutFeedback onPress={handlePress}>
            <ImageBackground
              source={{ uri: activeStory?.image }}
              style={Styles.storyImage}
            >
              <View style={Styles.progressBarsContainer}>
                {storiesData.map((_story: any, index: number) => (
                  <View key={index} style={Styles.progressBarContainer}>
                    <Animated.View
                      style={[
                        Styles.progressBar,
                        {
                          width: progressAnims[index].interpolate({
                            inputRange: [0, 1],
                            outputRange: ["0%", "100%"],
                          }),
                        },
                      ]}
                    />
                  </View>
                ))}
              </View>
              <View style={Styles.userInfo}>
                <ProfilePicture uri={activeStory?.owner?.picture} size={40} />
                <Text style={Styles.userName}>
                  {activeStory?.owner?.firstName}
                </Text>
                <Text style={Styles.postedTime}>
                  {timeDifferenceFromNow(activeStory?.publishDate)}
                </Text>
                <TouchableOpacity
                  onPress={() =>
                    navigation.dispatch(
                      StackActions.push("Bottom", { screen: "Home" })
                    )
                  }
                  style={Styles.cross}
                >
                  <Image source={IMAGES.cross} style={Styles.crossImg} />
                </TouchableOpacity>
              </View>
            </ImageBackground>
          </TouchableWithoutFeedback>
          <View style={Styles.footerActions}>
            <TextInput
              placeholder={"Send Message"}
              placeholderTextColor={COLORS.black}
              value={msg}
              onChangeText={(t) => setMsg(t)}
              style={Styles.msgField}
            />
            <TouchableOpacity onPress={() => setIsLiked(!isLiked)}>
              <Image
                source={isLiked ? IMAGES.heartFilled : IMAGES.heartEmpty}
                style={Styles.heartImg}
              />
            </TouchableOpacity>
            <Image source={IMAGES.send} style={Styles.heartImg} />
          </View>
        </>
      )}
    </SafeAreaView>
  );
};

export default StoryScreen;
