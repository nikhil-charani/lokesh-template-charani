import React, { useEffect, useState } from "react";
import "./Carousel.css";

export const CarouselItem = ({ children }) => {
  return (
    <div className="carousel-item">
      {children}
    </div>
  );
};

const Carousel = ({ children }) => {

  const [activeIndex, setActiveIndex] = useState(0);

  const updateIndex = (newIndex) => {

    if (newIndex >= React.Children.count(children)) {
      newIndex = 0;
    }

    if (newIndex < 0) {
      newIndex = React.Children.count(children) - 1;
    }

    setActiveIndex(newIndex);
  };

  useEffect(() => {

    const interval = setInterval(() => {
      updateIndex(activeIndex + 1);
    }, 4000);

    return () => clearInterval(interval);

  }, [activeIndex]);

  return (

    <div className="carousel">

      <div
        className="inner"
        style={{ transform: `translateX(-${activeIndex * 100}%)` }}
      >

        {React.Children.map(children, (child) => {
          return React.cloneElement(child, { width: "100%" });
        })}

      </div>

    </div>
  );
};

export default Carousel;