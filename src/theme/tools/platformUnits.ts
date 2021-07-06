import get from 'lodash.get';
import { Platform } from 'react-native';
import type { ITheme } from '../base';

const baseFontSize = 16;

const convertAbsoluteToRem = (px: number) => {
  return `${px / baseFontSize}rem`;
};

const convertRemToAbsolute = (rem: number) => {
  return rem * baseFontSize;
};

/**
 *
 * @param theme
 * @returns theme
 * @description This function converts space, sizes and fontsizes to `rem` on web and absolute numbers on native
 */
export const platformSpecificSpaceUnits = (theme: ITheme) => {
  const scales = ['space', 'sizes', 'typography.fontSizes'];
  const newTheme = { ...theme };
  const isWeb = Platform.OS === 'web';
  scales.forEach((key) => {
    const scale = get(theme, key);
    const newScale = { ...scale };
    for (let scaleKey in scale) {
      const val = scale[scaleKey];
      if (typeof val !== 'object') {
        const isAbsolute = typeof val === 'number';
        const isPx = !isAbsolute && val.endsWith('px');
        const isRem = !isAbsolute && val.endsWith('rem');

        // If platform is web, we need to convert px unit to rem and absolute unit to rem. e.g. 16px to 1rem and 16 to 1rem.
        if (isWeb) {
          if (isPx) {
            newScale[scaleKey] = convertAbsoluteToRem(parseFloat(val));
          } else if (isAbsolute) {
            newScale[scaleKey] = convertAbsoluteToRem(val);
          }
        }
        // If platform is not web, we need to convert px unit to absolute and rem unit to absolute. e.g. 16px to 16. 1rem to 16.
        else {
          if (isRem) {
            newScale[scaleKey] = convertRemToAbsolute(parseFloat(val));
          } else if (isPx) {
            newScale[scaleKey] = parseFloat(val);
          }
        }
      }
    }
    //@ts-ignore
    newTheme[key] = newScale;
  });

  return newTheme;
};
