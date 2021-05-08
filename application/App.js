import React from 'react'
import Router from './src/Router'
import { View } from "react-native";
import * as Color from './src/utils/Color';

export default class App extends React.Component {

    constructor ( props ) {
        super ( props )
        Color.initializeTheme()
    }

	render() {
		return <View style={{ backgroundColor: Color.background(), height: '100%'}}>
            <Router />
        </View> 
	}
}
