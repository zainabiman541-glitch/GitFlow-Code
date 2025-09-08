import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

const courses = [
  { id: "1", title: "Data Science", icon: "analytics-outline" },
  { id: "2", title: "Artificial Intelligence", icon: "hardware-chip-outline" },
  { id: "3", title: "Mobile App Development", icon: "phone-portrait-outline" },
  { id: "4", title: "Web Development", icon: "globe-outline" },
];

const CoursesScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>📚 My Courses</Text>

      <FlatList
        data={courses}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Icon name={item.icon} size={30} color="#fff" />
            <Text style={styles.cardText}>{item.title}</Text>
          </View>
        )}
        contentContainerStyle={{ paddingBottom: 20 }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F3F0",
    padding: 16,
  },
  header: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 20,
    color: "#472830",
  },
  card: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#AC7B78",
    padding: 16,
    borderRadius: 14,
    marginBottom: 12,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 3,
  },
  cardText: {
    marginLeft: 12,
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },
});

export default CoursesScreen;
