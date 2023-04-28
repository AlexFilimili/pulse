
$(document).ready(function(){
    $('ul.catalog__tabs').on('click', 'li:not(.catalog__tab_active)', function() {
        $(this)
        .addClass('catalog__tab_active').siblings().removeClass('catalog__tab_active')
            if(window.screen.availWidth > 991){
                $(this).closest('div.container').find('div.catalog__content').removeClass('catalog__content_active').eq($(this).index()).addClass('catalog__content_active')              
            }
            if(window.screen.availWidth > 310){
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
    toggleSlide('.catalog-item__description__back-link, .catalog-item__back-link');

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
                phone: {
                  required: true,
                  minlength: 10
                }
            },
            messages: {
                name: {
                    required: "Please enter your name",
                    minlength: jQuery.validator.format("Minimum {0} symbol")
                },
                email: {
                    required: "Please enter your email address",
                    email: "Почта должна быть в формате name@domain.com"              
                },
                phone: {
                    required: "Please enter your phone number",
                    minlength: jQuery.validator.format("Minimum {0} symbol")
                }
            }
        })
    };

    validateForms('#consultation-form');
    validateForms('#order form');
    validateForms('#consultation form');  

    $('input[name=phone]').mask("+7 (999) 999-99-99");
    
    // отправка формы

        $('form').submit(function(e) {
        e.preventDefault();

        if (!$(this).valid()) {
            return;
        }

        $.ajax({
            type: "POST",
            url: "mailer/smart.php",
            data: $(this).serialize()
        }).done(function() {
            $(this).find("input").val("");
            $('#consultation, #order').fadeOut();
            $('.modal__overlay-thanks').fadeIn('slow');

            $('form').trigger('reset');
        });
        return false;

    });
    $(window).scroll(function() {
        if ($(this).scrollTop() > 1444) {
            $('.page-up').fadeIn();
        } else {
            $('.page-up').fadeOut();
        }
    });  

    // плавный скролл по странице
/*     $("a[href^='#']").click(function() {
        const _href = $(this).attr("href");
        $("html, body").animate({scrollTop: $(_href).offset().top+"px"});
        return false;
    }); */

    new WOW().init();

    const swiper = new Swiper('.swiper', {
        // Optional parameters
        loop: true,
      
        // If we need pagination
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
          dynamicBullets: true,
        },
      
        // Navigation arrows
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        }
      });

});

//применяемо с разрешениями до 575px
const width = window.matchMedia('( max-width: 575px )');
// добавляем прослушиватель событий на скроллинг страницы
if (width.matches) {
    window.addEventListener('scroll', function() {
        // определяем, насколько далеко прокрутили страницу
        const pageYOffset = window.pageYOffset;
        // определяем координаты блока, после которого должен появиться элемент
        const triggerOffset = document.querySelector('.feedback').offsetTop;

        // если прокрутка достигла блока, то плавно показываем элемент
        if (pageYOffset >= triggerOffset) {
            $('.UpToChoise').fadeIn();
        }    
        else {
            // если прокрутка не достигла блока, то плавно скрываем элемент
            $('.UpToChoise').fadeOut();
        }
    });
}


