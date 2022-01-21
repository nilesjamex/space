import React, {useContext, useEffect} from 'react';
import Slider from "react-slick";
import Image from 'next/image';
import styles from './Members.module.css'
import Doug from '../../../public/assets/crew/image-douglas-hurley.png';
import { MoveContext } from '../../../Contexts/Move';
import {StepContext} from '../../../Contexts/Steps';

const Members = () => {
    const {steps, next, prev } = useContext(MoveContext);
   const {click1, click2, click3, click4, true1, true2, true3, true4} = useContext(StepContext)

   useEffect(() => {
         const interval = setInterval(() => {
            for (let i=0; i<steps; i++) 
            {
                  steps + 1
            }  
         }, 5000);
         return () => clearInterval(interval);
   }, [])

    switch(steps) {

          case 1:
          return (
                <div className={styles.crewSplit}>
        <div className={styles.crewText}>
        <p className={styles.crewtexthead}>Commander</p>
        <h2 className={styles.crewtextsub}>Douglas Hurley</h2>
        <p className={styles.crewtextbody}> Douglas Gerald Hurley is an American engineer, former Marine Corps pilot 
  and former NASA astronaut. He launched into space for the third time as 
  commander of Crew Dragon Demo-2.</p>
  
        </div>
        <div className={styles.crewImage}>
        <Image className={styles.crewImages} src={Doug} alt="crew" height="590px" width="568px" />
        </div>
        </div>
          )

          case 2:
          return (
                <div className={styles.crewSplit}>
        <div className={styles.crewText}>
        <p className={styles.crewtexthead}>Commander</p>
        <h2 className={styles.crewtextsub}>Douglas James2</h2>
        <p className={styles.crewtextbody}> Douglas Gerald Hurley is an American engineer, former Marine Corps pilot 
  and former NASA astronaut. He launched into space for the third time as 
  commander of Crew Dragon Demo-2.</p>
  
        </div>
        <div className={styles.crewImage}>
        <Image className={styles.crewImages} src={Doug} alt="crew" height="590px" width="568px" />
        </div>
        </div>
          )

          case 3:
          return (
                 <div className={styles.crewSplit}>
        <div className={styles.crewText}>
        <p className={styles.crewtexthead}>Commander</p>
        <h2 className={styles.crewtextsub}>Douglas Hurley3</h2>
        <p className={styles.crewtextbody}> Douglas Gerald Hurley is an American engineer, former Marine Corps pilot 
  and former NASA astronaut. He launched into space for the third time as 
  commander of Crew Dragon Demo-2.</p>
  
        </div>
        <div className={styles.crewImage}>
        <Image className={styles.crewImages} src={Doug} alt="crew" height="590px" width="568px" />
        </div>
        </div>
          )

          case 4:
          return (
                <div className={styles.crewSplit}>
        <div className={styles.crewText}>
        <p className={styles.crewtexthead}>Commander</p>
        <h2 className={styles.crewtextsub}>Douglas Hurley4</h2>
        <p className={styles.crewtextbody}> Douglas Gerald Hurley is an American engineer, former Marine Corps pilot 
  and former NASA astronaut. He launched into space for the third time as 
  commander of Crew Dragon Demo-2.</p>
  
        </div>
        <div className={styles.crewImage}>
        <Image className={styles.crewImages} src={Doug} alt="crew" height="590px" width="568px" />
        </div>
        </div>
          )}};
export default Members