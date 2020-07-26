import React, { Component } from "react";

import { View, Image, StyleSheet, Text } from "react-native";

class Profile extends Component {
  state = {};
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.profileSection}>
          <Image
            resizeMethod="resize"
            style={styles.profilePicture}
            source={{
              uri: "https://picsum.photos/200/200",
            }}
          />
          <Text style={styles.titleText}>Matt Johnson</Text>
        </View>
        <View style={styles.nameSection}>
          <Text stype={styles.normalText}>Users Name</Text>
          <Text>Users Handle</Text>
        </View>
        <View style={styles.detailsSection}>
          <Text>Father, Husband, Artist, Mobile Engineer</Text>
        </View>
      </View>
    );
  }
}

export default Profile;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
  },
  profileSection: {
    backgroundColor: "dodgerblue",
    flex: 6,
    justifyContent: "center",
    alignItems: "center",
  },
  titleText: {
    paddingTop: 20,
    fontSize: 20,
    fontWeight: "bold",
  },
  profilePicture: {
    width: 300,
    height: 300,
    borderRadius: 20,
  },
  nameSection: {
    padding: 20,
    backgroundColor: "gold",
    flex: 1,
    alignItems: "center",
  },
  detailsSection: {
    padding: 20,
    backgroundColor: "tomato",
    flex: 1,
  },
  normalText: {},
});
