import bcrypt, { hash } from "bcrypt";

const saltRounds = 5;
const plainTextPassword = "Bababobooey";
const hashedPassword = "$2b$05$0kQIufUTlujmI1kBUsQXpOI.iLlGxGnWFm4OWVwi3nC3q1XOoTRdm";

bcrypt.hash( plainTextPassword, saltRounds, ( error, hash ) => {
    console.log( hash );
} );

bcrypt.compare( plainTextPassword, hashedPassword, ( error, result ) => {
    console.log( result );
} );

export default {}