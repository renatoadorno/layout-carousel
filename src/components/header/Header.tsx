import { Container, Title, List, BtnMenu, Item } from './header.stitches';
import { useState } from 'react';
import { TbMenu2 } from 'react-icons/tb';
import { CgClose } from 'react-icons/cg';
import { FaReact } from 'react-icons/fa';
import { AiFillInfoCircle } from 'react-icons/ai';
import { MdLocationOn } from 'react-icons/md';
import { BsFillPersonFill } from 'react-icons/bs';

export default function Header() {
  const [menuState, setMenuState] = useState(true);

  const changeMenu = () => {
    setMenuState(menuState ? false : true);
  };

  return (
    <Container>
      <Title>
        React
        <FaReact />
      </Title>

      <BtnMenu onClick={ changeMenu }>
        {menuState ? <TbMenu2 /> : <CgClose /> }
      </BtnMenu>

      <List variant={ menuState ? 'closed' : 'open' }>
        <Item>
          <p>Localização</p>
          <MdLocationOn />
        </Item>
        <Item>
          <p>Olá, Visitante</p>
          <BsFillPersonFill />
        </Item>
        <Item>
          <p>Atendimento</p>
          <AiFillInfoCircle />
        </Item>
      </List>
    </Container>
  );
}