



$(window).ready(()=>{
    $("#container-spinner").addClass("d-none");

    // $(".btn-primary").on("click",()=>{
    //     $(".btn-primary").css(`box-shadow`,`0px 0px 0px 0.2rem var(--bs-${}-rgb)`)
    // })

    // $(".btn-primary").on("blur",()=>{
    //     $(".btn-primary").css(`box-shadow`,`0px 0px 0px 0px var(--bs-${}-rgb)`)
    // })

    $(window).on('click',(e)=>{
        console.log(e.target);
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


