import { Text, View, StyleSheet, Alert, FlatList, SafeAreaView } from 'react-native'
import { useState } from 'react'
import PrimaryButton from '../components/PrimaryButton'

function generateRandomBetween(min, max, exclude) {
    const randomNumber = Math.floor(Math.random() * (max - min)) + min

    if (randomNumber === exclude) {
        return generateRandomBetween(min, max, exclude)
    }
    return randomNumber
}

export default function GameScreen({ userNumber, onResetGame }) {
    const initialGuess = generateRandomBetween(1, 100, userNumber)
    const [currentGuess, setCurrentGuess] = useState(initialGuess)
    const [minBoundary, setMinBoundary] = useState(1)
    const [maxBoundary, setMaxBoundary] = useState(99)
    const [guesses, setGuesses] = useState([])
    const [tour, setTour] = useState(0)

    const onLower = () => {
        if (currentGuess < userNumber) {
            Alert.alert("Nope!", "Your number is higher!", [{ text: "Okay" }])
            return
        }
        setMaxBoundary(currentGuess)
        const nextGuess = generateRandomBetween(minBoundary, currentGuess, currentGuess)
        setCurrentGuess(nextGuess)
        checkGuess(nextGuess)
        setGuesses((prevGuesses) => [nextGuess, ...prevGuesses])
        setTour((prev) => prev + 1)
    }

    const onHigher = () => {
        if (currentGuess > userNumber) {
            Alert.alert("Nope!", "Your number is lower!", [{ text: "Okay" }])
            return
        }
        setMinBoundary(currentGuess + 1);
        const nextGuess = generateRandomBetween(currentGuess + 1, maxBoundary, currentGuess)
        setCurrentGuess(nextGuess)
        checkGuess(nextGuess)
        setGuesses((prevGuesses) => [nextGuess, ...prevGuesses])
        setTour((prev) => prev + 1)
    }

    const checkGuess = (guess) => {
        if (guess === userNumber) {
            Alert.alert(
                "Congratulations!",
                `Your phone needed ${tour} rounds to guess the number ${userNumber}.`,
                [
                    { text: "OK" },
                    { text: "Play Again", onPress: onResetGame },
                    { text: "Cancel", style: "cancel" }
                ]
            )
        }
    }

    return (
        <SafeAreaView style={styles.screen}>
            <Text style={styles.title}>Opponent's Guess</Text>
            <Text style={styles.guess}>{currentGuess}</Text> 
            <View style={styles.contentContainer}>
                <Text style={styles.question}>Higher or lower?</Text>
                <View style={styles.buttonsContainer}>
                    <PrimaryButton onPress={onHigher}>+</PrimaryButton>
                    <PrimaryButton onPress={onLower}>-</PrimaryButton>
                </View> 

                <FlatList 
                    data={guesses}
                    keyExtractor={(item, index) => index.toString()} 
                    renderItem={({ item, index }) => (
                      <View style={styles.guessItem}>
                        <Text style={styles.flatListText}>#{guesses.length - index} Opponent's guess: {item}</Text>
                      </View>
                    )}
                    contentContainerStyle={styles.flatListContainer}
                />
            </View>
        </SafeAreaView>
    )
}
const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 24,
        alignItems: 'center',
        justifyContent: 'flex-start',
        marginTop: 50,
        backgroundColor: '#f0f0f5', 
    },
    title: {
        padding: 12,
        borderWidth: 1,
        borderColor: '#333',
        width: "80%",
        textAlign: "center",
        fontSize: 20,
        fontWeight: '600',
        borderRadius: 8,
        color: 'green',
        marginBottom: 20,
        marginTop: 40
    },
    guess: {
        padding: 15,
        borderWidth: 1,
        borderColor: '#333',
        width: "60%",
        textAlign: "center",
        fontWeight: "bold",
        fontSize: 32,
        color: '#333',
        borderRadius: 8,
        backgroundColor: '#e0e0e0',
        marginBottom: 20,
    },
    contentContainer: {
        marginTop: 10, 
        width: '90%', 
        alignItems: 'center',
        backgroundColor: '#fff',
        padding: 16,
        borderRadius: 8,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 8,
        elevation: 4,
    },
    buttonsContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        width: '100%',
        marginVertical: 15,
        gap: 30
    },
    flatListContainer: {
        width: '100%',
        paddingHorizontal: 20,
        marginTop: 10,
    },
    guessItem: {
        padding: 12,
        marginVertical: 6,
        borderColor: 'green',
        borderWidth: 1,
        borderRadius: 8,
        alignItems: 'center',
        backgroundColor: '#fafafa',
        width: "100%",  
        alignSelf: 'center',
    },
    flatListText: {
        color: '#333',
        fontSize: 15,
    },
    tourText: {
        fontSize: 18,
        fontWeight: '500',
        color: '#666',
        marginVertical: 10,
    },
    question: {
        width: "80%",
        textAlign: "center",
        fontSize: 16,
        fontWeight: '800',
        color: 'red',
        marginTop: 10
    }
})
