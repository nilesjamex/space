import React from 'react'

const Crew = () => {
    return (
        <div>
            
        </div>
    )
}

export default Crew
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
      <div>{title} 1</div>,
      <div>{capWord('carousel item')} 2</div>,
      <div>{capWord(newTitle)} 3</div>
    ]}
  />,
  document.getElementById("root")
);