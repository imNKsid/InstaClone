import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import Story from "./story";
import { UserProps } from "../utils/interfaces";
import { COLORS, IMAGES } from "../assets";

interface StoriesProps {
  usersData: UserProps[];
}

const Stories = (props: StoriesProps) => {
  const { usersData } = props;

  const YourStory = () => {
    return (
      <TouchableOpacity style={styles.yourStory} onPress={() => {}}>
        <View style={styles.addStory}>
          <Image
            source={{ uri: usersData[10]?.picture }}
            style={styles.addStory}
          />
          <View style={styles.addBtn}>
            <Image source={IMAGES.bluePlus} style={styles.plusIcon} />
          </View>
        </View>
        <Text style={styles.userName}>{"Your Story"}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.stories}>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        ListHeaderComponent={<YourStory />}
        data={usersData}
        renderItem={renderStory}
        keyExtractor={(_item, index) => index.toString()}
      />
    </View>
  );
};

export default Stories;

interface renderStoryProps {
  item: UserProps;
}

const renderStory = (props: renderStoryProps) => {
  const { picture, firstName, id } = props.item;
  return (
    <View>
      <Story imageUri={picture} name={firstName} userId={id} />
    </View>
  );
};

const styles = StyleSheet.create({
  stories: {
    // marginLeft: 10,
  },
  yourStory: {
    alignItems: "center",
    marginHorizontal: 7,
  },
  addStory: {
    width: 80,
    height: 80,
    borderRadius: 80 / 2,
    marginTop: 3,
  },
  addBtn: {
    width: 20,
    height: 20,
    borderRadius: 20 / 2,
    backgroundColor: COLORS.white,
    alignItems: "center",
    position: "absolute",
    right: 1,
    bottom: 1,
  },
  plusIcon: {
    width: 18,
    height: 18,
  },
  userName: {
    marginTop: 12,
    color: COLORS.lightBlack,
  },
});
