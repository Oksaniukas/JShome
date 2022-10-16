// 1. Напишите функцию fill, которая заполняет новый массив предоставленным значением.
// Первый параметр функции fill это число, которое обозначает сколько раз в массиве повторится заданное значение, 
// второй параметр - заданное значение которое мы помещаем в массив. В примере выше - 5 раз повторяется “Hello”.
 

// function fillNewArray(arraySize, value) {
//    let newArray = new Array(arraySize).fill(value);
//    console.log(newArray);
//  }
// fillNewArray(5, 'Hello');

// let newArray = fill(5,"Hello");
// console.log(newArray);


/****************************/
// function fill(amount, item){
//    let result = [];
//    
// for (let i = 0; i < amount; i++) {
//       result.push (item);
//    }
//   return result
// }

/********* ili tak */
// function fill(amount, item){
//    let result = [];
//    
// result.fill(5, 'Hello)
//   return result
// }


// 2. Напишите функцию Compact, которая очищает массив от нежелательных значений, таких как false, 
// undefined, пустые строки, ноль, null.
// // Ожидаемый результат: 
// let arr = [0, 1, false, 2, undefined, '', 3, null];
// let compactArray = compact(arr)
// console.log(newArray) // ==> [1,2,3]


// let arr123 = [0, 1, false, 2, undefined, '', 3, null];

// Array.prototype._compact = function(){
//   return this.filter(function(i){
//     return i;
//   });
// };

// arr123._compact();
// console.log(arr123._compact())

/******* tak nuzno: */
// let arr = [0, 1, false, 2, undefined, '', 3, null];
// let compactArray = compact(arr)
// console.log(compactArray) // ==> [1,2,3]

// function compact(array) {
//    let result = array.filter(function(item){     *****/otfiltrovat nenuznyje*/
//       return item > 0          /** !!item - ili tak; esli na polozitelnost proverit  */
//    })
//    return result
// }

// /*****3. Напишите функцию мультипликатор ( умножатель ), которая принимает 
//  параметром массив и множитель, и возвращает новый массив, элементы которого 
//  умножены на переданный в параметрах множитель.
// Ожидаемый результат: 
// // let array = [10, 20, 30, 40, 50];
// // let multiArray = multiplicator(array, 5);
// // console.log(multiArray) // ==> [50, 100, 150, 200, 250]*/

// // let array1 = [10, 20, 30, 40, 50];

// // let multiArray1 = [];

// // function multiplicator(array, value) {
// //    for (let i = 1; i <= n; ++i) {
// //       multiArray1.push(array[i] * value);
// //       return multiArray1
// //    }
// // }
// // multiplicator(array1, 5);
// // console.log(multiArray1);

// let array = [10, 20, 30, 40, 50];
// let multiArray = multiplicator(array, 5);
// console.log(multiArray) // ==> [50, 100, 150, 200, 250]

/***************************tak************* */
// function multiplicator(array, mult) {
//    let result = array.map(function(item){    /**prochodit po vsem elementam massiva i perezapisyvaet */ /**ili  be promezutochnoje peremennoj return array.map(function(item){}) */
//       return item * +mult     /*** + delaet v Number */                
//    })

//    return result
// }





// /******************************
//  * 4. Напишите функцию alphabet которая принимает в себя массив разрозненных букв, 
//  * сортирует их по порядку и выводит в консоль, так же в консоль выводится число 
//  * обозначающие сколько не хватает букв для полного алфавита
// Ожидаемый результат: */


// let ruAlphabet = 33;
// let engAlphabet = 26; 
 
// let array = ['q', 'z', 'a', 'e', 'f', 't', 'b', 's', 'm', 'j', 'y', 'k', 'i', 'l', 'x', 'o'];

// function alphabet(){
//    array.sort();
// }

// alphabet()
// console.log(array.sort());

// // alphabet(array, engAlphabet); // ==> ['a', 'b', 'c', 'd'.....] 10 букв не хватает до оригинального алфавита
 

let ruAlphabet = 33;
let engAlphabet = 26; 
alphabet(array, engAlphabet);

let array = ['q', 'z', 'a', 'e', 'f', 't', 'b', 's', 'm', 'j', 'y', 'k', 'i', 'l', 'x', 'o'];


function alphabet(array, lang) {
   console.log(array.sort())
   console.log(lang - array.length);
}