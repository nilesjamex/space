import React from 'react';
import styles from './Home.module.css'
import Nav from './../../../Layout/Nav';
import { Image } from 'next/image';

const Home = () => {
    return (
        <div className={styles.home}>
        <Nav/>
        <div>
           <h3> 01 Pick your destination</h3>
               <Image src="../../public/assets/destination/background-destination-desktop.jpg" width="200" height="199" alt="" />
        </div>
    
  Moon
  Mars
  Europa
  Titan
        </div>
    )
}

export default Home
