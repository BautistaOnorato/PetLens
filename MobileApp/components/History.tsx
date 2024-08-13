import { FlatList, Pressable, StyleSheet, Text, View } from "react-native"
import { CatIcon } from "./icons/CatIcon"
import { DogIcon } from "./icons/DogIcon"
import { useState } from "react"
import HistoyCard, { AnimatedHistoryCard } from "./HistoyCard"
import { Animal } from "../types/types"


const dogs: Animal[] = [
  {
    img: require("../assets/golden.jpg"),
    probabilities: [
      { probability: 0.75, breed: "Golden Retriever" },
      { probability: 0.22, breed: "Labrador" },
      { probability: 0.02, breed: "Viszla" },
    ]
  },
  {
    img: require("../assets/vizsla.jpeg"),
    probabilities: [
      { probability: 0.75, breed: "Golden Retriever" },
      { probability: 0.22, breed: "Labrador" },
      { probability: 0.02, breed: "Viszla" },
    ]
  },
  {
    img: require("../assets/pitbull.jpg"),
    probabilities: [
      { probability: 0.75, breed: "Golden Retriever" },
      { probability: 0.22, breed: "Labrador" },
      { probability: 0.02, breed: "Viszla" },
    ]
  },
  {
    img: require("../assets/labrador.jpg"),
    probabilities: [
      { probability: 0.75, breed: "Golden Retriever" },
      { probability: 0.22, breed: "Labrador" },
      { probability: 0.02, breed: "Viszla" },
    ]
  },
]

const History = () => {
  const [dogSelected, setDogSelected] = useState(true)

  return (
    <View style={styles.container}>
      <View style={styles.head}>
        <Text style={{ fontSize: 32, fontFamily: "KaushanScript", color: "#222222", flex: 1 }}>History</Text>
        <View style={styles.btnConatiner}>
          <Pressable style={!dogSelected ? styles.btn : styles.btnSelected} onPress={() => setDogSelected(true)}>
            <DogIcon size={40} color={dogSelected ? "#FFFFFF" : "#222222"} />
          </Pressable>
          <Pressable style={dogSelected ? styles.btn : styles.btnSelected} onPress={() => setDogSelected(false)}>
            <CatIcon size={40} color={!dogSelected ? "#FFFFFF" : "#222222"} />
          </Pressable>
        </View>
      </View>
      <FlatList 
        contentContainerStyle={{ gap: 24 }}
        data={dogSelected ? dogs : []}
        keyExtractor={(_, index) => index.toString()}
        renderItem={({ item, index }) => <AnimatedHistoryCard animal={item} index={index} />}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    gap: 24,
    flex: 1,
    height: "100%"
  },
  head: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  btnConatiner: {
    display: "flex",
    flexDirection: "row",
    gap: 24,
  },
  btn: {
    width: 50,
    height: 50,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 8,
    backgroundColor: "#FFFFFF",
    borderWidth: 1,
    borderColor: "#222222",
  },
  btnSelected: {
    backgroundColor: "#222222",
    width: 50,
    height: 50,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#222222",
  }
})

export default History