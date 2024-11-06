import { useState } from 'react';
import { StyleSheet } from 'react-native';

import StartGameScreen from './screens/StartGameScreen';
import GameScreen from './screens/GameScreen';

export default function App() {
  const [userNumber, setUserNumber] = useState();

  function pickedNumberHandler(pickedNumber) {
    setUserNumber(pickedNumber);
  }

  function resetGameHandler() {
    setUserNumber(undefined);  // userNumber'ı sıfırla, StartGameScreen'e dön
  }

  let screen = <StartGameScreen onPickNumber={pickedNumberHandler} />;
  
  if (userNumber) {
    screen = <GameScreen userNumber={userNumber} onResetGame={resetGameHandler} />;
  }

  return <>{screen}</>;
}

const styles = StyleSheet.create({});
