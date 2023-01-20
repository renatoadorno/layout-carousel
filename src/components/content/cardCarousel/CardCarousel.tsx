import React from 'react';
import 'keen-slider/keen-slider.min.css';
import { useKeenSlider } from 'keen-slider/react';

import { 
  Container,
  Slide1,
  Slide2,
  Slide3,
  Slide4,
  Slide5,
  Slide6,
} from './cardCarousel.stitches';

export default function CardCarousel() {
  const [sliderRef] = useKeenSlider(
    {
      breakpoints: {
        '(min-width: 780px)': {
          slides: { perView: 2, spacing: 13 },
        },
        '(min-width: 1060px)': {
          slides: { perView: 3, spacing: 13 },
        },
        '(min-width: 1400px)': {
          slides: { perView: 4, spacing: 13 },
        },
        '(min-width: 1980px)': {
          slides: { perView: 5, spacing: 13 },
        },
      },
      slides: { perView: 1 },
      loop: true,
    },
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
        <Slide5 className="keen-slider__slide">5</Slide5>
        <Slide6 className="keen-slider__slide">6</Slide6>
      </div>
    </Container>
  );
}
