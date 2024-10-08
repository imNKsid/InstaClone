import { Image, SafeAreaView, ScrollView, TextInput, View } from "react-native";
import React, { useState } from "react";
import { Styles } from "./style";
import {
  GiphyContent,
  GiphyGridView,
  GiphyMedia,
  GiphySDK,
} from "@giphy/react-native-sdk";
import { IMAGES } from "../../assets";

const key = "HG3g4GJ0BLvcXTFzmRM4Z5I8D9H35vKD";

GiphySDK.configure({ apiKey: key });

const Search = () => {
  const [searchText, setSearchText] = useState("");

  return (
    <SafeAreaView style={Styles.container}>
      <View style={Styles.searchBox}>
        <Image source={IMAGES.search} style={Styles.searchImg} />
        <TextInput
          placeholder="Search"
          value={searchText}
          onChangeText={setSearchText}
          style={Styles.searchInput}
          placeholderTextColor={"gray"}
        />
      </View>
      {searchText.length > 3 ? (
        <>
          <GiphyGridView
            content={GiphyContent.search({
              searchQuery: searchText,
            })}
            cellPadding={4}
            style={{ flex: 1 }}
          />
        </>
      ) : (
        <GiphyGridView
          content={GiphyContent.trendingGifs()}
          cellPadding={4}
          style={{ flex: 1 }}
        />
      )}
    </SafeAreaView>
  );
};

export default Search;
