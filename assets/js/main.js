/**
 * Template Name: eBusiness
 * Template URL: https://bootstrapmade.com/ebusiness-bootstrap-corporate-template/
 * Updated: Mar 17 2024 with Bootstrap v5.3.3
 * Author: BootstrapMade.com
 * License: https://bootstrapmade.com/license/
 */

(function () {
  "use strict";

  /**
   * Easy selector helper function
   */
  const select = (el, all = false) => {
    el = el.trim();
    if (all) {
      return [...document.querySelectorAll(el)];
    } else {
      return document.querySelector(el);
    }
  };

  /**
   * Easy event listener function
   */
  const on = (type, el, listener, all = false) => {
    let selectEl = select(el, all);
    if (selectEl) {
      if (all) {
        selectEl.forEach((e) => e.addEventListener(type, listener));
      } else {
        selectEl.addEventListener(type, listener);
      }
    }
  };

  /**
   * Easy on scroll event listener
   */
  const onscroll = (el, listener) => {
    el.addEventListener("scroll", listener);
  };

  /**
   * Navbar links active state on scroll
   */
  let navbarlinks = select("#navbar .scrollto", true);
  const navbarlinksActive = () => {
    let position = window.scrollY + 200;
    navbarlinks.forEach((navbarlink) => {
      if (!navbarlink.hash) return;
      let section = select(navbarlink.hash);
      if (!section) return;
      if (
        position >= section.offsetTop &&
        position <= section.offsetTop + section.offsetHeight
      ) {
        navbarlink.classList.add("active");
      } else {
        navbarlink.classList.remove("active");
      }
    });
  };
  window.addEventListener("load", navbarlinksActive);
  onscroll(document, navbarlinksActive);

  /**
   * Scrolls to an element with header offset
   */
  const scrollto = (el) => {
    let header = select("#header");
    let offset = header.offsetHeight;

    if (!header.classList.contains("header-scrolled")) {
      offset -= 16;
    }

    let elementPos = select(el).offsetTop;
    window.scrollTo({
      top: elementPos - offset,
      behavior: "smooth",
    });
  };

  /**
   * Toggle .header-scrolled class to #header when page is scrolled
   */
  let selectHeader = select("#header");
  if (selectHeader) {
    const headerScrolled = () => {
      if (window.scrollY > 100) {
        selectHeader.classList.add("header-scrolled");
      } else {
        selectHeader.classList.remove("header-scrolled");
      }
    };
    window.addEventListener("load", headerScrolled);
    onscroll(document, headerScrolled);
  }

  /**
   * Back to top button
   */
  let backtotop = select(".back-to-top");
  if (backtotop) {
    const toggleBacktotop = () => {
      if (window.scrollY > 100) {
        backtotop.classList.add("active");
      } else {
        backtotop.classList.remove("active");
      }
    };
    window.addEventListener("load", toggleBacktotop);
    onscroll(document, toggleBacktotop);
  }

  /**
   * Mobile nav toggle
   */
  on("click", ".mobile-nav-toggle", function (e) {
    select("#navbar").classList.toggle("navbar-mobile");
    this.classList.toggle("toggle");
  });

  /**
   * Mobile nav dropdowns activate
   */
  on(
    "click",
    ".navbar .dropdown > a",
    function (e) {
      if (select("#navbar").classList.contains("navbar-mobile")) {
        e.preventDefault();
        this.nextElementSibling.classList.toggle("dropdown-active");
      }
    },
    true
  );

  /**
   * Scrool with ofset on links with a class name .scrollto
   */
  on(
    "click",
    ".scrollto",
    function (e) {
      if (select(this.hash)) {
        e.preventDefault();

        let navbar = select("#navbar");
        if (navbar.classList.contains("navbar-mobile")) {
          navbar.classList.remove("navbar-mobile");
          let navbarToggle = select(".mobile-nav-toggle");
          navbarToggle.classList.toggle("toggle");
        }
        scrollto(this.hash);
      }
    },
    true
  );

  /**
   * Scroll with ofset on page load with hash links in the url
   */
  window.addEventListener("load", () => {
    if (window.location.hash) {
      if (select(window.location.hash)) {
        scrollto(window.location.hash);
      }
    }
  });

  /**
   * Preloader
   */
  window.addEventListener("load", () => {
    let preloader = document.querySelector("#preloader");

    if (preloader) {
      // Remove the preloader once all resources are fully loaded
      preloader.remove();
    }
  });

  /* Animation on scroll function and init
   */
  function aosInit() {
    AOS.init({
      duration: 600,
      easing: "ease-in-out",
      once: true,
      mirror: false,
    });
  }
  window.addEventListener("load", aosInit);

  /**
   * Hero carousel indicators
   */
  let heroCarouselIndicators = select("#hero-carousel-indicators");
  let heroCarouselItems = select("#heroCarousel .carousel-item", true);

  heroCarouselItems.forEach((item, index) => {
    index === 0
      ? (heroCarouselIndicators.innerHTML +=
          "<li data-bs-target='#heroCarousel' data-bs-slide-to='" +
          index +
          "' class='active'></li>")
      : (heroCarouselIndicators.innerHTML +=
          "<li data-bs-target='#heroCarousel' data-bs-slide-to='" +
          index +
          "'></li>");
  });

  /**
   *  services
   */
  // Get all elements with class 'service-box'
  const serviceBoxes = document.querySelectorAll(".service-box");

  // Function to preload an image
  function preloadImage(src) {
    const img = new Image();
    img.src = src;
  }

  // Function to handle hover effects for desktop
  function setupDesktopInteractions(
    box,
    img,
    hoverImagePath,
    defaultImagePath
  ) {
    box.addEventListener("mouseenter", () => {
      img.src = hoverImagePath;
    });

    box.addEventListener("mouseleave", () => {
      img.src = defaultImagePath;
    });
  }

  // Set images based on index and preload hover images
  serviceBoxes.forEach((box, index) => {
    const img = box.querySelector(".hover-image");
    let hoverImagePath;
    let defaultImagePath;

    if (index === 0) {
      hoverImagePath = "assets/img/newweb/research insights blue.png";
      defaultImagePath = "assets/img/newweb/research insights white.png";
    } else if (index === 1) {
      hoverImagePath = "assets/img/newweb/impact solution blue.png";
      defaultImagePath = "assets/img/newweb/impact solution white.png";
    } else if (index === 2) {
      hoverImagePath = "assets/img/newweb/comms blue.png";
      defaultImagePath = "assets/img/newweb/comms white.png";
    }

    // Preload the hover image
    preloadImage(hoverImagePath);

    // Check screen width and set up interactions accordingly
    function setupInteractions() {
      if (window.innerWidth >= 769) {
        // For screens above 768px
        setupDesktopInteractions(box, img, hoverImagePath, defaultImagePath);
      } else {
        return;
      }
    }

    // Initial setup
    setupInteractions();

    // Adjust setup on window resize
    window.addEventListener("resize", setupInteractions);
  });

  // Articles swiper
  document.addEventListener("DOMContentLoaded", function () {
    new Swiper(".swiper-container", {
      loop: true,
      slidesPerView: 1, // 1 slide per view under 580px
      spaceBetween: 20,
      navigation: {
        nextEl: ".swiper-button-next ",
        prevEl: ".swiper-button-prev ",
      },
      breakpoints: {
        768: {
          slidesPerView: 3, // 3 slides per view above 768px
        },

        580: {
          slidesPerView: 2, // 2 slides per view above 580px
        },
      },
    });
  });

  //contact
  document.querySelectorAll(".contact-link").forEach((link) => {
    link.addEventListener("click", function () {
      document
        .querySelectorAll(".tab-pane")
        .forEach((pane) => pane.classList.add("d-none"));
      const target = document.querySelector(
        this.getAttribute("data-bs-target")
      );
      target.classList.remove("d-none");
    });
  });
})();
