'use strict';

//Arrayπ

//1. λ°°μ΄ μ μΈνκΈ°
const arr1 = new Array();
const arr2 = [1, 2];

//2. Index position
const fruits = ['π', 'π'];
console.log(fruits);
console.log(fruits.length);
console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]);
console.log(fruits[fruits.length-1]);

//3. looping
for (let i=0;i<fruits.length; i++){
    console.log(fruits[i]);
}

for(let fruit of fruits){
    console.log(fruit);
}

fruits.forEach((fruit, index) => console.log(fruit, index));

//4. addition, delete, copy
//push
fruits.push('π', 'π');
console.log(fruits);

//pop
fruits.pop();
fruits.pop();
console.log(fruits);

//unshift: μμμ λΆν° μμ΄ν μΆκ°
fruits.unshift('π', 'π');
console.log(fruits);

//shift: μμμ λΆν° μμ΄ν μ­μ 
fruits.shift();
fruits.shift();
console.log(fruits);

//shiftμ unshiftλ popκ³Ό pushμ λΉν΄ λ§€μ° λλ¦¬λ€.

//splice: μΈλ±μ€κ°μΌλ‘ μ§μ λ μμ΄νμ μ­μ 
//splice(μΈλ±μ€λ²νΈ, μ­μ ν  κ°μ)
fruits.push('π', 'π', 'π');
console.log(fruits);
fruits.splice(1, 1);
console.log(fruits);
fruits.splice(1, 1, 'π', 'π'); //μ§μ°κ³  κ·Έ μλ¦¬μ λ£μ΄λΌ
console.log(fruits);

// λλ°°μ΄ λ¬ΆκΈ°
const fruits2 = ['π', 'π'];
const newFruits = fruits.concat(fruits2);
console.log(newFruits);

//5. νμ
//indexOf: λͺλ²μ§Έ μΈλ±μ€μ μλμ§
console.clear();
console.log(fruits);
console.log(fruits.indexOf('π')); //μΈλ±μ€ κ° μΆλ ₯
console.log(fruits.indexOf('π')); //μλ κ²μ -1 μΆλ ₯

//includes: μλμ§ μλμ§ boolean κ°μΌλ‘ μΆλ ₯
console.log(fruits.includes('π')); 
console.log(fruits.includes('π₯'));

//lastIndexOf
console.clear();
fruits.push('π');
console.log(fruits);
console.log(fruits.indexOf('π')); //κ°μ κ°μ΄ μμΌλ©΄ κ°μ₯ λ¨Όμ μλκ±Έ μΆλ ₯
console.log(fruits.lastIndexOf('π')); //κ°μ₯ λ§μ§λ§ μΈλ±μ€ μΆλ ₯