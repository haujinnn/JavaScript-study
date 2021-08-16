function printHello(){
    console.log('Hello');
}
printHello();

function log(message){
    console.log(message);
}
log('Hello@');
log(1234);

//parameters
function changeName(obj){
    obj.name = 'color';
}
const ellie = {name:'ellie'};
changeName(ellie);
console.log(ellie);

//default parameter
function showMessage(message, from = 'unknown'){
    console.log(`${message} by ${from}`);
}
showMessage('Hi!');

//rest parameters
function printAll(...args){
    for(let i =0;i<args.length; i++){
        console.log(args[i]);
    }
}
printAll('dream', 'coding', 'yujin');

//local scope(block level, global level)
let globalMessage = 'global';
function printMessage(){
    let message = 'hello';
    console.log(message); 
    console.log(globalMessage); //전역변수를 함수 내에서 사용가능
    function printAnother(){
        console.log(message);
        let childMessage = 'hello';
    }
    // console.log(childMessage); //error. 함수안에서 만든 지역변수를 함수밖에서 사용 불가능
}
printMessage();

//return
function sum(a, b){
    return a+b;
}
const result = sum(1, 2);
console.log(`sum: ${sum(1, 2)}`);

//early return. 반복문의 내용이 최대한 적게 반복되도록
function upgradeUser(user){
    if (user.point<=10){
        return;
    }
}

//first-class function. 함수가 변수처럼 사용된다.
const print = function print(){ //함수 선언과 동시에 변수에 할당
    console.log('print');
}
print(); //print 변수를 함수 호출하듯이 사용
const printAgain = print;
printAgain(); //다른 변수에 저장했을 때도 마찬가지 방법으로 사용
const sumAgain = sum;
console.log(sumAgain(1, 3));

//callback
function randomQuiz(answer, printYes, printNo){
    if (answer === 'love you'){
        printYes();
    } else{
        printNo();
    }
}

const printYes = function(){
    console.log('yes!');
}

const printNo = function(){
    console.log('no!');
}

randomQuiz('wrong', printYes, printNo);
randomQuiz('love you', printYes, printNo);

//Arrow
// const simplePrint = function(){
//     console.log('simplePrint!');
// };

const simplePrint = () => console.log('simplePrint!');
const add = (a, b) => a+b;

//IIFE: 함수를 선언함과 동시에 바로 이용하고 싶을 때
(function hello(){
    console.log('IIFE');
})();

