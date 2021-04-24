'Use strict';
let num = 10;
function showFirstMessage(text) {
    console.log(text);
    let num = 5;
    console.log(num);
}
showFirstMessage("Hi!");
console.log(num);

console.log(calc(3,4));
console.log(calc(15,4));

function calc(a,b) {
    return(a+b);
}


function retVar() {
    let num = 50;
    return num;
}

let anotherNum = retVar();
console.log(anotherNum);

let calc = function (a,b) {
    return(a+b);
}
console.log(calc(3,4));
console.log(calc(15,4));

let calc = (a,b) => a+b; //ES6
console.log(calc(3,7));

//Методы и свойства строк и чисел

let str = "test";
console.log(str.length);
console.log(str.toUpperCase());
console.log(str.toLowerCase());

let guestList = `Guests:
 * John
 * Pete
 * Mary
`;

console.log(guestList); // список гостей, состоящий из нескольких строк

let twelve = "12.2";
console.log(Math.round(twelve));

let twelve = "12.2px";
console.log(parseInt(twelve));
console.log(parseFloat(twelve));