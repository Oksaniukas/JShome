let wrapper = document.querySelector ('.wrapper');

let nav = document.createElement ('nav');
wrapper.append(nav);

let ul = document.createElement ('ul');
nav.append(ul)

let arrLi = ["Shrubs", "Climbers", "Perennials"];

function createLi (liName, parent) {
   let newLi = document.createElement('li');
   newLi.classList.add(liName);
   newLi.classList.add('newLi');
   newLi.innerHTML = `<div>${liName}</div>`;
   parent.append(newLi)
 
}

for (let i = 0; i < arrLi.length; i++) {
   createLi(arrLi[i], ul);
}

let alist = document.querySelector ('ul').children;

for (let i = 0; i < alist.length; i++ ) {                 
   alist[i].addEventListener('click', function(){        
      if (alist[i].classList.contains('active')) {     
         return
      } else {
         for (let i = 0; i < alist.length; i++ ) { 
            alist[i].classList.remove ('active')       
         }
         alist[i].classList.add ('active')
      }
   })  
};

let arrCard = [
  {
    plantName: "'Caesar's Brother' Siberian Iris",
    plantType: 'Perennials',
    description: 'A rich and stunning deep purple, these flowers stand out in a sea of springtime pinks and yellows.',
    imgSrc: "https://cdn.shopify.com/s/files/1/0472/6394/0775/products/829ae889d19f517eaaff45d35245a00c.jpg?v=1643644204"
  },
  {
    plantName: "Florentina Climbing Rose",
    plantType: 'Climbers',
    description: "Bold, romantic, easy to grow. The flowers have an irresistible true, deep red color that's intensified by the layers of supple, silky petals.",
    imgSrc: "https://cdn.shopify.com/s/files/1/0472/6394/0775/products/rosa-florentina-1-P-sw.jpg?v=1626782105"
  },
  {
    plantName: "Black Hat Rhododendron",
    plantType: 'Shrubs',
    description: "Black Hat Rhododendron flaunts a truly astonishing number of bright pink flowers in spring, and for the rest of the year, its foliage runs the show.",
    imgSrc: "https://cdn.shopify.com/s/files/1/0472/6394/0775/products/rhododendron-black-hat-2_eb04fc70-1c7a-4473-abe1-15da8e4a9f7c-sw.jpg?v=1626778819"
  },
  {
    plantName: "Jolly Good Clematis",
    plantType: 'Climbers',
    description: "All summer long its vibrant green foliage is showered in electric purple flowers with magenta undertones.",
    imgSrc: "https://cdn.shopify.com/s/files/1/0472/6394/0775/products/859_4166_popup.jpg?v=1608000699"
  },
  {
    plantName: "Berry Poppins Winterberry Holly",
    plantType: 'Shrubs',
    description: "Anyone can enjoy the magic of this amazing native holly and its super colorful branches in winter.",
    imgSrc: "https://cdn.shopify.com/s/files/1/0472/6394/0775/products/Ilex-verticillata-Berry-Poppins-2-P_9f12aa00-873a-458b-ac28-b0c67e7fe889-sw.jpg?v=1626778514"
  },
  {
    plantName: "'Arizona Apricot' Blanket Flower",
    plantType: 'Perennials',
    description: "Cheery color and a cute, button-like habit make 'Arizona Apricot' blanket flower an ideal choice for a sunny spot in your garden.",
    imgSrc: "https://cdn.shopify.com/s/files/1/0472/6394/0775/products/545_2070_popup_8b44ceba-9f91-4048-bcfc-c76e63f40947-sw.jpg?v=1626783183"
  },
  {
    plantName: "Vanilla Strawberry Panicle Hydrangea",
    plantType: 'Shrubs',
    description: "The big, cone-shaped blooms of Vanilla Strawberry Panicle Hydrangea will have you dreaming of ice cream on hot summer days",
    imgSrc: "https://cdn.shopify.com/s/files/1/0472/6394/0775/products/hydrangea-vanilla-strawberry-4.jpg?v=1608002052"
  },
  {
    plantName: "'Edulis Superba' Peony",
    plantType: 'Perennials',
    description: "'Edulis Superba' peony boasts a lovely fragrance and bright pink blooms; it's easy to see why this peony is a garden favorite! ",
    imgSrc: "https://cdn.shopify.com/s/files/1/0472/6394/0775/products/579-Paeonia-edulis-superba-_1.jpg?v=1648043894"
  },
  {
    plantName: "White Eden Climbing Rose",
    plantType: 'Climbers',
    description: "Absolutely covered in the most bodacious big, full blooms, each one white with a blush apricot-pink center, it will transform whatever structure you plant it on into a striking accent that you'll look forward to seeing every year. ",
    imgSrc: "https://cdn.shopify.com/s/files/1/0472/6394/0775/products/rosa-white-eden-1-P.jpg?v=1608002124"
  },
];

let cardBlock = document.createElement('div');
wrapper.append(cardBlock);

let cardList = document.createElement('div');
cardList.classList.add('card_list');
cardBlock.append(cardList);

function createCard(parent, cardObject) {
  let card = document.createElement('div');
     card.classList.add('card');
     card.innerHTML = `
      <div class="image">
        <img src='${cardObject.imgSrc}' alt="image">
      </div>
      <div class="plant_name">
        <h3>${cardObject.plantName}</h3>
      </div>
      <div class="plant_family">
        <span class="plant_family_text1">Type:</span>
        <span class="plant_family_text2">${cardObject.plantType}</span> 
      </div>
      <div class="plant_description">
        <span class="plant_description_text1">Description: </span> 
        <span class="plant_description_text2"> ${cardObject.description}</span>
      </div>
      <div class="button_block">
        <div class="cart_button">
          Add To Cart
        </div>
      </div>
    `;
  
    parent.append(card) 
}

  arrCard.forEach(function(card) {
   createCard(cardList, card)
  });


