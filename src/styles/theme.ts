import { opacify } from 'polished';

const colors = {
  gray900: '#16181E',
  gray800: '#21242D',
  gray50: '#F9F9F9',
  teal500: '#00B9AE',
};

export const theme = {
  colors: {
    background: colors.gray900,
    backgroundLight: colors.gray800,
    text: colors.gray50,
    descriptionText: opacify(70)(colors.gray50),
    secondaryTitle: opacify(67)(colors.gray50),
    secondaryButton: opacify(20)(colors.gray50),
    border: opacify(10)(colors.gray50),
    primary: colors.teal500,
  },
};

export type AppTheme = typeof theme;
