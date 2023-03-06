// let age = 10;
// console.log(age >= 18 ? "Eligible for voting" : "Not eligible for voting");


// while
// let a = 1;
// let n = 2;
// while (a <= 10) {
//     console.log(n + " * " + a + " = " + n * a);
//     a++;
// }



// let i = 1;
// do {
//     console.log(i);
//     i++;
// } while (i > 5);
// console.log(i);


// let arr = [7, 8, 5, 3, 2, 4, 1, 6];
// // 1,2,3,4,5,6,7,8
// let ar;

// for (let i = 0; i < arr.length; i++) {
//     for (let j = i + 1; j < arr.length; j++) {
//         if (arr[i] > arr[j]) {
//             ar = arr[j];
//             arr[j] = arr[i];
//             arr[i] = ar;
//         }

//     }
// }
// console.log(arr)




// let names = ['anshika', 'prince', 'anki'];
// let i;

// for (i of names) {
//     console.log(i);
// }

// for (let i = 0; i < 10; i++) {
//     if (i == 5) {
//         continue;
//     }
//     console.log(i);
// }
// let names = ['anshu', 'anshika', 'prince', 'anki', 'ankita', "apple"];

// let var1 = names[0];
// let var2 = names[1];
// let var3 = names[2];

// console.log(var1);
// console.log(var2);
// console.log(var3);

// [var1, var2, var3] = names;
// console.log(var1, var2, var3);

// -----------------Array operation------
// let names = ['anshu', 'anshika', 'prince', 'anki', 'ankita'];

// names.push("Apple");
// let fruit = names.pop();
// fruit = names.pop();
// names.unshift("raj");
// names.shift();
// console.log(names);
// console.log(fruit);


// let a = 5;
// let b = 6;
// let temp;
// temp = a;
// a = b;
// b = temp;

// console.log(a, b);

//array reverse


// let arr = [8, 9, 6, 7, 4, 3, 2, 1];
// // 1,2,3,4,7,6,9,8
// //
// //console.log(arr.reverse());
// let i, temp, n;
// n = arr.length;
// console.log(n)
// for (i = 0; i < n / 2; i++) {
//     temp = arr[i];
//     arr[i] = arr[n - i - 1];
//     arr[n - i - 1] = temp;
// }
// console.log(arr)


//reverse array through function

// function reversearr(arr) {
//     let newarr = [];
//     for (let i = arr.length - 1; i >= 0; i--) {
//         newarr.push(arr[i]);
//     }
//     return newarr;
// }

// console.log(reversearr(a = [4, 5, 6, 9, 8]));