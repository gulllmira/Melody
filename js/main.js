$(document).ready(function () {
  var currentFloor = 2;//переменная с текущим этажом
  var floorPath = $('.home-image path')//каждый отдельный этаж в SVG
  var counterUp = $(".counter-up") /* кнопка увеличения этажа */
  var counterDown = $(".counter-down") /* кнопка уменьшения этажа */

  //функция при наведении мышью на этаж
  floorPath.on('mouseover', function() {
    floorPath.removeClass('current-floor'); //удаляем активный класс у этажей
    currentFloor = $(this).attr('data-floor')//получаем значение текущего этажа
    $(".counter").text(currentFloor);//записываем значение этажа в счетчик
  });
  
  counterUp.on('click', function() { //отслеживаем клик по кнопке вверх
    if (currentFloor < 18) { //проверяем значение этажа, оно должно быть не более 18
      currentFloor++;// прибавляем один этаж
      usCurrentFloor = currentFloor.toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping: false});// форматируем переменную с этажом, чтобы написание числа начиналось с 0, например 01, 02, 03
      $(".counter").text(usCurrentFloor);//записываем значение этажа в счетчик
      floorPath.removeClass('current-floor'); //удаляем активный класс у этажей
      $(`[data-floor=${usCurrentFloor}]`).toggleClass('current-floor') /*подсвечиваем текущий этаж, использовали обратную кавычку (клавиша Ё)*/
    }
  });

  counterDown.on('click', function() { //отслеживаем клик по кнопке вниз
    if (currentFloor > 2) { //проверяем значение этажа, оно должно быть не менее 2
      currentFloor--; //отнимаем один этаж
      usCurrentFloor = currentFloor.toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping: false}); //форматируем переменную с этажом, чтобы написание числа начиналось с 0, например 01, 02, 03
      $(".counter").text(usCurrentFloor);//записываем значение этажа в счетчик
      floorPath.removeClass('current-floor');//удаляем активный класс у этажей
      $(`[data-floor=${usCurrentFloor}]`).toggleClass('current-floor') /*подсвечиваем текущий этаж, использовали обратную кавычку (клавиша Ё)*/
    }
  })
});