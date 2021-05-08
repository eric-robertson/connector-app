import React, { useState } from 'react'
import { Modal, ScrollView, Text, View } from 'react-native'
import { CenterButton, LoadingPage, Paper, SearchList} from '../../components'
import * as UserManager from '../../utils/UserManager'
import AddPerson from './AddPerson'
import Time from '../../utils/Time'
import PillButton from '../../components/PillButton'
import { refresh } from '../../Router'

const PersonList = ({data}) => {

    return <View>
        <Paper>
            <Text style={{fontSize: 22, fontWeight: 'bold'}}>{data.person}</Text>
            <Text>Contact Approximately Every {data.frequency}</Text>
            <Text>Contacted Last: {Time(data.lastContact)}</Text>
        <PillButton text="X" onPress={ async ()=>{
            await UserManager.RemovePerson( data.person )
            refresh()
        }} />
        </Paper>
    </View>

}

const Home = ({ navigation }) => {

    const [modal, showModal] = useState(false)
    const userData = UserManager.useUser()

    if ( ! userData ) return <LoadingPage />

    console.log(userData.objectContent)

    return (
        <ScrollView>
            <View style={{marginTop:20}} />
            {userData.objectContent.people && userData.objectContent.people.map( (v,k) => <View key={k}>
                <PersonList data={v} />
            </View>)}
            <CenterButton icon="add-circle" text="Add New Person" onPress={()=>showModal(true)} />
            <Modal
                animationType="slide"
                visible={modal}
                onRequestClose={() => showModal(false)}>
                    <AddPerson onClose={() => showModal(false)}/>
            </Modal>
        </ScrollView>
    )
}

export default Home
