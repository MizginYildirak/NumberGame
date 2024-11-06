import { useState } from 'react'
import { TextInput, View, StyleSheet, Text } from 'react-native'
import PrimaryButton from '../components/PrimaryButton'

export default function StartGameScreen({ onPickNumber }) {
    const [enteredNumber, setEnteredNumber] = useState("")

    function numberInputHandler(enteredText) {
        setEnteredNumber(enteredText)
    }

    function resetInputHandler() {
        setEnteredNumber('');
    }

    function confirmInputHandler() {
        const chosenNumber = parseInt(enteredNumber);
        if (!isNaN(chosenNumber)) {
            onPickNumber(chosenNumber);
        }
    }

    return (
        <View style={styles.rootContainer}>
            <View style={styles.inputContainer}>
                <Text style={styles.title}>Enter a Number</Text>
                <TextInput
                    style={styles.numberInput}
                    maxLength={2}
                    keyboardType="number-pad"
                    autoCapitalize="none"
                    autoCorrect={false}
                    onChangeText={numberInputHandler}
                    value={enteredNumber}
                />
                <View style={styles.buttonsContainer}>
                    <View style={styles.buttonContainer}>
                        <PrimaryButton onPress={resetInputHandler}>Reset</PrimaryButton>
                    </View>
                    <View style={styles.buttonContainer}>
                        <PrimaryButton onPress={confirmInputHandler}>Confirm</PrimaryButton>
                    </View>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    rootContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f9f9fb',
        paddingHorizontal: 16,
    },
    inputContainer: {
        width: '80%',
        alignItems: 'center',
        padding: 20,
        backgroundColor: '#f0f0f5',
        borderRadius: 10,
        elevation: 5,
        shadowColor: 'black',
        shadowOpacity: 0.25,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 6,
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10,
        color: 'green',
    },
    numberInput: {
        width: '40%',
        height: 50,
        borderBottomColor: '#ddb52f',
        borderBottomWidth: 2,
        fontSize: 32,
        marginVertical: 10,
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#333',
    },
    buttonsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 20,
        width: '100%',
    },
    buttonContainer: {
        flex: 1,
        marginHorizontal: 5,
    },
});
