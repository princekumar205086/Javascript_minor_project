// arr = [1, 2, 3, 4, 5];
// a = 1;

// document.write(arr);
// document.write("<br>", typeof arr);
// document.write("<br>", typeof a);
// // document.write("<br>", Array.isArray(arr));

// //==  vs ===

// //document.write(6 === '6');
// arr1 = arr;
// document.write("<br>", arr1);
// //array clone 2nd way
// arr1 = [1, 2, 3, 4, 5];
// document.write("<br>", arr === arr1);


// // function 

// function add(a, b) {
//     return a + b;
// }
// document.getElementById("p").innerHTML = add(5, 7);

// arr1 = [1, 2, 3, 4, 5, 6, 7];

// arr2 = arr1;
// arr2 = [1, 2, 3, 4, 5, 6];
// document.write(arr2);

//-------------another way of cloning array--------------

//arr1 = [1, 2, 3, 4, 5, 6, 7];
// arr2 = [];

// arr2 = arr2.concat(arr1);
// document.write(arr2);

//=----------cloning by spread operator

// arr1 = [1, 2, 3, 4, 5, 6, 7];
// arr2 = [8, 9, 6, 4];

// arr3 = [...arr1, ...arr2];
// document.write(arr3);

// array destructring
// ...arr-spread operator vs ...arr-restoperator
country = ["India", "Nepal", "USA", "UAE", "SRI LANKA"];


let [var1, var2] = country;
console.log(var1 + " " + var2);
// document.write("<br>", ...arr);

arr1 = [1, 2, 3, 4, 5, 6, 7];

//let a = arr[3];