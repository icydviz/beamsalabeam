import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import ScrollSmoother from 'gsap/ScrollSmoother'

export class HomePageState {
  initScollSmoother = () => {
    gsap.registerPlugin(ScrollTrigger, ScrollSmoother)

    ScrollSmoother.create({
      smooth: 1,
      effects: true,
      smoothTouch: 0.1
    })
  }
}
