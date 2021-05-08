// importing and exporting through the module system instead of the commonjs system ( require )
import express from "express";
import helmet from "helmet";
import rateLimiter from "express-rate-limit";
import session from "express-session";

import passwordUtil from "./util/password.mjs";

//const express = require( "express" );
//const helmet = require( "helmet" );

import { goodValue as myBetterValue } from "./test.mjs";

/* How to use libraries for client
1. Get from CDN
2. Put in our client in a script file and include it ( serve statically )
3. Get from NPM - Copy file from NPM manually
                - Point to the file from the html script tag -- remember to serve that file statically
*/

console.log( myBetterValue );

const app = express();

app.set('trust proxy', 1) // trust first proxy
app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: true,
  cookie: { secure: false }
}));

import sessionRoute from "./routes/session.mjs";
app.use( sessionRoute );



/*
    app.use - What is it even ?
    node.js has its own module system for importing and exporting but it is not compatible with the client
    require cannot be used on client because it is only on node
    Node.js has introduced import as well - new feature -- breaks with some packages -
    - Benefit: share code in the client and the server

    middleware
    after the request, before I handle the response I can define my middleware
    it runs before my own event handlers, my callbacks


*/

const PORT = process.env.PORT || 3000;

app.use( helmet() );

const limiter = rateLimiter({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 10 // limit each IP to 10 requests per windowMs
  });
  
//  apply to all requests
app.use( "/house/*", limiter);

// uses middleware
app.get( "/", ( req, res, next ) => {
    console.log( req.ip );
    next();
}, ( req, res, next ) => {
    //res.send( "<h1>first</h1>" );
    console.log( "I have been hit, now I call the next match" );
    next();
} );

app.get( "/", ( req, res ) => {
    res.send( req.session );
} );

app.get( "/house/door", ( req, res ) => {
    res.send( "<h1>Right place</h1>" );
} );

// Wildcard !!! ORDER MATTERS
app.get( "/house/*", ( req, res ) => {
    res.send( "<h1>The house no has dat</h1>" );
} );

// we can turn the middleware into a function
const ipLogger = ( req, res, next ) => {
    console.log( req.ip );
    next();
}

// now we can use it with app.use

app.use( ipLogger );


/*  Status Code
    http://stackoverflow.com/questions/39636795/http-status-code-4xx-vs-5xx
*/

app.get( "/*", ( req, res ) => {
    res.status( 404 ).send( "<h1>always next</h1>" );
} );

const server = app.listen( PORT, ( error ) => {
    if ( error ) {
        console.log( error );
    }

    console.log( "Server started on port", server.address().port );
} );