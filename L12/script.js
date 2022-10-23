// 1. Создай массив с объектами, у которых будут как минимум есть поля name, lastname.
// 2. Для каждого объекта создай карточку, с помощью специальной функции, которую ты напишешь 
// сам(а), которая будет принимать первым аргументом строку, вторым массив, и фильтровать массив так: 
// 3. Если в поле объекта name будет найдена строка из поля ввода, то такой объект оставить )
// 4. Создай поле ввода (input)  и напиши ему обработчик который будет получать введённое значение из поля ввода.
// 5. И будет вызывать функцию из пункта два, передавая туда первым аргументом то что мы получили из поля ввода,
//  а вторым массив с объектами.

// Проще говоря: у Вас есть 5-10 карточек и поле ввода.
// Некоторых из ваших объектов зовут Dima и Diana.
// В поле ввода Вы вводите Di и у вас вместо 5-10 карточек остаются только те у которых в именах есть то что Вы ввели в поле ввода. Собственно Dima & Diana


let wrapper = document.querySelector('.wrapper');
let input = document.querySelector('.input');
// let inpVal = input.value.toLowerCase();

let cardList = document.createElement('div');
cardList.classList.add('card_list');
wrapper.append(cardList);

let contacts = [
   {
      firstName: 'Anna',
      lastName: 'Petrova',
      city: 'Vilnius' 
   },
   {
      firstName: 'Anton',
      lastName: 'Ivanov',
      city: 'Kaunas' 
   },
   {
      firstName: 'Olga',
      lastName: 'Nikitina',
      city: 'Visaginas' 
   },
   {
      firstName: 'Oleg',
      lastName: 'Semionov',
      city: 'Vilnius' 
   },
   {
      firstName: 'Viktorija',
      lastName: 'Pavlova',
      city: 'Kaunas' 
   },
   {
      firstName: 'Ivan',
      lastName: 'Sidorov',
      city: 'Visaginas' 
   },
   {
      firstName: 'Taras',
      lastName: 'Blinov',
      city: 'Zarasai' 
   },
   {
      firstName: 'Tania',
      lastName: 'Sidorova',
      city: 'Vilnius' 
   },
   {
      firstName: 'Ivan',
      lastName: 'Zajcev',
      city: 'Kaunas' 
   },
   {
      firstName: 'Aliona',
      lastName: 'Semionova',
      city: 'Vilnius' 
   }
];


function newCard(parent, cardObj) {
  let card = document.createElement('div');
     card.classList.add('card');
     card.innerHTML = `
      <div class="firstName">
      <span>Name:</span>
        ${cardObj.firstName}
      </div>
      <div class="lastName">
      <span>Lastname:</span>
        ${cardObj.lastName}
      </div>
      <div class="city">
      <span>City:</span>
        ${cardObj.city}
      </div>
    `;
    parent.append(card) 
}

contacts.forEach(function(card) {
   newCard(cardList, card)
});




function newSearch(inputValue, arr)  {
   let filteredContacts = arr.filter(value => {
      return (
         value.firstName.toLowerCase().includes(inputValue.toLowerCase()) ||
         value.lastName.toLowerCase().includes(inputValue.toLowerCase()) ||
         value.city.toLowerCase().includes(inputValue.toLowerCase()) 
      )
      
   })
      cardList.innerHTML = '';
      filteredContacts.forEach(function(card){
         newCard(cardList, card)
      })
}

input.addEventListener('input', (e) => {
     let inpVal = e.target.value;
     newSearch (inpVal, contacts)

}
)










