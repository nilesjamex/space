import React from 'react';
import Image from "next/image";
import styles from '.././Moon.module.css'

const Titan = () => {
    return (
         <div className={styles.moon}>
        <div>
        <Image src='/../../../public/assets/destination/image-moon.png' height="100" width=" 70" alt="uu" />
        </div>
        <div className={styles.moontext}>
        <div>
        <ul className={styles.list}>
  <li>Moon</li>
  <li>Mars</li>
  <li> Europa</li>
  <li>Titan</li>
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

export default Titan
