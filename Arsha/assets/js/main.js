/**
 * Template Name: Arsha
 * Template URL: https://bootstrapmade.com/arsha-free-bootstrap-html-template-corporate/
 * Updated: Jun 29 2024 with Bootstrap v5.3.3
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
   * Preloader
   */
  const preloader = document.querySelector("#preloader");
  if (preloader) {
    window.addEventListener("load", () => {
      preloader.remove();
    });
  }

  /**
   * Scroll top button
   */
  let scrollTop = document.querySelector(".scroll-top");

  function toggleScrollTop() {
    if (scrollTop) {
      window.scrollY > 100
        ? scrollTop.classList.add("active")
        : scrollTop.classList.remove("active");
    }
  }
  scrollTop.addEventListener("click", (e) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });

  window.addEventListener("load", toggleScrollTop);
  document.addEventListener("scroll", toggleScrollTop);

  /**
   * Animation on scroll function and init
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
   * Initiate glightbox
   */
  const glightbox = GLightbox({
    selector: ".glightbox",
  });

  /**
   * Frequently Asked Questions Toggle
   */
  document
    .querySelectorAll(".faq-item h3, .faq-item .faq-toggle")
    .forEach((faqItem) => {
      faqItem.addEventListener("click", () => {
        faqItem.parentNode.classList.toggle("faq-active");
      });
    });

  /**
   * Correct scrolling position upon page load for URLs containing hash links.
   */
  window.addEventListener("load", function (e) {
    if (window.location.hash) {
      if (document.querySelector(window.location.hash)) {
        setTimeout(() => {
          let section = document.querySelector(window.location.hash);
          let scrollMarginTop = getComputedStyle(section).scrollMarginTop;
          window.scrollTo({
            top: section.offsetTop - parseInt(scrollMarginTop),
            behavior: "smooth",
          });
        }, 100);
      }
    }
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

  // Array of service items
  const services = [
    {
      title: "Business Development and Planning Expertise",
      description: `At Analytics, we excel at crafting tailored strategies to fuel your business's growth and success.
       Our seasoned consultants provide the insights and support needed to navigate challenges, seize opportunities, and unlock your full potential.
        Whether you're looking to define a clear business roadmap, optimize operations, or supercharge your marketing efforts, our expertise is your competitive advantage.
       We measure our success by your success, and we're here to guide you every step of the way.`,
      icon: "bi-briefcase",
      img: "../Arsha/assets/img/service1.jpg",
    },
    {
      title: "Sociopolitical Research",
      description: `Stay at the forefront of societal trends and issues with our socio political research services. Our team of skilled researchers brings you comprehensive and objective analysis on a wide range of topics, including social justice, human rights, governance, and public policy.
       Our in-depth reports and studies equip you with the knowledge and understanding necessary to navigate the complex sociopolitical environment and make informed decisions that align with your values.`,
      icon: "bi-briefcase",
      img: "../Arsha/assets/img/service2.jpg",
    },
    {
      title: "Legal Research and Support",
      description: `Navigating the legal landscape can be a daunting task, but our legal research services are here to support you.
       We conduct extensive research on diverse legal areas, ranging from constitutional law to international regulations,
        providing you with authoritative insights and analysis. Our publications cover key legal developments,
       case studies, and legal opinions, helping you stay abreast of the latest legal trends and precedents.
       The Analytics Team also provides legal support and consultation through our lawyers.`,
      icon: "bi-briefcase",
      img: "../Arsha/assets/img/service3.jpg",
    },
    {
      title: "Publications",
      description: `Our high-quality publications are designed to inform and inspire. We deliver well-researched articles,
       whitepapers, and reports on sociopolitical and legal topics, offering nuanced perspectives and thought-provoking insights.
        Whether you're an academic, legal professional, policymaker, or simply someone interested in staying informed, our publications
        are a valuable resource for expanding your knowledge and contributing to meaningful discussions.
Trust our expertise in business planning and development, research, and publications to keep you informed, empowered, and engaged with the world around you. Stay ahead of the curve with our comprehensive insights and thought leadership.`,
      icon: "bi-briefcase",
      img: "../Arsha/assets/img/service4.jpg",
    },
  ];

  // Function to open the modal with specific service info
  function openModal(serviceIndex) {
    const service = services[serviceIndex];
    document.querySelector("#serviceModalLabel").textContent = service.title;
    document.querySelector(".modal-description").textContent =
      service.description;
    document.querySelector(".modal-img").src = service.img;
    document.querySelector(".modal-img").alt = service.title;

    // Show the modal
    const modal = new bootstrap.Modal(document.getElementById("serviceModal"));
    modal.show();
  }

  // Add click event listeners to service items
  document.querySelectorAll(".service-item").forEach((item, index) => {
    item.addEventListener("click", () => openModal(index));
  });
})();
