const U = require('../utils.js')

module.exports.handler = async event => {

    // Item to create, options about item
    const { id } = JSON.parse(event.body)

    // Read item
    let item = await U.getFile( id )

    if ( item == U.events.ERROR) 
        return U.package( 500, "Item Failed to Read", { id } )
    else
        return U.package( 200, "Item Read", item )

}