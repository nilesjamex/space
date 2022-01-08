import React from 'react'
import Image from 'next/image';
import styles from './Tech.module.css'

const Tech = () => {
    return (
        <div className={styles.techhome}>
           <div>
           <ul className={styles.numbers}>
           <li className={styles.number}>1</li>
           <li className={styles.number}>2</li>
           <li className={styles.number}>3</li>
           </ul>
           </div> 
           <div>The terminology...
  Launch vehicle

  A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a 
  payload from Earths surface to space, usually to Earth orbit or beyond. Our 
  WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, 
  it is quite an awe-inspiring sight on the launch pad!
  </div>
  <div> <Image src="/../../../public/assets" alt="" height="233" width="233" /> </div>
        </div>
    )
}

export default Tech
