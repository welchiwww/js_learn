let a = 1, b = 1;
let c = ++a;
let d = b++;

alert(`Задание 1: a = ${a} b = ${b} c = ${c} d = ${d}`);

a = 2;
let x = 1 + (a *= 2);

alert(`Задание 2: a = ${a}, x = ${x}`);

let a1 = "" + 1 + 0;
let a2 = "" - 1 + 0;
let a3 = true + false;
let a4 = 6 / "3";
let a5 = "2" * "3";
let a6 = 4 + 5 + "px";
let a7 = "$" + 4 + 5;
let a8 = "4" - 2;
let a9 = "4px" - 2;
let a10 = "  -9  " + 5;
let a11 = "  -9  " - 5;
let a12 = null + 1;
let a13 = undefined + 1;
let a14 = " \t \n" - 2;

alert(`Результат: a1=${a1}, \t a2=${a2},
a3=${a3}, \t a4=${a4},
a5=${a5}, \t a6=${a6},
a7=${a7}, \t a8=${a8},
a9=${a9}, \t a10=${a10},
a11=${a11}, \t a12=${a12},
a13=${a13}, \t a14=${a14}
`)

a = prompt("Первое число: ", 1);
b = prompt("Второе число: ", 2);
alert(+a + +b);