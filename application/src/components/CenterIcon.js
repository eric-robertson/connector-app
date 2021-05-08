import React, { useState, useEffect } from 'react'
import { View, Button, StyleSheet, TouchableOpacity, Text } from "react-native";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import * as Color from '../utils/Color';

const styles = StyleSheet.create({
    container: {
        elevation: 5,
        flex: 1,
        justifyContent: 'center',
        paddingVertical: 30,
        marginTop: 60,
        marginHorizontal: 20,
        alignItems: 'center',
        
    },
    text : {
        paddingTop: 20,
        fontSize: 30,
        fontWeight: 'bold'
    }
});

export default ({ icon, text }) => {
    return (
        <View style={styles.container}>
            <Icon name={icon} color={Color.primary()} size={130}/>
            <Text style={[styles.text, {color: Color.primary() }]}>{ text }</Text>
        </View>
    )
}