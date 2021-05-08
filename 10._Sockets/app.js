const express = require( "express" );
const app = express();
const server = require('http').createServer(app);
const io = require('socket.io')(server);
const htmlEscape = require( "html-escaper" ).escape;

console.log( htmlEscape( "<test/>" ) );

app.use( express.static( "public" ) );

const PORT = process.env.PORT || 8080;

io.on( 'connection', ( socket ) => {
    console.log( "A socket connected:", socket.id ); 

    socket.on( "colorSelected", ( data ) => {
        console.log( data );

        // changes the color for all the sockets on the io
        io.emit( "changeColor", { color: htmlEscape( data.color ) } );

        // changes the color for the same socket that changed the color initially
        //socket.emit( "changeColor", data );

        // changes the color for all the sockets but the one that changed the color initially
        //socket.broadcast.emit( "changeColor", data );
    } );

    socket.on( "messageSent", ( data ) => {
        console.log( data );

        io.emit( "messageSent", data );
    } );

    socket.on( "disconnect", () => {
        console.log( "Socket disconnected" );
    } );
} );

app.get( "/colors", ( req, res ) => {
    res.sendFile( __dirname + "/public/colors/colors.html" );
} );

app.get( "/chat", ( req, res ) => {
    res.sendFile( __dirname + "/public/chat/chat.html" );
} );

server.listen( PORT, ( error ) => {
    if ( error ) {
        console.log( error );
    }

    console.log( "Server running on port:", server.address().port );
} );