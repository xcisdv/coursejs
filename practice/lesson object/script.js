// 
let optionts = {
    width: 1024,
    height: 1024,
    name: "Test"
};

console.log(optionts.name);
optionts.bool = false;
optionts.colors = {
    border: "black",
    bg: "red"
};
delete optionts.bool;   
console.log(optionts);

for (let key in optionts) {
    console.log('Свойство ' + key + ' имеет значение ' + optionts[key]);
}

console.log(Object.keys(optionts).length);