import { StyleSheet, Text, View } from "react-native"
import { Probability } from "../types/types"

const getColor = (probability: number) => {
  if (probability > 0.75) {
    return "#6077EE"
  } else if (probability > 0.5) {
    return "#318639"
  } else if (probability > 0.25) {
    return "#FCBB15"
  }

  return "#EE5B5B"
}

const ProbabilityBar = ({ probability, breed }: Probability) => {
  return (
    <View>
      <View style={styles.head}>
        <Text style={{ fontSize: 20, fontWeight: "bold" }}>{breed}</Text>
        <Text style={{ fontSize: 20, fontWeight: "bold", color: getColor(probability) }}>{probability * 100}%</Text>
      </View>
      <View style={styles.bar}>
        <View style={{ width: `${probability * 100}%`, height: "100%", backgroundColor: getColor(probability) }} />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  head: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  bar: {
    width: "100%",
    height: 8,
    marginTop: 10,
    borderColor: "#222222",
    borderWidth: 1,
    borderRadius: 8,
    overflow: "hidden",
  }
})

export default ProbabilityBar