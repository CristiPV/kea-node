const oldArray = [1, 2, 3];
const newArray = [];

console.log( "Old Array" )
for ( items in oldArray ) {
    console.log( items );
}

console.log( "forEach" );

oldArray.forEach( (element) => {
    newArray.push( element );
} );

console.log( "New Array" )
for ( items in newArray ) {
    console.log( items );
}

// Functional looping methods are prefered
// Example: map, reduce, filter, find etc.

const fruits = ["apples", "bananas", "blueberries"];

// Use map to print out each fruit

const copy = fruits.map( ( value, index ) => {
    console.log( "Fruits at index: " + index + " is a " + value );
    return { value, index };
} );
console.log( copy );

// Reduce

const people = [
    {
        name: "David",
        age: 50
    },
    {
        name: "Alex",
        age: 20
    },
    {
        name: "Cristi",
        age: 30
    },
];

const peopleAgeSum = people.reduce( ( total, person ) => {
    return total + person.age;
}, 0 );

console.log( peopleAgeSum );