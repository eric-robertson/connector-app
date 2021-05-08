import React, { useState } from 'react'
import { Text, View } from 'react-native'
import { CenterButton, CenterIcon, Input, LoadingPage, Multiselect, SearchList} from '../../components'
import { AddPerson } from '../../utils/UserManager';

export default  ({ onClose }) => {

    const [updating, setUpdating] = useState(false);
    const [name,setName] = useState('')
    const [selected, setSelected] = useState("1 Week");

    if (updating) return <LoadingPage/>

    return (
        <View >
            <CenterIcon icon="account-plus" text="Add New Person"/>
            <View style={{marginVertical: 40}} />
            <Input text="Enter Person Name" setName={setName}/>
            <Multiselect label="Frequency" onChange={setSelected} options={['3 Days', '1 Week', '2 Weeks', '1 Month', '2 Months']} />
            <CenterButton text="Add" onPress={ async () => {
                setUpdating(true)
                await AddPerson( name, selected )
                onClose()
            }} />
        </View>
    )
}
