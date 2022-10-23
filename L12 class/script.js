// let btn = document.querySelector('.button');


/****CLICK********************************************************** */
// btn.addEventListener('click', (event) => {
//    // alert("HELLO!")
//    // console.log(event)
//    // console.log(event.target)
// })

// document.addEventListener('click', (event) => {

//    console.log(`Coordinates Area: X - ${event.clientX}, Y - ${event.clientY}`)

// })


/*************CONTEXTMENU - КЛИК ПРАВОЙ МЫШКИ, НА ЛЕВУЮ КНОПКУ НЕ РЕАГИРУЕТ - ********************************************* */

// document.addEventListener('contextmenu', (event) => {
   
//    event.preventDefault();  /***ctrl+SHIFT+c  */

//    console.log(`Coordinates Area: X - ${event.clientX}, Y - ${event.clientY}`)

// })

/*************MOUSE ********************************************* */

// btn.addEventListener('mouseover', (event) => {   /***координаты появляются при наведении мыши на кнопку */
   
//    console.log(`Coordinates Area: X - ${event.clientX}, Y - ${event.clientY}`)

// })

// btn.addEventListener('mouseout', (event) => {   
   
//    console.log("OUT")

// })

// btn.addEventListener('mousedown', (event) => {   /***координаты появляются  нажали кнопку мыши*/
   
//    console.log(`Coordinates Area: X - ${event.clientX}, Y - ${event.clientY}`)

// })

// btn.addEventListener('mouseup', (event) => {   /***координаты появляются отпустили кнопку мыши */
   
//    console.log("OUT")

// })

// document.addEventListener('mousemove', (event) => {  
   
//    console.log(`Coordinates Area: X - ${event.clientX}, Y - ${event.clientY}`)

// })


// /******example */

// document.addEventListener.apply('click', async (ev) => {
//    if (ev.target.classList.contains('card')){
//       // console.log("XXX")
//       let id = ev.target.dataset.id;
//       console.log(id);
//       let response = await fetch('http:bvbbvb.lt', {id:id})  /** div class="card" data-id="1" */
//    }
// })

/*****INPUT*************************************** */
let input = document.querySelector('.input');

// input.onfocus = function(event) {  /***объект событий) */
//    console.log(event)
// }

// input.onfocus = function() {
//    console.log("focus")
// }
// input.onblur = function() {
//    console.log("OUT OF INPUT")
// }

// input.oninput = function(event){
//    // console.log(event)
//    console.log(event.target.value)
//    console.log(event.target.value.length)

// }

// input.oninput = function(event) {
//    if (event.target.value.length > 15) {
//       event.preventDefault();
//       alert("ONLY 15 symbols ")
//    }

// }

/** КЛАВИАТУРА*************************** */
// input.onkeydown = function() {
//    console.log("key down")
// }
// input.onkeyup = function() {
//    console.log("key up")
// }
// input.onkeypress = function() {
//    console.log("key pressed")
// }
// input.onkeypress = function(event) {
//    // console.log(event)
//    console.log(event.keyCode)

// }
// input.onkeypress = function(event) {
//    if (event.keyCode == 107) {
//       event.preventDefault()
//       alert("No 'K' LETTERS")

//    }

// }

// input.onkeypress = function(event) {
//    if (event.keyCode == 107) {
//       event.preventDefault()
//       alert("No 'K' LETTERS")

//    }

// }


/********** */
input.addEventListener('keypress', (e) => {
   // console.log(e.keyCode);
   console.log(e.target.value);
})

// input.onkeypress = (e) => {
//    console.log(e.keyCode);

// }


input.onkeypress = (e) => {
   // console.log(e.keyCode);
   console.log(e.target.value);
}

/******///*** */ */

// let person = {
//    firstName: "ANIA",
//    lastName: "IVANOVA"
// }

// console.log(Object.keys(person));  /***возвращает массив ключей */
// console.log(Object.values(person));  /***возвращает массив значений */
// console.log(Object.entries(person));

/****ДЕСТРУКТУРИЗАЦИЯ************************************************** */
// let person = {
//    firstName: "ANIA",
//    lastName: "IVANOVA"
// }

// let arr = ['ANIA', 'IVANOVA'];

// let firstName = arr[0];
// let lastName = arr[1];
// console.log(firstName, lastName);

/***делаем проще с помощью деструктуризации: */
// let [firstName, lastName] = ['ANIA', 'IVANOVA']
// console.log(firstName, lastName)

// let [firstName, ,middleName] = ['ANIA', 'IVANOVA', 'DMITRIJEVNA']
// console.log(firstName, middleName);

// let [firstName, , ...rest] = ['ANIA', 'IVANOVA', 'DIRECTOR', 'MAGAZINA']
// console.log(rest) /***все оставшиеся */

// let [firstName="NIKA", lastName="PETROVA"] = ['ANIA', 'IVANOVA', 'DIRECTOR', 'MAGAZINA']
// console.log(firstName, lastName) 

/***************************************************************** */
// let person = {
//    firstName: "ANIA",
//    lastName: "IVANOVA"
// }

// let {firstName, lastName} = person;
// console.log(firstName,lastName)

// let {firstName='NIKA', lastName="PETROVA"} = {};

// // let {firstName='NIKA', lastName="PETROVA"} = person;
// console.log(firstName,lastName)

// let {firstName: vardas, lastName:pavarde} = person;
// console.log(vardas, pavarde)

// let person = {
//    firstName: "ANIA",
//    lastName: "IVANOVA",
//    middleName: 'DMITRIJEVNA'
// }

// let data = {
//    age: 19,
//    gender: "female"
// }

// let {firstName, ...rest} = person;
// console.log(rest)

// let combine = {...person, ...data};
// console.log(combine);




// let arr1 = [1, 2, 3, 4, 5, 6];
// let arr2 = [7, 8, 9, 10];

// let combine = [...arr1, ...arr2];
// console.log(combine)



// let person = {
//       firstName: "ANIA",
//       lastName: "IVANOVA",
//       middleName: 'DMITRIJEVNA'
//    }
   
// let data = {
//    age: 19,
//    gender: "female",
//    ...person
// }

// data.firstName = "TANIA"
// console.log(data)

// let newPerson = {...person};  //***let newPerson = Object.assing(person) */
// newPerson.lastName='Popova'
// console.log(newPerson)