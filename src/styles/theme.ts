import { rgba } from 'polished';

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
    descriptionText: rgba(colors.gray50, 0.7),
    secondaryTitle: rgba(colors.gray50, 0.67),
    secondaryButton: rgba(colors.gray50, 0.2),
    border: rgba(colors.gray50, 0.1),
    primary: colors.teal500,
    previewOverlay: rgba(colors.gray900, 0.4),
  },
};

export type AppTheme = typeof theme;
