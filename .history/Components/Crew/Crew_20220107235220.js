import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Image from 'next/image'

const Crew = () => {
  const settings = {
      dots: true,
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      speed: 2000,
      autoplaySpeed: 2000,
      cssEase: "linear"
    };
  return (
    <div>
      <Slider {...settings}>
          <div>
           <div className={styles.techhome}>
           <div>
           <ul className={styles.numbers}>
           <li className={styles.number}>1</li>
           <li className={styles.number}>2</li>
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
  <div><Image src="/../../../public/assets/image-launch-vehicle-landscape" height="233" width="233" alt="uu" /> </div>
        </div>
          </div>
          <div>
            <div className={styles.techhome}>
           <div>
           <ul className={styles.numbers}>
           <li className={styles.number}>1</li>
           <li className={styles.number}>2</li>
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
  <div><Image src="/../../../public/assets/image-launch-vehicle-landscape" height="233" width="233" alt="uu" /> </div>
        </div>
          </div>
          <div>
            <h3>3</h3>
          </div>
          <div>
            <h3>4</h3>
          </div>
          <div>
            <h3>5</h3>
          </div>
          <div>
            <h3>6</h3>
          </div>
        </Slider>
    </div>
  )
}

export default Crew
