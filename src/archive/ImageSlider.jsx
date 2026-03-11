import Carousel, { CarouselItem } from "./Carousel";

import slide1 from "../assets/slider1.svg";
import slide2 from "../assets/slider2.svg";
import slide3 from "../assets/slider3.svg";
import slide4 from "../assets/hero_banner.png";

const Slide = ({ img }) => (
  <div className="flex flex-col items-center justify-center">

    <img
      src={img}
      className="w-[680px]"
    />

    <h2 className="text-2xl mt-8 font-semibold">
      Fully Responsive
    </h2>

    <p className="text-gray-500 mt-2">
      Talent | Operations | Growth
    </p>

  </div>
);

export default function ImageSlider() {

  return (

    <Carousel>

      <CarouselItem>
        <Slide img={slide1} />
      </CarouselItem>

      <CarouselItem>
        <Slide img={slide2} />
      </CarouselItem>

      <CarouselItem>
        <Slide img={slide3} />
      </CarouselItem>

      <CarouselItem>
        <Slide img={slide4} />
      </CarouselItem>

    </Carousel>

  );

}