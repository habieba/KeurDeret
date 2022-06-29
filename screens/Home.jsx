import { StatusBar } from "expo-status-bar";
import React from "react";

import { useSelector, useDispatch } from "react-redux";

import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import {
  MaterialIcons,
  Entypo,
  FontAwesome,
  Fontisto,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import BottomNav from "../components/BottomNav";
import RequestModal from "../components/RequestModal";
export default function Home({ navigation }) {
  const users = useSelector((state) => state.users);
  const currentUser = useSelector((state) => state.user);
  
  return (
    <View style={{ flex: 1, paddingTop: 25 }}>
      <RequestModal />
      <StatusBar style="dark"/>
      <ScrollView
        style={{borderRadius: 10, margin: 5 }}
        contentContainerStyle={{ paddingBottom: 30 }}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.container}>
          {/* header component */}
          <View style={styles.header}>
            <View style={{ flex: 1, justifyContent: "space-evenly" }}>
              <Text style={styles.headerTitle}>
                Hi! {currentUser.firstName} {currentUser.lastName}
              </Text>
              <Text style={styles.headerSub}>
                Will you want to donate blood!
              </Text>
            </View>
            <TouchableOpacity onPress={() => navigation.navigate("DashBoard")}>
              <Image
                source={{ uri: currentUser.photo }}
                style={styles.thumbnail}
              />
            </TouchableOpacity>
          </View>

          {/* search component */}
          <View style={styles.search}>
            <TextInput
              placeholder="search for location, e.g Banjul"
              placeholderTextColor="#ededed"
              style={styles.searchInput}
            />

            <TouchableOpacity style={styles.searchButton}>
              <FontAwesome name="search" size={20} color="#eee" />
            </TouchableOpacity>
          </View>

        </View>

        {/* the body */}

        <View style={styles.pins}>
          <View style={styles.pinLeft}>
            <Fontisto name="blood-drop" size={16} color="red" />
            <View style={styles.textdex}>
              <Text style={{ color: "#888" }}>Donor history</Text>
              <Text style={{ fontSize: 18, marginTop: 4 }}>7 Times</Text>
            </View>
          </View>

          <View style={styles.pinRight}>
            <MaterialCommunityIcons
              name="fire-circle"
              size={16}
              color="#E6A819"
            />
            <View style={styles.textdex}>
              <Text style={{ color: "#888" }}>Your Points</Text>
              <Text style={{ fontSize: 18, marginTop: 4 }}>100</Text>
            </View>
            <View
              style={{
                backgroundColor: "#6e8cff",
                borderRadius: 15,
                padding: 5,
              }}
            >
              <Text style={{ fontSize: 10, color: "white" }}>Tuker</Text>
            </View>
          </View>
        </View>

        <View style={{ marginLeft: 10, marginTop: 12 }}>
          <Text style={{ fontWeight: "bold", fontSize: 18 }}>
            Nearest Donors{" "}
          </Text>
        </View>

        {/* message Chating */}

        {users
          .filter((user) => user.firstName !== currentUser.firstName)
          .map((user) => (
            <View style={styles.donor} key={user.id}>
              <View style={styles.donorHeader}>
                <Image source={{ uri: user.photo }} style={styles.thumbnail} />
                <View style={{ flex: 1, marginStart: 10 }}>
                  <Text style={{ fontSize: 18, marginBottom: 5 }}>
                    {user.firstName} {user.lastName}
                  </Text>
                  <Text style={{ color: "#888" }}>Update, 23 minutes ago</Text>
                </View>
                <View style={{ backgroundColor: "#DBE2FF", borderRadius: 5 }}>
                  <Entypo name="typing" size={30} color="#6e8cff" />
                </View>
              </View>

              <View
                style={{ flexDirection: "row", marginLeft: 60, marginTop: 10 }}
              >
                <MaterialIcons name="location-pin" size={16} color="red" />
                <View style={{ marginLeft: 15 }}>
                  <Text style={{}}>Hospital Location</Text>
                  <Text style={{ color: "#888", marginTop: 4 }}>
                    Westfield Clinic - KMC{" "}
                  </Text>
                  <Text style={{ color: "#888", marginTop: 4 }}>
                    16 in {user.address}
                  </Text>
                </View>
              </View>

              <View
                style={{ flexDirection: "row", marginLeft: 60, marginTop: 10 }}
              >
                <MaterialIcons name="event-note" size={16} color="#6e8cff" />
                <View style={{ marginLeft: 15 }}>
                  <Text>Blood Type</Text>
                  <Text style={{ color: "#888", marginTop: 4 }}>
                    {user.bloodGroup}
                  </Text>
                </View>
              </View>
            </View>
          ))}

      </ScrollView>
      <BottomNav navigation={navigation} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#ddd",
    padding: 10,
    borderRadius: 10,
  },

  header: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingTop: 20,
  },

  headerTitle: {
    color: "#111",
    fontWeight: "bold",
    fontSize: 22,
  },

  headerSub: {
    fontWeight: "400",
    color: "#111",
  },

  search: {
    flexDirection: "row",
    marginVertical: 18,
  },

  searchInput: {
    flex: 1,
    paddingStart: 15,
    backgroundColor: "#aaa",
    borderRadius: 25,
    fontSize: 20,
    borderWidth: 1,
    borderColor: '#888'
    // color: "#555",
  },

  searchButton: {
    backgroundColor: "#6e8cff",
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
    marginStart: 15,
    padding: 12,
    borderWidth: 1,
    borderColor: '#888'
  },

  summary: {
    marginBottom: 5,
  },

  summaryTop: {
    flexDirection: "row",
    backgroundColor: "#fff",
    padding: 15,
    paddingVertical: 18,
    borderTopEndRadius: 15,
    borderTopStartRadius: 15,
  },

  summaryBottom: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 15,
    paddingHorizontal: 25,
    backgroundColor: "#5e6976",
    borderBottomEndRadius: 15,
    borderBottomStartRadius: 15,
  },

  summaryBottomIcons: {
    borderWidth: 1,
    borderColor: "rgba(0,0,0,0.2)",
    alignItems: "center",
    justifyContent: "center",
    width: 50,
    height: 50,
    backgroundColor: "#fff",
    borderRadius: 50,
    marginBottom: 5,
  },

  summaryIconText: { color: "#fff" },

  pins: {
    flex: 1,
    flexDirection: "row",
    marginTop: 15,
  },

  pinLeft: {
    flex: 2,
    borderRadius: 10,
    backgroundColor: "#E6E6E5",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 15,
    paddingHorizontal: 10,
  },

  pinRight: {
    flex: 3,
    borderRadius: 10,
    backgroundColor: "#E6E6E5",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
    paddingVertical: 15,
    paddingHorizontal: 10,
    marginStart: 10,
  },

  donor: {
    margin: 10,
    padding: 10,
    paddingVertical: 15,
    borderRadius: 10,
    backgroundColor: "#E6E6E5",
  },

  donorHeader: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
  },

  thumbnail: {
    borderRadius: 50,
    height: 50,
    width: 50,
  },

  branWeight: {
    fontWeight: "bold",
  },
});
