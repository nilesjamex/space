import React from 'react';
import Styles from './home.module.css';
import Nav from './../Layout/Nav';

const Home = () => {
    return (
        <div className={Styles.Homes} >
        <Nav />
        <div>
        <div className={Styles.Home}>
        <div className={Styles.HomeText}>
            <h3 className={Styles.HomeTextsub}>So, you want to travel to </h3>
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
