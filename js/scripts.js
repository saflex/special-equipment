

$(document).ready(function() {
    $("#datepicker").datepicker({
           showOn: "button",
      buttonImage: "img/calendar.png",
      buttonImageOnly: true,
        }).click(function() { $(this).datepicker('show'); });
 });


  jQuery(function($){
	$.datepicker.regional['ru'] = {
		closeText: 'Закрыть',
		prevText: 'Назад',
		nextText: 'Далее',

		monthNames: ['Январь', 'Февраль', 'Март', 'Апрель',
'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь',
'Октябрь', 'Ноябрь', 'Декабрь'],

	  monthNamesShort: [ "Январь", "Феваль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь" ],
		dayNamesMin: ['Вс','Пн','Вт','Ср','Чт','Пт','Сб'],

		dateFormat: 'dd.mm.yy',
		firstDay: 1,
		isRTL: false,
		showMonthAfterYear: false,
		yearSuffix: ''};
	$.datepicker.setDefaults($.datepicker.regional['ru']);
});			
	
   
   
    if($(window).width() > 991) {
   
   $('.slider-for').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  fade: true,
  asNavFor: '.slider-nav'
});
$('.slider-nav').slick({
	vertical: true,
  slidesToShow: 5,
  slidesToScroll: 1,
  asNavFor: '.slider-for',
  dots: false,

  focusOnSelect: true
});



} else { 
    // change functionality for larger screens
}


    if($(window).width() < 992) {
   
   $('.slider-for').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  fade: true,
  asNavFor: '.slider-nav'
});
$('.slider-nav').slick({
	vertical: false,
  slidesToShow: 3,
  slidesToScroll: 1,
  asNavFor: '.slider-for',
  dots: false,

  focusOnSelect: true
});



} else { 
    // change functionality for larger screens
}

  
  $('.multiple-colors').slick({
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
          focusOnSelect: true
    });

  
  
  
if($(window).width() > 1199) { 



$(".colors").hover(
  function () {
     $(this).toggleClass("results_hover");
     
  }
);





} else { 
    // change functionality for larger screens
}
  
  
  
if($(window).width() > 991) { 

$(".nbrs").hover(
  function () {
    $(this).toggleClass("result_hover");
  }
);



} else { 
    // change functionality for larger screens
}


  if($(window).width() > 991) { 

$(".color-pks").hover(
  function () {
    $(this).toggleClass("result_hover_p");
  }
);


} else { 
    // change functionality for larger screens
}




     if($(window).width() > 767) { 
jQuery('ul.nav > li').hover(function() {
    jQuery(this).find('.dropdown-menu').stop(true, true).delay(200).fadeIn();
}, function() {
    jQuery(this).find('.dropdown-menu').stop(true, true).delay(200).fadeOut();
})
} else { 
    // change functionality for larger screens
}


 $(document).ready(function () {
 $('input,textarea').focus(function(){
   $(this).data('placeholder',$(this).attr('placeholder'))
   $(this).attr('placeholder','');
 });
 $('input,textarea').blur(function(){
   $(this).attr('placeholder',$(this).data('placeholder'));
 });
 });

$('.language-select').click(function(){
$(this).toggleClass('open');
})

$('.language-select li').click(function(){
var setLang = $('.language-select').data('location'),
    dataLangSelect = $(this).data('lang')
      $('.language-select').data('location', dataLangSelect);
      $('.language-select li').removeClass('active');
      $(this).toggleClass('active');
})



	$(".scroller-b").mCustomScrollbar({
					axis:"y",
					advanced:{
						autoDraggerLength:true
					}
				});	



	$(".scroller-i").mCustomScrollbar({
					axis:"y",
					advanced:{
						autoDraggerLength:true
					}
				});	




$("textarea[placeholder]").each(function () {
    $(this).attr("data-placeholder", this.placeholder);

    $(this).bind("focus", function () {
        this.placeholder = '';
    });
    $(this).bind("blur", function () {
        this.placeholder = $(this).attr("data-placeholder");
    });
});

