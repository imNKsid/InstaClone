import { StyleSheet, Text, View } from "react-native";
import React from "react";

const Footer = ({ postData }: any) => {
  const { likes, text, publishDate } = postData;
  return (
    <View style={styles.footerContainer}>
      <Text style={styles.likeStyle}>{likes} Likes</Text>
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
    marginBottom: 10,
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
