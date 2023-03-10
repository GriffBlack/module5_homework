let res = +prompt('Введите число', '');
if (typeof res !== 'number') {
    console.log("Это не число!");
} else if(res != res) {
    console.log("it's NaN");
} else if (res % 2 === 0) {
    console.log("Число четное");
} else {
    console.log("Число не четное");
}