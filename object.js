'use strict';

//objects
//object = {key : value}

//1. literal, constructor
const obj1 = {}; //object literal
const obj2 = new Object(); //object constructor

function print(person){
    console.log(person.name);
    console.log(person.age);
}

const ellie = {name: 'ellie', age: 4};
print(ellie);

ellie.hasJab = true;
console.log(ellie.hasJab);

delete ellie.hasJab
console.log(ellie.hasJab);

//2. object['key'] Computed properties
//이때 key는 항상 문자열 타입
console.log(ellie.name); //코딩하는 순간 key에 해당하는 값이 있을 경우
console.log(ellie['name']); //key에 정해진 값이 없는 경우
ellie['hasJab'] = true;
console.log(ellie.hasJab);

function printValue(obj, key){
    console.log(obj[key]);
}
printValue(ellie, 'name'); 

//3. property value shorthand
const person1 = {name: 'bob', age: 2};
const person2 = {name: 'steve', age: 3};
const person3 = {name: 'dave', age:4};
const person4 = new Person('ellie', 30);
console.log(person4);

//4. Constructor function
function Person(name, age){
    //this = {};
    this.name = name;
    this.age = age;
    //return this;
}

//5. in operator: 해당하는 오퍼레이터를 가지는 키가 있는지 
console.log('name' in ellie);
console.log('age' in ellie);
console.log('random' in ellie);

//6. for ..in vs for ..of
//for (key in object)
console.clear();
for (let key in ellie) {
    console.log(key);
}

//for (value of iterable)
const array = [1, 2, 4, 5];
for(let value of array){
    console.log(value);
}

//7. cloning
const user = {name:'yujin', age: '21'};
const user2 = user;
//old way
const user3 = {};
for (let key in user){
    user3[key] = user[key];
}
user2.name = 'coder';
console.log(user);
console.log(user3);

