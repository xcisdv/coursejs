let num = 50;
// while (num <= 55) {
//     console.log(num);
//     num++;
// }
do {
    console.log(num);
    num++;
}
while (num < 55);

for (let i = 3; i < 8 && i > 2; i++) {
    if (i == 6) {
        break;
    }
    console.log(i);
}

for (let i = 3; i < 8 && i > 2; i++) {
    if (i == 6) {
        continue;
    }
    console.log(i);
}