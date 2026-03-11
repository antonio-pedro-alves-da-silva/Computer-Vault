

var owl = $('.owl-carousel');

owl.owlCarousel({
    loop:true,
    margin:0,
    animateOut: 'fadeOut',
    responsive:{
        0:{
            items:1 
        }
    }
})

$('.customNextBtn').click(function() {
    owl.trigger('next.owl.carousel');
})

$('.customPrevBtn').click(function() {
    owl.trigger('prev.owl.carousel');
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

const collapses = $('[collapse]');
const img_collapses = $('.collapsable img')

collapses.map((i,e)=>{
    $(e).on("click",()=>{
        
        let img_num = e.getAttribute("collapse");
        img_collapses.attr("src",`/stocker-1.0.0/img/offer-${img_num}.jpg`);
    })
})

collapses.on("click",(e)=>{
    let target = e.target;
    let img_num = target.getAttribute("collapse")

    collapses.map((i,e)=>{
        if(e !== target ){
            e.classList.remove("active")
        }
    })
    target.classList.add("active");
    img_collapses.attr("src",`/stocker-1.0.0/img/offer-${img_num}.jpg`);
})

  