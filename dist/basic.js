"use strict";
// String
const schoolName = "MSHS";
// Number
const schoolYear = 1970;
//Boolean
const is50YearsOld = true;
// Null
const willSurvive100Years = null;
// Undefined
const currentRanking = undefined;
//Array
const classes = ["Class 1", "Class 2"];
const studentNameAge = ["Himel", 25, "Rimel", 20];
// Tuple
const tuple = [50, true];
// Object
const myInfo = {
    company: "No Company",
    firstName: "Ferdous",
    lastName: "Himel",
    lookingForJob: true,
};
//Function
function add(num1, num2) {
    return num1 + num2;
}
const add2 = (num1, num2) => num1 + num2;
const add3 = (num1, num2) => num1 + num2;
// Array Spread
const friends1 = ["Rohan", "Shimanto"];
const friends2 = ["Sifat", "Tarek"];
const allFriends = [...friends1, ...friends2];
// Object spread
const myInfo1 = {
    name: "Ferdous Ahmed",
    age: 29,
};
const myInfo2 = {
    stack: "Front End",
    hobby: "Reading",
};
const mergedInfo = Object.assign(Object.assign({}, myInfo1), myInfo2);
// Function rest operator
const greetFriends = (...friends) => friends.join(", ");
// console.log(`Hello ${greetFriends(...allFriends)}`);
//Object destructuring
const myInfos = {
    userName: "Ferdous Ahmed",
    age: 29,
    isMarried: true,
    address: {
        street: "123 Main St",
        city: "New York",
        state: "NY",
        zip: 10001,
    },
    profession: "Web Dev",
};
const { userName, isMarried, address: { street }, } = myInfos;
// Array destructuring
const myFriends = ["Himel", "Rimel", "Porinita", "Rohan", "Shimanto"];
const [, chotoVai, ...friends] = myFriends;
const student1 = {
    name: "Ferdous",
    age: 29,
    grade: 90,
};
const addwithtype = (num1, num2) => num1 + num2;
const himiInfo = {
    skills: ["HTML", "CSS", "JavaScript"],
    designation1: "Frontend Developer",
    designation2: "Backend Developer",
};
// Ternary Operator
let age = 17;
const isAdult = age >= 18 ? "Adult" : "Not adult";
// Null coalscing operator - Only works with null & undefined
let permanentAddress;
permanentAddress !== null && permanentAddress !== void 0 ? permanentAddress : (permanentAddress = "No permanent address is available");
// console.log({ permanentAddress });
// Nullable type
const showResult = (value) => {
    if (value) {
        console.log(`The value is ${value}`);
    }
    else {
        console.log("Nothing");
    }
};
// showResult(null);
// Void - When the function does some action but does not return
const showMessage = () => {
    console.log("Hello World");
};
// showMessage();
// Never - When the function throws an error, or runs infinite loop
const showError = (message) => {
    throw new Error(message);
};
// showError("Some random error");
