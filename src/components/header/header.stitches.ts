import { styled } from '../../../stitches.config';

export const Container = styled('nav', {
  width: '100%',
  height: 50,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  backgroundColor: '$gray12',
  color: '$whiteA12',
  paddingLeft: 28,
  paddingRight: 28,
  position:'fixed',
  zIndex: 999,

  '@md': {
    zIndex: 99,
  },
});

export const Title = styled('h1', {
  display: 'flex',
  alignItems: 'center',
  cursor: 'pointer',
  marginLeft: 80,

  '& svg':{
    marginLeft: 7,
  },

  '@md': {
    marginLeft: 30,
  },
});

export const BtnMenu = styled('div', {
  display: 'none',

  '& svg':{
  },

  '@md': {
    display: 'flex',
    alignItems: 'center',
    marginRight: 30,
    cursor: 'pointer',
  },
});

export const List = styled('ul', {
  display: 'grid',
  gridTemplateColumns: 'repeat(6, auto)',
  gridGap: 10,
  alignItems: 'center',
  marginRight: 50,

  variants: {
    variant: {
      open: {
        display: 'grid',
        gridTemplateColumns: 'repeat(6, auto)',
        gridGap: 10,
        alignItems: 'center',
        marginRight: 50,

        '@md': {
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'flex-start',
          backgroundColor: '$gray12',
          width: '100%',
          height: 'auto',
          position: 'absolute',
          top: 50,
          left: '0%',
          alignItems: 'stretch',
          padding: '10px 0 30px 50px'
        },
      },
      closed: {
        display: 'grid',
        gridTemplateColumns: 'repeat(6, auto)',
        gridGap: 10,
        alignItems: 'center',
        marginRight: 50,

        '@md': {
          display: 'none',
        },
      },
    },
  },

  defaultVariants: {
    variant: 'closed'
  },
});

export const Item = styled('li', {
  display: 'flex',
  alignItems: 'center',
  cursor: 'pointer',
  marginRight: 12,

  '&:hover':{
    '& svg':{
      color: '$whiteA12',
    },
  },

  '& svg':{
    margin: 5,
    color: '$gray10'
  },

  '& p':{
  },
});



