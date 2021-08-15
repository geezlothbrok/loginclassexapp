import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import LoginPage from './src/screens/LoginPage'

export default function App() {
  return (
    <View style={styles.container}>
        <LoginPage />
    </View>
  )
}
const styles = StyleSheet.create({
  container:{
    flex:1
  }
})
