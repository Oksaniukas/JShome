// Циклы.

// Напишите 2 цикла. Один будет считать от 10 до 0, другой от 0 до 10. Напишите с помощью FOR и с помощью WHILE. В конечном результате будет 4 цикла.

// let condition = 10;
// while (condition > 0) { 
//    condition--;
//    console.log(condition);
// }

// let numb = 0;
// while (numb < 10) { 
//    numb++;
//    console.log(numb);
// }


// for (let a = 10; a >= 0; a--) {
//    console.log(a);
// }

// for (let b = 0; b <= 10; b++) {
//    console.log(b);
// }


// Создайте массив разных данных простых типов ( примитивов), не менее 15 элементов в массиве. 
//Создайте переменную с пустой строкой. Пройдитесь циклом FOR по массиву. 
//В теле цикла ( там где мы пишем код {} ) сделайте проверку, если элемент массива при переводе в булевое значение 
//будет положительным, тогда запишите его в строку, разделяя её пробелом.


let arr = [0, 'ss', 15, 'rs', 55, false, 233, 'labas', 777, true, 1, 2, 'bb', 'c', 5, 10, 'name', 'age', 100]

let x = '';

// for (let x=0; x < arr.length; x++) {
//    // console.log(arr[x]);
// }

for (let x=0; x < arr.length; x++) {
   if (arr[x]) {
      x += '' + arr[x] + ' ' //+= то же как х+ т.е. возьми себя и прибавь
   }
}
console.log(x)


// Создайте массив разных данных простых типов ( примитивов), не менее 15 элементов в массиве. 
//Создайте ещё одну переменную с пустым массивом. Пройдитесь циклом FOR по массиву.
// В теле цикла ( там где мы пишем код {} ) сделайте проверку, если элемент массива при переводе в булевое значение будет положительным, 
//тогда запишите его в  ранее созданную переменную с пустым массивом. 
//В результате получится массив положительных элементов. Но я хочу чтобы массив был длиной максимум в 3 элемента. 
// Урежьте массив до 3 элементов с помощью свойства length //arr.length = 3; 
// Урежьте массив до 3 элементов с помощью splice. ( Как удалить от 3-го до последнего элемента Вам придется самостоятельно найти в Gogle )

let arr1 = [0, 'ss', 15, 'rs', 55, false, 233, 'labas', 777, true, 1, 2, 'bb', 'c', 5, 10, 'name', 'age', 100]

let arr2 = [];

for ( let x=0; x < arr.length; x++) {
   if (arr1[x]) {  //если булевое положительное
       arr2.push(arr1[x])
   }
}
arr.length = 3;
arr2.splice(3); //урежьте массив до 3 элементов с помощью splice.
// или так console.log(arr2.length)=19 arr2.splice(3, arr2.length-3 )

console.log(arr2)

