let numberOne = +prompt('Введите первое число.');
let numberTwo = +prompt('Введите второе число.');

if (numberOne < numberTwo) {
    alert(`Минимальное значение первое: ${numberOne}`);
} else if (numberOne > numberTwo) {
    alert(`Минимальное значение второе: ${numberTwo}`);
}
if (numberOne == numberTwo) {
    alert('Ищите ответ в консоли!')
    console.log(`Значения равны`);
}