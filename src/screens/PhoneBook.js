import React, { Component } from 'react'
import { FlatList, Text, View, ScrollView, StyleSheet, } from 'react-native'
import PhoneBookItems from '../components/PhoneBookItems';

const PhoneBook = () => {
    const nameList = [
        {
            name : 'Abdul Geez',
            number : '003-4567-956',
            image : require ('../../assets/geez.jpeg'),
        },

        {
            name : 'Jonny Bob',
            number : '+123477899',
            image : require('../../assets/JohnnySins.jpeg'),
        },

        {
            name : 'Sub Zero',
            number : '+456789876',
            image : require('../../assets/sark.jpeg'),
        },

        {
            name : 'Charles Don',
            number : '+12345778999',
            image : require('../../assets/shattawale.jpeg'),
        },

        {
            name : 'Stone Gad',
            number : '+34567890',
            image : require('../../assets/Stonebwoy.jpeg'),
        }
    ];
    return (
        <View style= {styles.container}>
            <FlatList data = {nameList} renderItem={({item}) => {
                return (
                    <PhoneBookItems name ={item.name} number = {item.number} image = {item.image} />
                );
            }} keyExtractor = {(item) => item.number} />
        </View>
    )
    
}
export default PhoneBook;

const styles =StyleSheet.create({
    container : {
        flex : 1
    }
})