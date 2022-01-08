import React from 'react';
import styles from './crew.module.css'
import Nav from '../../../Layout/Nav';
import Image from 'next/image';
import Members from './Members/Members'

const Crew = () => {
  
  return (
    <div className={styles.home}>
     <div>
         <Nav/>
        </div>
        <div>
        <div>
           <h3 className={styles.hometext}> 02 Meet your crew</h3>
        </div>
        </div>
        <div>
        <Members />
        </div>
    </div>
  )
}

export default Crew
