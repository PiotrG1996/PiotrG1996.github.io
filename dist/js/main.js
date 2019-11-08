// Select DOM Items
const menuBtn = document.querySelector(".menu-btn");
const menu = document.querySelector(".menu");
const menuNav = document.querySelector(".menu-nav");
const menuBranding = document.querySelector(".menu-branding");
const navItems = document.querySelectorAll(".nav-item");
const body = document.getElementsByTagName("body");
// const disableScrolling = document.querySelector("body");

// Set Initial State Of Menu
let showMenu = false;

menuBtn.addEventListener("click", toggleMenu);

function toggleMenu() {
  if (!showMenu) {
    menuBtn.classList.add("close");
    menu.classList.add("show");
    menuNav.classList.add("show");
    menuBranding.classList.add("show");
    navItems.forEach(item => item.classList.add("show"));

    // Set Menu State
    showMenu = true;
  } else {
    menuBtn.classList.remove("close");
    menu.classList.remove("show");
    menuNav.classList.remove("show");
    menuBranding.classList.remove("show");
    navItems.forEach(item => item.classList.remove("show"));

    // Set Menu State
    showMenu = false;
  }
}





// SHOW/HIDE NAV

// Hide Header on on scroll down
let didScroll;
let lastScrollTop = 0;
let delta = 5;
let navbarHeight = $("header").outerHeight();

$(window).scroll(function(event) {
  didScroll = true;
});

setInterval(function() {
  if (didScroll) {
    hasScrolled();
    didScroll = false;
  }
}, 250);

function hasScrolled() {
  var st = $(this).scrollTop();

  // Make sure they scroll more than delta
  if (Math.abs(lastScrollTop - st) <= delta) return;

  // If they scrolled down and are past the navbar, add class .nav-up.
  // This is necessary so you never see what is "behind" the navbar.
  if (st > lastScrollTop && st > navbarHeight) {
    // Scroll Down
    $("header")
      .removeClass("show-nav")
      .addClass("hide-nav");
    $(".nav-toggle").removeClass("open");
    $(".menu-navigation").removeClass("collapse");
  } else {
    // Scroll Up
    if (st + $(window).height() < $(document).height()) {
      $("header")
        .removeClass("hide-nav")
        .addClass("show-nav");
    }
  }

  lastScrollTop = st;
}

//  Initialize Swiper
document.addEventListener(
  "DOMContentLoaded",
  function() {
    var swiper = new Swiper(".swiper-container", {
      effect: "coverflow",

      grabCursor: true,

      centeredSlides: true,

      slidesPerView: "auto",

      coverflowEffect: {
        rotate: 50,

        stretch: 0,

        depth: 100,

        modifier: 1,

        slideShadows: true
      },

      keyboard: {
        enabled: true
      },

      pagination: {
        el: ".swiper-pagination"
      }
    });
  },
  false
);

// back to top
// $(".logo").on("click", function(e) {
//   e.preventDefault();
//   $(".nav-toggle").removeClass("open");
//   $(".menu-navigation").removeClass("collapse");
//   $("html, body").animate(
//     {
//       scrollTop: 0
//     },
//     750,
//     "easeInOutQuad"
//   );
// });

// smooth scroll between sections
// $('a[href^="#"]').on("click", function(event) {
//   let $target = $(this.getAttribute("name"));

//   if ($target.length) {
//     event.preventDefault();
//     $("html, body")
//       .stop()
//       .animate(
//         {
//           scrollTop: $target.offset().top
//         },
//         750,
//         "easeInOutQuad"
//       );
//   }
// });
