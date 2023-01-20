function openDropDown(dropDownArray, gsap, arrowDropDwon) {
    gsap.to(arrowDropDwon, { rotate: 180, duration: 0, })

    gsap.to(arrowDropDwon.children, { stroke: '#A18460', delay: 0, duration: 0 })
    dropDownArray.forEach((el, i) => {
        const tl = gsap.timeline()
        tl.to(el, { opacity: 1, delay: 0, duration: 0 })
            .to(el, { yPercent: (i + 1) * 100, zIndex: 3, duration: .1, delay: 0 })
    })
}

function closeDropDown(dropDownArray, gsap, arrowDropDwon) {
    gsap.to(arrowDropDwon, { rotate: 0, duration: 0 })
    gsap.to(arrowDropDwon.children, { stroke: 'white', delay: 0, duration: 0 })
    dropDownArray.forEach((el, i) => {
        const tl = gsap.timeline()
        tl.to(el, { opacity: 0, delay: 0, duration: 0 })
            .to(el, { yPercent: 0, zIndex: 1, duration: .1, delay: 0 })
    })
}

export { closeDropDown, openDropDown }
