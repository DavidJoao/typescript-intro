let sales: number = 123456789; 
let course: string = 'TypeScript'
let isPublished: boolean = true;


// variable level is going to be type 'any' since has no value
let level;
level = 1;
level = 'a'
// any type should be avoided

// document has type 'any', and can't be used in functions without declaring its type
function render (document: any) {
    console.log(document)
}

// When writing arrays in typescript, their type also must be declared
let numberArray: number[] = [1,2,3,4];
// A incorrect array would be:
// let numberArray: number[] = [1,2,3,4,'a'];
// An example of an array with only string values:
let stringArray: string[] = ['Hello', 'my', 'name', 'is', 'David']

// TUPLES //

let user: [number, string] = [1, 'David']
// if you write user[0]., Typescript will try to autocomplete with number methods
// if you write user[1]., Typescript will try to autocomplete with string methods
