import { View, Text, StyleSheet, Pressable } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import Header from "./Header";
import History from "./History";

const Main = () => {
  const insets = useSafeAreaInsets();

  return (
    <View style={{...styles.container, paddingTop: insets.top, paddingBottom: insets.bottom + 10}}>
      <Header />
      <History />
      <Pressable style={styles.btn}>
        <Text style={{ fontSize: 18, color: "#FFFFFF", textAlign: "center", fontWeight: "bold" }}>Take a photo</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 24,
    display: "flex",
    gap: 24,
    height: "100%",
  },
  btn: {
    width: "100%",
    borderRadius: 8,
    backgroundColor: "#222222",
    paddingVertical: 8,
  }
});

export default Main;
