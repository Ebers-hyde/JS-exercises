// 2 задание после 2 главы. Изи крейзи тризи. написано, что эта задача повышает стоимость кодера на рынке труда. Я решил с 1 раза. берите на работу

for(let i=1; i<=100;i++) { //Объявляем цикл с начальным значением 1, который перебирает числа до 100 включительно по одному с каждой итерацией
    if(i%3 == 0 && i%5 == 0 ) { //Проверяем кратность числа 3 и 5 с помощью оператора остаток от деления
        console.log("FizzBuzz"); //При истине выводим физбаз
    } else if (i%3 == 0) { //если не проходит - ещё одна проверочка на кратность только 3
        console.log("Fizz"); //выводим физ
    } else if (i%5 == 0) { //и ещё раз если не прошло проверка на кратность 5
        console.log("Buzz"); //выводим баз
    } else { //ни одна не прошла
        console.log(i); //выводим само число
    }
}