const nav = document.querySelector(".nav");

const hero = document.querySelector(".hero");
const heroTitle = hero.querySelectorAll(".hero_title > h1");
const heroGallery = hero.querySelector(".hero_gallery");
const heroFrames = hero.querySelectorAll(".hero_gallery_frame");

let isEnabled = false;

const initHero = () => {
  gsap.set([nav, heroGallery], {
    autoAlpha: 0,
  });
  gsap.set(heroTitle, {
    y: '-100%',
  });
  gsap.set(heroFrames, {
    height: 0,
  });

  showHero();
};

const showHero = () => {
  gsap
    .timeline()
    .to(
      nav,
      {
        duration: 1.2,
        autoAlpha: 1,
        ease: "expo.inOut",
      },
      0
    )
    .to(
      heroTitle,
      {
        duration: 1.8,
        y: 0,
        ease: "expo.inOut",
        stagger: 0.025,
      },
      0
    )
    .to(
      heroGallery,
      {
        duration: 0.5,
        autoAlpha: 1,
        ease: "expo.inOut",
        stagger: 0.025,
      },
      0
    )
    .to(
      heroFrames,
      {
        duration: 1.8,
        height: "auto",
        ease: "expo.inOut",
        stagger: {
          each: 0.025,
          from: "random",
          grid: "auto",
          ease: "expo.inOut",
        },
        onComplete: () => {
          isEnabled = true;
        },
      },
      0.1
    );
};

const animateImages = (e) => {
  heroFrames.forEach((el) => {
    let xPos = e.clientX / window.innerWidth - 0.5;
    let yPos = e.clientY / window.innerHeight - 0.5;

    gsap.to(el, {
      duration: 0.5,
      rotationY: 10 * xPos,
      rotationX: 10 * yPos,
      stagger: 0.055,
    });
  });
};

window.addEventListener("mousemove", (e) => {
  if (!isEnabled) return;
  animateImages(e);
});

document.onkeydown = function (e) {
  if (
    e.ctrlKey &&
    (e.key === "c" || e.key === "v" || e.key === "u" || e.key === "F6")
  ) {
    alert(
      "HI! I see you are trying to do something you should not be doing. Please do not use these keys. Thank you!"
    );
    return false;
  } else {
    return true;
  }
};

window.onload = () => {
  initHero();
};
