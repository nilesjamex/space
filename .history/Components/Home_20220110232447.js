import React, {useRef, useLayoutEffect} from 'react';
import Styles from './home.module.css';
import Nav from './../Layout/Nav';
import { gsap, TimeLineLite, Power3} from 'gsap';

const Home = () => {
    const scramble = useRef();
    const tl = new TimelineLite
    useLayoutEffect(() => {
        tl.to(scramble, {duration: 3, scrambleText:{text:"ScrambleText allows you to animate the scrambling of text.", 
        chars:"lowerCase", revealDelay:0.5, tweenLength:false}})
    }, [tl])
    return (
        <div className={Styles.Homes} >
        <div className={Styles.nav}>
        <Nav />
        </div>
        <div>
        <div className={Styles.Home}>
        <div className={Styles.HomeText}>
            <h3 className={Styles.HomeTextsub} ref={scramble}> </h3>
  <h1 className={Styles.HomeTextspace}>Space</h1>
  <h3 className={Styles.HomeTextsubs}>Let’s face it; if you want to go to space, you might as well genuinely go to 
  outer space and not hover kind of on the edge of it. Well sit back, and relax 
  because we’ll give you a truly out of this world experience! </h3>
  </div>
<div className={Styles.Explore}>
  <h2 className={Styles.ExploreText}>Explore</h2>
  </div>
  </div>
        </div>
        </div>
    )
}

export default Home
