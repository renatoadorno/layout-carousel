import { styled } from '../../../stitches.config';

export const Container = styled('section', {
  height: '100vh',
  paddingTop: 50,


  '&::-webkit-scrollbar':{
    backgroundColor: '$gray6',
    width: 8,
    borderRadius: 10,
  },

  '&::-webkit-scrollbar-thumb':{
    borderRadius: 10,
  },

  '&:hover': {
    '&::-webkit-scrollbar-thumb':{
      backgroundColor: '$gray10',
    },
  },
});