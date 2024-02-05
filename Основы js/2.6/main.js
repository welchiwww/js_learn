let isUser = confirm("Вы робот-пришелец?")
if (!isUser) {
    let Name = prompt("Ваше имя?", "");
    alert(`Здравствуйте, ${Name}`);
}
else {
    alert("Вы робот-пришелец!!!!!");
}

