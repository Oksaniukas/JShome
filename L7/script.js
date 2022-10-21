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
console.log(alist)

/Нашишите  меню навигации )  В нем будет 5 ссылок.
При загрузке страницы первая ссылка будет активной и другим цветом.
При клике на другую ссылку она становится активной и 
выделеной а с прошлой выделение снимается.S