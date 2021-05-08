import React, { useState, useEffect } from 'react'
import { SearchBar, Icon} from 'react-native-elements';
import { View, Button, StyleSheet, TouchableOpacity, Text } from "react-native";
import * as Color from '../utils/Color';

export default ({ text, onChange }) => {
    
    const [state, setState] = useState("");

    return (
        <SearchBar
          placeholder={text}
          onChangeText={(t)=>{setState(t); onChange(t)}}
          value={state}
          clearIcon={'cancel'}
          containerStyle = {{
              backgroundColor: Color.background(),
              borderBottomWidth: 0,
              padding: 10,
          }}
          inputContainerStyle = {{
              backgroundColor: Color.paper(),
              elevation: 8
          }}
          inputStyle = {{
              color : Color.text()
          }}
        />
    )  
}