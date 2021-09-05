'use strict';

//JavqScript is synchronous
console.log('1');
//setTimeout(Timehandler라는 콜백함수지정, 얼마동안의 시간)
setTimeout(() => console.log('2'), 1000); //지금 당장 실행하진 않고 나중에 부르는 것
console.log('3');

//synchronous callback(즉각적으로 동기적으로 실행)
function printImmediately(print){
    print();
}
printImmediately(() => console.log('hello'));

//asynchronous callback(나중에, 언제 실행될지 예측 안됨)
function printWithDelay(print, timeout){
    setTimeout(print, timeout);
}
printWithDelay(() => console.log('async callback'), 2000);

throw new Error()