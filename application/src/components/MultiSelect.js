import React, { useState, useEffect } from 'react'
import { StyleSheet, Text, TextInput, View } from "react-native";
import { Button } from 'react-native-elements';
import * as Color from '../utils/Color';
import Paper from './Paper';

const Option = ({text, active, onClick}) => {

    return <View style={{
        
        }}>
        <Button
            onPress={onClick}
            containerStyle={{
                color: Color.text(),
                margin: 5,
                opacity: active? 1 : 0.2,
            }}
            buttonStyle={{
                backgroundColor: active ? Color.primary() : Color.secondary(),
                color: active ? Color.text() : Color.background(),
                padding: 10,
            }}
            titleStyle={{
                color: Color.text(),
                marginHorizontal: 10
            }}
            title={text}
        />
    </View>
}

export default ({ label, options, onChange }) => {

    const [selected, setSelected] = useState(undefined)

    return (
        <Paper title={label}>
            {options.map( (v,k) => <View key={k}>
                <Option text={v} active={selected==v} onClick={()=>{setSelected(v); onChange(v);}} />
            </View>)}
        </Paper>
            
    )
}