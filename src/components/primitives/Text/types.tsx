import type {
  ColorProps,
  SpaceProps,
  TypographyProps,
  PositionProps,
  LayoutProps,
  FlexboxProps,
} from 'styled-system';

import type {
  customBorderProps,
  customBackgroundProps,
  customOutlineProps,
  customLayoutProps,
  customExtraProps,
  customShadowProps,
  customTypographyProps,
  customPositionProps,
} from '../../../utils/customProps';
const sizes = ['xs', 'sm', 'md', 'lg', 'xl', '2xl', '3xl', '4xl', '5xl', '6xl'];

export type ITextProps = ColorProps &
  SpaceProps &
  PositionProps &
  PositionProps &
  LayoutProps &
  FlexboxProps &
  TypographyProps &
  customPositionProps &
  customBorderProps &
  customExtraProps &
  customOutlineProps &
  customShadowProps &
  customLayoutProps &
  customBackgroundProps &
  customTypographyProps & {
    children?: React.ReactNode | string;
    fontSize?:
      | typeof sizes[number]
      | number
      | Array<number>
      | Array<string>
      | Record<string, string>;
    noOfLines?: number;
    style?: any;
    bold?: boolean;
    isTruncated?: boolean;
    italic?: boolean;
    underline?: boolean;
    strikeThrough?: boolean;
    sub?: boolean;
    highlight?: boolean;
  };
