import React from 'react';
import { Container } from './app.stitches';
import Header from './components/header/Header';
import Content from './components/content/Content';
import Footer from './components/footer/Footer';

export default function App() {
  return (
    <Container>
      <Header />
      <Content />
    </Container>
  );
}
