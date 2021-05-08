import React, { useState, useEffect } from 'react'
import { View, StyleSheet, TouchableOpacity, Text } from "react-native";
import { Button } from 'react-native-elements';
import * as Color from '../utils/Color';

const styles = StyleSheet.create({
    container: {
        elevation: 5,
        justifyContent: 'center',
        alignItems: 'flex-end',
        position: 'absolute',
        top: -10,
        right: 10
        
    },
    text : {
        paddingTop: 20,
        fontSize: 30,
        fontWeight: 'bold'
    }
});

export default ({ icon, text, onPress }) => {

    return (
        <View style={[styles.container]}>
            <Text text={text} />
            <Button
                onPress={onPress}
                containerStyle={{
                    color: Color.text(),
                }}
                icon={icon?{
                    name: icon,
                    size: 12,
                    color: Color.background(),
                }:undefined}
                buttonStyle={{
                    backgroundColor: Color.secondary(),
                    color: Color.text(),
                    padding: 5,
                    borderRadius: 10,
                }}
                titleStyle={{
                    color: Color.background(),
                    fontSize: 12,
                    marginHorizontal: 10
                }}
                title={text}
            />
        </View>
    )
}