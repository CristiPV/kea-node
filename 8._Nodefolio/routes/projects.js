// every file is a module, when imported, we receive an empty object
const router = require( "express" ).Router();

const projects = [
    {
        title: "Nodefolio",
        description: "Desc",
        gitURl: "url",
        images: [],
        technologiesInvolved: ["Node.js", "HTML", "CSS"]
    }
]


// dummy route

router.get( "/projects", ( req, res ) => {
    res.send( { projects } );
} );

// we can select what to export like so:
// it is a variable that we assign a value to
module.exports = {
    // here we put what we want to export
    router: router
};