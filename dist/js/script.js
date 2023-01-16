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
        nav: false,
        speed: 1200
      });

      document.querySelector('.prev').addEventListener('click', function () {
        slider.goTo('prev');
      });
      document.querySelector('.next').addEventListener('click', function () {
        slider.goTo('next');
      });

$(document).ready(function(){
    $('ul.catalog__tabs').on('click', 'li:not(.catalog__tab_active)', function() {
        $(this)
        .addClass('catalog__tab_active').siblings().removeClass('catalog__tab_active')
            if(window.screen.availWidth > 991){
                $(this).closest('div.container').find('div.catalog__content').removeClass('catalog__content_active').eq($(this).index()).addClass('catalog__content_active')              
            }
            if(window.screen.availWidth > 370){
                $(this).closest('div.container').find('div.catalog__content-mobile').removeClass('catalog__content-mobile_active').eq($(this).index()).addClass('catalog__content-mobile_active') 
            }})

   
    function toggleSlide(item) {
        $(item).each(function(i) {
            $(this).on('click', function(e) {
                e.preventDefault();
                $('.catalog-item__main').eq(i).toggleClass('catalog-item__main_active');
                $('.catalog-item__description').eq(i).toggleClass('catalog-item__description_active');
            })
        });
    };
    toggleSlide('.catalog-item__main__link');
    toggleSlide('.catalog-item__description__back-link');

    // modal

    $('[data-modal=consultation]').on('click', function() {
        $('.modal__overlay-consultation').fadeIn()  
    });

    $('.feed-form__close').on('click', function() {
        $('.modal__overlay-order, .modal__overlay-consultation, .modal__overlay-thanks').fadeOut('slow')
    });

    $('.button_catalog').on('click', function() {
        $('.modal__overlay-order').fadeIn() 
    });

    $('.button_catalog').each(function(i) {
        $(this).on('click', function() {
            $('.feed-form__descr').text($('.catalog-item__title').eq(i).text());
            $('.modal__overlay-order').fadeIn();
        })
    });

    function validateForms(form) {
        $(form).validate({
            rules: {          
                name: {
                  required: true,
                  minlength: 2
                },
                email: {
                  required: true,
                  email: true
                },
                tel: {
                  required: true,
                  minlength: 10
                }
            },
            messages: {
                name: {
                    required: "Пожалуйста, введите своё имя",
                    minlength: jQuery.validator.format("Минимум {0} символа")
                },
                email: {
                    required: "Пожалуйста, введите свою почту",
                    email: "Почта должна быть в формате name@domain.com"              
                },
                tel: {
                    required: "Пожалуйста, введите свой телефон",
                    minlength: jQuery.validator.format("Минимум {0} символов")
                }
            }
        })
    };

    validateForms('.feed-form');
    validateForms('#order form');
    validateForms('#consultation form');  

    $('input[name=tel]').mask("+7 (999) 999-99-99");
    

});