import React, {useState} from 'react'
import Image from 'next/image';
import styles from './Tech.module.css';
import Vehicle from '../../../public/assets//technology/image-launch-vehicle-landscape.jpg';
import Vehicle2 from '../../../public/assets//technology/image-launch-vehicle-portrait.jpg';
import Spaceport from '../../../public/assets//technology/image-spaceport-landscape.jpg';
import Capsule from '../../../public/assets//technology/image-space-capsule-landscape.jpg';
const Tech = () => {
    const [steps, setSteps] = useState(1);

    const next = (e) => {
        e.preventDefault();
        setSteps(steps + 1);
    }
    const prev = (e) => {
        e.preventDefault();
        setSteps(steps - 1);
    };

    switch (steps) {
        case 1:
            return (
        <div className={styles.techhome}>
           <div className={styles.TechNumbers}>
           <ul className={styles.numbers}>
           <li className={styles.number}>1</li>
           <li onClick={next} className={styles.number}>2</li>
           <li  onClick={(e) => {
      setSteps(steps+2)}} className={styles.number}>3</li>
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
  <div className={styles.imagediv}>
  <Image className={styles.image} src={Vehicle2} height="527" width="1024" alt="uu" /> 
 
  </div>
        </div>
    );

    case 2: return (
        <div className={styles.techhome}>
           <div>
           <ul className={styles.numbers}>
           <li onClick={prev} className={styles.number}>1</li>
           <li className={styles.number}>2</li>
           <li onClick={next} className={styles.number}>3</li>
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
 <div className={styles.imagediv}><Image src={Spaceport} height="527" width="515" alt="uu" /> </div>
        </div>
    );

    case 3: 
    return (

   
     <div className={styles.techhome}>
           <div>
           <ul className={styles.numbers}>
           <li  onClick={(e) => {
      setSteps(steps-2)}} className={styles.number}>1</li>
           <li onClick={prev} className={styles.number}>2</li>
           <li className={styles.number}>3</li>
           </ul>
           </div> 
           <div className={styles.techtext}>
           <p className={styles.techtexthead}>The terminology...</p>
  <h2 className={styles.techtextsub}>Space capsule</h2>

  <p className={styles.techtextbody}> A space capsule is an often-crewed spacecraft that uses a blunt-body reentry 
  capsule to reenter the Earths atmosphere without wings. Our capsule is where 
  you will spend your time during the flight. It includes a space gym, cinema, 
  and plenty of other activities to keep you entertained.</p>
  </div>
  <div className={styles.imagediv}><Image src={Capsule} height="527" width="515" alt="uu" /> </div>
        </div>
         )
    }
    
}

export default Tech
