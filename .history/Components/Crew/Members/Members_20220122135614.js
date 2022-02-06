import React, {useContext, useEffect, useState} from 'react';
import Slider from "react-slick";
import Image from 'next/image';
import styles from './Members.module.css'
import Doug from '../../../public/assets/crew/image-douglas-hurley.png';
import Mark from '../../../public/assets/crew/image-mark-shuttleworth.png';
import Victor from '../../../public/assets/crew/image-victor-glover.png';
import Anousheh from '../../../public/assets/crew/image-anousheh-ansari.png';
import { MoveContext } from '../../../Contexts/Move';
import {StepContext} from '../../../Contexts/Steps';

const Members = () => {
    const {steps, next, next2, next3, prev, prev2, prev3 } = useContext(MoveContext);
   const {click1, click2, click3, click4, true1, true2, true3, true4} = useContext(StepContext)

   useEffect(() => {
        click1()
    })

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
        <div>
        <p className={styles.crewtexthead}>Commander</p>
        <h2 className={styles.crewtextsub}>Douglas Hurley</h2>
        <p className={styles.crewtextbody}> Douglas Gerald Hurley is an American engineer, former Marine Corps pilot 
  and former NASA astronaut. He launched into space for the third time as 
  commander of Crew Dragon Demo-2.</p>

  </div>
        <div className={styles.dotsplit}> 
        <div className={`${true1 ? styles.dot : styles.dot2 }`}></div>
        <div className={`${true2 ? styles.dot : styles.dot2 }`} onClick={(e) => {
              next()
              click2()
        }}></div>
        <div className={`${true3 ? styles.dot : styles.dot2 }`}  onClick={(e) => {
              next2()
              click3()
        }}></div>
        <div className={`${true4 ? styles.dot : styles.dot2 }`}  onClick={(e) => {
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
        <div>
        <p className={styles.crewtexthead}>Mission Specialist</p>
        <h2 className={styles.crewtextsub}> Mark Shuttleworth</h2>
        <p className={styles.crewtextbody}> Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind 
  the Linux-based Ubuntu operating system. Shuttleworth became the first South 
  African to travel to space as a space tourist.</p>
  </div>

         <div className={styles.dotsplit}> 
        <div className={`${true1 ? styles.dot : styles.dot2 }`} onClick={(e) => {
              prev()
              click1()
        }}></div>
        <div className={`${true2 ? styles.dot : styles.dot2 }`} onClick={(e) => {
              click2()
        }}></div>
        <div className={`${true3 ? styles.dot : styles.dot2 }`}  onClick={(e) => {
              next()
              click3()
        }}></div>
        <div className={`${true4 ? styles.dot : styles.dot2 }`}  onClick={(e) => {
              next2()
              click4()
        }}></div>
        </div>
  
        </div>
        <div className={styles.crewImage}>
        <Image className={styles.crewImages} src={Mark} alt="crew" height="590px" width="568px" />
        </div>
        </div>
          )

          case 3:
          return (
                 <div className={styles.crewSplit}>
        <div className={styles.crewText}>
        <div>
        <p className={styles.crewtexthead}>Pilot</p>
        <h2 className={styles.crewtextsub}>Victor Glover</h2>
        <p className={styles.crewtextbody}> Pilot on the first operational flight of the SpaceX Crew Dragon to the 
  International Space Station. Glover is a commander in the U.S. Navy where 
  he pilots an F/A-18.He was a crew member of Expedition 64, and served as a 
  station systems flight engineer. </p>
  </div>

        <div className={styles.dotsplit}> 
        <div className={`${true1 ? styles.dot : styles.dot2 }`} onClick={(e) => {
              prev2()
              click1()
        }}></div>
        <div className={`${true2 ? styles.dot : styles.dot2 }`} onClick={(e) => {
              prev()
              click2()
        }}></div>
        <div className={`${true3 ? styles.dot : styles.dot2 }`}  onClick={(e) => {
              click3()
        }}></div>
        <div className={`${true4 ? styles.dot : styles.dot2 }`}  onClick={(e) => {
              next()
              click4()
        }}></div>
        </div>
  
        </div>
        <div className={styles.crewImage}>
        <Image className={styles.crewImages} src={Victor} alt="crew" height="590px" width="568px" />
        </div>
        </div>
          )

          case 4:
          return (
                <div className={styles.crewSplit}>
        <div className={styles.crewText}>
        <div>
        <p className={styles.crewtexthead}>Flight Engineer</p>
        <h2 className={styles.crewtextsub}>Anousheh Ansari</h2>
        <p className={styles.crewtextbody}> Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. 
  Ansari was the fourth self-funded space tourist, the first self-funded woman to 
  fly to the ISS, and the first Iranian in space. </p>
  </div>

        <div className={styles.dotsplit}> 
        <div className={`${true1 ? styles.dot : styles.dot2 }`} onClick={(e) => {
              prev3()
              click1()
        }}></div>
        <div className={`${true2 ? styles.dot : styles.dot2 }`} onClick={(e) => {
              prev2()
              click2()
        }}></div>
        <div className={`${true3 ? styles.dot : styles.dot2 }`}  onClick={(e) => {
              prev()
              click3()
        }}></div>
        <div className={`${true4 ? styles.dot : styles.dot2 }`}  onClick={(e) => {
              click4()
        }}></div>
        </div>
  
        </div>
        <div className={styles.crewImage}>
        <Image className={styles.crewImages} src={Anousheh} alt="crew" height="580px" width="568px" />
        </div>
        </div>
          )}};
export default Members