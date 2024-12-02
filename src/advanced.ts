{
  ////////////////////

  // Type assertions

  let anything: any;
  anything = "Himibaba";

  // console.log((anything as string).split("m"));

  const double = (number?: number | string): number | string | undefined => {
    if (typeof number === "string") {
      return `The doubled value is ${parseInt(number) * 2}`;
    }
    if (typeof number === "number") {
      return number * 2;
    }
  };

  const d1 = double(5) as number;
  const d2 = double("5") as string;
  const d3 = double() as undefined;

  // console.log({ d1, d2, d3 });

  // try {
  //   throw Error("Bla bla bla");
  // } catch (error) {
  //   console.log(`Hi, ${(error as { message: string }).message}`);
  // }

  // interface -> Onlye supports non-primitive types

  // For Objects
  interface Person {
    name: string;
    age: number;
  }

  interface PersonComplete extends Person {
    gender: "Male" | "Female";
  }

  const person1: PersonComplete = {
    name: "John",
    age: 30,
    gender: "Male",
  };

  //For Arrays
  interface Friends {
    [index: number]: string;
  }

  const friends: Friends = ["Alice", "Bob", "Charlie"];

  //   For Functions
  interface Greeter {
    (name: string): void;
  }

  const greeter: Greeter = (name) => {
    console.log(`Hello, ${name}`);
  };
  
  ///////////////
}
