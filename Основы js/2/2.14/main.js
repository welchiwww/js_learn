//Задание 1
/*
let browserName = prompt(`Введите название браузера`, ``);
if (browserName == `Edge`) alert(`You've got the Edge!`);
else if (browserName == `Chrome` || browserName == `Firefox`
|| browserName == `Safari` || browserName == `Opera`) {
    alert(`Okay we support these browsers too`)
} else alert(`We hope this page looks ok!`);
*/
//Задание 2
const num = prompt(`Введите число между 0 и 3`, ``);
if (num != null) {
    switch (+num) {
        case 0:
            alert(`Вы ввели 0`);
            break;
        case 1:
            alert(`Вы ввели 1`);
            break;
        case 2:
        case 3:
            alert(`Вы ввели 2 или 3`);
            break;
        default:
            alert(`Вы ввели неверное число!`);
    }
} else alert(`Вы не ввели число :(`);