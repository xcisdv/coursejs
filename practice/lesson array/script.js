// let arr = ["first", 2, 3, 4, 5];
// arr[99] = 99;
// console.log(arr.length);
// console.log(arr);
// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
// }
// arr.pop();
// arr.push("5");
// arr.shift();
// arr.unshift("7");
// arr.forEach(function(item, i, mass) {
//     console.log(i + ': ' + item + " masiv: " + mass);
// });

// console.log(arr);

// let mass = [1, 3, 5, 6, 7];

// for (let key in mass) {
//     console.log(key);
// }

// for (let key of mass) {
//     console.log(key);
// }

// let ans = prompt("", ""),
//     arr = [];
// arr = ans.split(',');
// console.log(arr); 

let arr = ['asd', 'werewr', 'ewr'],
    i = arr.join('; ');
console.log(arr);
console.log(i);

let arr = ['asd', 'werewr', 'ewr'],
    i = arr.sort();
console.log(arr);
console.log(i);

let arr = ['1', '4', '19'],
    i = arr.sort(compNum);
function compNum(a, b) {
    return a-b;
}
console.log(arr);
console.log(i);

let soldier = {
    healfh: 400,
    amor: 100
};

let max = {
    healfh: 100
};

max.__proto__ = soldier;

console.log(max);
console.log(max.amor);
