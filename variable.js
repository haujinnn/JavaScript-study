'use strict';

let globalName = 'global name';
{
    let name = 'yujin';
    console.log(name);
    name = 'hello';
    console.log(name);
    console.log(globalName);
}
console.log(name);
console.log(globalName);

const daysInWeek = 7;
const maxNumber = 5;

const count = 17;
const size = 17.1
console.log(`value: ${count}, type: ${typeof count}`);
console.log(`value: ${size}, type: ${typeof size}`);

const infinity = 1 / 0;
const negativeInfinity = -1 / 0;
const nAn = 'not a number' / 2;
console.log(infinity);
console.log(negativeInfinity);
console.log(nAn);

const char = 'c';
const user = 'yujin';
const greeting = 'hello ' + user;
console.log(`value: ${greeting}, type: ${typeof greeting}`);
const helloBob = `hi ${user}`;
console.log(`value: ${helloBob}, type: ${typeof helloBob}`);

//같은 문자열도 다르게 인식
const symbol1 = Symbol('id');
const symbol2 = Symbol('id');
console.log(symbol1==symbol2);

//동일한 symbol로 만들고 싶은 경우
const gsymbol1 = Symbol.for('id');
const gsymbol2 = Symbol.for('id');
console.log(gsymbol1==gsymbol2);