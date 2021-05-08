import React, { useState } from 'react'
import { Modal, ScrollView, Text, View } from 'react-native'
import { CenterButton, LoadingPage, Paper, SearchList} from '../../components'
import * as UserManager from '../../utils/UserManager'
import Time from '../../utils/Time'
import PillButton from '../../components/PillButton'
import { refresh } from '../../Router'

const Event = ( {data} ) => {

    return <Paper title={data.message}>
        <Text>{JSON.stringify(data.payload)}</Text>
        <Text>{Time(data.time)}</Text>
    </Paper>

}

const Notifications = ({ navigation }) => {
    const userData = UserManager.useUser()
    if ( ! userData ) return <LoadingPage />
    return (
        <ScrollView>
            <View style={{marginTop:20}} />
            {userData.eventLog.reverse().map( (v,k) => <View key={k}>
                <Event data={v} />
            </View>)}
            <View style={{marginTop:20}} />
        </ScrollView>
    )
}

export default Notifications
