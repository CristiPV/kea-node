const router = require( "express" ).Router();

const projects = [
    {
        title: "Nodefolio",
        description: "A personal portfolio that came to fruition as a result of my Mandatory Project for Node JS at KEA.",
        gitURL: "https://github.com/CristiPV/kea-node/tree/main/8._Nodefolio",
        image: "project-icon-nodefolio.svg",
        technologiesInvolved: ["Node.js", "HTML", "CSS", "Bootstrap"]
    },
    {
        title: "Treecreate",
        description: `Unique wood design with several styling options which make every
        product become completely unique. In just a few minutes, you can
        create your own family tree and get it laser-cut into a
        beautiful piece of oak wood.`,
        gitURL: "https://github.com/treecreate",
        image: "project-icon-treecreate.svg",
        technologiesInvolved: ["Angular", "Java", "Springboot", "Typescript", "HTML", "CSS"]
    },
    {
        title: "KEA Node Mandatory I",
        description: "The first mandatory assignment for my Node JS class at KEA. A website that contains documentation for what I have learned.",
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