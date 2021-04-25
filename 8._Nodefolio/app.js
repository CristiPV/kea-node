const express = require( "express" );
const fs = require( "fs" );
const app = express();

app.use( express.json() );
app.use( express.urlencoded( { extended: true } ) );
app.use( express.static( "public" ) );

const PORT = process.env.PORT || 8080;

// SSR - good for SEO, re-usability
const navbar = fs.readFileSync( __dirname + "/public/navbar/navbar.html", "utf-8" );
const frontpage = fs.readFileSync( __dirname + "/public/frontpage/frontpage.html", "utf-8" );
const projects = fs.readFileSync( __dirname + "/public/projects/projects.html", "utf-8" );
const contact = fs.readFileSync( __dirname + "/public/contact/contact.html", "utf-8" );
const footer = fs.readFileSync( __dirname + "/public/footer/footer.html", "utf-8" );

const templateExample = fs.readFileSync( __dirname + "/public/template-example.html", "utf-8" );
const templateFrontpage = templateExample.replace( "{{MAIN}}", frontpage );

const projectsRouter = require( "./routes/projects" );
app.use( "/api", projectsRouter.router );

const contactRouter = require( "./routes/contact" );
app.use( "/api", contactRouter.router );


app.get( "/", ( req, res ) => { 
    //res.sendFile( __dirname + "/public/frontpage/frontpage.html" );
    res.send( navbar + frontpage + footer );
} );

app.get( "/projects", ( req, res ) => {
    res.send( navbar + projects + footer );
} );

app.get( "/contact", ( req, res ) => {
    res.send( navbar + contact + footer );
} );

app.get( "/template", ( req, res ) => {
    res.send( templateFrontpage );
} );

app.get( "/home", ( req, res ) => {
    res.redirect( "/" );
} );

const server = app.listen( PORT, error => {
    if ( error ) {
        console.log( error );
    }

    console.log( "Server started on port: ", server.address().port );
} );