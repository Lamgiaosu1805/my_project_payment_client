import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function SignInScreen({navigation}) {
  return (
    <View style = {styles.container}>
      <Text onPress={() => {navigation.navigate("Home")}} >SignInScreen</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1
    }
})