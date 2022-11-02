"use strict";
console.log("this is test");
const testGeneric = (par) => {
    return par;
};
console.log(testGeneric("string"));
console.log(testGeneric(1));
console.log(testGeneric(true));
