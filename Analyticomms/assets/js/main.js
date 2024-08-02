/**
 * Template Name: Medilab
 * Template URL: https://bootstrapmade.com/medilab-free-medical-bootstrap-theme/
 * Updated: Jun 29 2024 with Bootstrap v5.3.3
 * Author: BootstrapMade.com
 * License: https://bootstrapmade.com/license/
 */

(function () {
  "use strict";

  /**
   * Apply .scrolled class to the body as the page is scrolled down
   */
  function toggleScrolled() {
    const selectBody = document.querySelector("body");
    const selectHeader = document.querySelector("#header");
    if (
      !selectHeader.classList.contains("scroll-up-sticky") &&
      !selectHeader.classList.contains("sticky-top") &&
      !selectHeader.classList.contains("fixed-top")
    )
      return;
    window.scrollY > 100
      ? selectBody.classList.add("scrolled")
      : selectBody.classList.remove("scrolled");
  }

  document.addEventListener("scroll", toggleScrolled);
  window.addEventListener("load", toggleScrolled);

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
    this.classList.toggle("bi-list");
    this.classList.toggle("bi-x");
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
          navbarToggle.classList.toggle("bi-list");
          navbarToggle.classList.toggle("bi-x");
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
   * Initiate Pure Counter
   */
  new PureCounter();

  /**
   * services
   */
  // Array of service items
  const services = [
    {
      title: "Branding",
      description: `Our branding services include developing a strong brand identity and positioning to ensure your brand stands out.
       We create logos and other visual elements that represent your brand, 
       crafting taglines, slogans, and key messages that resonate with your audience and reflect your unique value proposition.`,
      icon: "bi-briefcase",
      img: "../Analyticomms/assets/img/about.jpg",
    },
    {
      title: "Digital Marketing",
      description: `We enhance your online presence through SEO to improve your website's visibility on search engines,
       and content marketing to attract and engage your audience. Our social media marketing services manage profiles, create content,
        and run ads on platforms like Facebook, Instagram, TikTok,
       and LinkedIn. Additionally, we run paid ad campaigns on Google Ads and social media for maximum reach.`,
      icon: "bi-briefcase",
      img: "../Analyticomms/assets/img/departments-2.jpg",
    },
    {
      title: "Website Development and Management",
      description: `Our website development services include creating visually appealing and user-friendly websites tailored to your needs.
       We build and manage e-commerce solutions for seamless online shopping experiences, 
      and provide regular updates and optimizations to ensure smooth and secure website performance.`,
      icon: "bi-briefcase",
      img: "../Analyticomms/assets/img/departments-3.jpg",
    },
    {
      title: "Content Creation",
      description: `We offer comprehensive content creation services including copywriting for websites, ads
      , brochures, and other marketing materials. Our graphic design services create visuals such as infographics,
       banners, and social media graphics, while our video production team produces promotional videos,
       explainer videos, and other multimedia content to effectively communicate your message.`,
      icon: "bi-briefcase",
      img: "../Analyticomms/assets/img/departments-1.jpg",
    },
    {
      title: "Public Relations",
      description: `Our public relations services include writing and distributing press releases to announce new products, services,
       or company milestones. We build and maintain relationships with journalists and media outlets to ensure positive media coverage,
       and handle communication during times of crisis to protect and manage your brand's reputation.`,
      icon: "bi-briefcase",
      img: "../Analyticomms/assets/img/departments-2.jpg",
    },
    {
      title: "Marketing Training",
      description: `We offer marketing training in digital marketing, communications and PR,
       analytics and reporting, content creation, and marketing strategy development.
       Our training programs are designed to equip your team with the skills and knowledge needed to excel in today’s competitive market.`,
      icon: "bi-briefcase",
      img: "../Analyticomms/assets/img/departments-3.jpg",
    },
    {
      title: "Traditional Marketing",
      description: `Our traditional marketing services include creating print ads for magazines, newspapers,
       and other media, developing commercials for television and radio, and designing billboards, banners,
       and other outdoor advertising materials to ensure comprehensive market coverage.`,
      icon: "bi-briefcase",
      img: "../Analyticomms/assets/img/departments-1.jpg",
    },
    {
      title: "Analytics and Reporting",
      description: `We monitor and analyze the performance of your marketing campaigns using advanced analytical tools.
       Our reporting services provide regular reports on key metrics and insights,
       guiding future marketing strategies and ensuring your campaigns are effective and aligned with your business goals.`,
      icon: "bi-briefcase",
      img: "../Analyticomms/assets/img/departments-2.jpg",
    },
    {
      title: "Consulting and Strategy",
      description: `Our consulting services include developing comprehensive marketing plans tailored to your business goals and budget.
       We provide ongoing consultation and expert advice to adjust strategies based on market changes and business needs,
       ensuring your marketing efforts are always on the right track.`,
      icon: "bi-briefcase",
      img: "../Analyticomms/assets/img/departments-3.jpg",
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

  /**
   * Departments
   */
  document.addEventListener("DOMContentLoaded", function () {
    const departmentLinks = document.querySelectorAll(".department-link");
    const departmentSection = document.getElementById("departments");

    departmentLinks.forEach((link) => {
      link.addEventListener("click", function (e) {
        e.preventDefault();
        const tabId = this.getAttribute("data-tab");
        const tabToActivate = document.querySelector(`#${tabId}`);

        // Scroll to the department section
        departmentSection.scrollIntoView({ behavior: "smooth" });

        // Activate the tab
        setTimeout(() => {
          const activeTabLink = document.querySelector(`a[href="#${tabId}"]`);
          activeTabLink.click();
        }, 500);
      });
    });
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
   * Init swiper sliders
   */
  function initSwiper() {
    document.querySelectorAll(".init-swiper").forEach(function (swiperElement) {
      let config = JSON.parse(
        swiperElement.querySelector(".swiper-config").innerHTML.trim()
      );

      if (swiperElement.classList.contains("swiper-tab")) {
        initSwiperWithCustomPagination(swiperElement, config);
      } else {
        new Swiper(swiperElement, config);
      }
    });
  }

  window.addEventListener("load", initSwiper);

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

  /**
   * Navmenu Scrollspy
   */
  let navmenulinks = document.querySelectorAll(".navmenu a");

  function navmenuScrollspy() {
    navmenulinks.forEach((navmenulink) => {
      if (!navmenulink.hash) return;
      let section = document.querySelector(navmenulink.hash);
      if (!section) return;
      let position = window.scrollY + 200;
      if (
        position >= section.offsetTop &&
        position <= section.offsetTop + section.offsetHeight
      ) {
        document
          .querySelectorAll(".navmenu a.active")
          .forEach((link) => link.classList.remove("active"));
        navmenulink.classList.add("active");
      } else {
        navmenulink.classList.remove("active");
      }
    });
  }
  window.addEventListener("load", navmenuScrollspy);
  document.addEventListener("scroll", navmenuScrollspy);
})();
