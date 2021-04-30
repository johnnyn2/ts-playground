"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var greet_1 = require("./greet");
function hello(compiler) {
    console.log("Hello from " + compiler);
}
hello('Typescript');
console.log(greet_1.sayHello('Typescript'));
