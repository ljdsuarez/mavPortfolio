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
const worksIntroPage = document.getElementById("works-intro");

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
      scrollTopPosition < worksIntroPage.offsetTop - 100
    ) {
      ul(1);
    } else if (scrollTopPosition > worksIntroPage.offsetTop - 100) {
      ul(2);
    } else if (landingCardFlip.dataset.flip == "back") {
      ul(3);
    } else {
      ul(0);
    }
  } else {
    if (
      scrollTopPosition > homePage.offsetTop &&
      scrollTopPosition < aboutPage.offsetTop - 100
    ) {
      ul(0);
    } else if (
      scrollTopPosition > aboutPage.offsetTop - 100 &&
      scrollTopPosition < worksIntroPage.offsetTop - 100
    ) {
      ul(1);
    } else if (scrollTopPosition > worksIntroPage.offsetTop - 100) {
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
    window.scrollTo(0, worksIntroPage.offsetTop);
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
    scrollTo(0, aboutPage.offsetTop);
  });

  //works
  const navWorks = document.getElementById("nav-works");

  navWorks.addEventListener("click", () => {
    window.scrollTo(0, worksIntroPage.offsetTop);
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

//function for making the work experience container

function workImage(folder, item) {
  const image = document.createElement("img");
  image.setAttribute("src", `./public/works/${folder}/${item}`);
  image.setAttribute("draggable", false);
  return image;
}

function workName(folderName, folderArray, title) {
  const workContainer = document.createElement("div");
  workContainer.setAttribute("class", "work-container");
  workContainer.setAttribute("id", `work-container-${folderName}`);
  worksPage.append(workContainer);

  const workCardContainer = document.createElement("div");
  workCardContainer.setAttribute("class", "work-card-container");
  workCardContainer.setAttribute("id", "work-card-container");
  workContainer.append(workCardContainer);
  const bgContainer = document.createElement("div");
  bgContainer.setAttribute("class", "bg-container");
  bgContainer.setAttribute("id", "bg-container");
  workContainer.append(bgContainer);

  for (let i = 0; i < folderArray.length; i++) {
    const div = document.createElement("div");
    div.setAttribute("class", "work-card");
    div.setAttribute("id", `work-image-${i + 1}`);
    div.append(workImage(folderName, folderArray[i]));
    workCardContainer.append(div);
  }

  for (let i = 0; i < folderArray.length; i++) {
    const div = document.createElement("div");
    div.setAttribute("class", "background-card");
    div.setAttribute("id", `work-image-${i + 1}`);
    div.append(workImage(folderName, folderArray[i]));
    bgContainer.append(div);
  }

  const slides = document.querySelectorAll(
    `#work-container-${folderName} .work-card`
  );
  const slidesBg = document.querySelectorAll(
    `#work-container-${folderName} .background-card`
  );

  //initial css for carousel

  slides[0].classList.add("active");
  slides[1].classList.add("next");
  slides[2].classList.add("prev");

  slidesBg[0].classList.add("active");
  slidesBg[1].classList.add("next");
  slidesBg[2].classList.add("prev");

  //initial css background

  //for arrows
  const arrowContainer = document.createElement("div");
  arrowContainer.setAttribute("class", "arrow-container");
  const arrowLeft = document.createElement("div");
  arrowLeft.setAttribute("class", "arrow-left");
  arrowLeft.setAttribute("id", "arrow-left");
  const arrowRight = document.createElement("div");
  arrowRight.setAttribute("class", "arrow-right");
  arrowRight.setAttribute("id", "arrow-right");
  arrowLeft.classList.add("arrow");
  arrowRight.classList.add("arrow");
  arrowContainer.append(arrowLeft);
  arrowContainer.append(arrowRight);

  const arrowLeftIcon = document.createElement("span");
  arrowLeftIcon.setAttribute("class", "material-symbols-outlined");
  arrowLeftIcon.style.fontSize = "40px";
  arrowLeftIcon.innerHTML = " arrow_back_ios";
  arrowLeft.append(arrowLeftIcon);

  const arrowRightIcon = document.createElement("span");
  arrowRightIcon.setAttribute("class", "material-symbols-outlined");
  arrowRightIcon.style.fontSize = "40px";
  arrowRightIcon.innerHTML = "arrow_forward_ios";
  arrowRight.append(arrowRightIcon);

  workContainer.append(arrowContainer);

  const arrow = document.querySelectorAll(
    `#work-container-${folderName} .arrow`
  );
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
      slidesBg[i].classList.remove("active");
      slidesBg[i].classList.remove("prev");
      slidesBg[i].classList.remove("next");
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
    slidesBg[current].classList.add("active");
    slidesBg[prev].classList.add("prev");
    slidesBg[next].classList.add("next");
  };

  //for click-slide event

  let posX1 = 0;
  let posX2 = 0;

  function swipeStart(e) {
    document.addEventListener("touchmove", swipeAction);
    document.addEventListener("mousemove", swipeAction);
    document.addEventListener("touchend", swipeEnd);
    document.addEventListener("mouseup", swipeEnd);
    //for mouse

    e.type.search("touch") !== -1
      ? (posX1 = e.touches[0].clientX)
      : (posX1 = e.clientX);
  }

  function swipeAction(e) {
    e.type.search("touch") !== -1
      ? (posX2 = posX1 - e.touches[0].clientX)
      : (posX2 = posX1 - e.clientX);
  }

  function swipeEnd() {
    document.removeEventListener("touchmove", swipeAction);
    document.removeEventListener("mousemove", swipeAction);
    document.removeEventListener("touchend", swipeEnd);
    document.removeEventListener("mouseup", swipeEnd);
    if (posX2 > 0) {
      gotoNext();
    } else if (posX2 == 0) {
      return;
    } else {
      gotoPrev();
    }
    posX2 = 0;
  }

  workCardContainer.addEventListener("touchstart", swipeStart);
  workCardContainer.addEventListener("mousedown", swipeStart);

  //title
  const workTitleContainer = document.createElement("div");
  workTitleContainer.setAttribute("class", "work-title-container");
  workTitleContainer.innerHTML = title;
  workContainer.append(workTitleContainer);
}

//list all works with stacking animations

workName("cosmetics", cosmetics, "Cosmetics");
workName("content1", content1, "Content");
workName("content2", content2, "Content");
workName("logos", logos, "Logos");

// const workContainers = document.querySelectorAll(`.work-container`);
