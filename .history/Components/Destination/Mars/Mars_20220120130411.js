import React, {useState, useContext} from 'react';
import Image from "next/image";
import styles from './Mars.module.css';
import Moon from '../../../public/assets/destination/image-moon.png';
import Marss from '../../../public/assets/destination/image-mars.webp';
import Europa from '../../../public/assets/destination/image-europa.png';
import Titan from '../../../public/assets/destination/image-titan.png';
import { StepContext } from './../../../Contexts/Steps';

const Mars = () => {
    const [steps, setSteps] = useState(1);
   
    const next = (e) => {
        setSteps(steps + 1);
    }
    const prev = (e) => {
        setSteps(steps - 1);
    };

    const {click1, click2, click3, click4, true1, true2, true3, true4} = useContext(StepContext)

    switch (steps) {
        case 1:
              return (
                  <div className={styles.moon}>
        <div className={styles.imagediv}>
        <Image src={Moon}  objectFit="contain" alt="uu" />
        </div>
        <div className={styles.moontext}>
        <div>
        <ul className={styles.list}>
  <li onClick={(e) => {
      click1()
  }}>Moon
  <hr className={`${true1 ? styles.lineshow : styles.linehide}`} />
  </li>
  <li onClick={(e) => {
      next()
      click2()
      }}>Mars
  <hr className={`${true2 ? styles.lineshow : styles.linehide}`} />
  </li>
  <li onClick={(e) => {
      setSteps(steps+2);
      click3()
  }}> Europa
  <hr className={`${true3 ? styles.lineshow : styles.linehide}`} />
  </li>

  <li onClick={(e) => {
      setSteps(steps+3)
      click4()
  }}>Titan
  <hr className={`${true4 ? styles.lineshow : styles.linehide}`} />
  </li>
  </ul>
        </div>
        <div>
      <h2 className={styles.moontexthead}> Moon</h2>
      <h6 className={styles.moontextsub} >
  See our planet as you’ve never seen it before. A perfect relaxing trip away to help 
  regain perspective and come back refreshed. While you’re there, take in some history 
  by visiting the Luna 2 and Apollo 11 landing sites.
  </h6>
  <hr className={styles.line} />
  <div className={styles.distday} >
  <div>
  <p className={styles.distance}>Avg. distance</p>
  <h3 className={styles.distancekm}>384,400 km</h3>
  </div>
  <div>
  <p className={styles.distance}>Est. travel time</p>
  <h3 className={styles.distancekm}>3 days</h3>
  </div>
  </div>
  </div>  
  </div>
            
        </div>
              );
    
    case 2: 
    return (
        <div className={styles.moon}>
        <div className={styles.imagediv}>
        <Image src={Marss} objectFit="contain" alt="uu" />
        </div>
        <div className={styles.moontext}>
        <div>
        <ul className={styles.list}>
  <li onClick={(e) => {
      prev()
      click1()
      }}>Moon 
  <hr className={`${true1 ? styles.lineshow : styles.linehide}`} />
  </li>
  <li onClick={(e) => {
      click2()
  }}>Mars 
  <hr className={`${true2 ? styles.lineshow : styles.linehide}`} />
  </li>
  <li onClick={(e) => {
      next()
      click3()
      }}> Europa
  <hr className={`${true3 ? styles.lineshow : styles.linehide}`} />
  </li>
  <li onClick={(e) => {
      setSteps(steps+2)
      click4()
  }}>Titan
  <hr className={`${true4 ? styles.lineshow : styles.linehide}`} />
  </li>
  </ul>
        </div>
        <div>
      <h2 className={styles.moontexthead}>  Mars</h2>
      <h6 className={styles.moontextsub} >
  Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, 
  the tallest planetary mountain in our solar system. It’s two and a half times 
  the size of Everest!
  </h6>
  <hr className={styles.line} />
  <div className={styles.distday} >
  <div>
  <p className={styles.distance}>Avg. distance</p>
  <h3 className={styles.distancekm}>225 mil. km</h3>
  </div>
  <div>
  <p className={styles.distance}>Est. travel time</p>
  <h3 className={styles.distancekm}>9 months</h3>
  </div>
  </div>
  </div>  
  </div>
            
        </div>
    );
    case 3:
    return (
        <div className={styles.moon}>
        <div className={styles.imagediv}>
        <Image src={Europa} objectFit="contain" alt="uu" />
        </div>
        <div className={styles.moontext}>
        <div>
        <ul className={styles.list}>
  <li onClick={(e) => {
      setSteps(steps-2)}}>Moon
      <hr className={`${true1 ? styles.lineshow : styles.linehide}`} />
      </li>
  <li onClick={prev}>Mars
  <hr className={`${true2 ? styles.lineshow : styles.linehide}`} />
  </li>
  <li> Europa
  <hr className={`${true3 ? styles.lineshow : styles.linehide}`} />
  </li>
  <li onClick={next}>Titan
  <hr className={`${true4 ? styles.lineshow : styles.linehide}`} />
  </li>
  </ul>
        </div>
        <div>
      <h2 className={styles.moontexthead}> Europa</h2>
      <h6 className={styles.moontextsub} >
  The smallest of the four Galilean moons orbiting Jupiter, Europa is a 
  winter lover’s dream. With an icy surface, it’s perfect for a bit of 
  ice skating, curling, hockey, or simple relaxation in your snug 
  wintery cabin.
  </h6>
  <hr className={styles.line} />
  <div className={styles.distday} >
  <div>
  <p className={styles.distance}>Avg. distance</p>
  <h3 className={styles.distancekm}>628 mil. km</h3>
  </div>
  <div>
  <p className={styles.distance}>Est. travel time</p>
  <h3 className={styles.distancekm}>3 years</h3>
  </div>
  </div>
  </div>  
  </div>
            
        </div>
    );
case 4:
    return (
         <div className={styles.moon}>
        <div className={styles.imagediv}>
        <Image src={Titan}objectFit="contain" alt="uu" />
        </div>
        <div className={styles.moontext}>
        <div>
        <ul className={styles.list}>
  <li onClick={(e) => {
      setSteps(steps-3)}}>Moon
      <hr className={`${true1 ? styles.lineshow : styles.linehide}`} />
      </li>
  <li onClick={(e) => {
      setSteps(steps-2)}}>Mars
      <hr className={`${true2 ? styles.lineshow : styles.linehide}`} />
      </li>
  <li onClick={prev}> Europa
  <hr className={`${true3 ? styles.lineshow : styles.linehide}`} />
  </li>
  <li>Titan
  <hr className={`${true4 ? styles.lineshow : styles.linehide}`} />
  </li>
  </ul>
        </div>
        <div>
      <h2 className={styles.moontexthead}> Titan</h2>
      <h6 className={styles.moontextsub} >
   The only moon known to have a dense atmosphere other than Earth, Titan 
  is a home away from home (just a few hundred degrees colder!). As a 
  bonus, you get striking views of the Rings of Saturn.
  </h6>
  <hr className={styles.line} />
  <div className={styles.distday} >
  <div>
  <p className={styles.distance}>Avg. distance</p>
  <h3 className={styles.distancekm}>1.6 bil. km</h3>
  </div>
  <div>
  <p className={styles.distance}>Est. travel time</p>
  <h3 className={styles.distancekm}>7 years</h3>
  </div>
  </div>
  </div>  
  </div>
            
        </div>
    )
}
}

export default Mars
