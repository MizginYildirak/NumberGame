import { useState } from 'react'
import { TextInput, View, StyleSheet, Text } from 'react-native'
import PrimaryButton from '../components/PrimaryButton'

 export default function StartGameScreen({onPickNumber}) {
    const [enteredNumber, setEnteredNumber] = useState("")

    function numberInputHandler(enteredText) {
        setEnteredNumber(enteredText)
    }

    function resetInputHandler() {
        setEnteredNumber('');
      }    

    function confirmInputHandler() {
        const chosenNumber = parseInt(enteredNumber);
        onPickNumber(chosenNumber);
    }

    return (
    <View style={style.inputContainer}>
        <Text>Enter a number</Text>
        <TextInput 
        style={style.numberInput} 
        maxLength={2} 
        keyboardType="number-pad"
        autoCapitalize="none"
        autoCorrect={false}
        onChangeText={numberInputHandler}
        value={enteredNumber}
        />
        <View style={style.buttonsContainer}>
            <View style={style.buttonContainer}>
                 <PrimaryButton onPress={resetInputHandler}>Reset</PrimaryButton>
            </View>
            <View style={style.buttonContainer}>
                 <PrimaryButton onPress={confirmInputHandler}>Confirm</PrimaryButton>
            </View>
    </View>
</View>  
    )
 }

 const style = StyleSheet.create({
    inputContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: "gray"
    },
    numberInput: {
        width: 50,
        height: 50,
        borderBottomColor: '#ddb52f',
        borderBottomWidth: 2,
        fontSize: 32,
        marginVertical: 8,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    buttonsContainer: {
        flexDirection: 'row',
        gap: 10
    },
    buttonContainer: {
        backgroundColor: "black",
        width: 100,
        height: 40,
        textAlign: "center",
        borderRadius: 5,
        marginVertical: 10
      }
 })