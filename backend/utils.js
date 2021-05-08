// Access to the S3 API for use in endpoints
let AWS = require("aws-sdk");
let config = require('./config.js')

// Access for s3
AWS.config.update({ region: "us-east-1" });
let s3 = new AWS.S3()
module.exports.s3 = s3

// Access for SES
const ses = new AWS.SES();

// Events
let events =  {
    CREATE : 'CREATE',
    UPDATE : 'UPDATE',
    ERROR : 'ERROR',
}
module.exports.events = events;

// Insert Objects
module.exports.writeFile = async ( id, body ) => {

    let response;
    try {
        response = await s3.putObject({
            Bucket: config.bucket,
            Key: `${config.application}/${id}`,
            Body: JSON.stringify(body),
            ContentType: "application/json"
        }).promise();
    }
    catch (e) {
        console.log(e)
        response = 'ERROR'
    }
    finally {
        return response;
    }
    
}

// Get Objects
module.exports.getFile = async ( id ) => {

    let response;
    try {
        response = await s3.getObject({
            Bucket: config.bucket,
            Key: `${config.application}/${id}`
        }).promise();
        response = JSON.parse(response.Body.toString())
    }
    catch (e) {
        console.log(e)
        response = events.ERROR
    }
    finally {
        return response;
    }

}

module.exports.listFiles = async () => {
    let data = await s3.listObjectsV2({
        Bucket: config.bucket,
        Prefix: `${config.application}/`
    }).promise()
    data = data.Contents.filter(d => d.Size > 0)
    return data;
}

// UUID for documents ( 21 character id )
module.exports.uuid = () => {
    let date = + new Date()
    let rand = Math.random() * 1000000 | 0
    let rand2 = Math.random() * 1000000 | 0
    return (rand.toString(16) + date.toString(16) + rand2.toString(16)).padEnd(21, '0')
}


module.exports.event = ( id, message, payload ) => {
    return {
        id, message, payload, time : + Date.now()
    }
}

// Requests 
module.exports.package = ( code, message, payload ) => {
    console.log('Function Response', { code, message, payload })
    return {
		headers: {
			'Access-Control-Allow-Origin': '*',
			'Access-Control-Allow-Methods': 'GET, POST, PATCH, PUT, DELETE, OPTIONS',
			'Access-Control-Allow-Headers': 'Origin, Content-Type, X-Auth-Token',
			'Access-Control-Allow-Credentials': true,
		},
        statusCode : code,
        body : JSON.stringify( { payload, message } )
    }
}

// Emails

module.exports.sendEmail = ( destination, content ) => {
    let params = {
        Source: 'e.robertson.js@gmail.com',
        Destination: {
            ToAddresses: [destination],
        },
        ReplyToAddresses: [],
        Message: {
            Body: {
                Html: {
                    Charset: 'UTF-8',
                    Data: content,
                },
            },
            Subject: {
                Charset: 'UTF-8',
                Data: `Daily Contact Updates`,
            }
        },
    };
    return ses.sendEmail(params).promise();
}