// Создайте поле ввода INPUT и кнопку SAVE.
// При нажатии на SAVE функция возьмет значение из INPUT и запишет его в localStorage c ключём “input”.
// При загрузке страницы напишите скрипт который будет присваивать нашему полю ввода INPUT значение 
// из localStorage по ключу “input”.

// PS: чтобы получить текущее значение поля ввода INPUT Вам надо:
//     * Получить сам INPUT
//     * Получить его значение из поля value. Например:
//         let input = document.querySelector('.input')
//         let inputText = input.value


// let wrapper = document.querySelector ('.wrapper');

// let input = document.getElementsByTagName ('input') [0];  /******если  */
// let button = document.getElementsByTagName('button') [0];



// button.addEventListener('click', function (){
//    let inputText = input.value;
//    localStorage.setItem('input', inputText);

// })

// input.value = localStorage.getItem('input');


// 
// Задание Нумер 2 !!!!

// Напишите таймер, или просто отсчётчик, который будет прибавлять +1 каждую секунду. 
// Если Вы закроете вкладку, но потом вернётесь снова - он продолжит счётчик дальше.

// let wrapper = document.querySelector ('.wrapper');
// let newElem = document.createElement('div');
// newElem.className = 'time';
// wrapper.append(newElem)


// let a = 0;
// function timeCount() {
//    setInterval (function(){
//       a++;
//       newElem.innerHTML = a;
//       localStorage.setItem('StartFrom', a);

//    }, 1000);
   
// }

// a = localStorage.getItem('StartFrom')
// // newElem.innerHTML = a;

// timeCount();

let wrapper = document.querySelector ('.wrapper');

let inp1 = document.querySelector('.minute') ;
let inp2 = document.querySelector('.second');
let button = document.getElementsByTagName('button') [0];

inp1.value = 5 ;

inp2.value = 300 ;


function minCount() {
   let minuteStart = 5;
   setInterval (function(){
      minuteStart--;
      inp1.value = minuteStart;
      localStorage.setItem('minute', inp1.value);

   }, 60000);
};

function secCount() {
   let secondStart = 300;
   setInterval (function(){
      secondStart--;
      inp2.value = secondStart;
      localStorage.setItem('second', inp2.value);

   }, 1000);
};

button.addEventListener('click', function (){
     
   minCount(); 
   secCount();
});
   

   