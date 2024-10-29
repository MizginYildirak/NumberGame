import {View, Text, Pressable, StyleSheet} from 'react-native'

export default function PrimaryButton({children, onPress}) {
    return (
    <View style={styles.buttonOuterContainer}>
      <Pressable
        onPress={onPress}
      >
        <Text style={styles.buttonText}>{children}</Text>
      </Pressable>
      </View>
    )
}

const styles = StyleSheet.create({
  buttonOuterContainer: {
    borderRadius: 28,
    margin: 4,
    overflow: 'hidden',
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
  },
})