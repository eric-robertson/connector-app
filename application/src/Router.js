import React, { useState } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import * as UserManger from './utils/UserManager'

import SignupPage from './screens/SignupPage'
import TabNavigator from './screens/TabNavigator'
import LoadingPage from './components/LoadingPage'

const Stack = createStackNavigator()
export let refresh = undefined;

export default function Routes() {

    const [ _ , setUpdate ] = useState(0)
    const [ loaded, setLoaded ] = useState( false )
    const [ exists, setExists ] = useState( false )

    // Setup global refresh
    refresh = () => {
        setLoaded( false )
        setUpdate( _ + 1 )
    }

    // Load user
    if ( ! loaded ) {
        
        UserManger.userAccountExists( e => {
            setExists( e );
            setLoaded( true );
        })
        return <LoadingPage />
    }
    if ( ! exists ) return <SignupPage />
    
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName='TabNavigator' screenOptions={{ headerShown: false }}>
                <Stack.Screen name='TabNavigator' component={TabNavigator} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}
