const U = require('../utils.js')

module.exports.handler = async event => {

    // Item to create, options about item
    const { id, modifications } = JSON.parse(event.body)

    // Options for item
    const updateEvent = U.event( id, U.events.UPDATE, Object.keys(modifications) )
    const item = await U.getFile( id )

    // Failed to find item
    if ( item == U.events.ERROR ) 
        return U.package( 500, "Item Failed to Read" )

    // Update data
    const newContent = {
        ...item.objectContent,
        ...modifications,
    }
    const newEvents = [
        ...item.eventLog,
        updateEvent
    ]
    item.objectContent = newContent
    item.eventLog = newEvents
    item.modifyCounter += 1

    // Write Data Out
    let response = await U.writeFile( id, item )

    if ( response == U.events.ERROR )
        return U.package( 500, "Update Failed", {} )
    else
        return U.package( 200, "Item Updated", { id, updateEvent } )

}