import React, {useState, useEffect}  from 'react';
import { Image } from 'next/image';

const Crew = () => {
  const carouselItems = [
    {
      position: "Flight Engineer",
      name: "Anousheh Ansari",
      details: "Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems.Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space.",
      image:"../../public/assets/",
    },
     {
      position: "Commander",
      name: "Anousheh Ansari",
      details: "Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems.Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space.",
      image:"../../public/assets/",
    }
  ]
  function Carousel(props) {
  const [active, setActive] = useState(0);
  let scrollInterval = null;
  useEffect(() => {
    scrollInterval = setTimeout(() => {
      const { carouselItems } = props;
      setActive((active + 1) % carouselItems.length);
    }, 2000);
  });
   render() 
   { return
    (
        <div>
          <div style={style.carousel}>
      {carouselItems.map((item, index) => {
       <div>{item.details} </div>
      })}
    </div>  
        </div>
    )
   }
   }
}

export default Crew