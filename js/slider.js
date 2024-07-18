const config = {
    once: true,
    mirror: false,
    type: "carousel",
    startAt: 0,
    autoplay: 2000,
    hoverpause: true,
    perView: 3,
    animationDuration: 700,
    animationTimingFunc: "ease-in-out",
    breakpoints:{
        768: {
            perView: 2
        },
    }    
}
new Glide('.glide', config).mount();