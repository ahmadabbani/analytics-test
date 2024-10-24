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
  let preloader = select("#preloader");
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

  //partners animation
  document.addEventListener("DOMContentLoaded", function () {
    const logoRow = document.querySelector(".logo-row");
    const logos = document.querySelectorAll(".logo-item");
    const logoCount = logos.length;

    // Clone logos to create a seamless loop
    for (let i = 0; i < logoCount; i++) {
      logoRow.appendChild(logos[i].cloneNode(true));
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
      title: "Planning and Project Development",
      description: `We assist organizations in planning and developing projects that align with their strategic goals. Our services include needs assessments, project design, and strategic planning to ensure projects are well-founded and impactful.`,
      icon: "bi-briefcase",
    },
    {
      title: "Capacity Building and Trainings",
      description: `We offer capacity-building programs and training sessions tailored to the needs of organizations.
       Our training covers a range of topics, including project management, data analysis, and organizational development, empowering teams to perform at their best.`,
      icon: "bi-briefcase",
    },
    {
      title: "Data Collection and Analysis",
      description: `We provide comprehensive data collection and analysis services. Our team employs cutting-edge tools and methodologies to gather accurate data and generate actionable insights, enabling organizations to make informed decisions.`,
      icon: "bi-briefcase",
    },
    {
      title: "Monitoring, Evaluation, and Learning",
      description: `Our monitoring, evaluation, and learning services ensure that organizations can track their progress, evaluate their impact, and learn from their experiences. We provide customized solutions to help organizations improve their performance and achieve their goals.`,
      icon: "bi-briefcase",
    },
    {
      title: "AI Organizational Integration",
      description: `We help organizations integrate artificial intelligence into their operations. Our services include AI strategy development, implementation support, and training to ensure organizations can leverage AI to enhance their efficiency and effectiveness.`,
      icon: "bi-briefcase",
    },
    {
      title: "Strategic Consulting",
      description: `Our strategic consulting services help organizations navigate complex challenges and seize opportunities. We provide expert advice on organizational development, change management, and strategic planning.`,
      icon: "bi-briefcase",
    },
    {
      title: "Grant Writing and Fundraising",
      description: `We support organizations in securing funding through effective grant writing and fundraising strategies.
       Our services include identifying funding opportunities, crafting compelling proposals, and engaging with donors.`,
      icon: "bi-briefcase",
    },
    {
      title: "Risk Assessment and Management",
      description: `We help organizations identify, assess, and mitigate risks to ensure project success. Our risk management strategies safeguard against potential threats and enhance project resilience.`,
      icon: "bi-briefcase",
    },
    {
      title: "Community, Stakeholder Engagement, and Outreach",
      description: `Effective engagement with communities and stakeholders is crucial for project success. We design and implement engagement strategies that foster collaboration, trust, and mutual understanding.`,
      icon: "bi-briefcase",
    },
  ];

  // Function to open the modal with specific service info
  function openModal(serviceIndex) {
    const service = services[serviceIndex];
    document.querySelector("#serviceModalLabel").textContent = service.title;
    document.querySelector(".modal-description").textContent =
      service.description;

    // Show the modal
    const modal = new bootstrap.Modal(document.getElementById("serviceModal"));
    modal.show();
  }

  // Add click event listeners to service items
  document.querySelectorAll(".service-item").forEach((item, index) => {
    item.addEventListener("click", () => openModal(index));
  });
})();
