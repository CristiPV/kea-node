const express = require( "express" );
const app = express();

app.use( express.json() );

app.get( "/students", ( req, res ) => {
    res.send( studentList );
} );

app.get( "/students/:id", ( req, res ) => {
    const id = req.params.id;
    
    if ( id < studentList.length ) {
        res.send( studentList[req.params.id] );
    } else {
        res.send( {
            exception: "No student with the given id was found"
        } );
    }
} );

app.post( "/students", ( req, res ) => {
    if ( req.body.hasOwnProperty( "name" ) &&
         req.body.hasOwnProperty( "age" ) &&
         req.body.hasOwnProperty( "education" ) ) {
        res.send( req.body );
        studentList.push( req.body );
    } else {
        res.send( {
            exception: "Body did not match the data format"
        } );
    }
} );

app.put( "/students/:id", ( req, res ) => {
    const id = req.params.id;

    if ( id < studentList.length ) {
        const student = studentList[id];

        if ( req.body.hasOwnProperty( "name" ) ) {
            student.name = req.body.name;
        }
        if ( req.body.hasOwnProperty( "age" ) ) {
            student.age = req.body.age;
        }
        if ( req.body.hasOwnProperty( "education" ) ) {
            student.education = req.body.education;
        }
    
        res.send( student );
        studentList[id] = student;
    } else {
        res.send( {
            exception: "No student with the given id was found"
        } );
    }
} );

app.delete( "/students/:id", ( req, res ) => {
    const id = req.params.id;

    if ( id < studentList.length ) {
        res.send( studentList.splice(id) );
    } else {
        res.send( {
            exception: "No student with the given id was found"
        } );
    }
} );

app.listen( "8080" );

const studentList = [
    {
        name: "Cristi",
        age: "20",
        education: "KEA - Computer Science"
    },
    {
        name: "Alex",
        age: "28",
        education: "KEA - Computer Science"
    }
];