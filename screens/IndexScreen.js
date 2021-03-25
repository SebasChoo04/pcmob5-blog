import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity, FlatList } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import axios from 'axios';

const API = "https://yjsoon2.pythonanywhere.com";
const API_BLOGS = "/posts";

export default function IndexScreen({ navigation, route }) {
  const [posts, setPosts] = useState([]);

  // This is to set up the top right button
  useEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <TouchableOpacity onPress={addPost}>
          <FontAwesome
            name="edit"
            size={30}
            color="black"
            style={{
              color: "#f55",
              marginRight: 10,
            }}
          />
        </TouchableOpacity>
      ),
    });
  });

  useEffect(() => {
    getPosts()
  }, [])

  useEffect(() => {
    if (route.params?.newPost) {
      setPosts([...posts, route.params.newPost])
    }
  }, [route.params?.newPost])

  async function getPosts() {
    try {
      const response = await axios.get(API + API_BLOGS);
      console.log(response.data);
      setPosts(response.data);
    } catch (error) {
      console.log("Error getting data");
      console.log(error);
    }
  }

  function addPost() {
    navigation.navigate("Add Screen");
  }

  // This deletes an individual note
  function deleteNote(id) {
    console.log("Deleting " + id);
    try {
      const response = axios.delete(API + API_BLOGS + "/" + id)
      console.log(response.data)
    } catch (err) {
      console.log(err)
    } finally {
      setPosts(posts => posts.filter(item => item.id != id))
    }
    
  }

  // The function to render each row in our FlatList
  function renderItem({ item }) {
    return (
      <View
        style={styles.listItem}>
        <View>
          <Text style={styles.postTitle}>{item.title}</Text>
          <Text>{item.content}</Text>
        </View>
        <TouchableOpacity onPress={() => deleteNote(item.id)}>
          <FontAwesome name="trash" size={25} color="#944" />
        </TouchableOpacity>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={posts}
        renderItem={renderItem}
        style={{ width: "100%" }}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffc",
    alignItems: "center",
    justifyContent: "center",
  },
  listItem: {
    padding: 10,
    paddingTop: 20,
    paddingBottom: 20,
    borderBottomColor: "#ccc",
    borderBottomWidth: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  }, 
  postTitle: {
    fontWeight: 'bold', 
    fontSize: 20
  }
});
