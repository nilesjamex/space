import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Image from 'next/image';
import styles from './Members.module.css'

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
          <Slider {...settings}>
          <div className={styles.slide}>
            <h3 >1jjjj</h3>
          </div>
          <div className={styles.slide}>
            <h3>2</h3>
          </div>
          <div className={styles.slide}>
            <h3>3</h3>
          </div>
          <div className={styles.slide}>
            <h3>4</h3>
          </div>
          <div className={styles.slide}>
            <h3>5</h3>
          </div>
          <div className={styles.slide}>
            <h3>6</h3>
          </div>
        </Slider>  
        </div>
    )
}

export default Members
