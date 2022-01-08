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
        </div>
    
  Moon
  Mars
  Europa
  Titan
        </div>
    )
}

export default Home
