import { Animated, Pressable, StyleSheet, Text, View } from "react-native"
import { Image } from "expo-image"
import ProbabilityBar from "./ProbabilityBar"
import { Animal } from "../types/types"
import { useEffect, useRef } from "react";

const blurhash =
  '|rF?hV%2WCj[ayj[a|j[az_NaeWBj@ayfRayfQfQM{M|azj[azf6fQfQfQIpWXofj[ayj[j[fQayWCoeoeaya}j[ayfQa{oLj?j[WVj[ayayj[fQoff7azayj[ayj[j[ayofayayayj[fQj[ayayj[ayfjj[j[ayjuayj[';

const HistoyCard = ({ img, probabilities }: Animal) => {
  return (
    <View style={styles.card}>
      <View>
        <Image source={img} style={styles.image} placeholder={{ blurhash }}  />
        <Pressable style={styles.btn}>
          <Text style={{ fontSize: 18, color: "#FFFFFF", textAlign: "center", fontWeight: "bold" }}>Show more</Text>
        </Pressable>
      </View>
      <View style={{ flex: 1, display: "flex", flexDirection: "column", justifyContent: "space-between", paddingVertical: 8 }}>
        {
          probabilities.map((probability, index) => <ProbabilityBar key={index} probability={probability.probability} breed={probability.breed} />)
        }
      </View>
    </View>
  )
}

export const AnimatedHistoryCard = ({ animal, index }: { animal: Animal, index: number }) => {
  const opacity = useRef(new Animated.Value(0)).current

  useEffect(() => {
    Animated.timing(opacity, {
      toValue: 1,
      duration: 500,
      delay: 200 * index,
      useNativeDriver: true
    }).start()
  }, [opacity, index])

  return (
    <Animated.View style={{ opacity }}>
      <HistoyCard img={animal.img} probabilities={animal.probabilities} />
    </Animated.View>
  )
}

const styles = StyleSheet.create({
  card: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "#FFFFFF",
    gap: 12,
    marginRight: 10
  },
  image: {
    width: 120,
    height: 120,
    borderRadius: 8
  },
  btn: {
    width: "100%",
    borderRadius: 8,
    backgroundColor: "#222222",
    marginTop: 10,
    paddingVertical: 6
  }
})

export default HistoyCard