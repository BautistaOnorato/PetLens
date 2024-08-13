export interface Probability {
  probability: number
  breed: string
}

export interface Animal {
  img: string
  probabilities: Probability[]
}

