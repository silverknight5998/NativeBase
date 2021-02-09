import React from 'react';
import { useThemeProps } from '../../../hooks';
import { useToken } from '../../../hooks';
import styled from 'styled-components/native';
import { color, space, typography } from 'styled-system';
import Svg, {
  Path,
  G,
  Circle,
  Ellipse,
  Text,
  TSpan,
  TextPath,
  Polygon,
  Polyline,
  Line,
  Rect,
  Use,
  Image,
  Symbol,
  Defs,
  LinearGradient,
  RadialGradient,
  Stop,
  ClipPath,
  Pattern,
  Mask,
} from 'react-native-svg';
import type { IIconProps } from './types';

const VALID_SVG_COMPONENTS: any = {
  G: G,
  Path: Path,
  Circle: Circle,
  Ellipse: Ellipse,
  Text: Text,
  TSpan: TSpan,
  TextPath: TextPath,
  Polygon: Polygon,
  Polyline: Polyline,
  Line: Line,
  Rect: Rect,
  Use: Use,
  Image: Image,
  Symbol: Symbol,
  Defs: Defs,
  LinearGradient: LinearGradient,
  RadialGradient: RadialGradient,
  Stop: Stop,
  ClipPath: ClipPath,
  Pattern: Pattern,
  Mask: Mask,
};
const SVG = styled(Svg)<IIconProps>(color, space, typography);

const SVGIcon = (
  {
    viewBox,
    color: colorProp,
    stroke,
    strokeWidth,
    children,
    focusable,
    size,
    style,
  }: IIconProps,
  ref: any
) => {
  const newProps = useThemeProps('Icon', { size });
  let strokeColor = useToken('colors', stroke || '');
  colorProp = useToken('colors', colorProp || '');
  return (
    <SVG
      height={parseInt(newProps.size, 10)}
      width={parseInt(newProps.size, 10)}
      viewBox={viewBox}
      color={colorProp}
      stroke={strokeColor}
      strokeWidth={strokeWidth}
      focusable={focusable}
      accessibilityRole={'image'}
      style={style}
      ref={ref}
    >
      {React.Children.count(children) > 0 ? (
        <G>
          {React.Children.map(children, ({ props: childProps, type }: any) =>
            type &&
            type.name &&
            Object.keys(VALID_SVG_COMPONENTS).includes(type.name) ? (
              <ChildPath {...childProps} type={type.name} />
            ) : null
          )}
        </G>
      ) : (
        getDefaultIcon(ref)
      )}
    </SVG>
  );
};
const ChildPath = ({
  type,
  fill,
  stroke: pathStroke,
  ...remainingProps
}: any) => {
  const Component = VALID_SVG_COMPONENTS[type];
  const pathStrokeColor = useToken('colors', pathStroke || '');
  const fillColor = useToken('colors', fill || '');

  if (!Component) {
    return null;
  }
  return (
    <Component
      {...remainingProps}
      fill={fillColor ? fillColor : 'currentColor'}
      stroke={pathStrokeColor}
    />
  );
};
const getDefaultIcon = (ref: any) => {
  return (
    <G strokeWidth={1.5} stroke="currentColor" ref={ref}>
      <Path
        d={'M9,9a3,3,0,1,1,4,2.829,1.5,1.5,0,0,0-1,1.415V14.25'}
        fill="none"
      />
      <Path
        d={'M12,17.25a.375.375,0,1,0,.375.375A.375.375,0,0,0,12,17.25h0'}
        fill="none"
      />
      <Circle cx="12" cy="12" r="11.25" fill="none" />
    </G>
  );
};
export default React.memo(React.forwardRef(SVGIcon));
