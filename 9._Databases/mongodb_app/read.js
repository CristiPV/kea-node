const MongoClient = require( "mongodb" ).MongoClient;


// the '://' - protocol identifier ( tells that the protocol we are using in this case is "mongodb" )
const dbURL = "mongodb://localhost:27017";
const dbName = "movies";

MongoClient.connect( dbURL, { useUnifiedTopology: true } , ( error, client ) => {
    if ( error ) {
        throw error;
    }

    const db = client.db( dbName );
    const actors = db.collection( "actors" );

    actors.find( { } ).toArray( ( error, data ) => {
        if ( error ) {
            throw error;
        }

        console.log( data );
    } ); 
    
    // actors.find( { height: { $lt: 190 } } ).toArray( ( error, data ) => {
    //     if ( error ) {
    //         throw error;
    //     }

    //     console.log( "Smol Devitos" );
    //     console.log( data );
    // } );  
} );

