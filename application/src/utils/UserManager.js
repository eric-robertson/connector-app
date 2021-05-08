import * as API from './API'
import * as Local from './LocalStorage';
import Config from './Config'
import { useState } from 'react/cjs/react.development';

let userData = undefined;

export const userAccountExists = async ( exists ) => {
    let user = await Local.userIdExists()
    exists( user )
}

export const pullUser = async ( ) => {
    let id = await Local.getUserId()
    userData = await API.requestRoutePromise( 'read', {id} )
    return userData
}
export const getUser = async ( ) => {
    if ( ! userData ) await pullUser()
    return userData
}

export const createUser = async ( data ) => {
    // Application specific info here
    let accountData = {}
    accountData[Config.appSignup] = data

    // Create account
    let response = await API.requestRoutePromise( 'create', {item:accountData} )
    console.log({response})
    let id = response.id

    // Save id
    await Local.setUserId(id)

    // Pull User
    await pullUser()

}

export const AddPerson = async ( person, frequency ) => {

    let user = await getUser()
    let id = await Local.getUserId()

    if ( !('people' in user.objectContent) )
        user.objectContent.people = []
    
    user.objectContent.people.push({
        person, 
        frequency, 
        lastContact : +Date.now()
    })

    let response = await API.requestRoutePromise( 'update', {
        id,
        modifications : user.objectContent
    })

    console.log(response.payload)

}
export const RemovePerson = async ( person ) => {

    let user = await getUser()
    let id = await Local.getUserId()
    
    let new_people = user.objectContent.people.filter( p => p.person != person )
    user.objectContent.people = new_people

    let response = await API.requestRoutePromise( 'update', {
        id,
        modifications : user.objectContent
    })

    console.log(response.payload)

}

export const useUser = ( ) => {
    const [user,setUser] = useState( undefined )

    if ( ! user ){
        ( async () => { 
            let u = await getUser(); 
            setUser(u)
        })()
    }

    return user
}