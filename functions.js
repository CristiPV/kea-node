function myFirstFunction () {
    return "Greetings !";
}

console.log( myFirstFunction() );

const myVariableFunction = function () {
    console.log( "Hello there !" );
}

myVariableFunction();

const myArrowFunction = ( string ) => {
    console.log( string );
};

const interactionPrint = ( string ) => "Poke " + string;

myArrowFunction( "Hey, there !" );

function sayHiLater ( anyFunctionReference ) {
    anyFunctionReference("Hello, man !");
}

sayHiLater( myVariableFunction );

sayHiLater ( myArrowFunction );

function interact ( genericInteraction, name ) {
    console.log( genericInteraction( name ) );
}

interact( interactionPrint, "Cristian" );

interact ( ( name ) => "Hug " + name, "Alex" );