$(document).ready(function () { 
	
	 $('.add-to-carts').on('click', function () {
	    var cart = $('#shopping-cart');
	    var imgtodrag = $("#to-cart-img").eq(0);
	    if (imgtodrag) {
	        var imgclone = imgtodrag.clone()
	            .offset({
	            top: imgtodrag.offset().top,
	            left: imgtodrag.offset().left
	        })
	            .css({
	            'opacity': '0.5',
	                'position': 'absolute',
	                'height': '402px',
	                'width': '402px',
	                'z-index': '9999',
	                'top': '196px'
	        })
	            .appendTo($('#product-modal'))
	            .animate({
	            	'top': "130px",
	                'left': cart.offset().left + 10,
	                'width': 75,
	                'height': 75
	        }, 1000, 'easeInOutExpo');
	 
	        
	 
	            imgclone.animate({
	                'width': 0,
	                'height': 0
	        }, function () {
	            $(this).detach()
	        });
	    }
	});
});



$(document).ready(function () { 
	
	 $('.add-to-cartsy').on('click', function () {
	    var cart = $('#shopping-carty');
	    var imgtodrag = $("#to-cart-img2").eq(0);
	    if (imgtodrag) {
	        var imgclone = imgtodrag.clone()
	            .offset({
	            top: imgtodrag.offset().top,
	            left: imgtodrag.offset().left
	        })
	            .css({
	            'opacity': '0.5',
	                'position': 'absolute',
	                'height': '80px',
	                'width': '80px',
	                'z-index': '9999',
	                'top': '181px'
	        })
	            .appendTo($('#modal-shop-fast'))
	            .animate({
	            	'top': "20px",
	                'left': cart.offset().left + 10,
	                'width': 75,
	                'height': 75
	        }, 1000, 'easeInOutExpo');
	 
	        
	 
	            imgclone.animate({
	                'width': 0,
	                'height': 0
	        }, function () {
	            $(this).detach()
	        });
	    }
	});
});



/**
 * Vertically center Bootstrap 3 modals so they aren't always stuck at the top
 */
$(function() {
    function reposition() {
        var modal = $(this),
            dialog = modal.find('.modal-dialog');
        modal.css('display', 'block');
        
        // Dividing by two centers the modal exactly, but dividing by three 
        // or four works better for larger screens.
        dialog.css("margin-top", Math.max(0, ($(window).height() - dialog.height()) / 2));
    }
    // Reposition when a modal is shown
    $('.modal').on('show.bs.modal', reposition);
    // Reposition when the window is resized
    $(window).on('resize', function() {
        $('.modal:visible').each(reposition);
    });
});





$('.bxslider').bxSlider({
  minSlides: 1,
  maxSlides: 1,
  slideWidth: 1000,
  slideMargin: 10
});




$('.bxslider2').bxSlider({
  pagerCustom: '#bx-pager'
});



$(function(){
    $('.modal-zoom').click(function(){
        $('.box-modal-container').addClass( "arrowss" );
         $('.box-modal-container').removeClass('arrows-no');
         $('html').css("overflow", "hidden");
    });
});

$(function(){
    $('.close-modal').click(function(){
        $('.box-modal-container').addClass( "arrows-no" );
        $('.box-modal-container').removeClass('arrowss');
        $('html').css("overflow", "visible");
    });
});


$(function(){
    $('.image-fly2').click(function(){
        $('.box-modal-container').addClass( "arrowss" );
         $('.box-modal-container').removeClass('arrows-no');
         $('html').css("overflow", "hidden");
    });
});



$(function(){
    $('.a-clicks').click(function(){
        $('.modal-body').addClass( "spda" );
         $('.modal-body').removeClass('spda');
         
           $('html').css("overflow", "hidden");
    });
});




