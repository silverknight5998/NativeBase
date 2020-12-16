import { omitBy, isNil, pick, omit } from 'lodash';

export type Dict = Record<string, any>;

export function omitUndefined(obj: any) {
  return omitBy(obj, isNil);
}

export function extractInObject(parent: any, values: Array<string>) {
  return [
    omitUndefined(pick(parent, values)),
    omitUndefined(omit(parent, values)),
  ];
}

export function getColorFormColorScheme(props: Record<string, any>) {
  const { theme, colorScheme, isDisabled } = props;
  const simpleColorScheme = colorScheme.split('.')[0];

  if (isDisabled) return 'gray.300';
  else if (simpleColorScheme in theme.colors) {
    return theme.colors[simpleColorScheme][0] === '#'
      ? simpleColorScheme
      : theme.colors[simpleColorScheme][400] ||
          theme.colors[simpleColorScheme][200];
  } else return 'default.200';
}
export function getColorScheme(
  props: Record<string, any>,
  customColorScheme?: string
) {
  let { theme, colorScheme } = props;
  colorScheme = customColorScheme || colorScheme;
  if (!(colorScheme in theme.colors)) return 'default';
  else {
    if (typeof theme.colors[colorScheme] === 'object') return colorScheme;
  }
}

export const breakpoints = Object.freeze(['base', 'sm', 'md', 'lg', 'xl']);
export const inValidBreakpointProps = ['style', 'children', 'shadowOffset'];

export function hasValidBreakpointFormat(breaks: any, property?: string) {
  if (property && inValidBreakpointProps.indexOf(property) !== -1) {
    return false;
  } else if (Array.isArray(breaks)) {
    return true;
  } else if (typeof breaks === 'object') {
    const keys = Object.keys(breaks);
    for (let i = 0; i < keys.length; i++) {
      if (breakpoints.indexOf(keys[i]) === -1) {
        return false;
      }
    }
    return true;
  } else {
    return false;
  }
}

export function findLastValidBreakpoint(
  values: any,
  currentBreakpoint: number
) {
  let valArray = Array.isArray(values)
    ? values
    : breakpoints.map((bPoint: string) => values[bPoint]);
  return (
    valArray[currentBreakpoint] ??
    valArray
      .slice(0, currentBreakpoint + 1)
      .filter((v: any) => v ?? null)
      .pop()
  );
}

export function getClosestBreakpoint(
  values: Record<string, any>,
  point: number
) {
  let dimValues = Object.values(values);
  let index = -1;
  for (let i = 0; i < dimValues.length; i++) {
    if (dimValues[i] === point) {
      index = i;
      break;
    } else if (dimValues[i] > point && i !== 0) {
      index = i - 1;
      break;
    }
  }
  return index;
}
