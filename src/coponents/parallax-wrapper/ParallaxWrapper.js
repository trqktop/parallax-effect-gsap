import './parallax-wrapper.css'

export function ParallaxWrapper(arr, gsap) {
    arr.forEach((panel, i) => {
        gsap.to(panel,
            {
                yPercent: -100,
                ease: 'none',
                scrollTrigger: {
                    pin: false,
                    trigger: panel,
                    scrub: 1,
                    start: `top+=${i * 33}% bottom`,
                    end: `+=50%`,
                    pinSpacing: false,
                }
            })
    })
}