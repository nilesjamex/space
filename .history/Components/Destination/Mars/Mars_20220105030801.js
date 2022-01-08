import React, {useState} from 'react';
import Image from "next/image";
import styles from './Mars.module.css'

const Mars = () => {
    const [steps, setSteps] = useState(1);

    const next = (e) => {
        e.preventDefault();
        setSteps(steps + 1);
    }
    const prev = (e) => {
        e.preventDefault();
        setSteps(steps - 1);
    };

    switch (step) {
        case 1:
              return (
                  <div className={styles.moon}>
        <div>
        <Image src='/../../../public/assets/destination/image-moon.png' height="100" width=" 70" alt="uu" />
        </div>
        <div className={styles.moontext}>
        <div>
        <ul className={styles.list}>
  <li>Moon</li>
  <li onClick={next}>Mars</li>
  <li onClick={(e) => {
      setSteps(steps+2)
  }}> Europa</li>
  <li onClick={(e) => {
      setSteps(steps+3)
  }}>Titan</li>
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
        <div>
        <Image src='/../../../public/assets/destination/image-moon.png' height="100" width=" 70" alt="uu" />
        </div>
        <div className={styles.moontext}>
        <div>
        <ul className={styles.list}>
  <li onClick={prev}>Moon</li>
  <li>Mars</li>
  <li onClick={next}> Europa</li>
  <li onClick={(e) => {
      setSteps(steps+2)
  }}>Titan</li>
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
        <div>
           

  

  Avg. distance
  

  Est. travel time
  9 months
        </div>
    )
}
}

export default Mars
