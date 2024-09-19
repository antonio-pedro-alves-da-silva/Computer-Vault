

$(window).ready(() => {

  $("#container-spinner").addClass("d-none");


  $(".btnShadowAnimation").on("click", (e) => {
    btnShadowColor = $(e.target).attr("shadow-color");
    $(e.target).css("box-shadow", `0px 0px 0px 0.2rem ${btnShadowColor}`);
  });

  $(".btnShadowAnimation").on("blur", (e) => {
    btnShadowColor = $(e.target).attr("shadow-color");
    $(e.target).css("box-shadow", `0px 0px 0px 0rem ${btnShadowColor}`);
  });

  // setting owl carousel
  var owl = $(".owl-carousel").owlCarousel({
    animateOut: 'fadeOut',
    loop: true,
    margin: 0,
    nav: false,
    responsive: {
      0: {
        items: 1,
      },
    },

  });

//   setting the next and prev btn
  var owl = $(".owl-carousel");
  owl.owlCarousel();

  $(".nextBtn").click(function () {
    owl.trigger("next.owl.carousel");
  });

  $(".prevBtn").click(function () {
    // With optional speed parameter
    // Parameters has to be in square bracket '[]'
    owl.trigger("prev.owl.carousel", [300]);
  });


  if(window.scrollY > 700){
    $(".to-top-btn").toggle("d-none")
  } else {
    $(".to-top-btn").toggle("d-none")
  }

  $(".back-to-top").on("click",()=>{
    window.scroll({
      top:0,
      behavior:"smooth"
    })
  })



});
