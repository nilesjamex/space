import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Image from 'next/image';
import styles from './Members.module.css'
import Doug from '../../../public/assets/crew/image-douglas-hurley.png'
const Members = () => {
    const settings = {
      dots: true,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      speed: 5000,
      autoplaySpeed: 5000,
      cssEase: "linear"
    };

    return (
        <div>
        <div className={styles.crewSplit}>
        <div className={styles.crewText}>
        Commander
  Douglas Hurley

  Douglas Gerald Hurley is an American engineer, former Marine Corps pilot 
  and former NASA astronaut. He launched into space for the third time as 
  commander of Crew Dragon Demo-2.
        </div>
        <div className={styles.crewImage}>
        <Image src={Doug} alt="crew" height="300px" width="200px" />
        </div>
        </div>
          <Slider {...settings}>
        </Slider>  
        </div>
    )
}

export default Members
