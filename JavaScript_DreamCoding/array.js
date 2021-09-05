'use strict';

//Array🎉

//1. 배열 선언하기
const arr1 = new Array();
const arr2 = [1, 2];

//2. Index position
const fruits = ['🍎', '🍌'];
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
fruits.push('🍓', '🍑');
console.log(fruits);

//pop
fruits.pop();
fruits.pop();
console.log(fruits);

//unshift: 앞에서 부터 아이템 추가
fruits.unshift('🍋', '🍍');
console.log(fruits);

//shift: 앞에서 부터 아이템 삭제
fruits.shift();
fruits.shift();
console.log(fruits);

//shift와 unshift는 pop과 push에 비해 매우 느리다.

//splice: 인덱스값으로 지정된 아이템을 삭제
//splice(인덱스번호, 삭제할 개수)
fruits.push('🍓', '🍅', '🍋');
console.log(fruits);
fruits.splice(1, 1);
console.log(fruits);
fruits.splice(1, 1, '🍏', '🍒'); //지우고 그 자리에 넣어라
console.log(fruits);

// 두배열 묶기
const fruits2 = ['🍇', '🍐'];
const newFruits = fruits.concat(fruits2);
console.log(newFruits);

//5. 탐색
//indexOf: 몇번째 인덱스에 있는지
console.clear();
console.log(fruits);
console.log(fruits.indexOf('🍎')); //인덱스 값 출력
console.log(fruits.indexOf('🍜')); //없는 것은 -1 출력

//includes: 있는지 없는지 boolean 값으로 출력
console.log(fruits.includes('🍋')); 
console.log(fruits.includes('🥗'));

//lastIndexOf
console.clear();
fruits.push('🍎');
console.log(fruits);
console.log(fruits.indexOf('🍎')); //같은 값이 있으면 가장 먼저있는걸 출력
console.log(fruits.lastIndexOf('🍎')); //가장 마지막 인덱스 출력