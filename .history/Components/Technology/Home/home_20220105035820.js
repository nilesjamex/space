import React from 'react';
import styles from './Home.module.css'
import Nav from './../../../Layout/Nav';
import { Image } from 'next/image';

export const Home = () => {
    return (
        <div className={styles.home}>
        <div>
         <Nav/>
        </div>
        <div>
        <div>
           <h3 className={styles.hometext}> 01 Pick your destination</h3>
        </div>
        </div>
        <div>
        yess
        </div>
        </div>
    )
}
export default Home