import React, { useState, useEffect } from 'react'
import { StyleSheet, Text, TextInput, View } from "react-native";
import * as Color from '../utils/Color';

const styles = StyleSheet.create({
    container: {
        elevation: 8,
        borderRadius: 4,
        paddingHorizontal: 12,
        margin: 20,
        paddingVertical: 20,
        paddingHorizontal: 30,
        marginBottom: 0,
        marginTop: 30,
    },
    title : {
        position: 'absolute',
        top: -10,
        fontSize: 15,
        paddingHorizontal: 10, 
        fontWeight: 'bold',
        borderRadius: 10,
        left: 20,
    }
});

export default ({ children, title }) => {

    const container = { backgroundColor : Color.paper() }
    const text = { color : Color.secondary(), backgroundColor : Color.paper() }

    return (
        <View style={[styles.container, container]}>
            {children}
            { title ? <Text style={[styles.title, text]}>
                {title}
            </Text> : null }
        </View>
    )
}