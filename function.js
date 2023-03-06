// // //function decelartion
// // let p = document.getElementById("pr");
// // let inp = document.getElementById("in");

// // function prince() {
// //     //your code goes here!
// //     p.innerHTML = inp.value;
// // }

// // // add

// // // function add(a, b) {
// // //     return a + b;
// // // }

// // // arrow  function
// // add = (a, b) => a + b;
// // console.log(add(5, 7))
Ñ
// // //function inside function
// // console.log(a);
// // var a = 20;

// // function prince() {
// //     var b = 5;
// //     console.log("Hello, world!");
// // }
// // prince();
// // // function inside function
// // //console.log("bark");

// // function animal() {
// //     const pi = 3.14;
// //     console.log(pi);

// //     function dog() {
// //         console.log("bark");
// //     }

// //     function lion() {
// //         console.log("roar");
// //     }
// //     dog();
// //     lion();
// // }

// // animal();
// // // anynomous function
// // let names = function() {
// //     console.log("prince");
// // }
// // names();

// // // arithemnetic operation

// // function calculation() {
// //     //calculation
// //     add = (a, b) => a + b;
// //     sub = (a, b) => a - b;
// //     mul = (a, b) => a * b;
// //     div = (a, b) => a / b;
// //     //output
// //     console.log("Addition is", add(25, 25));
// //     console.log(sub(25, 25));
// //     console.log(mul(25, 25));
// //     console.log(div(25, 25));
// // }

// // calculation();

// // //lexical scope
// // let roll = "0321";
// // let course = "BCA";

// // ankita = () => {
// //     let roll = "035";
// //     //let course = "MBA";
// //     anshika = () => {
// //         // let roll = "046";
// //         console.log(roll);
// //     }

// //     function prince() {
// //         // let course = "MCA";
// //         console.log(course);
// //     }
// //     anshika();
// //     prince();
// // }

// // ankita();
// // // let fruit = "apple";
// // // let fruit = "mango";
// // // console.log()
// // {
// //     let fruit = "apple";
// //     console.log(fruit);
// // }

// // {
// //     let fruit = "mango";
// //     console.log(fruit);
// // }

// // default parameter

// function list(a = "anki") {
//     console.log("my name is", a);
// }

// list("anshika");

// //rest parameter

// function rest(a, b, c, ...d) {
//     console.log("no is:- ", a);
//     console.log("no is:- ", b);
//     console.log("no is:- ", c);
//     console.log("no is:- ", d);
// }

// rest(7, 8, 9, 1, 2, 3, 4);

// //how to check prime number

// // isprime = (a) => {
// //     if (a == 0 || a == 1) {
// //         return false;
// //     } else {
// //         for (let i = 2; i < a; i++) {
// //             if (a % i == 0) {
// //                 return false;
// //             }
// //         }
// //     }
// //     return true;
// // };
// // n = 20;
// // for (let j = 0; j < n; j++) {
// //     if (isprime(j)) {
// //         console.log(j);
// //     }
// // }


// //factor

// // function factor(a) {
// //     if (a == 1) {
// //         console.log(1);
// //     } else {
// //         for (let i = 1; i <= a; i++) {
// //             if (a % i == 0) {
// //                 console.log(i);
// //             }
// //         }
// //     }
// // }

// // factor(1);

// // parameter destructring

// // const intro = {
// //     n: "prince",
// //     mob: 8677
// // }

// // function prints(a) {
// //     console.log("my name is", a.n);
// //     console.log("my num is", a.mob);
// // }

// // prints(intro)

// //callback
// function mob() {
//     console.log("87755555");
// }
// // dial callback function now
// function dial(a) {
//     //callback function
//     a();
// }
// dial(mob);


// //function return function
// function welcome() {
//     function greet(a) {
//         console.log("Good Morning!", a)
//     }
//     return greet;
// }
// //anynomous function
// const w = welcome();
// w("prince");

// // windows object
// //prompt
// //console
// //alert

// function greet() {
//     a = window.prompt("Prlease enter your name");
//     alert("Hello" + " " + a);
// }
// greet();


// confirm dialog box of windows

// let fruit = ["manago", "guava", "apple"];
// cnf = () => {
//     let a = window.confirm("Are you sure want to delete!");
//     if (a == true) {
//         fruit.pop();
//         document.write(fruit);
//     } else {
//         document.write(fruit);
//     }
// }

// cnf();


// a = window.innerHeight;
// b = window.innerWidth;
// console.log("This is window height", a, "This is window width", b);


// let boxh = document.getElementById("bx").clientWidth;

//code from 

// var box = document.getElementById("bx");
// box.style.height = "200px";
// box.style.width = "100px";
// box.style.backgroundColor ="black";

let val = document.getElementById("in");
console.log(val.value);
let para = document.getElementById("pr");
val.addEventListener('keydown', show)

function show() {
    para.innerHTML = val.value;
}

// let a = window.open("", "", height = "200", width = "200");

var bt = document.getElementById('btn');
bt.addEventListener('click', shut);

function shut() {
    a.window.close();
}