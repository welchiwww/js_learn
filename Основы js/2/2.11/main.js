//Задание 1
/*
alert( null || 2 || undefined );

//Задание 2
alert( alert(1) || 2 || alert(3) );

//Задание 3 
alert( 1 && null && 2 );

//Задание 4
alert( alert(1) && alert(2) );

//Задание 5
alert( null || 2 && 3 || 4 );

//Задание 6
let value = NaN;

value &&= 10;
value ||= 20;
value &&= 30;
value ||= 40;

alert(value);

//Задание 7
let age = +prompt('Введите число для проверки', '');
if (age >=14 && age <= 90){
    alert('Число в диапазоне от 14 до 90');
} 
else {
    alert('Число не в диапазоне от 14 до 90');
}

//Задание 8
let checkNum = +prompt(`Введите число для проверки НЕ`, ``);
if(checkNum < 14 || checkNum > 90){
    alert(`Число NE в диапазоне от 14 до 90`)
} else{
    alert(`Число в диапазоне`);
}

checkNum = +prompt(`Альтернативный способ проверки, введите число`, ``);
if (!(checkNum >= 14 && checkNum <= 90)){
    alert(`Число не в диапазоне`);
} else{
    alert(`Число в диапазоне от 14 до 90`);
}

//Задание 9
if (-1 || 0) alert( 'first' );
if (-1 && 0) alert( 'second' );
if (null || -1 && 1) alert( 'third' );

*/

//Задание 10

let userName = prompt("Введите имя пользователя:", "");

if (userName == '' || userName == null) {
    alert("Отменено");
} else
    if (userName == 'Админ') {
        let password = prompt('Введите пароль:', '');
        if (password == '' || password == null) {
            alert('Отменено');
        } else if (password == 'Я главный') {
            alert('Здравствуйте!');
        } else {
            alert('Неверный пароль!');
        }

    }
    else {
        alert('Я вас не знаю');
    }