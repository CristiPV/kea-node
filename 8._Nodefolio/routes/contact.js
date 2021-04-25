const router = require( "express" ).Router();
const email = require( "../services/email/email" );

router.post( "/contact", ( req, res ) => {
    console.log( "Received body: ", req.body );

    const emailText = `Name: ${ req.body.name }\nMessage: ${ req.body.message }`;

    email.sendEmail( "Nodefolio Contact", emailText );

    // TODO - make the redirect work
    res.redirect( "/" );
} );

/* Alternative way of using FormData ( did not get it to work )
router.post( "/contact2", ( req, res ) => {
    console.log( "Body: ", typeof req.body );

    const data = {};

    for( let entry of req.body.entries() ){
        data[ entry[0] ] = entry[1];
    }

    console.log( data );
} );
*/

module.exports = {
    router
}