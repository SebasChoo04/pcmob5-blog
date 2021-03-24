import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet, TextInput } from "react-native";
import axios from 'axios';

const API = "https://yjsoon2.pythonanywhere.com";
const API_ADD = "/create";

export default function AddScreen({ navigation }) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  async function addPost() {
    try {  
      const response = await axios.post(API + API_ADD, {
        "content": content,
        "title": title
      })
      console.log(response.data)
      navigation.navigate("Blogs")
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
      <Text style={{ fontSize: 24, marginTop: 10 }}>What do you want to post?</Text>
      <TextInput
        style={styles.textInput}
        value={content}
        onChangeText={(input) => setContent(input)}
      />
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => addPost()}
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
  );
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
