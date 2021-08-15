import React, { Component } from 'react'
import { Text, View, StyleSheet, TextInput, TouchableOpacity } from 'react-native'

export default class LoginPage extends Component {
    render() {
        return (
            <View style ={ styles.container }>
               
                <View style = {styles.loginContainer}>
                  <Text style = {styles.login}>Log in</Text>
                </View>

                <View style = { styles.data }>
                    <TextInput placeholder = 'Username' style = {styles.input}></TextInput>
                    <View style = { styles.line }></View>

                    <TextInput placeholder = 'Password' style = {styles.input}></TextInput>
                    <View style = { styles.liner }></View>

                    <View style = { styles.passwordLink}>
                        <TouchableOpacity>
                            <Text style = { styles.password}>Forgot password?</Text>
                        </TouchableOpacity>
                    </View>
                    
                </View>

                <View style = {styles.buttonContainer}>
                    <TouchableOpacity style = {styles.button}>
                        <Text style = {styles.buttonText}>Log  in</Text>
                    </TouchableOpacity>
                </View>

                <View style = {styles.signupContainer}>
                    <Text style = {styles.signupText}>Don't have an account?</Text>
                    <TouchableOpacity>
                        <Text style = {styles.signUp}>Sign up</Text>
                    </TouchableOpacity>
                </View>

            </View>
        )
    }
}



const styles = StyleSheet.create ( {
        container : {
            flex : 1,
            marginTop: 30,
            marginHorizontal : 40
            
        },
        loginContainer : {
            flex : 0.2,
            // justifyContent : 'center',
            // alignItems : 'center',
        },
        login : {
            fontSize : 40,
            alignContent : 'center',
            alignItems : 'center',
            // paddingLeft : 50,
            paddingTop : 40,
            color : '#4C00A7'
        },
        data : {
            flex : 0.4,
            paddingTop : 20,
            // paddingLeft : 20
            
        },
        input : {
            fontSize : 18,
            // paddingLeft : 50,
            paddingBottom : 10,
            

            
           
        },
        line : {
            backgroundColor : '#4C00A7',
            // paddingHorizontal : 20,
            height : 2,
            marginBottom : 35
            
        },
        liner : {
            backgroundColor : '#4C00A7',
            
            height : 2,
            marginBottom : 10
            
        },
        passwordLink : {
           alignItems : 'flex-end' 
        },
        password : {
            color : '#5E90C4'
        },
        buttonContainer : {
            flex : 0.2,
            alignItems : 'center',
            justifyContent : 'center',
        },
        button : {
            width : '100%',
            height : 55,
            backgroundColor : '#6300B3',
            justifyContent : 'center',
            alignItems : 'center',
            borderRadius : 13
        },
        buttonText : {
            color : 'white',
            fontWeight : 'bold',
            fontSize : 22
        },
        signupContainer : {
            flexDirection : 'row',
            justifyContent: 'center',
            alignItems: 'center',
            flex: .2
        },
        signUp : {
            color: '#6300B3',
            marginLeft : 7
        },
        signupText : {
            fontWeight : 'normal'
        }
        
        
} )