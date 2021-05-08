import React, {useState} from 'react'
import { View, Text, ScrollView} from 'react-native'
import * as Local from '../../utils/LocalStorage'
import Config from '../../utils/Config'
import * as UserManager from '../../utils/UserManager'
import { Button, CenterIcon, Input, LoadingPage, Paper } from '../../components'
import { refresh } from '../../Router'
import Time from '../../utils/Time'


const Profile = ({ navigation }) => {

    const userData = UserManager.useUser()

    if ( ! userData ) return <LoadingPage />
    console.log( userData, Config.appSignup)
    const accountData = userData.objectContent[Config.appSignup]
    const joinDate = Time(userData.created)

    return (
        <ScrollView>
            <CenterIcon icon={Config.appIcon} text={Config.appName} />
            <View style={{marginBottom:20}}>
                <Paper title="Account Info">
                    <Text>
                        {Config.signupPrompt} : {accountData} 
                    </Text>
                    <Text>
                        Account Created : {joinDate}
                    </Text>
                </Paper>
                <Paper title="Local Data">
                    <Button title="Clear User" onPress={ () => {
                        Local.clearData()
                        refresh() 
                    }} />
                </Paper>
            </View>
        </ScrollView>
    )
}

export default Profile
