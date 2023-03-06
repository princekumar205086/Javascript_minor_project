// object
obj = {
    name: "prince",
    roll: 321,
    course: "MCA"
};


//dot vs braket notation
//console.log(obj.name);
// document.write("\n", obj.roll);
// document.write("\n", obj['course']);
//document.write(obj);
key1 = "names";
key2 = "roll";

value1 = "Anshika";
value2 = "046";

// object throuh varible!
//computed property

anki = {
    [key1]: value1,
    [key2]: value2
};

console.log(anki);

//another way

obj2 = {};
obj2[key1] = value1;
obj2[key2] = value2;

console.log(obj2);
// document.write(anki.name, " ", anki.roll);
// console.log(anki);

// alpha = "abcdefghijklmnopqrstuvwxyz";
// alphabet = [...alpha];
// //document.write(Array.isArray(alphabet))
// // document.write(alphabet);
// // console.log(alphabet);

// num = "123456789";
// numarry = [...num];
// console.log(numarry);

//iterable

for (let ankita in anki) {
    console.log(`${ankita} : ${anki[ankita]}`);
}

// s o in obj

anshika = {...anki, ...obj };

console.log(anshika);


console.log("\n", "----------------------------------------------------------------");
console.log("\n", "------------------Oject destructuring-------------------------");
console.log("\n", "----------------------------------------------------------------");
// object destructuring 
//key value pair
obj3 = {
    names: "prince",
    roll: 321,
    // array inside object
    course: ["MCA", "BCA", "MBA", "BBA", "BCOM"]
};

console.log(obj3.names, obj3.roll, obj3.course);
// its destructure
let { names: var1, roll: var2, course: var3 } = obj3;
console.log(var1, var2, var3);

console.log("-------------------- aceessing array----------");
//accessing array through object call
console.log(obj3.names, obj3.course[2]);


//object inside object is called nested object

data = [

    {
        id: 1,
        name: "prince",
        roll: 321,
    },
    {
        id: 2,
        name: "Ankita",
        roll: 035,
    },
    {
        id: 3,
        name: "Anshika",
        roll: 046
    }
];

console.log(data[2]);

//destructring of nested object
let [var4, var5, var6] = data;

console.log(var5);