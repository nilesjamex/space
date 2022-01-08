import React from 'react';
import Image from "next/image";
import styles from './Europa.module.css'

const Europa = () => {
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
    )
}

export default Europa
