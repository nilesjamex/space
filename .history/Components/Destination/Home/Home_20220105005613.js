import React from 'react';
import styles from './Home.module.css'
import Nav from './../../../Layout/Nav';
import { Image } from 'next/image';

const Home = () => {
    return (
        <div className={styles.home}>
        <div>
         <Nav/>
        </div>
        <div>
           <h3 className={styles.hometext}> 01 Pick your destination</h3>
               <h1>ggggg</h1>
        </div>
    
  Moon
  Mars
  Europa
  Titan
        </div>
    )
}

export default Home
