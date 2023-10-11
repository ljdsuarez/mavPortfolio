// Targets viewports at least 768px wide
const mediaQuery = window.matchMedia("(min-width: 768px)");

//scroll-smoothing

const body = document.body;
const main = document.getElementById("main");

let sx = 0;
let sy = 0;

let dx = 0;
let dy = 0;

body.style.height = main.clientHeight + "px";
const navContainer = document.querySelector("[data-nav-container]");

function handleMediaQuery(event) {
  if (event.matches) {
    navContainer.dataset.navContainer = "desktop";
    window.addEventListener("scroll", scroll);

    function scroll() {
      sx = scrollX;
      sy = scrollY;
    }

    requestAnimationFrame(render);

    function render() {
      dx = lerp(dx, sx, 0.07);
      dy = lerp(dy, sy, 0.07);

      dx = Math.floor(dx * 100) / 100;
      dy = Math.floor(dy * 100) / 100;

      main.style.transform = `translate(-${dx}px, -${dy}px)`;

      requestAnimationFrame(render);
    }

    function lerp(a, b, n) {
      return (1 - n) * a + n * b;
    }

    const dataNav = document.querySelector("[data-nav]");

    window.addEventListener("scroll", function handleScroll() {
      const scrollTopPosition = window.scrollY;

      if (scrollTopPosition > lastScollTop) {
        dataNav.dataset.nav = "show";
      } else if (scrollTopPosition < lastScollTop) {
        dataNav.dataset.nav = "show";
      }
      lastScollTop = scrollTopPosition <= 0 ? 0 : scrollTopPosition;
    });
  } else {
    navContainer.dataset.navContainer = "mobile";
    requestAnimationFrame(render);
    function render() {
      document.getElementById("main").style.transform = null;

      requestAnimationFrame(render);
    }
  }
}
handleMediaQuery(mediaQuery);
mediaQuery.addEventListener("change", handleMediaQuery);

//mobile nav hide-show

const dataNav = document.querySelector("[data-nav]");
let lastScollTop = window.scrollY;

window.addEventListener("scroll", function handleScroll() {
  const scrollTopPosition = window.scrollY;
  //mobile nav hide-show
  if (scrollTopPosition > lastScollTop) {
    dataNav.dataset.nav = "hide";
  } else if (scrollTopPosition < lastScollTop) {
    dataNav.dataset.nav = "show";
  }
  lastScollTop = scrollTopPosition <= 0 ? 0 : scrollTopPosition;
});

//landing-card flip

const landingCardFlip = document.querySelector("[data-flip]");
const landingCard = document.getElementById("landing-card");

landingCard.addEventListener("click", () => {
  if (landingCardFlip.dataset.flip == "front") {
    landingCardFlip.dataset.flip = "back";
  } else {
    landingCardFlip.dataset.flip = "front";
  }
});

//nav underline animation

function ul(index) {
  let underlines = document.querySelectorAll(".underline");

  for (let i = 0; i < underlines.length; i++) {
    underlines[i].style.transform = `translateX(${index * 100}%)`;
  }
}

//page-navigations
const homePage = document.getElementById("home");
const aboutPage = document.getElementById("about");
const worksPage = document.getElementById("works");

function underline() {
  let scrollTopPosition = window.scrollY;

  if (
    scrollTopPosition > homePage.offsetTop &&
    scrollTopPosition < aboutPage.offsetTop - 100
  ) {
    ul(0);
  } else if (
    scrollTopPosition > aboutPage.offsetTop - 100 &&
    scrollTopPosition < worksPage.offsetTop - 100
  ) {
    ul(1);
  } else if (scrollTopPosition > worksPage.offsetTop - 100) {
    ul(2);
  } else if (landingCardFlip.dataset.flip == "back") {
    ul(3);
  } else {
    ul(0);
  }

  requestAnimationFrame(underline);
}

requestAnimationFrame(underline);

if (navContainer.dataset.navContainer == "mobile") {
  //home
  const navHome = document.getElementById("nav-home");

  navHome.addEventListener("click", () => {
    window.scrollTo(0, 0);
    landingCardFlip.dataset.flip = "front";
  });

  //contacts
  const navContacts = document.getElementById("nav-contacts");

  navContacts.addEventListener("click", () => {
    window.scrollTo(0, 0);
    landingCardFlip.dataset.flip = "back";
  });

  //about
  const navAbout = document.getElementById("nav-about");

  navAbout.addEventListener("click", () => {
    window.scrollTo(0, aboutPage.offsetTop);
  });

  //works
  const navWorks = document.getElementById("nav-works");

  navWorks.addEventListener("click", () => {
    window.scrollTo(0, worksPage.offsetTop);
  });
} else {
  //home
  const navHome = document.getElementById("nav-home");

  navHome.addEventListener("click", () => {
    window.scrollTo(0, 0);
    landingCardFlip.dataset.flip = "front";
  });

  //contacts
  const navContacts = document.getElementById("nav-contacts");

  navContacts.addEventListener("click", () => {
    window.scrollTo(0, 0);
    landingCardFlip.dataset.flip = "back";
  });

  //about
  const navAbout = document.getElementById("nav-about");

  navAbout.addEventListener("click", () => {});

  //works
  const navWorks = document.getElementById("nav-works");

  navWorks.addEventListener("click", () => {
    window.scrollTo(0, worksPage.offsetTop);
  });
}
