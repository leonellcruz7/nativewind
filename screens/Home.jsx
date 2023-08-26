import React, { useState } from "react";
import { FlatList, Text, TouchableOpacity, View } from "react-native";

export default function Home({ navigation }) {
  const [reviews, setReviews] = useState([
    { title: "Title 1", description: "Description 1", id: 1 },
    { title: "Title 2", description: "Description 2", id: 2 },
    { title: "Title 3", description: "Description 3", id: 3 },
  ]);

  return (
    <View>
      <Text>Home</Text>
      <FlatList
        data={reviews}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => {
          const { title, description } = item;
          return (
            <TouchableOpacity
              onPress={() =>
                navigation.navigate("Review", {
                  details: item,
                })
              }
            >
              <Text>Title: {title}</Text>
              <Text>Title: {description}</Text>
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
}
