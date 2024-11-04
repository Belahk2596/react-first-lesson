//Exercise 1

const greetUser = (firstName, lastName) => {
  console.log(`Hello, ${firstName} ${lastName}!`);
};
greetUser("John", "Doe");

//Exercise 2

const multiply = (a, b = 1) => a * b;
multiply(4);

//Exercise 3

const user = {
  id: 42,
  isVerified: true,
  name: "Akriti Adler",
};

const colors = ["red", "green", "blue"];

const { id, name } = user;
console.log(id);
console.log(name);

const [a, b] = colors;
console.log(a);
console.log(b);   
