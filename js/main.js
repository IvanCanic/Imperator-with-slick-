let menu = document.querySelector('.menu');

window.onscroll = function() { sticky()};

function sticky(){
    if(document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        menu.classList.add('sticky');
    } else {
        menu.classList.remove('sticky');
    }
};

//$(document).ready(function(){
 //   $('.multiple-items').slick({
  //      infinite: true,
 //       slidesToShow: 5,
 //       slidesToScroll: 1
 //   });
//});

$(document).ready(function(){
    if ($(window).width() > 681) {

        $(document).ready(function(){
            $('.multiple-items').slick({
                infinite: true,
                slidesToShow: 5,
                slidesToScroll: 1
            });
        });
        
    } else {
        
        $(document).ready(function(){
            $('.multiple-items').slick({
                infinite: true,
                slidesToShow: 1,
                slidesToScroll: 1
            });
        });
    }
});

//search modal
//window.onscroll = function () { window.scrollTo(0, 0); };
let openSearch = document.querySelector('#open-search');
let searchForm = document.querySelector('.search-modal');
let closeSearch = document.querySelector('.search-modal__close');

let form = document.querySelector('.search-modal__form');

openSearch.addEventListener('click', () => {
    searchForm.classList.add('open');
    form.style.animation = "djiki 2s ease";
});

closeSearch.addEventListener('click', () => {
    searchForm.classList.remove('open');
});