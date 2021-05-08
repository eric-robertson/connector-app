import React, { useState } from 'react'
import * as Local from './LocalStorage'
import config from './Config'

const baseURL = config.baseUrl
const getRoute = route => `${baseURL}${route}`

// Request a given route directly
export const requestRoute = async (route, body) => {
    return await fetch( getRoute(route), {
        method: 'POST',
        body: JSON.stringify( body )
    })
}

const logResponce =  ( route, response, data )=>{
    let body = JSON.parse( data );
    console.log(`Route to ${route} ------`)
    console.log({ status: response.status, message : body.message })
    console.log( body.payload )
    console.log('------')
}

export const requestRouteCallback = async ( route, data, setResponse ) => {
    let response = await requestRoute( route, data )
    let text = await response.text()
    logResponce( route, response, text )
    setResponse( JSON.parse( text ).payload )
}

export const requestRoutePromise = async ( route, data ) => {
    let response = await requestRoute( route, data )
    let text = await response.text()
    logResponce( route, response, text )
    return JSON.parse(text).payload
}
