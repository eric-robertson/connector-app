import React, { useState, useEffect } from 'react'
import { View, StyleSheet, TouchableOpacity, Text } from "react-native";
import { Button } from 'react-native-elements';
import * as Color from '../utils/Color';

const styles = StyleSheet.create({
    container: {
        elevation: 5,
        justifyContent: 'center',
        paddingVertical: 30,
        marginHorizontal: 20,
        alignItems: 'center',
        
    },
    text : {
        paddingTop: 20,
        fontSize: 30,
        fontWeight: 'bold'
    }
});

export default ({ icon, text, onPress }) => {

    const buttonStyle = {
    }

    return (
        <View style={[styles.container, buttonStyle]}>
            <Text text={text} />
            <Button
                onPress={onPress}
                containerStyle={{
                    color: Color.text(),
                    width: '100%'
                }}
                icon={icon?{
                    name: icon,
                    size: 15,
                    color: Color.text(),
                    style:{
                        marginHorizontal: 5
                    }
                }:undefined}
                buttonStyle={{
                    backgroundColor: Color.primary(),
                    color: Color.text(),
                    padding: 10,
                }}
                titleStyle={{
                    color: Color.text(),
                    marginHorizontal: 10
                }}
                title={text}
            />
        </View>
    )
}