
gsap.from(".text_animation", {
    duration: 2,
    opacity: 0, 
    scale: 0.5, 
    stagger: 0.3, 
    ease: "back.out(1.7)",
});

var imageAnimation = gsap.timeline();
imageAnimation
    .from(".card_animation", { x: -1000, stagger: 0.3, duration: 1, },)
    .from(".card_animation2", { x: 1000, stagger: 0.3, duration: 1 },);


ScrollTrigger.create({
    trigger: '.main',
    start: '5% 75%',
    end: '120% 60%',
    animation: imageAnimation,
    markers: false,
    toggleActions:"play none none none",   
}
);

