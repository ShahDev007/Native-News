import { View, Text, ScrollView, StyleSheet, Image } from 'react-native'
import React from 'react'
import { useLocalSearchParams } from 'expo-router'

const NewsDetail = () => {
  const { title, description, content, urlToImage } = useLocalSearchParams()
  console.log(title, description, content,urlToImage);
  return (
    <ScrollView style={styles.container}>
    <Text style={styles.title}>{title}</Text>
    {urlToImage && (
      <Image source={{ uri: urlToImage }} style={styles.image} />
    )}
    <Text style={styles.description}>{description}</Text>
    <Text style={styles.content}>{content}</Text>
  </ScrollView>
  )
}

export default NewsDetail

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 16,
    textAlign: "center",
  },
  image: {
    width: "100%",
    height: 200,
    borderRadius: 8,
    marginBottom: 16,
  },
  description: {
    fontSize: 16,
    color: "#333",
    marginBottom: 16,
  },
  content: {
    fontSize: 14,
    color: "#555",
  },
});