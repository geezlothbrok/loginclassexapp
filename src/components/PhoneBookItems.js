import React, { Component } from 'react'
import { Image, StyleSheet, Text, View } from 'react-native';
import { MaterialIcons, MaterialCommunityIcons, SimpleLineIcons } from '@expo/vector-icons';

const PhoneBookItems = ({name, number, image}) => {
    return (
            <View style = {styles.container}>
                <View style = {styles.imageContainer}>
                    <Image style = {styles.image} source = {image}></Image>
                </View>

                <View style = {styles.detailsContainer}>
                    <Text style = {styles.name} numberOfLines = {1}>{name}</Text>
                    <Text style = {styles.number} >{number}</Text>
                </View>

                <View style = {styles.iconsContainer}>
                    <View>
                     <MaterialIcons name="phone" size={28} color="#00A9FF" />
                    </View>

                    <View>
                    <MaterialCommunityIcons name="message-processing" size={28} color="#00A9FF" />
                    </View>

                    <View>
                    <SimpleLineIcons name="options-vertical" size={24} color="grey" />
                    </View>
                </View>
            </View>
    );
};

export default PhoneBookItems;


const styles = StyleSheet.create({
    container : {
        flex : 1,
        flexDirection : 'row',
        marginTop : 40,
        marginHorizontal : 20

    },
    imageContainer : {
        flex : 0.2,
    },
    image : {
        height : 70,
        width : 70,
        borderRadius : 50
    },
    iconsContainer : {
        flex : 0.4,
        flexDirection : 'row',
        paddingLeft : 35,
        justifyContent : 'space-around',
        paddingTop : 15
    },
    detailsContainer : {
        flex : 0.4,
        paddingLeft : 40,
        paddingTop : 5
    },
    name : {
        fontWeight : 'bold',
        fontSize: 16
    },
    number : {
        color : '#444444'
    }

})