(function(){
var a = document.querySelector('#aside1'), b = null, P = 40;  // если ноль заменить на число, то блок будет прилипать до того, как верхний край окна браузера дойдёт до верхнего края элемента. Может быть отрицательным числом
window.addEventListener('scroll', Ascroll, false);
document.body.addEventListener('scroll', Ascroll, false);
function Ascroll() {
  if (b == null) {
    var Sa = getComputedStyle(a, ''), s = '';
    for (var i = 0; i < Sa.length; i++) {
      if (Sa[i].indexOf('overflow') == 0 || Sa[i].indexOf('padding') == 0 || Sa[i].indexOf('border') == 0 || Sa[i].indexOf('outline') == 0 || Sa[i].indexOf('box-shadow') == 0 || Sa[i].indexOf('background') == 0) {
        s += Sa[i] + ': ' +Sa.getPropertyValue(Sa[i]) + '; '
      }
    }
    b = document.createElement('div');
    b.style.cssText = s + ' box-sizing: border-box; width: ' + a.offsetWidth + 'px;';
    a.insertBefore(b, a.firstChild);
    var l = a.childNodes.length;
    for (var i = 1; i < l; i++) {
      b.appendChild(a.childNodes[1]);
    }
    a.style.height = b.getBoundingClientRect().height + 'px';
    a.style.padding = '0';
    a.style.border = '0';
  }
  var Ra = a.getBoundingClientRect(),
      R = Math.round(Ra.top + b.getBoundingClientRect().height - document.querySelector('.mpvs').getBoundingClientRect().top + 0);  // селектор блока, при достижении верхнего края которого нужно открепить прилипающий элемент;  Math.round() только для IE; если ноль заменить на число, то блок будет прилипать до того, как нижний край элемента дойдёт до футера
  if ((Ra.top - P) <= 0) {
    if ((Ra.top - P) <= R) {
      b.className = 'stop';
      b.style.top = - R +'px';
    } else {
      b.className = 'sticky';
      b.style.top = P + 'px';
    }
  } else {
    b.className = '';
    b.style.top = '';
  }
  window.addEventListener('resize', function() {
    a.children[0].style.width = getComputedStyle(a, '').width
  }, false);
}
})()




$(function(){

$('.dblb').on('click', function(e){
  $('html,body').stop().animate({ scrollTop: $('#hoverblock').offset().top }, 700);
  e.preventDefault();
});

});


$(function(){

$('.carst-scroll').on('click', function(e){
  $('html,body').stop().animate({ scrollTop: $('#myTabs-scroll').offset().top }, 700);
  e.preventDefault();
});

});






 function displ(ddd) { if (document.getElementById(ddd).style.display == 'none') {document.getElementById(ddd).style.display = 'block'} else {document.getElementById(ddd).style.display = 'none'} }






(function($) {
    $(function() {
      $('input, select').styler({
        selectSearch: true
      });
    });
    })(jQuery);


$(document).ready(function(){
  
   
  $(".show-more").on("click", function() {
    $(this).parent(".show-more-box").find(".show-more-block").css("height", "auto");
    $(this).hide();
  });
  
  $(".fancy-btn").fancybox();
  
  $(".selectbox").styler();

  $(".smooth-scroll").on("click", function (event) {
    //отменяем стандартную обработку нажатия по ссылке
    event.preventDefault();

    //забираем идентификатор бока с атрибута href
    var id  = $(this).attr('href'),

    //узнаем высоту от начала страницы до блока на который ссылается якорь
      top = $(id).offset().top;
    
    //анимируем переход на расстояние - top за 1500 мс
    $('body,html').animate({scrollTop: top}, 500);
  });
  
  
  $('#two').bind('inview', function(event, visible) {if (visible) { 
    $("[href=#two]").parent("li").addClass("active"); } else { 
      $("[href=#two]").parent("li").removeClass("active"); }});
      
  $('#three').bind('inview', function(event, visible) {if (visible) { 
    $("[href=#three]").parent("li").addClass("active"); } else { 
      $("[href=#three]").parent("li").removeClass("active"); }});
          
  $('#four').bind('inview', function(event, visible) {if (visible) { 
    $("[href=#four]").parent("li").addClass("active"); } else { 
      $("[href=#four]").parent("li").removeClass("active"); }});
          
  $('#five').bind('inview', function(event, visible) {if (visible) { 
    $("[href=#five]").parent("li").addClass("active"); } else { 
      $("[href=#five]").parent("li").removeClass("active"); }});
          
  $('#six').bind('inview', function(event, visible) {if (visible) { 
    $("[href=#six]").parent("li").addClass("active"); } else { 
      $("[href=#six]").parent("li").removeClass("active"); }});
          
  $('#seven').bind('inview', function(event, visible) {if (visible) { 
    $("[href=#seven]").parent("li").addClass("active"); } else { 
      $("[href=#seven]").parent("li").removeClass("active"); }});
      
          
  $('#eight').bind('inview', function(event, visible) {if (visible) { 
    $("[href=#eight]").parent("li").addClass("active"); } else { 
      $("[href=#eight]").parent("li").removeClass("active"); }});
          

  $('#nine').bind('inview', function(event, visible) {if (visible) { 
    $("[href=#nine]").parent("li").addClass("active"); } else { 
      $("[href=#nine]").parent("li").removeClass("active"); }});
          
  
});



