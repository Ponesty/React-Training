// Primitives: number, string, boolean
// More complex types: arrays, objects
// Function types, parameters

//Primities

let age: number;

age = 12;

let userName: string;

userName = "Jerrell";

let isStudent: boolean;

isStudent = true;

// More complex types

let hobbies: string[];

hobbies = ["Gaming", "Anime"];

type Person = {
  name: string;
  age: number;
};

let person: Person;

person = {
  name: "Jerrell",
  age: 27,
};

let pepole: {
  name: string;
  age: number;
}[];

// Type interference

let course: string | number = "React - The Complete Guide";

course = 12341;

function add(a: number, b: number): number | string {
  return a + b;
}
function print(value: any) {
  console.log(value);
}

// Generics

function insertAtBeginning<T>(array: T[], value: T) {
  const newArray = [value, ...array];
  return newArray;
}

const demoArray = [1, 2, 3];

const updatedArray = insertAtBeginning(demoArray, -1); // [-1,1,2,3]
