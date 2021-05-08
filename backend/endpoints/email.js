const U = require('../utils.js')

const times = {
    '3 Days': 3 * 24 * 60 * 60 * 1000,
    '1 Week': 7 * 24 * 60 * 60 * 1000,
    '2 Weeks': 14 * 24 * 60 * 60 * 1000,
    '1 Month': 30 * 24 * 60 * 60 * 1000,
    '2 Months': 60 * 24 * 60 * 60 * 1000,
}
const max = 3


module.exports.handler = async event => {

    let files = await U.listFiles()
    
    console.log(files)

    for ( const f in files ){
        
        const file = files[f]
        console.log(file)
        
        try {

            let target_file = await U.getFile( file.Key.split('/')[1])
            let people = target_file.objectContent.people
            let now = + Date.now() 

            let people_to_contact = []

            people.forEach( (p,i) => {
                if ( p.lastContact + times[p.frequency] < now ){
                    const delta = now - (p.lastContact + times[p.frequency])
                    people_to_contact.push({ i, delta })
                }
            })

            people_to_contact.sort( (a,b) => (a.delta > b.delta)? 1 : -1 )
            people_to_contact = people_to_contact.slice(0, max).map( v => {
                people[v.i].lastContact = now
                return people[v.i].person
            })

            console.log("Finished")
            console.log({people_to_contact})

            if ( people_to_contact.length > 0 ){
                await U.sendEmail(target_file.objectContent.email, `Contact List for today: <br/><br/>${people_to_contact.join('<br/>')}`)
                target_file.eventLog.push( U.event( 0, 'EMAIL', people_to_contact ) )
            }

            await U.writeFile( file.Key.split('/')[1], target_file )
        }
        catch (e){
            console.log("FAILED")
            console.log(e)
        }

    }

    return U.package( 200, "Success", {} )

}

