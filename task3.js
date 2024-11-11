let num1 = prompt("1 санды еңгізіңіз");
let num2 = prompt("2 санды еңгізіңіз");
let orta = Number();

if (num1 > num2) {
    alert("a саны b санынан үлкен")
} else if (num1 < num2) {
    alert("a саны b санынан кіші")
} else if (num1 = num2) {
    alert("Сандар тең")
}

orta = (num1 + num2) / 2;
alert("Сандардың орта мәні: " + orta)