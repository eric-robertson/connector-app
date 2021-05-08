import React, {useState} from 'react'
import { ScrollView } from 'react-native'
import { Button, CenterIcon, Input, LoadingPage } from '../components'
import * as UserManager from '../utils/UserManager'
import Config from '../utils/Config'
import { refresh } from '../Router'

export default function Routes() {
    const [ data, setData] = useState('')
    const [ loading, setLoading ] = useState(false)
    const showCreate = data != ''

    const createAccount = async () => {
        setLoading( true )
        await UserManager.createUser( data )
        refresh()
    }

    if ( loading ) return <LoadingPage/>

    return  <ScrollView>
        <CenterIcon icon={Config.appIcon} text={Config.appName} />
        <Input text={Config.signupPrompt} setName={setData} />
        <Button title="Create Account" onPress={showCreate && createAccount}  /> 
    </ScrollView>
}
