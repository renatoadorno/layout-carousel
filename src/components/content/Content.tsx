import React from 'react';
import { Container } from './content.stitche';
import Carousel from './carousel/Carousel';
import CardCarousel from './cardCarousel/CardCarousel';
import Cards from './cards/Cards';
import Footer from '../footer/Footer';

export default function Content() {
  return (
    <Container>
      <Carousel />
      <CardCarousel />
      <Cards />
      <Footer />
    </Container>
  );
}
