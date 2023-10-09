import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import CarouselCaption from 'react-bootstrap/CarouselCaption'
import CarouselItem from 'react-bootstrap/CarouselItem'
import img1 from '../../imgs/car/one.jpg'
import img2 from '../../imgs/car/img2.png'
import img3 from '../../imgs/car/img3.jpg'

function ControlledCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
      <img style={{maxHeight:"100vh"}}  
        className="d-block w-100"  
        src={img1}  
        alt="First slide"  
      />
        <Carousel.Caption>
          <h3>Alla Moda</h3>
          <p>Our decorations are like a burst of energy for your space</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
      <img style={{maxHeight:"100vh"}}  
        className="d-block w-100"  
        src={img2}  
        alt="First slide"  
      />
        <Carousel.Caption>
        <h3>Alla Moda</h3>
          <p>Add some glam to your space with our decor.</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
      <img style={{maxHeight:"100vh"}}  
        className="d-block w-100"  
        src={img3}  
        alt="First slide"  
      />
        <Carousel.Caption>
        <h3>Alla Moda</h3>
          <p>
          Our decorations are the key to making your space feel like home</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default ControlledCarousel;