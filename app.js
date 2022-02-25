const tl = gsap.timeline({
  defaults: { duration: 0.35, ease: "Power2.easeOut" },
});

const home = document.querySelector(".home");
const notifications = document.querySelector(".notifications");
const messages = document.querySelector(".messages");

gsap.set(".feather", { scale: 0 });

home.addEventListener("click", () => {
  gsap.fromTo(".home-svg", { scale: 1 }, { scale: 0.9, yoyo: true, repeat: 1 });
  gsap.fromTo(
    ".feather",
    { y: -5, scale: 0 },
    { y: 20, scale: 1.5, duration: 1, stagger: 0.2 }
  );
  gsap.fromTo(".right-feather", { x: 0 }, { x: 5 });
  gsap.fromTo(".feather", { opacity: 1 }, { opacity: 0, duration: 3 });
});

gsap.set(".bell", { transformOrigin: "top center" });
gsap.set(".ringer", { transformOrigin: "top center" });
gsap.set(".wave", { opacity: 0, transformOrigin: "bottom" });

notifications.addEventListener("click", () => {
  gsap.fromTo(
    ".bell",
    { rotation: -5 },
    { rotation: 0, ease: "elastic.out(5, 0.2)", duration: 2 }
  );
  gsap.fromTo(
    ".ringer",
    { rotation: -5, x: 0.5 },
    { rotation: 0, x: 0, ease: "elastic.out(5, 0.2)", duration: 2 }
  );
  gsap.fromTo(
    ".wave",
    { scale: 0, opacity: 1 },
    { scale: 1.3, opacity: 0, duration: 1 }
  );
});

gsap.set(".flap", { transformOrigin: "top center" });

messages.addEventListener("click", () => {
  tl.fromTo(".messages-svg", { scale: 1 }, { scale: 0.9 });
  tl.fromTo(".flap", { scale: 1 }, { scale: -1 }, "<50%");
  tl.fromTo(".messages-svg", { scale: 0.9 }, { scale: 1 }, "<50%");
  tl.fromTo(
    ".note",
    { opacity: 1, y: 0 },
    { opacity: 0, y: -40, duration: 0.75 }
  );
  tl.to(".flap", { scale: 1 });
});
