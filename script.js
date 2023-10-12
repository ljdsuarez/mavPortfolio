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

  if (navContainer.dataset.navContainer == "mobile") {
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
  } else {
    if (
      scrollTopPosition > homePage.offsetTop &&
      scrollTopPosition < aboutPage.offsetTop / 2 - 100
    ) {
      ul(0);
    } else if (
      scrollTopPosition > aboutPage.offsetTop / 2 - 100 &&
      scrollTopPosition < worksPage.offsetTop / 2 - 100
    ) {
      ul(1);
    } else if (scrollTopPosition > worksPage.offsetTop / 2 - 100) {
      ul(2);
    } else if (landingCardFlip.dataset.flip == "back") {
      ul(3);
    } else {
      ul(0);
    }
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

  navAbout.addEventListener("click", () => {
    scrollTo(0, aboutPage.offsetTop / 2);
  });

  //works
  const navWorks = document.getElementById("nav-works");

  navWorks.addEventListener("click", () => {
    window.scrollTo(0, worksPage.offsetTop / 2);
  });
}

//works-carousel

//URLs of files in ./public folder
let content1 = ["1.png", "2.png", "3.png"];
let content2 = ["1.png", "2.png", "3.png", "4.png", "5.png", "6.png"];
let cosmetics = [
  "1.png",
  "2.png",
  "3.png",
  "4.png",
  "5.png",
  "6.png",
  "7.png",
  "8.png",
  "9.png",
  "10.png",
  "11.png",
  "12.png",
  "13.png",
  "14.png",
  "15.png",
  "16.png",
  "17.png",
  "18.png",
  "19.png",
  "20.png",
  "21.png",
  "22.png",
  "23.png",
  "24.png",
  "25.png",
  "26.png",
  "27.png",
  "28.png",
];
let logos = ["1.png", "2.png", "3.png", "4.png"];

const arrowLeft = document.getElementById("arrow-left");
const arrowRight = document.getElementById("arrow-right");

function workImage(folder, item) {
  const image = document.createElement("img");
  image.setAttribute("src", `./public/works/${folder}/${item}`);
  return image;
}

function workName(folderName, folderArray) {
  for (let i = 0; i < folderArray.length; i++) {
    const div = document.createElement("div");
    div.setAttribute("class", "work-card");
    div.setAttribute("id", `work-image-${i + 1}`);
    document.getElementById("work-container").append(div);
    div.append(workImage(folderName, folderArray[i]));
  }

  const slides = document.querySelectorAll(".work-card");

  //initial css for carousel

  slides[0].classList.add("active");
  slides[1].classList.add("next");
  slides[2].classList.add("prev");

  const arrow = document.querySelectorAll(".arrow");
  let current = 0;
  let prev = folderArray.length - 1;
  let next = 1;

  for (let i = 0; i < arrow.length; i++) {
    arrow[i].addEventListener("click", () =>
      i == 0 ? gotoPrev() : gotoNext()
    );
  }

  const gotoPrev = () => {
    current > 0 ? gotoNum(current - 1) : gotoNum(slides.length - 1);
  };

  const gotoNext = () => {
    current < folderArray.length - 1 ? gotoNum(current + 1) : gotoNum(0);
  };

  const gotoNum = (number) => {
    current = number;
    prev = current - 1;
    next = current + 1;

    for (let i = 0; i < slides.length; i++) {
      slides[i].classList.remove("active");
      slides[i].classList.remove("prev");
      slides[i].classList.remove("next");
    }

    if (next == folderArray.length) {
      next = 0;
    }

    if (prev == -1) {
      prev = folderArray.length - 1;
    }

    slides[current].classList.add("active");
    slides[prev].classList.add("prev");
    slides[next].classList.add("next");
  };
}

workName("cosmetics", cosmetics);
