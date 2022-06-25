$('.owl-carousel.testimonials').owlCarousel({
    autoplay: true,
    autoplayTimeout: 3000,
    loop: true,
    margin: 10,
    merge: true,
    nav: true,
    responsive: {
        0: {
            items: 1
        },
        420: {
            items: 1
        },
        600: {
            items: 1
        },
        678: {
            mergeFit: true
        },
        900: {
            items: 1
        },
        1000: {
            mergeFit: false
        },
        1024: {
            items: 1
        }
    }
})

$('.owl-carousel.brand-slider').owlCarousel({
    autoplay: true,
    autoplayTimeout: 3000,
    loop: true,
    margin: 10,
    merge: true,
    nav: false,
    dots: false,
    responsive: {
        0: {
            items: 2
        },
        420: {
            items: 3
        },
        600: {
            items: 4
        },
        678: {
            mergeFit: true
        },
        900: {
            items: 5
        },
        1000: {
            mergeFit: false
        },
        1024: {
            items: 6
        }
    }
})

$('.owl-carousel.our-blog-slider').owlCarousel({
    autoplay: true,
    autoplayTimeout: 3000,
    nav: false,
    dots: true,
    items: 3,
    margin: 20,
    loop: false,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 2
        },
        992: {
            items: 3
        }
    }
})


var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
   
    this.classList.toggle("active");


    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}

var $sidebarToggler = $('.sidebar-toggler');
$sidebarToggler.on('click', function (e) {
    $body.toggleClass('sidebar-filter-active');
    $(this).toggleClass('active');
    e.preventDefault();
});

$('.sidebar-filter-overlay').on('click', function (e) {
    $body.removeClass('sidebar-filter-active');
    $sidebarToggler.removeClass('active');
    e.preventDefault();
});


$('.sidebar-filter-clear').on('click', function (e) {
    $('.sidebar-shop').find('input').prop('checked', false);

    e.preventDefault();
});



function quantityInputs() {
if ($.fn.inputSpinner) {
$("input[type='number']").inputSpinner(
    {decrementButton: '<i class="icon-minus"></i>', incrementButton: '<i class="icon-plus"></i>', groupClass: 'input-spinner', buttonsClass: 'btn-spinner', buttonsWidth: '26px'}
);
}
}

if ($.fn.stick_in_parent && $(window).width() >= 992) {
$('.sticky-content').stick_in_parent({offset_top: 80, inner_scrolling: false});
}


let minus = document.getElementById('decrease');
let plus = document.getElementById('increase');
let count = document.getElementById('count');
let amount = 1

plus.addEventListener('click',() => {
    console.log('salam');
    amount++;
    count.innerHTML = amount
})

minus.addEventListener('click',() => {
    if(amount === 1) {
        return false;
    }
    amount--;
    count.innerHTML = amount
})


    function zoom(e){
        var zoomer = e.currentTarget;
        var src = $(zoomer).children().attr("src");
     

        e.offsetX ? offsetX = e.offsetX : offsetX = e.touches[0].pageX
        e.offsetY ? offsetY = e.offsetY : offsetX = e.touches[0].pageX
        x = offsetX/zoomer.offsetWidth*100
        y = offsetY/zoomer.offsetHeight*100
        zoomer.style.backgroundPosition = x + '% ' + y + '%';
        zoomer.style.backgroundImage = src;
      }

// IMAGE ZOOM

var $ = jQuery.noConflict();

		$(document).ready(function(){

			// Image zoom plugin code
			var zoomImage = $('#imageZoom');
			var zoomImageExtra = $('#imageZoomExtra');
			var zoomImagePlus = $('#imageZoomExtraPlus');
			var zoomImages = $('.zoom-images');

			zoomImage.imageZoom();
			zoomImageExtra.imageZoom({zoom : 200});
			zoomImagePlus.imageZoom({zoom : 300});

			zoomImages.each(function() {
				$(this).imageZoom();
			});

		});