//Задание 1
/*
let age = +prompt(`Введите возраст`,``);

function checkAge(age){
    return (age > 18) ? true : confirm(`Разрешили?`);
}

function checkAge(age){
    return (age > 18) || confirm(`Тебе разрешили?`);
}
alert(checkAge(age));
*/

//Задание 2
/*
let a = +prompt(`Число 1`, ``);
let b = +prompt(`Число 2`, ``);

function min(a, b){
    return (a < b) ? a : b;
}
alert(min(a,b));
*/

//Задание 3
/* Моя реализация
let x = +prompt(`Число x`, ``);
let n = +prompt(`Число n`, ``);

function pow(x, n){
    if (x == null || n == null) return;
    return x ** n;
}
if (n > 0 && n % 1 == 0){
    alert(pow(x, n));
} else alert(`Используйте натуральный n`);
*/
/* Реализация похожая на решение
function pow(x, n){
    let result = x;
    for (let i=1; i < n; i++){
        result *= x;
    }
    return result;
}

let x = +prompt(`Число x`, ``);
let n = +prompt(`Число n`, ``);
if (n > 0 && n % 1 == 0) alert(pow(x, n));
else alert(`Используйте натур n`);
*/