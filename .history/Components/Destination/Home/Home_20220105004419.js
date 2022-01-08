import React from 'react';
import styles from './Home.module.css'
import Nav from './../../../Layout/Nav';

const Home = () => {
    return (
        <div className={styles.home}>
        <Nav/>
            01 Pick your destination

  Moon
  Mars
  Europa
  Titan
        </div>
    )
}

export default Home
