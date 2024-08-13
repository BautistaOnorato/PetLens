import { View, StyleSheet, Text, Image } from "react-native"

const Header = () => {
  return (
    <View style={styles.header}>
      <Text style={{ fontSize: 48, fontFamily: "KaushanScript", color: "#222222", flex: 1 }}>PetLens</Text>
      <Image source={require('../assets/logo.png')} fadeDuration={0} style={styles.image} />
    </View>
  )
}

const styles = StyleSheet.create({
  header: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
    borderBottomWidth: 1,
    borderBottomColor: "rgba(0, 0, 0, 0.2)",
  },
  image: {
    width: 100,
    height: 100
  },
});

export default Header