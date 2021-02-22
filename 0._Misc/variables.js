//"use strict";

// never do this | not allowed in strict mode
// totalGlobalVariable = 123;

var myPreciousRing = "0";
// delete myPreciousRing;
// strict mode helps to avoid coding in a bad way

let variableA;
let variableB;

// console.log( variableA + variableB ); // don't do this
console.log( variableA, variableB );

console.table( ["Hello", "World", "OMG"] );

// type coercion
// avoid by always using === and !==

{
    let scopedVariable = "abc";
    {   
        // this is a new scope
        scopedVariable = 123;
    }
    console.log( scopedVariable );
}

{
    let scopedVariable = "abc";
    {   
        // this is a new scope
        let scopedVariable = 123;
        console.log( scopedVariable );
    }
    console.log( scopedVariable );
}

for ( let i = 0; i < 5; i++ ) {
    setTimeout( () => {
        console.log(i);
    }, 1000 );
}
