import './index.css';
import './coponents/header/Header'
import './coponents/form-section/FormSection'
import './coponents/parallax-wrapper/ParallaxWrapper'
import { ParallaxWrapper } from './coponents/parallax-wrapper/ParallaxWrapper';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import SmoothScroll from 'smoothscroll-for-websites';
import { openDropDown, closeDropDown } from './coponents/dropdown/DropDown'
import { dropDown, dropdownAction, arrowDropDwon, dropDownArray, form } from './constants/constants'

gsap.registerPlugin(ScrollTrigger, SmoothScroll)
const mm = gsap.matchMedia()

mm.add("(min-width: 1024px)", (context) => {
    const panels = gsap.utils.toArray('.parallax-wrapper__panel')
    ParallaxWrapper(panels, gsap)
    SmoothScroll({
        frameRate: 144,
        animationTime: 1000,
        stepSize: 100,
        pulseAlgorithm: 1,
        pulseScale: 4,
        pulseNormalize: 1,
        accelerationDelta: 50,
        accelerationMax: 1,
        keyboardSupport: 1,
        arrowScroll: 50,
        fixedBackground: 0,
    })
    dropdownAction.addEventListener('mouseenter', (e) => {
        openDropDown(dropDownArray, gsap, arrowDropDwon)
    })
    dropDown.addEventListener('mouseleave', (e) => {
        closeDropDown(dropDownArray, gsap, arrowDropDwon)
    })
});

form.addEventListener('submit', (e) => {
    e.preventDefault()
})

