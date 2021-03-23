import { mode, getColor, getColorScheme, transparentize } from '../tools';

function getBg(props: Record<string, any>) {
  let { theme, colorScheme, variant } = props;

  colorScheme = getColorScheme(props, colorScheme);
  const lightBg =
    variant === 'solid'
      ? getColor(theme, `${colorScheme}.400`, colorScheme)
      : getColor(theme, `${colorScheme}.100`, colorScheme);
  const darkBg = transparentize(
    `${colorScheme}.500`,
    variant === 'solid' ? 0.8 : 0.5
  )(theme);
  return mode(lightBg, darkBg)(props);
}

const variantSubtle = (props: Record<string, any>) => {
  let { colorScheme, theme } = props;
  colorScheme = getColorScheme(props, colorScheme);
  return {
    bg: getBg(props),
    iconColor: mode(`${colorScheme}.500`, `${colorScheme}.200`)(props),
    textColor: mode(
      getColor(theme, `${colorScheme}.600`, colorScheme),
      getColor(theme, `${colorScheme}.300`, colorScheme)
    )(props),
  };
};

const variantOutline = (props: Record<string, any>) => {
  let { colorScheme, theme } = props;
  colorScheme = getColorScheme(props, colorScheme);
  return {
    borderWidth: 1,
    borderColor: mode(`${colorScheme}.600`, `${colorScheme}.500`)(props),
    iconColor: mode(`${colorScheme}.500`, `${colorScheme}.500`)(props),
    textColor: getColor(theme, `${colorScheme}.700`, colorScheme),
  };
};
const variantOutlineLight = (props: Record<string, any>) => {
  let { colorScheme, theme } = props;
  colorScheme = getColorScheme(props, colorScheme);
  return {
    borderWidth: 1,
    borderColor: transparentize(`${colorScheme}.600`, 0.2)(theme),
    iconColor: mode(`${colorScheme}.500`, `${colorScheme}.200`)(props),
    textColor: getColor(theme, `${colorScheme}.900`, colorScheme),
  };
};

const variantSolid = (props: Record<string, any>) => {
  let { colorScheme } = props;
  colorScheme = getColorScheme(props, colorScheme);
  return {
    borderWidth: 6,
    borderColor: 'transparent',
    bg: getBg(props),
    iconColor: mode(`white`, `${colorScheme}.300`)(props),
    textColor: mode('white', `${colorScheme}.200`)(props),
  };
};
const variantLeftAccent = (props: Record<string, any>) => {
  let { colorScheme } = props;
  colorScheme = getColorScheme(props, colorScheme);
  return {
    borderWidth: 4,
    bg: getBg(props),
    iconColor: mode(`${colorScheme}.500`, `${colorScheme}.200`)(props),
    textColor: mode(`${colorScheme}.600`, `${colorScheme}.300`)(props),
    borderColor: 'transparent',
    borderLeftColor: mode(`${colorScheme}.600`, `${colorScheme}.300`)(props),
  };
};
const variantTopAccent = (props: Record<string, any>) => {
  let { colorScheme } = props;
  colorScheme = getColorScheme(props, colorScheme);
  return {
    borderWidth: 4,
    borderColor: 'transparent',
    borderTopColor: mode(`${colorScheme}.600`, `${colorScheme}.300`)(props),
    bg: getBg(props),
    iconColor: mode(`${colorScheme}.500`, `${colorScheme}.200`)(props),
    textColor: mode(`${colorScheme}.600`, `${colorScheme}.300`)(props),
  };
};

const variants = {
  'subtle': variantSubtle,
  'solid': variantSolid,
  'left-accent': variantLeftAccent,
  'top-accent': variantTopAccent,
  'outline': variantOutline,
  'outline-light': variantOutlineLight,
};

export const Alert = {
  defaultProps: {
    minW: '100%',
    maxW: '100%',
    position: 'relative',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    flexWrap: 'wrap',
    colorScheme: 'primary',
    variant: 'subtle',
    px: 4,
    py: 3,
    borderRadius: 'md',
    shadow: 2,
  },
  variants,
};

// AlertTitle

export const AlertTitle = {
  defaultProps: {
    fontSize: 'md',
    fontWeight: 'semibold',
    mr: 2,
  },
};

// AlertIcon

export const AlertIcon = {
  defaultProps: {
    type: 'MaterialIcons',
    size: 8,
    mr: 2,
  },
};

// AlertDescription
export const AlertDescription = {
  defaultProps: {
    fontSize: 'sm',
    fontWeight: 'medium',
  },
};
