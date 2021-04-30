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

    const actorToInsert = {
        name: "Devito Danny",
        height: "big"
    };
    actors.insertOne( actorToInsert, ( error, result ) => {
        if ( error ) {
            throw error;
        }

        console.log( result.ops );
        client.close();
    } );
} );

