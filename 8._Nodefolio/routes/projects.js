const router = require( "express" ).Router();

const projects = [
    {
        title: "Nodefolio",
        description: "Description - To be added",
        gitURl: "GitHub URL - To be added",
        images: [],
        technologiesInvolved: ["Node.js", "HTML", "CSS"]
    },
    {
        title: "Treecreate",
        description: "Description - To be added",
        gitURl: "GitHub URL - To be added",
        images: [],
        technologiesInvolved: []
    },
    {
        title: "KEA Node Mandatory I",
        description: "Description - To be added",
        gitURl: "GitHub URL - To be added",
        images: [],
        technologiesInvolved: []
    }
];

router.get( "/projects", ( req, res ) => {
    res.send( { projects } );
} );

module.exports = {
    router: router
};