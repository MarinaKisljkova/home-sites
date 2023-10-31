"use strict";



let isMobile = {
  Android: function () {
      return navigator.userAgent.match(/Android/i);
  },
  BlackBerry: function () {
      return navigator.userAgent.match(/BlackBerry/i);
  },
  iOS: function () {
      return navigator.userAgent.match(/iPhone|iPad|iPod/i);
  },
  Opera: function () {
      return navigator.userAgent.match(/Opera Mini/i);
  },
  Windows: function () {
      return navigator.userAgent.match(/IEMobile/i);
  },
  any: function () {
      return (
              isMobile.Android()
              || isMobile.BlackBerry()
              || isMobile.iOS()
              || isMobile.Opera()
              || isMobile.Windows()
              );
  }
}; /* эта переменная для определения с какого устройства заходит на сайт пользователь. То есть, если isMobile = true, то есть "да", значит пользователь с мобильного зашел, усли isMobile = false, то не с мобильного.       По результатам проверки на тачскрин или десктоп назначим тэгу body разные классы, например класс "тачскрин" и класс "маус" :  */




/* Проверка: если пользователь зашел на сайт с любого мобильного устройства(any), тогда мы добавим body класс touch, если нет, тогда добавляем body класс mouse */

let body = document.querySelector('body');
if (isMobile.any()) {
    body.classList.add('touch');
    let arrow = document.querySelectorAll('.arrow'); /*Получаем в переменную все стрелочки, то есть все элементы в index.html с классом arrow; и далее пишем цикл, в котором по клику на любую стрелочку(мы же можем этот класс добавить к любому пункту меню)...........*/
  for (let i=0; i<arrow.length; i++){ /*Здесь циклом перебираем все стрелочки */
    let thisLink = arrow[i].previousElementSibling;  /*получаем ту ссылку(а), которая находится в том пункте меню, где стрелочка(перед стрелочкой в index.html написан тег а), чтобы дополнительно стилизовать эту ссылку  */ 
    let subMenu = arrow[i].nextElementSibling;/* получаем подменю, как следующий элемент, который находится после элемента с классом arrow  */ 
    let thisArrow = arrow[i]; /* текущая стрелочка */
    thisLink.classList.add('parent');/*добавили класс для ссылки */

    arrow[i].addEventListener('click', function(){
      subMenu.classList.toggle('open'); /* toggle обозначает, что при одном клике клас open добавили, при следующем клике этот класс удалили и так чередуется */
      thisArrow.classList.toggle('active');
    });
  }
}else{
  body.classList.add('mouse');
};

/* проверим в инструментах разработчика - в body появляется соответствующий класс при изменении размера экрана */

















// Пример стартового JavaScript для отключения отправки форм при наличии недопустимых полей
(function () {
    
  
    // Получите все формы, к которым мы хотим применить пользовательские стили проверки Bootstrap
    var forms = document.querySelectorAll('.needs-validation')
  
    // Зацикливайтесь на них и предотвращайте отправку
    Array.prototype.slice.call(forms)
      .forEach(function (form) {
        form.addEventListener('submit', function (event) {
          if (!form.checkValidity()) {
            event.preventDefault()
            event.stopPropagation()
          }
          
          form.classList.add('was-validated')
          
        },false )
        
        
        
        
        
        

        




      })
     /* alert ("Спасибо! Мы перезвоним Вам в ближайшее время."); */
  })() 


  

   
  




