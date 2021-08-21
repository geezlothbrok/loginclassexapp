import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import PhoneBook from './src/screens/PhoneBook';
//import LoginPage from './src/screens/LoginPage'


export default function App() {
  return (
    <View style={styles.container}>
      <PhoneBook />
    </View>
  )
}
const styles = StyleSheet.create({
  container:{
    flex:100
  }
})
