let patsansHeight = () => { //Объявление функции
    let denisHeight = +prompt('Введите рост Дениса'); // Задаётся рост Дениса в поле
    if (denisHeight < 10) { // Условие, если рост маленький
        return "Ошибка: слишком мелкий";
    } else {
        //Арифметика роста по задаче
        let egorHeight = denisHeight-=5;
        let maximHeight = denisHeight+=25;
        let vovanHeight = maximHeight+=10;
        // Возврат результата;
        return "Денис: " + denisHeight + "см, " + "Егор: " + egorHeight + "см, " + "Максим: " + maximHeight + "см, " + "Вова: " + vovanHeight + "см";
    }
}

console.log(patsansHeight());