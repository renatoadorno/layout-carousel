import { TbBorderRadius } from 'react-icons/tb';
import { styled } from '../../../stitches.config';

export const Container = styled('div', {
});

export const SectionIcons = styled('div', {
  display: 'grid',
  gridTemplateColumns: 'repeat(4, auto)',
  gridColumnGap: '28px',
  alignItems: 'center',
  justifyContent: 'center',
  width: '100%',
  backgroundColor: '$gray12',
  height: 'auto',
  padding: 20,
});

export const Icons = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  size: 50,
  backgroundColor: '$gray6',
  borderRadius: 50,

  '& svg':{
    color: '$gray11',
    size: 24,

    '&:hover':{
      color: '$gray12',
    },
  }
});
