import { Text, View, StyleSheet, Alert } from 'react-native';
import { useState } from 'react';
import PrimaryButton from '../components/PrimaryButton';

function generateRandomBetween(min, max, exclude) {
    const randomNumber = Math.floor(Math.random() * (max - min)) + min
    return randomNumber
}

export default function GameScreen({ userNumber }) {
    const initialGuess = generateRandomBetween(1, 100, userNumber)
    const [currentGuess, setCurrentGuess] = useState(initialGuess)
    const [tour, setTour] = useState(0)

    const onLower = () => {
        if (currentGuess < userNumber) {
            Alert.alert("Nope!", "Your number is higher!", [{ text: "Okay" }])
            return
        }

        const nextGuess = generateRandomBetween(userNumber, currentGuess, userNumber)
        setCurrentGuess(nextGuess)
        checkGuess(nextGuess)
    }
    
    const onHigher = () => {
        if (currentGuess > userNumber) {    
            Alert.alert("Nope!", "Your number is lower!", [{ text: "Okay" }])
            return
        }
     
        const nextGuess = generateRandomBetween(currentGuess + 1, userNumber, userNumber)
        setCurrentGuess(nextGuess)
        checkGuess(nextGuess)
    }

    const checkGuess = (guess) => {
        if (guess === userNumber) {
            Alert.alert("Congratulations!", "You won the game!", [{ text: "OK" }])
        }
    }

    return (
        <View style={styles.screen}>
            <Text>Opponent's Guess</Text>
            <Text>{currentGuess}</Text> 
            <View>
                <Text>Your number: {userNumber}</Text>
                <Text>Higher or lower?</Text>
                <View style={styles.buttonsContainer}>
                    <PrimaryButton onPress={onHigher}>+</PrimaryButton>
                    <PrimaryButton onPress={onLower}>-</PrimaryButton>
                </View> 
            </View>
            {/* <View>LOG ROUNDS</View> */}
        </View>
    );
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 24,
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonsContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginVertical: 10,
        gap: 10,
    },
});
