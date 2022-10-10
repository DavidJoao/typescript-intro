"use strict";
let sales = 123456789;
let course = 'TypeScript';
let isPublished = true;
let level;
level = 1;
level = 'a';
function render(document) {
    console.log(document);
}
let numberArray = [1, 2, 3, 4];
let stringArray = ['Hello', 'my', 'name', 'is', 'David'];
let user = [1, 'David'];
const small = 1;
const medium = 2;
const large = 3;
var Size;
(function (Size) {
    Size[Size["Small"] = 1] = "Small";
    Size[Size["Medium"] = 2] = "Medium";
    Size[Size["Large"] = 3] = "Large";
})(Size || (Size = {}));
let mySize = Size.Medium;
function calculateTax(income, taxYear) {
    if (taxYear < 2022) {
        return income * 1.2;
    }
    else {
        return income * 1.3;
    }
}
let employee = { id: 1 };
let employeeTwo = {
    id: 1,
    name: 'David',
    retire: (date) => {
        console.log(date);
    }
};
let anotherEmployee = {
    id: 2,
    name: 'Daniel',
    retire: (date) => {
        console.log(date);
    }
};
function kgToLbs(weight) {
    if (typeof weight === 'number') {
        return weight * 2.2;
    }
    else {
        return parseInt(weight) * 2.2;
    }
}
console.log(kgToLbs(90));
//# sourceMappingURL=index.js.map