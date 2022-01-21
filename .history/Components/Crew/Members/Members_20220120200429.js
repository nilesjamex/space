import React from 'react';
import Slider from "react-slick";
import Image from 'next/image';
import styles from './Members.module.css'
import Doug from '../../../public/assets/crew/image-douglas-hurley.png';
import MoveContext  from '../../../Contexts/Move';

const Members = () => {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    const {steps, next, prev } = useContext(MoveContext)

    return (
        <div>
        <h2>kk</h2>
          <Slider {...settings}>
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

        <div className={styles.crewSplit}>
        <div className={styles.crewText}>
        <p className={styles.crewtexthead}>Commander</p>
        <h2 className={styles.crewtextsub}>Douglas James</h2>
        <p className={styles.crewtextbody}> Douglas Gerald Hurley is an American engineer, former Marine Corps pilot 
  and former NASA astronaut. He launched into space for the third time as 
  commander of Crew Dragon Demo-2.</p>
  
        </div>
        <div className={styles.crewImage}>
        <Image className={styles.crewImages} src={Doug} alt="crew" height="590px" width="568px" />
        </div>
        </div>

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
        </Slider>  
        </div>
    )
}
export default Members