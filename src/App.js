import './tailwind.css';
import { useState } from "react";
import { useHorizontalScroll } from "./utils/useSlideScroll";

function App() {
  const sliderRef = useHorizontalScroll();
  const [images, setImages] = useState([
    './images/1.jpg',
    './images/2.jpg',
    './images/3.jpg',
    './images/4.jpg',
    './images/5.jpg',
    './images/6.jpg',
    './images/7.jpg',
    './images/8.jpg',
    './images/9.jpg',
    './images/10.jpg'
  ]);

  return (
    <div className="slider-images__container hide-scroll" ref={sliderRef}>
      {images.map((image, index) => (
        <img className="slider-images__image" key={index} src={image} alt="slider image" />
      ))}
    </div>
  );
}

export default App;
