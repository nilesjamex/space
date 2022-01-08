import React from 'react';
import styles from './Home.module.css'
import Nav from './../../../Layout/Nav';
import { Image } from 'next/image';
import Moon from './../Moon/Moon';

const Home = () => {
    return (
        <div className={styles.home}>
        <div>
         <Nav/>
        </div>
        <div>
           <h3 className={styles.hometext}> 01 Pick your destination</h3>
        </div>
        <div>
        <Moon />
        </div>
  {/* <ul className={styles.list}>
  <li>Moon</li>
  <li>Mars</li>
  <li> Europa</li>
  <li>Titan</li>
  </ul>   */}
  
  
 
  
        </div>
    )
}

export default Home
