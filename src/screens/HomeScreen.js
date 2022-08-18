import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

const HomeScreen = () => {
  return (
    <SafeAreaView style={{backgroundColor: 'red', flex: 1}}>
      <Text>HomeScreen</Text>
    </SafeAreaView>
  )
}

export default HomeScreen

const styles = StyleSheet.create({

})