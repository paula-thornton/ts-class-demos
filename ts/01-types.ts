import {Stuffy} from "./stuffy.class";

// strings
let s1:string = "Hello";
let s2:string = "World";
console.log(s1 + " " + s2);

// numbers
let n1:number = 5;
let n2:number = 7.5;
console.log("sum = " + n1+n2);

let ar1: number[] = [1,2,3,4,5];
for (let a of ar1){
    console.log("a=" + a);
}

let sa: Array<string> = ['a','b','c'];
for (let s of sa){
    console.log(s);
}

enum dows {
    Monday=1, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday
};

console.log("dows Monday = " + dows.Monday);
console.log("dows Sunday = " + dows.Sunday);

function printHello() : void {   // void - doesn't return anything
    console.log("hello");
}

printHello();

function sumIt(a:number, b:number): number {
    return a + b;
}

console.log(sumIt(20, 30));

let stuffy1: Stuffy = new Stuffy(1, "bear", "red", "small", 4);
let stuffy2: Stuffy = new Stuffy();
let stuffy3: Stuffy = new Stuffy(11);

console.log(stuffy1);
console.log(stuffy2);
console.log(stuffy3);
