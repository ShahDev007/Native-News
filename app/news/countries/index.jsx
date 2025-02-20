import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  Image,
  StyleSheet,
  ActivityIndicator,
} from "react-native";
import React from "react";
import { router, useLocalSearchParams } from "expo-router";
import { useQuery } from "@tanstack/react-query";
import { getTopNewsByCountry } from "../../../lib/react-query/api/api";

const CountryNews = () => {
  const { country } = useLocalSearchParams();
  console.log("Country is", country);
  const { data, error, isError, isSuccess, isLoading } = useQuery({
    queryKey: ["newsByCategory"],
    queryFn: () => getTopNewsByCountry(country),
  });

  if (isLoading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#4c669f" />
        <Text style={styles.loadingText}>Loading...</Text>
      </View>
    );
  }
  if (isError) {
    return (
      <View style={styles.errorContainer}>
        <Text style={styles.errorText}>Error: {error.message}</Text>
      </View>
    );
  }
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{country.toUpperCase()} News</Text>
      <FlatList
        data={data.articles}
        keyExtractor={(item) => item.url}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              style={styles.articleContainer}
              onPress={() =>
                router.push({
                  pathname: `/news/details`,
                  params: {
                    title: item.title,
                    description: item.description,
                    content: item.content,
                    urlToImage: item.urlToImage,
                  },
                })
              }
            >
              {item.urlToImage && (
                <Image
                  source={{ uri: item.urlToImage }}
                  style={styles.articleImage}
                />
              )}
              <Text style={styles.articleTitle}>{item.title}</Text>
              <Text style={styles.articleDescription}>{item.description}</Text>
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
};

export default CountryNews;

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
  articleContainer: {
    padding: 16,
    marginVertical: 8,
    backgroundColor: "#f9f9f9",
    borderRadius: 8,
  },
  articleImage: {
    width: "100%",
    height: 200,
    borderRadius: 8,
    marginBottom: 8,
  },
  articleTitle: {
    fontSize: 18,
    fontWeight: "bold",
  },
  articleDescription: {
    fontSize: 14,
    color: "#555",
  },
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  loadingText: {
    marginTop: 8,
    fontSize: 16,
    color: "#4c669f",
  },
  errorContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
  },
  errorText: {
    fontSize: 16,
    color: "#d9534f",
    textAlign: "center",
  },
  noResultsText: {
    textAlign: "center",
    fontSize: 16,
    color: "#666",
    marginTop: 16,
  },
});
