import { styled } from '../../../../stitches.config';

export const Container = styled('div', {
  margin: 50,
  padding: 30,
  backgroundColor: '$whiteA12',
  borderRadius: 10,
  alignItems: 'center',
  justifyContent: 'center',

  '@sm':{
    margin: 20,
  },
});

export const Title = styled('h1', {
  marginLeft: 44,
  marginBottom: 28,
});

export const GridCards = styled('div', {
  display: 'grid',
  gridTemplateColumns: 'repeat(3, auto)',
  gridRowGap: '28px',
  gridColumnGap: '28px',
  alignItems: 'center',
  justifyContent: 'center',
  margin: 16,

  '@bp2':{
    display: 'grid',
    gridTemplateColumns: 'repeat(2, auto)',
  },

  '@bp3':{
    display: 'grid',
    gridTemplateColumns: 'repeat(1, auto)',
  },
});

export const Card1 = styled('div', {
  background: 'linear-gradient(128deg, rgba(64, 175, 255, 1) 0%, rgba(63, 97, 255, 1) 100%)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  fontSize: 50,
  color: '#fff',
  fontWeight: 500,
  width: 350,
  height: 350,
  maxHeight: '100vh',
  borderRadius: 10,

  '@bp3':{
    width: 550,
    height: 350,
  },

  '@bp2':{
    width: 450,
    height: 350,
  },

  '@sm':{
    width: 250,
    height: 250,
  },
});
export const Card2 = styled('div', {
  background: 'linear-gradient(128deg, rgba(255, 154, 63, 1) 0%, rgba(255, 75, 64, 1) 100%)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  fontSize: 50,
  color: '#fff',
  fontWeight: 500,
  width: 350,
  height: 350,
  maxHeight: '100vh',
  borderRadius: 10,

  '@bp3':{
    width: 550,
    height: 350,
  },

  '@bp2':{
    width: 450,
    height: 350,
  },

  '@sm':{
    width: 250,
    height: 250,
  },
});
export const Card3 = styled('div', {
  background: 'linear-gradient(128deg, rgba(182, 255, 64, 1) 0%, rgba(63, 255, 71, 1) 100%)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  fontSize: 50,
  color: '#fff',
  fontWeight: 500,
  width: 350,
  height: 350,
  maxHeight: '100vh',
  borderRadius: 10,

  '@bp3':{
    width: 550,
    height: 350,
  },

  '@bp2':{
    width: 450,
    height: 350,
  },

  '@sm':{
    width: 250,
    height: 250,
  },
});
export const Card4 = styled('div', {
  background: 'linear-gradient(128deg, rgba(64, 255, 242, 1) 0%, rgba(63, 188, 255, 1) 100%)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  fontSize: 50,
  color: '#fff',
  fontWeight: 500,
  width: 350,
  height: 350,
  maxHeight: '100vh',
  borderRadius: 10,

  '@bp3':{
    width: 550,
    height: 350,
  },

  '@bp2':{
    width: 450,
    height: 350,
  },

  '@sm':{
    width: 250,
    height: 250,
  },
});
export const Card5 = styled('div', {
  background: 'linear-gradient(128deg, rgba(255, 64, 156, 1) 0%, rgba(255, 63, 63, 1) 100%)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  fontSize: 50,
  color: '#fff',
  fontWeight: 500,
  width: 350,
  height: 350,
  maxHeight: '100vh',
  borderRadius: 10,

  '@bp3':{
    width: 550,
    height: 350,
  },

  '@bp2':{
    width: 450,
    height: 350,
  },

  '@sm':{
    width: 250,
    height: 250,
  },
});
export const Card6 = styled('div', {
  background: 'linear-gradient(128deg, rgba(64, 76, 255, 1) 0%, rgba(174, 63, 255, 1) 100%)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  fontSize: 50,
  color: '#fff',
  fontWeight: 500,
  width: 350,
  height: 350,
  maxHeight: '100vh',
  borderRadius: 10,

  '@bp3':{
    width: 550,
    height: 350,
  },

  '@bp2':{
    width: 450,
    height: 350,
  },

  '@sm':{
    width: 250,
    height: 250,
  },
});

export const CardContent = styled('h1', {
  display: 'flex',
  width: '100%',
  height: 350,
  borderRadius: 10,

  '& p':{
    display: 'none'
  },

  '&:hover':{
    backgroundColor: '$blackA8',

    '& p':{
      display: 'flex',
      padding: 20,
      alignSelf: 'flex-end',
      fontSize: '$1',
    },
  },

  '@sm':{
    height: 250,
  },
});
