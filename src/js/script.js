/* let answer = confirm("Вам есть 18?");
console.log(answer); */

/* console.log(4+'fff'); */

/* let isChecked = false,
    isClose = false; */

/* console.log(isChecked && isClose); */ /* оператор и */
/* console.log(isChecked || isClose);  *//* оператор или */

/* if (3*5 == 9+8) {
    console.log('Верно');
} else {
    console.log('Ошибка')
} */

/* let answer = confirm("Вам есть 18?");
    if (answer) {
        console.log('заходь');
    }
    else {
        console.log('тебе нельзя');
    } */

/*    const num = 5;
    if (num<4) {
        console.log('мало');
    }
    else if (num>7) {
        console.log('много');
    }
    else if (num>9) {
        console.log('много');
    }
    else {
        console.log('верно');
    } */

/*     for (let i = 1; i < 16; i++) {
        console.log(i);
    }
 */

/*     function logging (a,b) {
        console.log(a*b);
    }
    logging(2,5);
    logging(3,6); */

/* $(document).ready(function(){
    $('.carusel__inner').slick({
        speed: 1300,
        prevArrow: '<button type="button" class="slick-prev"><img src="icons/chevron_left_solid.png"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="icons/chevron_right_solid.png"></button>',
        responsive: [
            {
              breakpoint: 900,
              settings: {
                arrows: false,
                slidesToScroll: 1,
                infinite: true,
                dots: true
              }
              }
        ]
    });
    }); */

    const slider = tns({
        container: '.carusel__inner',
        items: 1,
        slideBy: 'page',
        autoplay: false,
        controls: false,
        nav: false
      });

      document.querySelector('.prev').addEventListener('click', function () {
        slider.goTo('prev');
      });
      document.querySelector('.next').addEventListener('click', function () {
        slider.goTo('next');
      });