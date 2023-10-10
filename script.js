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

function handleMediaQuery(event) {
  if (event.matches) {
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
  } else {
    requestAnimationFrame(render);
    function render() {
      document.getElementById("main").style.transform = null;

      requestAnimationFrame(render);
    }
  }
}
handleMediaQuery(mediaQuery);
mediaQuery.addEventListener("change", handleMediaQuery);

//mobile scroll hide-show

const dataNav = document.querySelector("[data-nav]");
let lastScollTop = window.scrollY;

window.addEventListener("scroll", function handleScroll() {
  const scrollTopPosition = window.scrollY;

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
