// Link to Documentation : https://docs.google.com/spreadsheets/d/1q2mh2k8F2OfiBGdefvXWKUDv8NKhChMEXJmUNKz0Oyo/edit?usp=sharing
// You can also find it under the docs folder

const express = require( "express" );
const app = express();

app.get( "/time", ( req, res ) => {
    res.send( {
        time: getFormattedTime()
    } );
} );

app.get( "/day", ( req, res ) => { 
    res.send( {
        day: getFormattedDay()
    } );
} );

app.get( "/month", ( req, res ) => {
    res.send( {
        month: getFormattedMonth()
    } );
} );

app.get( "/about", ( req, res ) => {
    res.send( {
        version: "0.0.1"
    } );
} );

app.listen( 3000 );

const monthNames = ["January", "February", "March", "April", "May", "June", "July",
                    "August", "September", "October", "November", "December"];
    const date = new Date();
function getFormattedMonth() {
    const month = date.getMonth() + 1;
    const monthName = monthNames[month - 1];

    const formattedMonth = monthName + ", " + month;

    return formattedMonth;
}

const weekDays = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
function getFormattedDay() {
    const date = new Date();

    const dayOfMonth = date.getDate();
    const dayOfWeek = weekDays[date.getDay() - 1];

    const formattedDay = dayOfWeek + ", " + dayOfMonth;

    return formattedDay;
}

function getFormattedTime() {
    const date = new Date();

    const seconds = date.getSeconds();
    const minutes = date.getMinutes();
    const hours = date.getHours();

    const formattedTime = hours + ":" + minutes + ":" + seconds;

    return formattedTime;
}