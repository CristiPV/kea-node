const router = require( "express" ).Router();
const email = require( "../services/email/email" );

router.post( "/contact", ( req, res ) => {
    console.log( "Body: ", req.body );

    const emailText = `Name: ${ req.body.name }\nMessage: ${ req.body.message }`;

    email.sendEmail( "Nodefolio Contact", emailText );

    res.redirect( "/" );
} );

router.post( "/contact2", ( req, res ) => {
    console.log( "Body: ", typeof req.body );

    const data = {};

    for( let entry of req.body.entries() ){
        data[ entry[0] ] = entry[1];
    }

    console.log( data );
} );

// send emails with nodemailer

module.exports = {
    router
}