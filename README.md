1. Interface vs Type in Typescript:
Answer: In typescript,  both interfaces and types are used to define the structure of objects, but they have some differences. 

Interfaces can be extended using the extends keyword, and they support declaration merging. This means if we declare an interface with the same name multiple times, TypeScript will merge the declarations. On the other hand, Types cannot merge multiple declarations of the same name. However, they can be extended using intersections (&).

For example:
// Interface example

interface User {
  name: string;
  age: number;
}

interface User {
  email: string; 
}

const user: User = {
  name: "Alice",
  age: 30,
  email: "alice@example.com",
};

// Type example
type Point = {
  x: number;
  y: number;
};

type Point3D = Point & { z: number }; 

const point: Point3D = { x: 1, y: 2, z: 3 };



3. Explain the difference between any, unknown, and never types in TypeScript.
#Answer: 
Any: The any types tell typescript to skip type checking for a variable. That means if we use any, it can be any types. When I use any, I am essentially telling the compiler: “Trust me, I know what I’m doing.”

Example: 
let data: any = "Nazrul";
data = 10;        
data = [1, 2, 3]; 

That means if we use any, so we are not using the type checking power of typescript.


Unknown: unknown is similar to any but safer. You can assign anything to a variable of type unknown, but you can’t use it directly without narrowing it first.

Example:
let input: unknown = "TypeScript";

if (typeof input === "string") {
  console.log(input.toUpperCase()); 
}

// Error: Object is of type 'unknown'
console.log(input.length); 


Never: If we know, a function will never return something or anything this time never can be used.

Example: 
function throwError(message: string): never {
  throw new Error(message);
}
In this example, the function throwError will never return because it always throws an error. 





