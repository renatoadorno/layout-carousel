import React from 'react';
import 'keen-slider/keen-slider.min.css';
import { useKeenSlider } from 'keen-slider/react';

import { 
  Container,
  Slide1,
  Slide2,
  Slide3,
  Slide4,
} from './carousel.stitches';

export default function Carousel() {
  const [sliderRef] = useKeenSlider(
    { loop: true },
    [
      (slider) => {
        let timeout: number | undefined;
        let mouseOver = false;
        function clearNextTimeout() {
          clearTimeout(timeout);
        }
        function nextTimeout() {
          clearTimeout(timeout);
          if (mouseOver) return;
          timeout = setTimeout(() => {
            slider.next();
          }, 5000);
        }
        slider.on('created', () => {
          slider.container.addEventListener('mouseover', () => {
            mouseOver = true;
            clearNextTimeout();
          });
          slider.container.addEventListener('mouseout', () => {
            mouseOver = false;
            nextTimeout();
          });
          nextTimeout();
        });

        slider.on('dragStarted', clearNextTimeout);
        slider.on('animationEnded', nextTimeout);
        slider.on('updated', nextTimeout);
      },
    ]
  );

  return (
    <Container>
      <div ref={ sliderRef } className="keen-slider">
        <Slide1 className="keen-slider__slide">1</Slide1>
        <Slide2 className="keen-slider__slide">2</Slide2>
        <Slide3 className="keen-slider__slide">3</Slide3>
        <Slide4 className="keen-slider__slide">4</Slide4>
      </div>
    </Container>
  );
}
