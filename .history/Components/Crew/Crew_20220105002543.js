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
  const [active, setActive] = React.useState(0);
  let scrollInterval = null;
  const style = {
    carousel: {
      position: "relative"
    },
    carouselItem: {
      position: "absolute",
      visibility: "hidden"
    },
    visible: {
      visibility: "visible"
    }
  };
  
  React.useEffect(() => {
    scrollInterval = setTimeout(() => {
      const { carouselItems } = props;
      setActive((active + 1) % carouselItems.length);
    }, 2000);
  });
  
  const { carouselItems, ...rest } = props;
  return (
    <div style={style.carousel}>
      {carouselItems.map((item, index) => {
        const activeStyle = active === index ? style.visible : {};
        return React.cloneElement(item, {
          ...rest,
          style: {
            ...style.carouselItem,
            ...activeStyle
          }
        });
      })}
    </div>
  );
}

const capWord = str => str.replace(/\b[a-z]/g, char => char.toUpperCase());

const title = capWord("carousel item");
let newTitle = "This is the dope jam";

ReactDOM.render(
  <Carousel
    carouselItems={[
      <div key={index}>{title} 1</div>,
      <div key={index}>{capWord('carousel item')} 2</div>,
      <div key={index}>{capWord(newTitle)} 3</div>
    ]}
  />,
  document.getElementById("root")
);
}
export default Crew
