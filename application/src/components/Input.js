import React, { useState, useEffect } from 'react'
import { StyleSheet, TextInput, View } from "react-native";
import * as Color from '../utils/Color';

const styles = StyleSheet.create({
    container: {
        elevation: 8,
        borderRadius: 4,
        paddingHorizontal: 12,
        margin: 20,
        marginBottom: 0
    },
    text : {
        color: Color.primaryDark(),
        fontSize: 15,
        textAlign: 'center'
    }
});

export default ({ text, setName }) => {

    const container = { backgroundColor : Color.background() }

    return (
        <View style={[styles.container, container]}>
            <TextInput
                style={styles.text}
                onChangeText={setName}
                placeholder={text}
                placeholderTextColor={Color.text()}
            />
        </View>
    )
}