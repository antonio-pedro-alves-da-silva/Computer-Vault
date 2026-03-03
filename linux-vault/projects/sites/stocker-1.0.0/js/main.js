

var owl = $('.owl-carousel');

owl.owlCarousel({
    loop:true,
    margin:0,
    nav:true,
    navText : [
    '<i class="fa-solid fa-arrow-left"></i>',
    '<i class="fa-solid fa-arrow-right"></i>'
    ],

    responsive:{
        0:{
            items:1
        }
    }
})


const navbar = document.getElementById("navbar");
const navbar_rect = navbar.getBoundingClientRect();


setInterval(()=>{
    if( navbar_rect.y <= window.scrollY){
        navbar.classList.add("fixed")
    } else {
        navbar.classList.remove("fixed")
    }
},100);


