//Задание 1
/*
let i = 3;

while (i) {
  alert( i-- );
}
*/
//Задание 2
/*
let i = 0;
while (++i < 5) alert( i );

let i = 0;
while (i++ < 5) alert( i );
*/
//Задание 3
/*
for (let i = 0; i < 5; ++i) alert( i );

for (let i = 0; i < 5; i++) alert( i );
*/
//Задание 4
/*
for (let i = 2; i <= 10; i++){
    if (i % 2 === 0) alert(`Четное ${i}`);
}
*/
//Задание 5
/*
for (let i = 0; i < 3; i++) {
    alert( `number ${i}!` );
  }

let cnt = 0;
while (cnt < 3) {
alert( `number ${cnt}!` );
cnt++;
}
*/
//Задание 6
/*
while(true){
    let num = prompt(`Введите число больше 100`, ``);
    if (num == null) break; 
    if (num > 100){
        alert(`Молодец!`);
        break;
    } else alert(`Число должно быть больше`);
}
*/
let n = 10;
nextNum:for (let i = 2; i <= n; i++){
    for(let m = 2; m < i; m++){
        alert(`Считаем: ${i} / ${m}`);
        if (i % m == 0) continue nextNum;
        }
    alert(i);
}