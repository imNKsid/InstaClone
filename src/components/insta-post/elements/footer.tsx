import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useEffect, useState } from "react";
import { IMAGES } from "../../../assets";

const Footer = ({ postData }: any) => {
  const { likes, text, publishDate } = postData;

  const [isLiked, setIsLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(0);
  const [isSaved, setIsSaved] = useState(false);

  useEffect(() => {
    setLikeCount(likes);
  }, []);

  const handleLikeClick = () => {
    setIsLiked(!isLiked);
    const count = isLiked ? -1 : 1;
    setLikeCount((prev) => prev + count);
  };

  const handleSaveClick = () => {
    setIsSaved(!isSaved);
  };

  return (
    <View style={styles.footerContainer}>
      <View style={styles.iconsContainer}>
        <TouchableOpacity onPress={handleLikeClick}>
          <Image
            source={isLiked ? IMAGES.heartFilled : IMAGES.heartEmpty}
            style={styles.heart}
          />
        </TouchableOpacity>
        <Image
          source={IMAGES.comment}
          style={[styles.heart, styles.leftMargin]}
        />
        <Image source={IMAGES.send} style={[styles.heart, styles.leftMargin]} />
        <View style={styles.threeIcons}>
          <TouchableOpacity onPress={handleSaveClick}>
            <Image
              source={isSaved ? IMAGES.saveFilled : IMAGES.saveEmpty}
              style={styles.heart}
            />
          </TouchableOpacity>
        </View>
      </View>
      <Text style={styles.likeStyle}>{likeCount} Likes</Text>
      <View style={styles.caption}>
        <Text style={styles.likeStyle}>{postData?.owner?.firstName}</Text>
        <Text>{text}</Text>
      </View>
      <Text>{formatDate(publishDate)}</Text>
    </View>
  );
};

export default Footer;

const styles = StyleSheet.create({
  footerContainer: {
    marginTop: 10,
    marginLeft: 10,
  },
  iconsContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 5,
  },
  threeIcons: {
    position: "absolute",
    right: 10,
  },
  heart: {
    width: 25,
    height: 25,
  },
  leftMargin: {
    marginLeft: 10,
  },
  likeStyle: {
    fontWeight: "600",
    marginRight: 5,
  },
  caption: { flexDirection: "row" },
});

function formatDate(dateString: string): string {
  const date = new Date(dateString);
  const now = new Date();

  const diffInSeconds = Math.floor((now.getTime() - date.getTime()) / 1000);
  const diffInMinutes = Math.floor(diffInSeconds / 60);
  const diffInHours = Math.floor(diffInMinutes / 60);
  const diffInDays = Math.floor(diffInHours / 24);

  if (diffInSeconds < 60) {
    return `${diffInSeconds} seconds ago`;
  } else if (diffInMinutes < 60) {
    return `${diffInMinutes} minutes ago`;
  } else if (diffInHours < 24) {
    return `${diffInHours} hours ago`;
  } else if (diffInDays < 7) {
    return `${diffInDays} days ago`;
  } else {
    const options: Intl.DateTimeFormatOptions = {
      day: "numeric",
      month: "short",
    };
    if (date.getFullYear() !== now.getFullYear()) {
      options.year = "numeric";
    }
    return date.toLocaleDateString("en-US", options);
  }
}
