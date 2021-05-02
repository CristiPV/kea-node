const router = require( "express" ).Router();

const projects = [
    {
        title: "Nodefolio",
        description: "Description - To be added",
        gitURL: "https://github.com/CristiPV/kea-node/tree/main/8._Nodefolio",
        image: "project-icon-nodefolio.svg",
        technologiesInvolved: ["Node.js", "HTML", "CSS", "Bootstrap"]
    },
    {
        title: "Treecreate",
        description: "Description - To be added",
        gitURL: "https://github.com/treecreate",
        image: "project-icon-treecreate.svg",
        technologiesInvolved: ["Angular", "Java", "Springboot", "Typescript", "HTML", "CSS"]
    },
    {
        title: "KEA Node Mandatory I",
        description: "Description - To be added",
        gitURL: "https://github.com/CristiPV/kea-node-mandatory-I",
        image: "project-icon-mandatory.svg",
        technologiesInvolved: ["Node.js", "HTML", "CSS", "Bootstrap"]
    }
];

router.get( "/projects", ( req, res ) => {
    res.send( { projects } );
} );

module.exports = {
    router: router
};