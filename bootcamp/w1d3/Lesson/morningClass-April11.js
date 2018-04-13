
var numbers = [10, 20, 30, 40 ]

var twenty = numbers[1];
twenty === 20;

// Associates arrays (a.k.a. object)

// empty object litteral
var myObject = {

  name: "Dave",
  numberOfStudents: 30
  students: ["John", "Jane", "bob", "Alice"],
  profile: {
    avatar: "hhtp://fillmurray.com/200/200"
  },
  "0": "Some other value"
}

// getting values out (ex: wanting to get numberofStudents out):

var numberOfStudents = myObject.numberOfStudents //will retrn the value of the object
console.log("numberOfStudents", numberOfStudents);

// dot (.) nodation only works when you know the key you are trying to get out of the object
  // if you dont know the key, use another variable (look that up)
  // KEY MEANS THE NAME USED WHEN GIVING A VALUE INSIDE THE OBJECT (EX: PROFILE, AVATAR)

  var avatar = myObject.profile.avatar
  console.log("avatar", avatar);

  var bob = myObject.students[2];
  console.log("students", students);

  var keys = Object.keys(myObject);
  console.log("keys", keys);

  // How to get numbers of :things: in object?
   // object.keys  retruns number of keys in an object (ex above: "name", "numberOfStudents", "students"  etc...)

   // to assign new value to a key:
   myObject.name = "Juan";
   console.log("keys", keys)

   myObject.profile.email = "dave@lighthouse...";
   console.log("profile", profile)


// subscripting [square braquet syntax]
var lokupKey = "profile";
var profile = myObject[lookupKey];

console.log("profile", profile);
var profile = myObject["profile"]

myObject.lookupKey;
//if you dont know what keys are, use subscripting
// lookupKey will return value into profile variable.


vr keys = object.keys(myObject);

for (var key in keys) {
  var item = myObject[key]; // this key is assigned a new key as you loop
  console.log('Found item', key, item); // so the output was that each key was logged with its value
}


for (var key in myObject) {
  var item = myObject[key];
  console.log('Found item', key, item);
}

// lookupKey is a vairable which contains a string.  that string is profile, which matches a key in the object.

// for of / for in loops through the keys of an object

//  array is enumerable because you can loop through all the items.

// diiff between array and object is array is ordered (always the same order).  Object, not necessarily

var value = myObject.thisIsNotAKey; // this will be undefined (way to check if an Object has a certian key)
console.log(value === undefined); // should (and did) print out true, since the "thisIsNotAKey" doesnt exist.

// enumerable properties (or keys, means the same) are the values (or properties or arguments) you can actually loop through (not sure what "isn't loopable ")

// subscripting to set values in an object
myObject["role"] = "Instructor"; // will add a key of "role" and insert value of "Instructor";

// array = ordered value
// object are unordered list of key pais
//if we know key, use dot (.) notation to pull value out of object
//

// for of (we pulled out all keys using object.keys) - so then we can loop through the new :array:

//using for in, beghind the scenes i is calling object.keys

// this looks up value on object on which function is being called.

// Es6 template literal means newer version of javascript specs so JS works better
  // this template uses ` (backtick) t create string to substitue value in string from var

  // syntax: `${}` takes value of var and puts it in string wherever we specified
  // {this} refers to object on which function is being called.  Ex: this.headInstructor calls the whole function

function fullName() {

  return `${this.firstname} ${this.lastname}`;

}
  var headInstructor = {
    firstName: 'Don',
    lastName: 'Burks',
    name: fullName

  };

  console.log(headInstructor);
  console.log(headInstructor.name());
  console.log(otherInstructor.name()); // returns undefined as no such var in code


// this: object on which a function is being called
// JS has many types of vars, (primitive (ex:) string, null, booleans) - primitive means, ex string is just a string.
// object and arrays are object type (not a primitive).

// the slice functino is imutable, returns new
// push is mutable (can change) because it adds to an array






