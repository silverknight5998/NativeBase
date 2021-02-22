import React from 'react';
import { default as Input, IInputProps } from '../Input';
import { useThemeProps } from '../../../hooks';
export type ITextAreaProps = IInputProps & {
  totalLines?: number;
};

const TextArea = ({ totalLines, ...props }: ITextAreaProps, ref: any) => {
  const newProps = useThemeProps('TextArea', props);
  return <Input {...newProps} numberOfLines={totalLines} ref={ref} />;
};

export default React.memo(React.forwardRef(TextArea));
