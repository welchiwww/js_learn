//Задание 1
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
let checkNum = +prompt('Введите число для проверки', '');
if (checkNum >=14 && checkNum <= 90){
    alert('Число в диапазоне от 14 до 90');
} 
else {
    alert('Число не в диапазоне от 14 до 90');
}