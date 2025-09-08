import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from "react-native";
import "react-native-gesture-handler";
import Icon from "react-native-vector-icons/Ionicons";


const HomeScreen = ({ navigation }) => {
  return (
    <ScrollView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Icon name="person-circle-outline" size={70} color="#A19B8C" />
        <View style={{ marginLeft: 12 }}>
          <Text style={styles.welcome}>Welcome back, Zainab 👋</Text>
          <Text style={styles.subText}>University of Gujrat</Text>
        </View>
        <TouchableOpacity style={styles.editBtn}>
          <Icon name="create-outline" size={22} color="#472830" />
        </TouchableOpacity>
      </View>

      {/* Cards */}
      <View style={styles.grid}>
        <TouchableOpacity
          style={[styles.card, { backgroundColor: "#664F42" }]}
          onPress={() => navigation.navigate("Courses")}
        >
          <Icon name="book-outline" size={40} color="#fff" />
          <Text style={styles.cardText}>Courses</Text>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.card, { backgroundColor: "#AC7B78" }]}
         onPress={() => navigation.navigate("TimeTable")}
        >
          <Icon name="calendar-outline" size={40} color="#fff" />
          <Text style={styles.cardText}>Time Table</Text>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.card, { backgroundColor: "#5B383E" }]}
        onPress={() => navigation.navigate("Fee")}
        >
          <Icon name="cash-outline" size={40} color="#fff" />
          <Text style={styles.cardText}>Fee</Text>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.card, { backgroundColor: "#472830" }]}
          onPress={() => navigation.navigate("Messages")}
        >
          <Icon name="chatbubble-ellipses-outline" size={40} color="#fff" />
          <Text style={styles.cardText}>Messages</Text>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.card, { backgroundColor: "#35444B" }]}
          onPress={() => navigation.navigate("Settings")}
        >
          <Icon name="settings-outline" size={40} color="#fff" />
          <Text style={styles.cardText}>Settings</Text>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.card, { backgroundColor: "#A19B8C" }]}
           onPress={() => navigation.navigate("Logout")}
        >
          <Icon name="log-out-outline" size={40} color="#fff" />
          <Text style={styles.cardText}>Logout</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F3F0", 
    padding: 16,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
    backgroundColor: "#EDE7E3",
    padding: 16,
    borderRadius: 16,
    position: "relative",
  },
  welcome: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#472830",
  },
  subText: {
    fontSize: 14,
    color: "#5B383E",
  },
  editBtn: {
    position: "absolute",
    right: 16,
    top: 16,
    padding: 6,
    backgroundColor: "#F5F3F0",
    borderRadius: 12,
  },
  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  card: {
    width: "47%",
    height: 130,
    borderRadius: 18,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 16,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 4,
  },
  cardText: {
    marginTop: 10,
    color: "#fff",
    fontWeight: "600",
    fontSize: 16,
  },
});

export default HomeScreen;
