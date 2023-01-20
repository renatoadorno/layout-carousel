import React from 'react';
import { Container, SectionIcons, Icons } from './footer.stitches';

import { BsFacebook } from 'react-icons/bs';
import { AiFillInstagram } from 'react-icons/ai';
import { BsYoutube } from 'react-icons/bs';
import { BsTwitter } from 'react-icons/bs';


export default function Footer() {
  return (
    <Container>
      <SectionIcons>
        <Icons>
          <AiFillInstagram />
        </Icons>
        <Icons>
          <BsFacebook />
        </Icons>
        <Icons>
          <BsYoutube />
        </Icons>
        <Icons>
          <BsTwitter />
        </Icons>
      </SectionIcons>
    </Container>
  );
}
