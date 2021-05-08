import React, { useState, useEffect } from 'react'
import { View, Button, StyleSheet, TouchableOpacity, Text } from "react-native";
import * as Color from '../utils/Color';

const styles = StyleSheet.create({
    appButtonContainer: {
        elevation: 5,
        borderRadius: 4,
        paddingVertical: 10,
        paddingHorizontal: 12,
        margin: 20,
    },
    appButtonText: {
        fontSize: 18,
        fontWeight: "bold",
        alignSelf: "center",
    }
});

export default ({ title, onPress }) => {

    const container = { 
        backgroundColor : onPress ? Color.primary() : Color.paper(), 
        opacity : onPress ? 1 : 0.5
    }
    const text = { color : Color.secondary() }

    return (
        <View  >
            {onPress ? 
                <TouchableOpacity onPress={onPress} style={[styles.appButtonContainer, container]}>
                    <Text style={[styles.appButtonText, text]}>{title}</Text>
                </TouchableOpacity>
            : 
                <View style={[styles.appButtonContainer, container]}>
                    <Text style={[styles.appButtonText, text]}>{title}</Text>
                </View>}

        </View>
        
    )
}