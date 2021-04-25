const express = require( "express" );
const app = express();
const PORT = process.env.PORT ? process.env.PORT : 8080;

const welcomePath = __dirname + "/public/welcome.html";
const folderPath = __dirname + "/public";

app.use( express.static( "public" ) );

const fetch = require( "node-fetch" );

app.get( "/", ( req, res ) => {
    res.sendFile( welcomePath );
} );

app.get( "/dragons", ( req, res ) => {
    res.sendFile ( folderPath + "/dragons.html" );
} );

app.get( "/potato", ( req, res ) => {
    if ( req.query.query === "spud" ) {
        return res.send( { response: "petite potato" } );
    }
    return res.send( { response: "adult potato" } );
} );

app.get( "/crypto", ( req, res ) => {
    res.sendFile( __dirname + "/public/crypto/crypto.html" );
} );

app.get( "/proxy", ( req, res ) => {
    fetch( "https://www.google.com" )
        .then( res => res.textConverted() )
        .then( body => res.send( body ) );   
} );

const server = app.listen( PORT, ( error ) => {
    if ( error ) {
        console.log( error );
    }
    console.log( "Server running on port: ", server.address().port );
    // $env:PORT="3000"; nodemon app.js - POWERSHELL
    // set PORT=3000 & nodemon app.js - CMD
} );

//function callback1 ( ( ) => {
//    callback2();
//} );

//Promises - 2 states
// pending ; fulfilled
// they can be: resolved / rejected

new Promise( ( resolve, reject ) => {
    resolve( "Everything good" );
} ).then( message => {
    console.log( message );
} );

new Promise( ( resolve, reject ) => {
    setTimeout( () => {
        resolve( "Everything but later" );
    }, 4000 ); 
} ).then( message => {
    console.log( message );
} );

new Promise( ( resolve, reject ) => {
    reject( "Everything wrong" );
} ).then( message => {
    console.log( message );
} ).catch( (error) => {
    console.log( error );
} );

new Promise( ( resolve, reject ) => {
    resolve( "Happy days are coming" );
} ).then( ( message ) => {
    console.log( message );
} );

new Promise( ( resolve, reject ) => {
    reject( "Happy days will never come" );
} ).then( message => console.log( message ) )
   .catch( error => console.log( error ) );

new Promise( ( resolve, reject ) => {
    try {
        setTimeout( ( message ) => {
            resolve( "This good, yes ?" );
        }, 1500 );
    } catch {
        reject( "This not so good, nah." );
    }
    
} );

function myPromiseFunction() {
    return new Promise( ( resolve, reject ) => {
        try {
            setTimeout( ( message ) => {
                resolve( "This good, yes ?" );
            }, 1500 );
        } catch {
            reject( "This not so good, nah." );
        }
    } );
}

myPromiseFunction().then( ( message ) => {
    console.log( message );
} ).catch( ( error ) => {
    console.log( error );
} );

// async - await -> syntactical sugar of promises

// This is iife - immediately invoked function expression
(async function asyncFunction() {
    const message = await myPromiseFunction();
    console.log( message );
})()

//asyncFunction();
