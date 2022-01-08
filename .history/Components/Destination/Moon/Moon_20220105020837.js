import React from 'react'
import Image from "next/image";
import styles from './Moon.module.css'

const Moon = () => {
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
      <h2 className={styles.moontexthead}> Moon</h2>
      <h6 className={styles.moontextsub} >
  See our planet as you’ve never seen it before. A perfect relaxing trip away to help 
  regain perspective and come back refreshed. While you’re there, take in some history 
  by visiting the Luna 2 and Apollo 11 landing sites.
  </h6>
  Avg. distance
  384,400 km

  Est. travel time
  3 days
  </div>  
  </div>
            
        </div>
    )
}

export default Moon
