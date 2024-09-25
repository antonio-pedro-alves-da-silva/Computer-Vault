

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
  var blogCarousel = $(".header-carousel").owlCarousel({
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
  var owl = $(".header-carousel");
  owl.owlCarousel();

  $(".nextBtn").click(function () {
    owl.trigger("next.owl.carousel");
  });

  $(".prevBtn").click(function () {
    // With optional speed parameter
    // Parameters has to be in square bracket '[]'
    owl.trigger("prev.owl.carousel", [300]);
  });

//  back-to-top 
  $(window).on("scroll",()=>{
    if(window.scrollY > 500){
      $(".to-top-btn").removeClass("d-none")
    } else {
      $(".to-top-btn").addClass("d-none")

    }
  })

  $(".back-to-top").on("click",()=>{
    window.scroll({
      top:0,
      behavior:"smooth"
    })
  })



// active cards

const cards = $(".offer-cards").children();
const benefits = $(".offer-benefits").children();


cards.on("click",(e)=>{

  let lastItemId = $(".offer-cards").find(".active").attr("collapse");
  let lastActiveItem = document.getElementById(lastItemId);

  let currentItemId = $(e.target).attr("collapse");
  let currentActiveItem = document.getElementById(currentItemId);

  // animating and collapsing
  $(lastActiveItem).animate({
    opacity:0
  },270,()=>{
    
    $(lastActiveItem).addClass("d-none");
    $(lastActiveItem).animate({opacity:1})

    $(currentActiveItem).removeClass("d-none");

  })

  cards.map((i,v)=>{

      // remove active class from siblings
      if(v !== e.target){
        $(v).removeClass("active");
      } 

      // add active class to clicked item

      $(e.target).addClass("active");
    })


    // 

  })

  // setting owl carousel
  var blogCarousel = $(".blog-carousel").owlCarousel({
    loop: true,
    margin: 0,
    responsive: {
      0: {
        items: 1,
      },
    },
    autoPlay: 3000, //Set AutoPlay to 3 seconds
    dots: true,
    items: 2,
    itemsDesktop: [1199, 3],
    itemsDesktopSmall: [979, 3]
  });

  //   setting the next and prev btn
  var owl = $(".blog-carousel");
  owl.owlCarousel();

  // Go to the next item
  $('.blog-nextBtn').click(function() {
    owl.trigger('next.owl.carousel',[1500]);
  })

  // Go to the previous item
  $('.blog-prevBtn').click(function() {
    // With optional speed parameter
    // Parameters has to be in square bracket '[]'
    owl.trigger('prev.owl.carousel', [1500]);
  })

  // setting testimonial carousel

  var testimonialCarousel = $(".testimonial-carousel").owlCarousel({
    loop: true,
    margin: 0,
    nav: false,
    dots:false,
    responsive: {
      0: {
        items: 1,
      },
    },
  });



  

});
