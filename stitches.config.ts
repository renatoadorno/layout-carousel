import { createStitches } from '@stitches/react';
import { gray, purple, whiteA, blackA } from '@radix-ui/colors';

export const {
  styled,
  createTheme,
} = createStitches({
  utils: {
    mx: (value: number) => ({
      marginRight: value,
      marginLeft: value,
    }),
    my: (value: number) => ({
      marginTop: value,
      marginBottom: value,
    }),

    px: (value: number) => ({
      paddingRight: value,
      paddingLeft: value,
    }),
    py: (value: number) => ({
      paddingTop: value,
      paddingBottom: value,
    }),

    size: (value: number) => ({
      width: value,
      height: value,
    }),
  },

  media: {
    sm: '(min-width: 100px) and (max-width: 680px)',
    md: '(min-width: 100px) and (max-width: 980px)',
    bp1: '(min-width: 980px)',
    bp2: '(min-width: 100px) and (max-width: 1320px)',
    bp3: '(min-width: 100px) and (max-width: 1060px)',
    bp6: '(min-width: 500px)',
    bp7: '(min-width: 500px)',
    bp8: '(min-width: 500px)',
  },

  theme: {
    colors: {
      ...purple,
      ...gray,
      ...whiteA,
      ...blackA,
    },
    space: {
      1: '5px',
      2: '10px',
      3: '15px',
    },
    fonts: {},
    fontSizes: {
      1: '12px',
      2: '13px',
      3: '15px',
    },
    fontWeights: {},
  },
});