$(function(){

$('.nbtn').on('click', function(e){
  $( "#nine" ).addClass( "displb" );
  $('html,body').stop().animate({ scrollTop: $('#nine').offset().top }, 700);
  e.preventDefault();
});

});


$(function(){

$('.dbl').on('click', function(e){
  $('html,body').stop().animate({ scrollTop: $('#hoverblock').offset().top }, 700);
  e.preventDefault();
});

});







$(function(){

$('.vsmodels').on('click', function(e){
  $( "#nine" ).addClass( "displb" );
  $('html,body').stop().animate({ scrollTop: $('#three').offset().top }, 700);
  e.preventDefault();
});

});



window.onscroll = function() {
  var scrolled = window.pageYOffset || document.documentElement.scrollTop;
  
  if (scrolled > 140) {
    $(".fixed-nav").show();
  } else {
    $(".fixed-nav").hide();
  }
};    
  


  
  

 $(function() {
    $( ".dfgh" ).tooltip({
      position: {
    my: "top left",
        at: "top-35",
        using: function( position, feedback ) {
          $( this ).css( position );
          $( "<div>" )
            .addClass( "arrow" )
            .addClass( feedback.vertical )
            .addClass( feedback.horizontal )
            .appendTo( this );
        }
      }
    });
  });




$(function(){
    $('.nnn').click(function(){
        $('.swiper-container').addClass( "arrowss" );
         $('.swiper-container').removeClass('arrows-no');
         $('html').css("overflow", "hidden");
    });
});

$(function(){
    $('.closer').click(function(){
        $('.swiper-container').addClass( "arrows-no" );
        $('.swiper-container').removeClass('arrowss');
        $('html').css("overflow", "visible");
    });
});



$(function(){
    $('.closer').click(function(){
        $('.swiper-container3').addClass( "arrows-no" );
        $('.swiper-container3').removeClass('arrowss');
        $('html').css("overflow", "visible");
    });
});




$(function(){
    $('#menu').hover(function(){
        $('.arrow-fxq').hide();
    });
});






$(document).ready(function() {
    $('.single-item').slick({
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1

    });
});



 // Как только будет загружен API и готов DOM, выполняем инициализацию
        ymaps.ready(init);

        function init () {
            var myMap = new ymaps.Map("map", {
                    center: [55.6474091, 37.7167128],
                    zoom: 14,
                    controls: ['zoomControl', 'typeSelector',  'fullscreenControl']
                });
                  myMap.behaviors.disable('scrollZoom');


                // Создаем метку и задаем изображение для ее иконки
                myPlacemark = new ymaps.Placemark([55.6474091, 37.7207128], {
                    balloonContent: 'г. Москва, Новочеркасский бульвар 20, офис 17'
                }, {
                    iconImageHref: 'http://api.yandex.ru/maps/doc/jsapi/2.x/examples/images/myIcon.gif', // картинка иконки
                    iconImageSize: [30, 42], // размеры картинки
                    iconImageOffset: [-3, -42] // смещение картинки
                });


            // Добавление метки на карту
            myMap.geoObjects.add(myPlacemark);
          
        }
        
        
        




