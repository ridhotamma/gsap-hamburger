gsap.registerPlugin(ScrollTrigger);

let isMobile = window.innerWidth < 720;

function checkIsMobile() {
    isMobile = window.innerWidth < 720;
}

checkIsMobile();

window.addEventListener('resize', checkIsMobile);


let tl = gsap.timeline({
    scrollTrigger: {
        trigger: '.main-container',
        scrub: true,
        start: 'top+=100px top',
        end: 'bottom+=600px top',
    },
});

tl.fromTo(
    '.burger div',
    { y: '-100vh', opacity: 0, rotate: -45 },
    {
        y: 0,
        opacity: 1,
        rotate: 0,
        duration: 5,
        stagger: {
            each: 0.6,
            from: 'end',
            ease: 'power2.out',
        },
    }
)
    .to('.text-left', { y: 500, opacity: 0, scale: 0.8, duration: 5, ease: 'power3.inOut' }, "<")
    .to('.text-right', { y: -500, opacity: 0, scale: 0.8, duration: 5, ease: 'power3.inOut' }, "<")
    .to('.burger div', {
        scale: isMobile ? 1 : 1.2,
        duration: 3,
        ease: 'elastic.out(1, 0.5)',
        stagger: {
            each: 0.5,
            from: 'edges',
        },
    }, "-=3")
    .to('.burger div', {
        scale: isMobile ? 0.8 : 1,
        duration: 2,
        ease: 'power2.out',
    })
    .to('.text-left, .text-right', { opacity: 1, scale: 1, y: 0, duration: 3, ease: 'bounce.out' }, "-=2")
    .fromTo('.text-title',
        { opacity: 0, scale: 0.5, y: 100 },
        { opacity: 1, scale: 1, y: 0, duration: 4, ease: 'expo.out' },
        "-=1.5"
    )
    .fromTo('.chips div',
        { x: 'random(-300, 300)', y: 'random(-300, 300)', opacity: 0, scale: 0 },
        { x: 0, y: 0, opacity: 1, scale: 1, duration: 2, ease: 'back.out(1.7)', stagger: 0.3 },
        "-=2"
    );
