import { View, Text } from "react-native";
import React from "react";
import { Tabs } from "expo-router";
import { QueryClientProvider } from "@tanstack/react-query";
import queryClient from "../lib/react-query/queryClient";
import { MaterialIcons } from "@expo/vector-icons";

const RootLayout = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <Tabs>
        <Tabs.Screen
          name="index"
          options={{
            title: "Home",
            headerShown: false,
            tabBarIcon: ({ color }) => (
              <MaterialIcons name="home" size={40} color={color} />
            ),
            tabBarLabelStyle: { fontSize: 12 },
          }}
        />
        
        <Tabs.Screen
          name="news/everything/index"
          options={{
            title: "Search News",
            headerShown: false,
            tabBarIcon: ({ color }) => (
              <MaterialIcons name="search" size={40} color={color} />
            ),
            tabBarLabelStyle: { fontSize: 12 },
          }}
        />

        <Tabs.Screen
          name="news/categories/countryCategories/index"
          options={{
            title: "All Countries",
            headerShown: false,
            tabBarIcon: ({ color }) => (
              <MaterialIcons name="flag" size={40} color={color} />
            ),
            tabBarLabelStyle: { fontSize: 12 },
          }}
        />

        <Tabs.Screen
          name="news/categories/index"
          options={{
            title: "All Categories",
            headerShown: false,
            tabBarIcon: ({ color }) => (
              <MaterialIcons name="category" size={40} color={color} />
            ),
            tabBarLabelStyle: { fontSize: 12 },
          }}
        />

        <Tabs.Screen
          name="news/categories/[newsByCategory]"
          options={{
            href: null,
          }}
        />
        <Tabs.Screen
          name="news/details/index"
          options={{
            href: null,
          }}
        />
        <Tabs.Screen
          name="news/countries/index"
          options={{
            href: null,
          }}
        />
      </Tabs>
    </QueryClientProvider>
  );
};

export default RootLayout;
