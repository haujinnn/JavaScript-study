'use strict';

//object 
//class: 템플릿
//object: instance of a clss

//class
class Person{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }

    speak(){
        console.log(`${this.name}: hello!`);
    }
}

const ellie = new Person('ellie', 20);
console.log(ellie.name);
console.log(ellie.age);
ellie.speak();

//getter and setter
class User{
    constructor(firstName, lastName, age){
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }

    get age(){
        return this._age;
    }

    set age(value){
        this._age = value < 0 ? 0: value;
    }
}

const user1 = new User('Ha', 'Yujin', -1);
console.log(user1.age);

//public, private: 지금 쓰기에는 이르다.
class Experiment{
    publicField = 2; //클래스 내에서만 사용 가능. 클래스 외부에선 
    #privateField  = 0;
}

//static: object가 아니라 클래스에 할당된다.
class Article{
    static publisher = 'Dream Coding';
    constructor(articleNumber){
        this.articleNumber = articleNumber;
    }
    static printPublisher(){
        console.log(Article.publisher);
    }
}
const article1 = new Article(1);
const article2 = new Article(2);
console.log(Article.publisher);
Article.printPublisher();

//상속과 다양성
class Shape{
    constructor(width, height, color){
        this.width = width;
        this.height = height;
        this.color = color;
    }

    draw(){
        console.log(`drawing ${this.color} color!`);
    }

    getArea(){
        return this.width * this.height;
    }
}

class Rectangle extends Shape {}
class Triangle extends Shape {
    getArea(){
        return (this.width * this.height)/2;
    }
} //필요한 상수만 다르게 사용하는 것 = 다양성
//이렇게 class를 늘려 상속을 이용하면 계속 사용 가능

const rectangle = new Rectangle(20, 20, 'blue');
rectangle.draw();
console.log(rectangle.getArea());
const triangle = new Triangle(20, 20, 'red');
triangle.draw();
console.log(triangle.getArea());

//instanceof: class checking
console.log(rectangle instanceof Rectangle);
