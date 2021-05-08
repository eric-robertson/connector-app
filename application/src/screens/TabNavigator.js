import React, { useEffect } from 'react'
import { BackHandler } from 'react-native'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

import People from './People/People'
import Profile from './Profile/Profile'
import Notifications from './Notifications/Notifications'
import * as Color from '../utils/Color'

const routeIcons = ({ route }) => ({

    tabBarIcon: ({ focused, color, size }) => {
        let iconName

        if (route.name === 'People')
            iconName = focused ? 'account-group' : 'account-group-outline'
        else if (route.name === 'Profile')
            iconName = focused ? 'account' : 'account-outline'
        else if (route.name === 'Event Log')
            iconName = focused ? 'bell' : 'bell-outline'

        return <Icon name={iconName} size={25} color={color} />
    }
})

const Tab = createMaterialBottomTabNavigator()

export default () => {

    // Disables back button so you cannot leave tab nav
    useEffect(() => {
        BackHandler.addEventListener('hardwareBackPress', () => true)
        return () => BackHandler.removeEventListener('hardwareBackPress', () => true)
    }, [])

    return (
        <Tab.Navigator 
            screenOptions={routeIcons} 
            activeColor={Color.primaryDark()} 
            inactiveColor={Color.secondary()} 
            barStyle={{ backgroundColor: Color.paper() }}
        >
            <Tab.Screen name='Event Log' component={Notifications} />
            <Tab.Screen name='People' component={People} /> 
            <Tab.Screen name='Profile' component={Profile} />
        </Tab.Navigator>
    )
}