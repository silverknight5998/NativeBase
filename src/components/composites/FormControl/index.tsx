import { default as FormControlBase } from './FormControl';
import { default as FormControlLabel } from './FormLabel';
import { default as FormControlErrorMessage } from './FormErrorMessage';
import { default as FormControlHelperText } from './FormHelperText';
import type { FormControlComponentType } from './types';

let FormControlTemp: any = FormControlBase;
FormControlTemp.Label = FormControlLabel;
FormControlTemp.ErrorMessage = FormControlErrorMessage;
FormControlTemp.HelperText = FormControlHelperText;

// To add typings
const FormControl = FormControlTemp as FormControlComponentType;

export { FormControl };
export { FormControlContext } from './FormControl';
export type {
  IFormControlProps,
  IFormControlLabelProps,
  IFormControlErrorMessageProps,
  IFormControlHelperTextProps,
  IFormControlContext,
} from './types';
