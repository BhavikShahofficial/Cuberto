gsap.to(".fleftelem", {
  scrollTrigger: {
    trigger: ".fcenter",
    pin: true,
    start: "top top",
    end: "bottom bottom",
    endTrigger: ".last",
    scrub: 1,
  },
  y: "-300%",
  ease: Power1,
});
