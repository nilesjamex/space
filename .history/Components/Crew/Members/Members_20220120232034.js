import React, {useContext, useEffect, useState} from 'react';
import Slider from "react-slick";
import Image from 'next/image';
import styles from './Members.module.css'
import Doug from '../../../public/assets/crew/image-douglas-hurley.png';
import { MoveContext } from '../../../Contexts/Move';
import {StepContext} from '../../../Contexts/Steps';

const Members = () => {
    const {steps, next, prev } = useContext(MoveContext);
   const {click1, click2, click3, click4, true1, true2, true3, true4} = useContext(StepContext)

//    useEffect(() => {
//          const interval = setInterval(() => {
//             for (let i=0; i<3; i++) 
//             {
//                 next()  
//             }  
//          }, 1000);
//          return () => clearInterval(interval);
//    }, [next])

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
        <div className={styles.dotsplit}> 
        <div className={styles.dot}></div>
        <div className={styles.dot} onClick={(e) => {
              next()
              click2()
        }}></div>
        <div className={styles.dot}  onClick={(e) => {
              next2()
              click3()
        }}></div>
        <div className={styles.dot}  onClick={(e) => {
              next3()
              click4()
        }}></div>
        </div>
  
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

         <div className={styles.dotsplit}> 
        <div className={styles.dot} onClick={(e) => {
              prev()
              click1()
        }}></div>
        <div className={styles.dot} onClick={(e) => {
              next()
              click2()
        }}></div>
        <div className={styles.dot}  onClick={(e) => {
              next()
              click3()
        }}></div>
        <div className={styles.dot}  onClick={(e) => {
              next2()
              click4()
        }}></div>
        </div>
  
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

        <div className={styles.dotsplit}> 
        <div className={styles.dot} onClick={(e) => {
              prev2()
              click1()
        }}></div>
        <div className={styles.dot} onClick={(e) => {
              prev()
              click2()
        }}></div>
        <div className={styles.dot}  onClick={(e) => {
              click3()
        }}></div>
        <div className={styles.dot}  onClick={(e) => {
              next()
              click4()
        }}></div>
        </div>
  
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

        <div className={styles.dotsplit}> 
        <div className={styles.dot} onClick={(e) => {
              prev3()
              click1()
        }}></div>
        <div className={styles.dot} onClick={(e) => {
              prev2()
              click2()
        }}></div>
        <div className={styles.dot}  onClick={(e) => {
              prev()
              click3()
        }}></div>
        <div className={styles.dot}  onClick={(e) => {
              click4()
        }}></div>
        </div>
  
        </div>
        <div className={styles.crewImage}>
        <Image className={styles.crewImages} src={Doug} alt="crew" height="590px" width="568px" />
        </div>
        </div>
          )}};
export default Members