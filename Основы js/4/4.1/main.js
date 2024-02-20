/* Task 1
let user = {};
console.log(user);
user.name = `John`;
console.log(user);
user.surname = `Smith`;
console.log(user);
user.name = `Pete`;
console.log(user);
delete user.name;
console.log(user);
*/

/* Task 2
let scheldue = {};
console.log(isEmpty(scheldue));
scheldue[`8:30`] = `Get up!`;
console.log(isEmpty(scheldue));

function isEmpty(obj){
    for (let key in obj){
        return false;
    }
    return true;
}
*/

/* Task 3
let salaries = {
    Jonh: 100,
    Ann: 160,
    Pete: 130
}

let sum = 0;
for (key in salaries){
    sum += salaries[key];
}

console.log(sum);
*/

/*Task 5
let menu = {
    width: 200,
    height: 300,
    title: "My menu"
};
console.log(menu);
multiplyNumeric(menu);
console.log(menu);

function multiplyNumeric(obj){
    for (let key in obj){
        if (typeof(obj[key]) == `number`) obj[key] *= 2;
        return obj;
    }
}
*/