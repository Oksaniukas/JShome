
// Создать три функции.
// 1. Будет выводить в консоль результат математического сравнения >, <, =, =>, <=


function xy() {
   let x = 5;
   let y = 8;
   console.log(x === y);
   console.log(x > y);
   console.log(x < y);
   console.log(x >= y);
   console.log(x <= y);

   //nuzno  tak !!!! odnoj strokoj console.log(2>3)
}

xy()

// 2. Функция возвращает сумму двух чисел. Мы эту функцию присваиваем переменной, и уже потом переменную выводим в консоль.

function ab() {
   let a = 7;
   let b = 3;
   let x = a + b;
   return x;
   // ili tak return 7+5
}

let result = ab()
console.log(result)



// 3. Функция которая принимает параметр, внутри себя умножает этот параметр на два, результат запишем в переменную которую создадим в самой функции. И выводит в консоль эту переменную .


// let y = 15;
// function thirdtask() {
//    let rezult = 2 * y;
//    console.log(rezult)
// }

// thirdtask();

function thirdtask(y) {
   let rezult = 2 * y;
   console.log(rezult)
}

thirdtask(15);


