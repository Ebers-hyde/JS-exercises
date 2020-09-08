// Глава 4, задание 4. Too much cheating. Ну не зря же в главе написано про JSON и этот божественный метод. Я проверил, работает

function deepEqual(firstObject, secondObject) //Объявляем функцию, куда принимаем два объекта
{
    return JSON.stringify(firstObject) === JSON.stringify(secondObject); //Превращаем оба объекта в JSON строки и сравниваем их, возвращаем результат.
}

let obj = {here: {is: "an"}, object: 2};
console.log(deepEqual(obj, obj));
console.log(deepEqual(obj, {here: 1, object: 2}));
console.log(deepEqual(obj, {here: {is: "an"}, object: 2}));