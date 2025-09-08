import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Image } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

const ProfileScreen = () => {
  return (
    <ScrollView style={styles.container}>
      {/* Top Profile Section */}
      <View style={styles.profileHeader}>
        <Icon name="person-circle-outline" size={100} color="#A19B8C" />
        <Text style={styles.name}>Zainab Iman</Text>
        <Text style={styles.role}>Student - National University</Text>
      </View>

      {/* Info Section */}
      <View style={styles.infoCard}>
        <Text style={styles.sectionTitle}>Personal Info</Text>
        <View style={styles.row}>
          <Icon name="mail-outline" size={22} color="#472830" />
          <Text style={styles.infoText}>zainab@example.com</Text>
        </View>
        <View style={styles.row}>
          <Icon name="call-outline" size={22} color="#472830" />
          <Text style={styles.infoText}>+92 300 1234567</Text>
        </View>
        <View style={styles.row}>
          <Icon name="location-outline" size={22} color="#472830" />
          <Text style={styles.infoText}>Lahore, Pakistan</Text>
        </View>
      </View>

      {/* Settings Section */}
      <View style={styles.infoCard}>
        <Text style={styles.sectionTitle}>Settings</Text>
        <TouchableOpacity style={styles.row}>
          <Icon name="lock-closed-outline" size={22} color="#35444B" />
          <Text style={styles.infoText}>Change Password</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.row}>
          <Icon name="notifications-outline" size={22} color="#35444B" />
          <Text style={styles.infoText}>Notifications</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.row}>
          <Icon name="help-circle-outline" size={22} color="#35444B" />
          <Text style={styles.infoText}>Help & Support</Text>
        </TouchableOpacity>
      </View>

      {/* Logout Button */}
      <TouchableOpacity style={styles.logoutBtn}>
        <Icon name="log-out-outline" size={22} color="#fff" />
        <Text style={styles.logoutText}>Logout</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F3F0",
    padding: 16,
  },
  profileHeader: {
    alignItems: "center",
    marginBottom: 20,
    backgroundColor: "#EDE7E3",
    padding: 20,
    borderRadius: 16,
  },
  name: {
    fontSize: 22,
    fontWeight: "bold",
    marginTop: 10,
    color: "#472830",
  },
  role: {
    fontSize: 14,
    color: "#5B383E",
    marginTop: 4,
  },
  infoCard: {
    backgroundColor: "#fff",
    borderRadius: 16,
    padding: 16,
    marginBottom: 20,
    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 2,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "600",
    marginBottom: 12,
    color: "#664F42",
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 12,
  },
  infoText: {
    marginLeft: 10,
    fontSize: 15,
    color: "#472830",
  },
  logoutBtn: {
    flexDirection: "row",
    backgroundColor: "#AC7B78",
    padding: 14,
    borderRadius: 12,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 30,
  },
  logoutText: {
    color: "#fff",
    fontWeight: "600",
    fontSize: 16,
    marginLeft: 8,
  },
});

export default ProfileScreen;