$(function(){
  $('.thumbnails a').click(function(){                                 // При нажатиина миниатюру
    var images = $(this).find('img');
    var imgSrc = images.attr('src');
 
    $(".big-image img").attr({ src: imgSrc });                         // Подменяем адрес большого изображения на адрес выбранного
    $(this).siblings('a').removeClass('active');                       // Удаляем класс .active со ссылки чтоб убрать рамку
    images.parent().addClass('active');                                // Добавляем класс .active на выбранную миниатюру
    return false;
  });
 
  $('.next').click(function(){                                         // При нажатии на кнопку "вперед"
    var count = $('.thumbnails a').length;                             // Общее количество изображений
    var n = parseInt($('.thumbnails a').index($('.active')) + 1);      // Порядковый номер текущего изображения
    var activeImg = $('.thumbnails .active');                          // Активное на данный момент изображение
    var nextSrc;
 
    if (count != n){                                                   // - Если изображение не последнее
      nextSrc = activeImg.next().find('img').attr('src');              // В переменную записывается адрес следующего изображения
      $('.thumbnails .active').removeClass('active');                  // Удаляется класс .active с предыдущей миниатюры
      activeImg.next().addClass('active');                             // На миниатюру следующего изображения вешается класс .active
    }else{                                                             // - Если текущее изображение последнее в списке
      nextSrc = $('.thumbnails a').first().find('img').attr('src');    // В переменную записывается адрес первого изображения
      $('.thumbnails .active').removeClass('active');                  // Удаляется класс .active с предыдущей миниатюры
      $('.thumbnails a').first().addClass('active');                   // На первую миниатюру вешается класс .active
    }
    $('.big-image img').attr({ src: nextSrc });                        // Подменяем адрес большого изображения на адрес следующего
    return false;
  });
 
 
  $('.prev').click(function(){                                         // При нажатии на кнопку "назад"
    var count = $('.thumbnails a').length;                             // Общее количество изображений
    var n = parseInt($('.thumbnails a').index($('.active')) + 1);      // Порядковый номер текущего изображения
    var activeImg = $('.thumbnails .active');                          // Активное на данный момент изображение
    var prevSrc;
 
    if (n != 1){                                                       // - Если текущее изображение не первое
      prevSrc = activeImg.prev().find('img').attr('src');              // В переменную записывается адрес предыдущего изображения           
      $('.thumbnails .active').removeClass('active');                  // Удаляется класс .active активной до этого миниатюры
      activeImg.prev().addClass('active');                             // На миниатюру изображения слева вешается класс .active
    }else{                                                             // - Если текущее изображение первое
      prevSrc = $('.thumbnails a:last').find('img').attr('src');       // В переменную записывается адрес последнего изображения
      $('.thumbnails .active').removeClass('active');                  // Удаляется класс .active с предыдущей миниатюры
      $('.thumbnails a:last').addClass('active');                      // На последнюю миниатюру вешается класс .active
    }
    $('.big-image img').attr({ src: prevSrc });                        // Подменяется адрес большого изображения на адрес следующего
    return false;
  });
})



  
 


 $(document).ready(function() {

    $('.multiple-items').slick({
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 8,
        slidesToScroll: 1
    });







  if($(window).width() > 991) {
   
  $('.multiple-itemsw').slick({
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 1
    });


} else { 
    // change functionality for larger screens
}





  if($(window).width() < 510) {
   
  $('.multiple-itemsw').slick({
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1
    });


} else { 
    // change functionality for larger screens
}



  if($(window).width() < 768) {
   
  $('.multiple-itemsw').slick({
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1
    });


} else { 
    // change functionality for larger screens
}

  if($(window).width() < 992) {
   
  $('.multiple-itemsw').slick({
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1
    });


} else { 
    // change functionality for larger screens
}







	
    $('.multiple-items2').slick({
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 1
    });

	


    $('.s-items').slick({
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    });
   

}); 


     $(document).ready(function () {

            //main nav
            $(window).on('scroll load', function () {
                updateMainNav();
            });

            function updateMainNav() {
                if ($(window).scrollTop() >= 153) {
                    $('body').addClass('minimize-menu');
                } else {
                    $('body').removeClass('minimize-menu');
                }
            }

            $('.user-nav > a').on('click', function () {
                $('body').toggleClass('show-user-nav');
            });

            $(document).on('click', function (event) {
                $('body').removeClass('show-user-nav');
            });

            $('.collapse-main-nav').on('click', function () {
                if ($('body').toggleClass('show-main-nav').hasClass('show-main-nav')) window.scrollTo(0, 0);
                return false;
            });

        });


