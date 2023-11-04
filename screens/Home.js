import React from "react";
import { View, Text, Button, ScrollView, StyleSheet } from "react-native";

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerText}>Selamat Datang</Text>
        <Button title="Logout" onPress={() => console.log("Logout")} />
      </View>

      {/* Scroll Horizontal */}
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.horizontalScroll}
      >
        {/* Item 1 */}
        <View style={styles.horizontalItem}>
          <Text style={styles.itemText}>Item 1</Text>
        </View>

        {/* Item 2 */}
        <View style={styles.horizontalItem}>
          <Text style={styles.itemText}>Item 2</Text>
        </View>
      </ScrollView>

      {/* Tombol */}
      <View style={styles.buttonsContainer}>
        {/* Baris 1 */}
        <View style={styles.buttonRow}>
          <Button title="Tombol 1" onPress={() => console.log("Tombol 1")} />
        </View>

        {/* Baris 2 */}
        <View style={styles.buttonRow}>
          <Button title="Tombol 2" onPress={() => console.log("Tombol 2")} />
        </View>

        {/* Baris 3 */}
        <View style={styles.buttonRow}>
          <Button title="Tombol 3" onPress={() => console.log("Tombol 3")} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#fff",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 16,
  },
  headerText: {
    fontSize: 24,
    fontWeight: "bold",
  },
  horizontalScroll: {
    marginBottom: 16,
  },
  horizontalItem: {
    width: 200,
    height: 150,
    backgroundColor: "#ccc",
    marginRight: 16,
    alignItems: "center",
    justifyContent: "center",
  },
  itemText: {
    fontSize: 18,
  },
  buttonsContainer: {
    flexDirection: "column",
  },
  buttonRow: {
    marginBottom: 16,
  },
});

export default HomeScreen;