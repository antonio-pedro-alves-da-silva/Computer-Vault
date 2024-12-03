

$(window).ready(() => {
  
  var wow = new WOW(
    {
      boxClass:     'wow',      // animated element css class (default is wow)
      animateClass: 'animated', // animation css class (default is animated)
      offset:       0,          // distance to the element when triggering the animation (default is 0)
      mobile:       true,       // trigger animations on mobile devices (default is true)
      live:         true,       // act on asynchronously loaded content (default is true)
      callback:     function(box) {
        // the callback is fired every time an animation is started
        // the argument that is passed in is the DOM node being animated
      },
      scrollContainer: null,    // optional scroll container selector, otherwise use window,
      resetAnimation: true,     // reset animation on end (default is true)
    }
  );

  wow.init();

  $("#container-spinner").addClass("animated spinner-fadeOut");

  $(".btnShadowAnimation").on("click", (e) => {
    btnShadowColor = $(e.target).attr("shadow-color");
    $(e.target).css("box-shadow", `0px 0px 0px 0.2rem ${btnShadowColor}`);
  });

  $(".btnShadowAnimation").on("blur", (e) => {
    btnShadowColor = $(e.target).attr("shadow-color");
    $(e.target).css("box-shadow", `0px 0px 0px 0rem ${btnShadowColor}`);
  });



// setting owl carousel
  var headerCarousel = $(".header-carousel").owlCarousel({
    animateOut: 'fadeOut',
    loop: true,
    margin: 0,
    nav: true,
    navText : [
      '<i class="bi bi-arrow-left"></i>',
      '<i class="bi bi-arrow-right"></i>'
  ],
    dots:false,
    autoplay:false,
    smartSpeed:500,
    responsive: {
      0: {
        items: 1,
      },
    },

  });


// activing collapser

function ActiveCollapser(){

  collapsers = $("[collapse-target]").toArray();
  collapseTargets = collapsers.map((e)=> $($(e).attr("collapse-target"))[0]);
  
  collapseTargets.map((e)=>{
    $(e).css("display","none");
  })



  $(collapsers).on("click",(event)=>{

    // activating cards
    let collapser = event.currentTarget;

    collapsers.map((e)=>{
      if(e == collapser){
        $(e).addClass("active");
      } else {
        $(e).removeClass("active");
      }
    })

  target = $($(collapser).attr("collapse-target"));
  let firstCollapsable = collapseTargets.filter((e)=> e.classList.contains("show"))[0];
  let secondCollapsable = $($(collapser).attr("collapse-target"))[0]; 

  if(firstCollapsable !== secondCollapsable){
    firstDelay = target.parent("[collapsable-delays]").attr("collapsable-delays").split(" ")[0];
    secondDelay = target.parent("[collapsable-delays]").attr("collapsable-delays").split(" ")[1];

    firstAnimation= target.parent("[collapsable-animations]").attr("collapsable-animations").split(" ")[0];
    secondAnimation = target.parent("[collapsable-animations]").attr("collapsable-animations").split(" ")[1];

    $(firstCollapsable).css("animation-duration",`${firstDelay}ms`)
    $(secondCollapsable).css("animation-duration",`${secondDelay}ms`)

    $(firstCollapsable).addClass(`animated ${firstAnimation}`);
    setTimeout(()=>{
      $(firstCollapsable).removeClass(`show animated ${firstAnimation}`);

      $(secondCollapsable).addClass(`show animated ${secondAnimation}`);
      setTimeout(()=>{
        $(secondCollapsable).removeClass(`animated ${secondAnimation}`);
      },secondDelay)

    },firstDelay)
  }



  })

}

ActiveCollapser()

  // setting blog carousel
  var blogCarousel = $(".blog-carousel").owlCarousel({
    loop: true,
    dots:false,
    margin: 25,
    autoplay: true,
    smartSpeed: 1500,
    responsive: {
      0: {
        items: 1,
      },
      768: {
        items:2
      },
      1200: {
        items:3
      }
    }
  });

  //   setting the next and prev btn


  $('.blog-nav .nav-next').click(function() {
    blogCarousel.trigger('stop.owl.autoplay');
    blogCarousel.trigger('next.owl.carousel',[1500]);
  })

  // Go to the previous item
  $('.blog-nav .nav-prev').click(function() {
    blogCarousel.trigger('stop.owl.autoplay');
    blogCarousel.trigger('prev.owl.carousel', [1500]);
  })

  // setting testimonial carousel

  testimonialCarousel = $(".testimonial-carousel").owlCarousel({
    loop: true,
    margin: 0,
    nav: false,
    dots:true,
    margin:25,
    autoplay: false,
    smartSpeed: 1500,
    responsive: {
      0: {
        items: 1,
      },
      768:{
        items:2
      },
      992:{
        items:2
      },
      1200:{
        items:3
      }
    },

  });

  testimonialCarousel.owlCarousel();


  $('.testimonial-nav .nav-next').click(function() {
    testimonialCarousel.trigger('stop.owl.autoplay');
    testimonialCarousel.trigger('next.owl.carousel',[1500]);
    setTimeout(()=>{
      testimonialCarousel.trigger('play.owl.autoplay');
    },1500)

  })

  $('.testimonial-nav .nav-prev').click(function() {
    testimonialCarousel.trigger('stop.owl.autoplay');
    testimonialCarousel.trigger('prev.owl.carousel', [1500]);
    setTimeout(()=>{
      testimonialCarousel.trigger('play.owl.autoplay');
    },1500)
  })



//  back-to-top btn

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

// dropdownHover

const dropdown = $(".dropdownHover");
const dropdownToggle = $(".dropdownHover .dropdown-toggle");
const dropdownMenu = $(".dropdownHover .dropdown-menu");

dropdown.on("mouseenter mouseleave",()=>{
  if(window.innerWidth >= 992){
    dropdownToggle.toggleClass("show");
    dropdownMenu.toggleClass("show");
    dropdownMenu.attr("data-bs-popper","static");

  } 
})


// navbar
const navbar = $(".navbar")[0];

$(window).on("scroll resize",()=>{
  if(navbar.getBoundingClientRect().top < -1 && window.innerWidth >= 992){
    $(navbar).addClass("navbar-fixed-lg");
  }
  if(window.scrollY == 0 || window.innerWidth <= 992){
    $(navbar).removeClass("navbar-fixed-lg");
  }
})




});



