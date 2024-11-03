import { Text, View, StyleSheet } from 'react-native';
import { useState } from 'react';
import PrimaryButton from '../components/PrimaryButton';

function generateRandomBetween(min, max, exclude) {
    const randomNumber = Math.floor(Math.random() * (max - min) + min);
    if (randomNumber === exclude) {
        return generateRandomBetween(min, max, exclude); // exclude ile aynı değilse tekrar üret
    }
    console.log(randomNumber);
    return randomNumber;
}

export default function GameScreen({ userNumber }) {
    const initialGuess = generateRandomBetween(1, 100, userNumber);

    return (
        <View style={styles.screen}>
            <Text>Opponent's Guess</Text>
            <Text>{initialGuess}</Text> 
            <View>
                <Text>Higher or lower?</Text>
                <View style={styles.buttonsContainer}>
                    <PrimaryButton style={styles.buttonContainer}>+</PrimaryButton>
                    <PrimaryButton style={styles.buttonContainer}>-</PrimaryButton>
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
    buttonContainer: {
        backgroundColor: 'black',
        paddingVertical: 8,
        paddingHorizontal: 12,
        borderRadius: 5,
    },
});
