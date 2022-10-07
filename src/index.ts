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

