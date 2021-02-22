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

app.listen( 3000 );

function getFormattedMonth() {
    const monthNames = ["January", "February", "March", "April", "May", "June", "July",
                    "August", "September", "October", "November", "December"];
    const date = new Date();

    const month = date.getMonth() + 1;
    const monthName = monthNames[month - 1];

    const formattedMonth = monthName + ", " + month;

    return formattedMonth;
}

function getFormattedDay() {
    const weekDays = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
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