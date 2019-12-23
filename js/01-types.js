"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var stuffy_class_1 = require("./stuffy.class");
// strings
var s1 = "Hello";
var s2 = "World";
console.log(s1 + " " + s2);
// numbers
var n1 = 5;
var n2 = 7.5;
console.log("sum = " + n1 + n2);
var ar1 = [1, 2, 3, 4, 5];
for (var _i = 0, ar1_1 = ar1; _i < ar1_1.length; _i++) {
    var a = ar1_1[_i];
    console.log("a=" + a);
}
var sa = ['a', 'b', 'c'];
for (var _a = 0, sa_1 = sa; _a < sa_1.length; _a++) {
    var s = sa_1[_a];
    console.log(s);
}
var dows;
(function (dows) {
    dows[dows["Monday"] = 1] = "Monday";
    dows[dows["Tuesday"] = 2] = "Tuesday";
    dows[dows["Wednesday"] = 3] = "Wednesday";
    dows[dows["Thursday"] = 4] = "Thursday";
    dows[dows["Friday"] = 5] = "Friday";
    dows[dows["Saturday"] = 6] = "Saturday";
    dows[dows["Sunday"] = 7] = "Sunday";
})(dows || (dows = {}));
;
console.log("dows Monday = " + dows.Monday);
console.log("dows Sunday = " + dows.Sunday);
function printHello() {
    console.log("hello");
}
printHello();
function sumIt(a, b) {
    return a + b;
}
console.log(sumIt(20, 30));
var stuffy1 = new stuffy_class_1.Stuffy(1, "bear", "red", "small", 4);
var stuffy2 = new stuffy_class_1.Stuffy();
var stuffy3 = new stuffy_class_1.Stuffy(11);
console.log(stuffy1);
console.log(stuffy2);
console.log(stuffy3);
