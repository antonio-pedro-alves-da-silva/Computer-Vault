$('.owl-carousel').owlCarousel({
    loop:true,
    margin:0,
    nav:true,
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


