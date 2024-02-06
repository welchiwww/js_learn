//Задание 1
if("0"){
    alert("Hello");
}

//Задание 2
let langUserAnswer = prompt("Какое официальное название языка JS?", "");
if (langUserAnswer == "ECMAScript"){
    alert("Вы правы!");
}
else {
    alert("Вам нужно узнать это!");
}

//Задание 3
let userNumber = +prompt("Введите число: ", 0);
if(userNumber > 0) {
    alert(1);
} else if (userNumber < 0){
    alert(-1);
} else {
    alert(0);
}

//Задание 4
let result;
let a = +prompt("a = ", 2);
let b = +prompt("b = ", 3);
result = (a + b < 4) ? 'Мало' : 'Много';
alert(result);

//Задание 5
let message;
let login = prompt("Введите логин", "");

message = (login == 'Сотрудник') ? 'Привет'
: (login == 'Директор') ? 'Здравствуйте' 
: (login == '') ?'Ничего не ввели!' : ''
alert(message);