// 1 задание после третьей главы. Суперизи

let minimum = (a, b) => { //Объявляем функцию с двумя числами
    if (a == b) { // Сначала проверяем на равенство
        return "Числа равны!"; 
    } else if (a < b) { //Потом на то, что меньше первое число
        return a; //Возвращаем его, если проходит
    } else { //Возвращаем второе, если нет
        return b 
    };
}

console.log(minimum(+prompt('Введите первое число'), +prompt('Введите второе число')));