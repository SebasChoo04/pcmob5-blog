import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import axios from 'axios'; 

const API = "https://yjsoon2.pythonanywhere.com";
const API_BLOGS = "/posts";

export default function EditScreen({ navigation, route}) {

  const [title, setTitle] = useState();
  const [content, setContent] = useState();
  const initialPost = route.params.currentPost;

  useEffect(() => {
    console.log(route.params.currentPost);
    setTitle(initialPost.title);
    setContent(initialPost.content);
  }, [])

  async function savePost() {
    const newPost = {...initialPost, title: title, content: content}
    console.log(newPost);
  
    try {  
      const response = await axios.put(API + API_BLOGS + "/" + newPost.id , newPost)
      console.log("TEST" + JSON.stringify(response.data))
      navigation.navigate("Blogs", { newPost: response.data })
    }
    catch (err) {
      console.log(err);
    }
  
  }

  return (
    <View style={[styles.container, { backgroundColor: "white" }]}>
      <Text style={{ fontSize: 24 }}>Title</Text>
      <TextInput
        style={styles.textInput}
        value={title}
        onChangeText={(input) => setTitle(input)}
      />
      <Text style={{ fontSize: 24, marginTop: 10 }}>Edit Post</Text>
      <TextInput
        style={styles.textInput}
        value={content}
        onChangeText={(input) => setContent(input)}
      />
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.button}
          onPress={savePost}
        >
          <Text style={styles.buttonText}>Save</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.goBack()}
        >
          <Text style={styles.buttonText}>Dismiss</Text>
        </TouchableOpacity>
      </View>
      {/* <Text>{text.toUpperCase()}</Text> */}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffc",
    alignItems: "center",
    justifyContent: "center",
  },
  textInput: {
    borderColor: "grey",
    borderWidth: 1,
    width: "80%",
    padding: 10,
    marginTop: 20,
  },
  button: {
    padding: 10,
    backgroundColor: "orange",
    borderRadius: 5,
    margin: 10,
    marginTop: 30,
    width: 80,
  },
  buttonText: {
    textAlign: "center",
  },
  buttonContainer: {
    flexDirection: "row",
  },
});