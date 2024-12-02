// String
const schoolName: string = "MSHS";

// Number
const schoolYear: number = 1970;

//Boolean
const is50YearsOld: boolean = true;

// Null
const willSurvive100Years: null = null;

// Undefined
const currentRanking: undefined = undefined;

//Array
const classes: string[] = ["Class 1", "Class 2"];
const studentNameAge: (string | number)[] = ["Himel", 25, "Rimel", 20];

// Tuple
const tuple: [number, boolean] = [50, true];

// Object
const myInfo: {
  company: "No Company"; //String literal type
  firstName: string;
  middleName?: string; //optional
  readonly lastName: string; //lastName is read-only
  lookingForJob: boolean;
} = {
  company: "No Company",
  firstName: "Ferdous",
  lastName: "Himel",
  lookingForJob: true,
};

//Function
function add(num1: number, num2: number): number {
  return num1 + num2;
}

const add2 = (num1: number, num2: number): number => num1 + num2;

const add3: (num1: number, num2: number) => number = (num1, num2) =>
  num1 + num2;

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

const mergedInfo = { ...myInfo1, ...myInfo2 };

// Function rest operator
const greetFriends = (...friends: string[]): string => friends.join(", ");

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

const {
  userName,
  isMarried,
  address: { street },
} = myInfos;

// Array destructuring
const myFriends = ["Himel", "Rimel", "Porinita", "Rohan", "Shimanto"];

const [, chotoVai, ...friends] = myFriends;

// Type Alias For Object
type Student = {
  name: string;
  age: number;
  grade: number;
};

const student1: Student = {
  name: "Ferdous",
  age: 29,
  grade: 90,
};

// Type Alias for function
type Add = (num1: number, num2: number) => number;

const addwithtype: Add = (num1, num2) => num1 + num2;

// Union (The "|")
type Gender = "Male" | "Female";
type BloodGroup = "A+" | "A-" | "B+" | "B-";

type Person = {
  name: string;
  age: number;
  gender: Gender;
  bloodGroup: BloodGroup;
};

// Intersection (The "&")
type FrontEnd = {
  skills: string[];
  designation1: "Frontend Developer";
};

type BackEnd = {
  skills: string[];
  designation2: "Backend Developer";
};

type FullStack = FrontEnd & BackEnd;

const himiInfo: FullStack = {
  skills: ["HTML", "CSS", "JavaScript"],
  designation1: "Frontend Developer",
  designation2: "Backend Developer",
};

// Ternary Operator
let age = 17;
const isAdult = age >= 18 ? "Adult" : "Not adult";

// Null coalscing operator - Only works with null & undefined
let permanentAddress;
permanentAddress ??= "No permanent address is available";

// console.log({ permanentAddress });

// Nullable type
const showResult = (value?: string | null): void => {
  if (value) {
    console.log(`The value is ${value}`);
  } else {
    console.log("Nothing");
  }
};

// showResult(null);

// Void - When the function does some action but does not return

const showMessage = (): void => {
  console.log("Hello World");
};

// showMessage();

// Never - When the function throws an error, or runs infinite loop
const showError = (message: string): never => {
  throw new Error(message);
};

// showError("Some random error");
