// // 2
// const myString = 'String value';
// const myNumber = 30;
// const myBoolean = true;
// const myBoolean1 = false;
// const myNull = null;
// const myUndefined = undefined;
// // 3

// const age = 32;
// const hobby = 'Video games';
//
// // 4
// console.log(`My name is ${name} I am ${age} old and my hobby is ${hobby}`);

const person = {
  firstName: 'Gio',
  lastName: 'keshikashvili',
  age: 32,
  scores: [50, 70, 100],
  profile: {
    avatar: 'https://mysite.com/avatart.png',
    themeColor: 'red'
  }
};

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const persons = [
  {name: 'Gela', age: 20},
  {name: 'Sandro', age: 22},
  {name: 'Mari', age: 25}
];

const objectDynamicKey = 'giomasasdasdasd';

const objectWithDynamicKey = {
  name: 'Soso',
  [objectDynamicKey]: 'Dynamic Value',
  'lastName': 'Keshi',
};

const array2d = [
  [1, 2, 3, 4, 5],
  [10, 20, 30, 40, 50, {make: 'opel', model: 'vectra'}]
];

const user = {
  name: 'Gio',
  age: 19,
}

// console.log(user.age > 19);

if (user.age > 19) {
  console.log('I am adult');
} else if (user.age === 19) {
  console.log('I am 19 years old');
} else {
  console.log('I am teenager');
}

// let name = 'gio';
// console.log(name);
// let nameCopy = name;
// name = 'Gela';
// console.log('name', name);
// console.log('nameCopy', nameCopy);
// object data in heap, reference in stack
// const myObject = {name: 'Gio', users: []};
// created only reference value
// const myObjectCopy = JSON.parse(JSON.stringify({name: 'Gio', users: []}));

// console.log(myObjectCopy);
// console.log('myObject', myObject);
// console.log('myObjectCopy', myObjectCopy);
// console.log(myObjectCopy);
// myObjectCopy.name = 'Soso';
// console.log(myObjectCopy);
// console.log('myObject', myObject);

// const array2item = array2d[1];
// console.log(array2item[array2item.length - 1].make);

// const similarNumbersCount = {};
// for (let i = 0; i < numbers.length; i++){
//   if(!similarNumbersCount.hasOwnProperty(numbers[i])){
//     similarNumbersCount[numbers[i]] = 1;
//   } else {
//     similarNumbersCount[numbers[i]] = similarNumbersCount[numbers[i]] + 1;
//   }
// }
// console.log(similarNumbersCount);

// console.log(objectWithDynamicKey[objectDynamicKey]);

// console.log('persons name', persons[0].name);
// console.log('persons age', persons[0].age);
// console.log('persons', persons);
// console.log(person);
// console.log(person.profile);
// console.log(person.profile.avatar);
// console.log(numbers[0]);
// console.log(person.scores[0]);

// console.log(person.firstName);
// console.log(person.lastName);
// console.log(person.age);


// console.log('person object', person);
// console.log('numbers array', numbers);


// const myArray = [10, 20, 40];
