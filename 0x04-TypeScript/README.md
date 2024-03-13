# TypeScript

This project involves creating and manipulating objects, functions, and classes in JavaScript. 

## Object Creation

The project starts with creating a `director1` object with properties such as `firstName`, `fullTimeEmployee`, `lastName`, `location`, and `numberOfReports`.

```javascript
let director1 = {
  firstName: "John",
  lastName: "Doe",
  location: "London",
  fullTimeEmployee: true,
  numberOfReports: 17
};
console.log(director1);
```

This should print:

```javascript
{
  firstName: "John",
  fullTimeEmployee: true,
  lastName: "Doe",
  location: "London",
  numberOfReports: 17
}
```

## Function Creation

Next, a function `printTeacher` is created that accepts two arguments `firstName` and `lastName`. It returns the first letter of the `firstName` and the full `lastName`.

```javascript
function printTeacher(firstName, lastName) {
  return `${firstName[0]}. ${lastName}`;
}
```

Example: `printTeacher("John", "Doe")` -> J. Doe

## Interface Creation

An interface for the `printTeacher` function named `printTeacherFunction` is also created.

## Class Creation

Finally, a class named `StudentClass` is created. The constructor of this class accepts `firstName` and `lastName` as arguments. The class has two methods:

- `workOnHomework` that returns the string "Currently working"
- `displayName` that returns the `firstName`

```javascript
class StudentClass {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  workOnHomework() {
    return "Currently working";
  }

  displayName() {
    return this.firstName;
  }
}
```

## Running the Code

To run the code, use the command `node filename.js` in the terminal, replacing `filename.js` with the name of your JavaScript file.

## Testing

To test the code, use the command `npm test` in the terminal. Make sure you have installed all the necessary packages and dependencies before running the tests.

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.


Please replace "filename.js" with the actual name of your JavaScript file.