// Spinner
document.addEventListener("DOMContentLoaded", () => {
    const spinner = document.querySelector("#spinner");
    if (spinner) {
        spinner.classList.remove("show");
    }
});


// Fixed Navbar ab 150px downscroll
window.addEventListener("scroll", () => {
    const stickyTop = document.querySelector(".sticky-top");
    if (window.scrollY > 150) {
        stickyTop?.classList.add("shadow-sm");
        stickyTop?.style.setProperty("top", "0px");
    } else {
        stickyTop?.classList.remove("shadow-sm");
        stickyTop?.style.setProperty("top", "-200px");
    }
});
    

// Back to top Button
const backToTop = document.querySelector(".back-to-top");
window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
        backToTop.style.display = "flex";
    } else {
        backToTop.style.display = "none";
    }
});

backToTop.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
});


// Swiper
document.addEventListener('DOMContentLoaded', function () {
    // init Swiper
    const swiper = new Swiper(".Myswiper", {
        loop: true,
        speed: 1000,
        direction: 'horizontal',
          autoplay: {
          delay: 3000,
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEL: ".swiper-button-prev",
        },
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        // spaceBetween: 0,
        // slidesPerView: 1,
        breakpoints: {
          1024: {
            slidesPerView: 2,
            spaceBetween: 30,
          },
        }
      });
});