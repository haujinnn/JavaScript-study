
let counter = 2;
const preIncrement = ++counter; //preIncrement=3, counter=3
console.log(`preIncrement: ${preIncrement}, counter: ${counter}`);

const postIncrement = counter++; //preIncrement=3, counter=4
console.log(`postIncrement: ${postIncrement}, counter: ${counter}`);

const strFive = '5';
const numFive = 5;

//loose equality
console.log(strFive == numFive);
console.log(strFive != numFive);

//strict equality
console.log(strFive === numFive);
console.log(strFive !== numFive);


const blowser = 'IE';
switch (browser){
    case 'IE':
        console.log('go away!');
        break;
    case 'Chrome':
    case 'Firefox':
        console.log('love you!');
        break;
    default:
        console.log('same all!');
        break;
}