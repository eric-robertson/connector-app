const U = require('../utils.js')

module.exports.handler = async event => {

    // Item to create, options about item
    const { item } = JSON.parse(event.body)

    // Id & Event
    const id = U.uuid()

    // Construct item
    const newItem = {
        id,
        objectContent : item,
        modifyCounter : 0,
        created : +new Date(),
        eventLog : []
    }

    // Insert item 
    let response = await U.writeFile( id, newItem )

    if ( response == U.events.ERROR )
        return U.package( 500, "Create Failed", {} )
    else
        return U.package( 200, "Item Created", { id } )

}