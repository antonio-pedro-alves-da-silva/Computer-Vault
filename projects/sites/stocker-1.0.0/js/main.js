



$(window).ready(()=>{
    $("#container-spinner").addClass("d-none");

    // $(".btn-primary").on("click",()=>{
    //     $(".btn-primary").css(`box-shadow`,`0px 0px 0px 0.2rem var(--bs-${}-rgb)`)
    // })

    
    $(".btnShadowAnimation").on('click',(e)=>{
        btnShadowColor = $(e.target).attr("shadow-color");
        $(e.target).css("box-shadow",`0px 0px 0px 0.2rem ${btnShadowColor}`)
    })
    
    $(".btnShadowAnimation").on('blur',(e)=>{
        btnShadowColor = $(e.target).attr("shadow-color");
        $(e.target).css("box-shadow",`0px 0px 0px 0rem ${btnShadowColor}`)
    })
    
    // setting owl carousel
    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:0,
        nav:false,
        responsive:{
            0:{
                items:1
            }
        }
    })

})


