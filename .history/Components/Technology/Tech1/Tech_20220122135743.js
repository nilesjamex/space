import React, {useState, useContext, useEffect} from 'react';
import Image from 'next/image';
import styles from './Tech.module.css';
import Vehicle from '../../../public/assets//technology/image-launch-vehicle-landscape.jpg';
import Vehicle2 from '../../../public/assets//technology/image-launch-vehicle-portrait.jpg';
import Spaceport from '../../../public/assets//technology/image-spaceport-landscape.jpg';
import Spaceport2 from '../../../public/assets//technology/image-spaceport-portrait.jpg';
import Capsule from '../../../public/assets//technology/image-space-capsule-landscape.jpg';
import Capsule2 from '../../../public/assets//technology/image-space-capsule-portrait.jpg';
import { StepContext } from './../../../Contexts/Steps.js';
import { MoveContext } from '../../../Contexts/Move';
const Tech = () => {
    const {steps, next, next2, prev, prev2} = useContext(MoveContext);
    const {click1, click2, click3, click4, true1, true2, true3} = useContext(StepContext);

    useEffect(() => {
        click1()
    }, [])

    switch (steps) {
        case 1:
            return (
        <div className={styles.techhome}>
           <div className={styles.TechNumbers}>
           <ul className={styles.numbers}>
           <li 
           className={`${true1 ? styles.number2 : styles.number}`} 
           onClick={(e) => {
               click1()
           }}>1</li>
           <li onClick={(e) => {
               next()
               click2()
               }} className={`${true2 ? styles.number2 : styles.number}`}>2</li>
           <li  onClick={(e) => {
      next2()
      click3()
      }} className={`${true3 ? styles.number2 : styles.number}`}>3</li>
           </ul>
           </div> 
           <div className={styles.techtext}>
           <p className={styles.techtexthead}>The terminology...</p>
  <h2 className={styles.techtextsub}>Launch vehicle</h2>

  <p className={styles.techtextbody}>A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a 
  payload from Earths surface to space, usually to Earth orbit or beyond. Our 
  WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, 
  it is quite an awe-inspiring sight on the launch pad!</p>
  </div>
  <div className={styles.imagediv}><Image src={Vehicle2} height="527" width="515" alt="uu" /> </div>
 <div className={styles.imagediv2}>
  <Image className={styles.images} src={Vehicle}  objectFit="contain" alt="uu" /> 
  </div>
        </div>
    );

    case 2: return (
        <div className={styles.techhome}>
           <div>
           <ul className={styles.numbers}>
           <li
            onClick={(e) => {
                prev()
                click1()
                }} 
            className={`${true1 ? styles.number2 : styles.number}`} >1</li>
           <li 
           className={`${true2 ? styles.number2 : styles.number1}`} 
           onClick={(e) => {
               click2()
           }}>2</li>
           <li 
           onClick={(e) => {
                next()
                click3()
                }}
            className={`${true3 ? styles.number2 : styles.number}`} >3</li>
           </ul>
           </div> 
           <div className={styles.techtext}>
           <p className={styles.techtexthead}>The terminology...</p>
  <h2 className={styles.techtextsub}>Spaceport</h2>

  <p className={styles.techtextbody}> A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, 
  by analogy to the seaport for ships or airport for aircraft. Based in the 
  famous Cape Canaveral, our spaceport is ideally situated to take advantage 
  of the Earth’s rotation for launch.</p>
  </div>
 <div className={styles.imagediv}><Image src={Spaceport2} height="527" width="515" alt="uu" /> </div>
 <div className={styles.imagediv2}>
  <Image className={styles.images} src={Spaceport}  objectFit="contain" alt="uu" /> 
  </div>
        </div>
    );

    case 3: 
    return (

   
     <div className={styles.techhome}>
           <div>
           <ul className={styles.numbers}>
           <li  onClick={(e) => {
      prev2()
      click1()
      }} 
       className={`${true1 ? styles.number2 : styles.number}`} >1</li>
           <li 
           onClick={(e) => {
               prev()
               click2()
               }} 
            className={`${true2 ? styles.number2 : styles.number}`} >2</li>
           <li 
           className={`${true3 ? styles.number2 : styles.number}`} 
           onClick={(e) => {
               click3()
           }}>3</li>
           </ul>
           </div> 
           <div className={styles.techtext}>
           <p className={styles.techtexthead}>The terminology...</p>
  <h2 className={styles.techtextsub}>Space capsule</h2>

  <p 
  className={styles.techtextbody}>
   A space capsule is an often-crewed spacecraft that uses a blunt-body reentry 
  capsule to reenter the Earths atmosphere without wings. Our capsule is where 
  you will spend your time during the flight. It includes a space gym, cinema, 
  and plenty of other activities to keep you entertained.
  </p>
  </div>
  <div
   className={styles.imagediv}>
   <Image src={Capsule2} height="527" width="515" alt="uu" /> 
   </div>
  <div className={styles.imagediv2}>
  <Image className={styles.images} src={Capsule}  objectFit="contain" alt="uu" /> 
  </div>
        </div>
         )
    }
    
}

export default Tech
