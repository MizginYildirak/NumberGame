import { useState } from 'react'
import { StyleSheet } from 'react-native'

import StartGameScreen from './screens/StartGameScreen'
import GameScreen from './screens/GameScreen'

export default function App() {
  const [userNumber, setUserNumber] = useState()

  function pickedNumberHandler(pickedNumber) {
    setUserNumber(pickedNumber)
  }

  let screen = <StartGameScreen onPickNumber={pickedNumberHandler} />
  
  if (userNumber) {
    screen = <GameScreen />
  }

  return <>{screen}</>
}

const styles = StyleSheet.create({})
