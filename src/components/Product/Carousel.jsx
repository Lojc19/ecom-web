import { useState, useEffect } from "react"

const Carousel = () => {
    const [slide, setSlide] = useState(0);
    const nextSlide = () => {
        setSlide(slide === data.length - 1 ? 0 : slide + 1);
      };

      const prevSlide = () => {
        setSlide(slide === 0 ? data.length - 1 : slide - 1);
      };
  return (
    <div>
      
    </div>
  )
}

export default Carousel
